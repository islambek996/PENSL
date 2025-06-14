/*! For license information please see main.9557216c.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      4: (e, t, n) => {
        var r = n(853),
          i = n(43),
          a = n(950);
        function o(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function s(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        var l = Symbol.for("react.element"),
          u = Symbol.for("react.transitional.element"),
          c = Symbol.for("react.portal"),
          d = Symbol.for("react.fragment"),
          f = Symbol.for("react.strict_mode"),
          h = Symbol.for("react.profiler"),
          p = Symbol.for("react.provider"),
          m = Symbol.for("react.consumer"),
          g = Symbol.for("react.context"),
          v = Symbol.for("react.forward_ref"),
          y = Symbol.for("react.suspense"),
          b = Symbol.for("react.suspense_list"),
          x = Symbol.for("react.memo"),
          w = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var S = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
        var k = Symbol.for("react.memo_cache_sentinel"),
          A = Symbol.iterator;
        function E(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        var P = Symbol.for("react.client.reference");
        function C(e) {
          if (null == e) return null;
          if ("function" === typeof e)
            return e.$$typeof === P ? null : e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case d:
              return "Fragment";
            case c:
              return "Portal";
            case h:
              return "Profiler";
            case f:
              return "StrictMode";
            case y:
              return "Suspense";
            case b:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case g:
                return (e.displayName || "Context") + ".Provider";
              case m:
                return (e._context.displayName || "Context") + ".Consumer";
              case v:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case x:
                return null !== (t = e.displayName || null)
                  ? t
                  : C(e.type) || "Memo";
              case w:
                (t = e._payload), (e = e._init);
                try {
                  return C(e(t));
                } catch (n) {}
            }
          return null;
        }
        var F,
          T,
          D = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          j = Object.assign;
        function N(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              (F = (t && t[1]) || ""),
                (T =
                  -1 < n.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < n.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : "");
            }
          return "\n" + F + e + T;
        }
        var L = !1;
        function O(e, t) {
          if (!e || L) return "";
          L = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (i) {
                        var r = i;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (a) {
                        r = a;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (o) {
                      r = o;
                    }
                    (n = e()) &&
                      "function" === typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (s) {
                  if (s && r && "string" === typeof s.stack)
                    return [s.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name"
            );
            i &&
              i.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var a = r.DetermineComponentFrameRoot(),
              o = a[0],
              s = a[1];
            if (o && s) {
              var l = o.split("\n"),
                u = s.split("\n");
              for (
                i = r = 0;
                r < l.length && !l[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                i < u.length && !u[i].includes("DetermineComponentFrameRoot");

              )
                i++;
              if (r === l.length || i === u.length)
                for (
                  r = l.length - 1, i = u.length - 1;
                  1 <= r && 0 <= i && l[r] !== u[i];

                )
                  i--;
              for (; 1 <= r && 0 <= i; r--, i--)
                if (l[r] !== u[i]) {
                  if (1 !== r || 1 !== i)
                    do {
                      if ((r--, 0 > --i || l[r] !== u[i])) {
                        var c = "\n" + l[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= i);
                  break;
                }
            }
          } finally {
            (L = !1), (Error.prepareStackTrace = n);
          }
          return (n = e ? e.displayName || e.name : "") ? N(n) : "";
        }
        function R(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return N(e.type);
            case 16:
              return N("Lazy");
            case 13:
              return N("Suspense");
            case 19:
              return N("SuspenseList");
            case 0:
            case 15:
              return (e = O(e.type, !1));
            case 11:
              return (e = O(e.type.render, !1));
            case 1:
              return (e = O(e.type, !0));
            default:
              return "";
          }
        }
        function M(e) {
          try {
            var t = "";
            do {
              (t += R(e)), (e = e.return);
            } while (e);
            return t;
          } catch (n) {
            return "\nError generating stack: " + n.message + "\n" + n.stack;
          }
        }
        function z(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function V(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function B(e) {
          if (z(e) !== e) throw Error(o(188));
        }
        function I(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = I(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var U = Array.isArray,
          W = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          _ = {
            pending: !1,
            data: null,
            method: null,
            action: null,
          },
          H = [],
          Y = -1;
        function K(e) {
          return {
            current: e,
          };
        }
        function q(e) {
          0 > Y || ((e.current = H[Y]), (H[Y] = null), Y--);
        }
        function Q(e, t) {
          Y++, (H[Y] = e.current), (e.current = t);
        }
        var X = K(null),
          G = K(null),
          J = K(null),
          Z = K(null);
        function $(e, t) {
          switch ((Q(J, t), Q(G, e), Q(X, null), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) && (t = t.namespaceURI) ? Gc(t) : 0;
              break;
            default:
              if (
                ((t = (e = 8 === e ? t.parentNode : t).tagName),
                (e = e.namespaceURI))
              )
                t = Jc((e = Gc(e)), t);
              else
                switch (t) {
                  case "svg":
                    t = 1;
                    break;
                  case "math":
                    t = 2;
                    break;
                  default:
                    t = 0;
                }
          }
          q(X), Q(X, t);
        }
        function ee() {
          q(X), q(G), q(J);
        }
        function te(e) {
          null !== e.memoizedState && Q(Z, e);
          var t = X.current,
            n = Jc(t, e.type);
          t !== n && (Q(G, e), Q(X, n));
        }
        function ne(e) {
          G.current === e && (q(X), q(G)),
            Z.current === e && (q(Z), (Md._currentValue = _));
        }
        var re = Object.prototype.hasOwnProperty,
          ie = r.unstable_scheduleCallback,
          ae = r.unstable_cancelCallback,
          oe = r.unstable_shouldYield,
          se = r.unstable_requestPaint,
          le = r.unstable_now,
          ue = r.unstable_getCurrentPriorityLevel,
          ce = r.unstable_ImmediatePriority,
          de = r.unstable_UserBlockingPriority,
          fe = r.unstable_NormalPriority,
          he = r.unstable_LowPriority,
          pe = r.unstable_IdlePriority,
          me = r.log,
          ge = r.unstable_setDisableYieldValue,
          ve = null,
          ye = null;
        function be(e) {
          if (
            ("function" === typeof me && ge(e),
            ye && "function" === typeof ye.setStrictMode)
          )
            try {
              ye.setStrictMode(ve, e);
            } catch (t) {}
        }
        var xe = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((we(e) / Se) | 0)) | 0;
              },
          we = Math.log,
          Se = Math.LN2;
        var ke = 128,
          Ae = 4194304;
        function Ee(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194176 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function Pe(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            a = e.pingedLanes,
            o = e.warmLanes;
          e = 0 !== e.finishedLanes;
          var s = 134217727 & n;
          return (
            0 !== s
              ? 0 !== (n = s & ~i)
                ? (r = Ee(n))
                : 0 !== (a &= s)
                ? (r = Ee(a))
                : e || (0 !== (o = s & ~o) && (r = Ee(o)))
              : 0 !== (s = n & ~i)
              ? (r = Ee(s))
              : 0 !== a
              ? (r = Ee(a))
              : e || (0 !== (o = n & ~o) && (r = Ee(o))),
            0 === r
              ? 0
              : 0 !== t &&
                t !== r &&
                0 === (t & i) &&
                ((i = r & -r) >= (o = t & -t) ||
                  (32 === i && 0 !== (4194176 & o)))
              ? t
              : r
          );
        }
        function Ce(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function Fe(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
              return t + 250;
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function Te() {
          var e = ke;
          return 0 === (4194176 & (ke <<= 1)) && (ke = 128), e;
        }
        function De() {
          var e = Ae;
          return 0 === (62914560 & (Ae <<= 1)) && (Ae = 4194304), e;
        }
        function je(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Ne(e, t) {
          (e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
        }
        function Le(e, t, n) {
          (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
          var r = 31 - xe(t);
          (e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (4194218 & n));
        }
        function Oe(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - xe(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        function Re(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 0 !== (134217727 & e)
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function Me() {
          var e = W.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Jd(e.type);
        }
        var ze = Math.random().toString(36).slice(2),
          Ve = "__reactFiber$" + ze,
          Be = "__reactProps$" + ze,
          Ie = "__reactContainer$" + ze,
          Ue = "__reactEvents$" + ze,
          We = "__reactListeners$" + ze,
          _e = "__reactHandles$" + ze,
          He = "__reactResources$" + ze,
          Ye = "__reactMarker$" + ze;
        function Ke(e) {
          delete e[Ve], delete e[Be], delete e[Ue], delete e[We], delete e[_e];
        }
        function qe(e) {
          var t = e[Ve];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Ie] || n[Ve])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ld(e); null !== e; ) {
                  if ((n = e[Ve])) return n;
                  e = ld(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Qe(e) {
          if ((e = e[Ve] || e[Ie])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function Xe(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(o(33));
        }
        function Ge(e) {
          var t = e[He];
          return (
            t ||
              (t = e[He] =
                {
                  hoistableStyles: new Map(),
                  hoistableScripts: new Map(),
                }),
            t
          );
        }
        function Je(e) {
          e[Ye] = !0;
        }
        var Ze = new Set(),
          $e = {};
        function et(e, t) {
          tt(e, t), tt(e + "Capture", t);
        }
        function tt(e, t) {
          for ($e[e] = t, e = 0; e < t.length; e++) Ze.add(t[e]);
        }
        var nt = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          rt = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          ),
          it = {},
          at = {};
        function ot(e, t, n) {
          if (
            ((i = t),
            re.call(at, i) ||
              (!re.call(it, i) &&
                (rt.test(i) ? (at[i] = !0) : ((it[i] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var i;
        }
        function st(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function lt(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function ut(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ct(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function dt(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ct(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, {
                    enumerable: n.enumerable,
                  }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function ft(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ct(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function ht(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var pt = /[\n"\\]/g;
        function mt(e) {
          return e.replace(pt, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function gt(e, t, n, r, i, a, o, s) {
          (e.name = ""),
            null != o &&
            "function" !== typeof o &&
            "symbol" !== typeof o &&
            "boolean" !== typeof o
              ? (e.type = o)
              : e.removeAttribute("type"),
            null != t
              ? "number" === o
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + ut(t))
                : e.value !== "" + ut(t) && (e.value = "" + ut(t))
              : ("submit" !== o && "reset" !== o) || e.removeAttribute("value"),
            null != t
              ? yt(e, o, ut(t))
              : null != n
              ? yt(e, o, ut(n))
              : null != r && e.removeAttribute("value"),
            null == i && null != a && (e.defaultChecked = !!a),
            null != i &&
              (e.checked =
                i && "function" !== typeof i && "symbol" !== typeof i),
            null != s &&
            "function" !== typeof s &&
            "symbol" !== typeof s &&
            "boolean" !== typeof s
              ? (e.name = "" + ut(s))
              : e.removeAttribute("name");
        }
        function vt(e, t, n, r, i, a, o, s) {
          if (
            (null != a &&
              "function" !== typeof a &&
              "symbol" !== typeof a &&
              "boolean" !== typeof a &&
              (e.type = a),
            null != t || null != n)
          ) {
            if (
              !(
                ("submit" !== a && "reset" !== a) ||
                (void 0 !== t && null !== t)
              )
            )
              return;
            (n = null != n ? "" + ut(n) : ""),
              (t = null != t ? "" + ut(t) : n),
              s || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          (r =
            "function" !== typeof (r = null != r ? r : i) &&
            "symbol" !== typeof r &&
            !!r),
            (e.checked = s ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != o &&
              "function" !== typeof o &&
              "symbol" !== typeof o &&
              "boolean" !== typeof o &&
              (e.name = o);
        }
        function yt(e, t, n) {
          ("number" === t && ht(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function bt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + ut(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function xt(e, t, n) {
          null == t ||
          ((t = "" + ut(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + ut(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function wt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(o(92));
              if (U(r)) {
                if (1 < r.length) throw Error(o(93));
                r = r[0];
              }
              n = r;
            }
            null == n && (n = ""), (t = n);
          }
          (n = ut(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r);
        }
        function St(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var kt = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        );
        function At(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" === typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
            : r
            ? e.setProperty(t, n)
            : "number" !== typeof n || 0 === n || kt.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
        }
        function Et(e, t, n) {
          if (null != t && "object" !== typeof t) throw Error(o(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                  ? (e.cssFloat = "")
                  : (e[r] = ""));
            for (var i in t)
              (r = t[i]), t.hasOwnProperty(i) && n[i] !== r && At(e, i, r);
          } else for (var a in t) t.hasOwnProperty(a) && At(e, a, t[a]);
        }
        function Pt(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Ct = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Ft =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Tt(e) {
          return Ft.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        var Dt = null;
        function jt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Nt = null,
          Lt = null;
        function Ot(e) {
          var t = Qe(e);
          if (t && (e = t.stateNode)) {
            var n = e[Be] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (gt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + mt("" + t) + '"][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = r[Be] || null;
                      if (!i) throw Error(o(90));
                      gt(
                        r,
                        i.value,
                        i.defaultValue,
                        i.defaultValue,
                        i.checked,
                        i.defaultChecked,
                        i.type,
                        i.name
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && ft(r);
                }
                break e;
              case "textarea":
                xt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && bt(e, !!n.multiple, t, !1);
            }
          }
        }
        var Rt = !1;
        function Mt(e, t, n) {
          if (Rt) return e(t, n);
          Rt = !0;
          try {
            return e(t);
          } finally {
            if (
              ((Rt = !1),
              (null !== Nt || null !== Lt) &&
                (Vu(), Nt && ((t = Nt), (e = Lt), (Lt = Nt = null), Ot(t), e)))
            )
              for (t = 0; t < e.length; t++) Ot(e[t]);
          }
        }
        function zt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Be] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Vt = !1;
        if (nt)
          try {
            var Bt = {};
            Object.defineProperty(Bt, "passive", {
              get: function () {
                Vt = !0;
              },
            }),
              window.addEventListener("test", Bt, Bt),
              window.removeEventListener("test", Bt, Bt);
          } catch (Sf) {
            Vt = !1;
          }
        var It = null,
          Ut = null,
          Wt = null;
        function _t() {
          if (Wt) return Wt;
          var e,
            t,
            n = Ut,
            r = n.length,
            i = "value" in It ? It.value : It.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (Wt = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Ht(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Yt() {
          return !0;
        }
        function Kt() {
          return !1;
        }
        function qt(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? Yt
                : Kt),
              (this.isPropagationStopped = Kt),
              this
            );
          }
          return (
            j(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = Yt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Yt));
              },
              persist: function () {},
              isPersistent: Yt,
            }),
            t
          );
        }
        var Qt,
          Xt,
          Gt,
          Jt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          Zt = qt(Jt),
          $t = j({}, Jt, {
            view: 0,
            detail: 0,
          }),
          en = qt($t),
          tn = j({}, $t, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: hn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== Gt &&
                    (Gt && "mousemove" === e.type
                      ? ((Qt = e.screenX - Gt.screenX),
                        (Xt = e.screenY - Gt.screenY))
                      : (Xt = Qt = 0),
                    (Gt = e)),
                  Qt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Xt;
            },
          }),
          nn = qt(tn),
          rn = qt(
            j({}, tn, {
              dataTransfer: 0,
            })
          ),
          an = qt(
            j({}, $t, {
              relatedTarget: 0,
            })
          ),
          on = qt(
            j({}, Jt, {
              animationName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            })
          ),
          sn = qt(
            j({}, Jt, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          ln = qt(
            j({}, Jt, {
              data: 0,
            })
          ),
          un = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          cn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          dn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function fn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = dn[e]) && !!t[e];
        }
        function hn() {
          return fn;
        }
        var pn = qt(
            j({}, $t, {
              key: function (e) {
                if (e.key) {
                  var t = un[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Ht(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? cn[e.keyCode] || "Unidentified"
                  : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: hn,
              charCode: function (e) {
                return "keypress" === e.type ? Ht(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Ht(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            })
          ),
          mn = qt(
            j({}, tn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          gn = qt(
            j({}, $t, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: hn,
            })
          ),
          vn = qt(
            j({}, Jt, {
              propertyName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            })
          ),
          yn = qt(
            j({}, tn, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          ),
          bn = qt(
            j({}, Jt, {
              newState: 0,
              oldState: 0,
            })
          ),
          xn = [9, 13, 27, 32],
          wn = nt && "CompositionEvent" in window,
          Sn = null;
        nt && "documentMode" in document && (Sn = document.documentMode);
        var kn = nt && "TextEvent" in window && !Sn,
          An = nt && (!wn || (Sn && 8 < Sn && 11 >= Sn)),
          En = String.fromCharCode(32),
          Pn = !1;
        function Cn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== xn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Fn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Tn = !1;
        var Dn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function jn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Dn[e.type] : "textarea" === t;
        }
        function Nn(e, t, n, r) {
          Nt ? (Lt ? Lt.push(r) : (Lt = [r])) : (Nt = r),
            0 < (t = Mc(t, "onChange")).length &&
              ((n = new Zt("onChange", "change", null, n, r)),
              e.push({
                event: n,
                listeners: t,
              }));
        }
        var Ln = null,
          On = null;
        function Rn(e) {
          Fc(e, 0);
        }
        function Mn(e) {
          if (ft(Xe(e))) return e;
        }
        function zn(e, t) {
          if ("change" === e) return t;
        }
        var Vn = !1;
        if (nt) {
          var Bn;
          if (nt) {
            var In = "oninput" in document;
            if (!In) {
              var Un = document.createElement("div");
              Un.setAttribute("oninput", "return;"),
                (In = "function" === typeof Un.oninput);
            }
            Bn = In;
          } else Bn = !1;
          Vn = Bn && (!document.documentMode || 9 < document.documentMode);
        }
        function Wn() {
          Ln && (Ln.detachEvent("onpropertychange", _n), (On = Ln = null));
        }
        function _n(e) {
          if ("value" === e.propertyName && Mn(On)) {
            var t = [];
            Nn(t, On, e, jt(e)), Mt(Rn, t);
          }
        }
        function Hn(e, t, n) {
          "focusin" === e
            ? (Wn(), (On = n), (Ln = t).attachEvent("onpropertychange", _n))
            : "focusout" === e && Wn();
        }
        function Yn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Mn(On);
        }
        function Kn(e, t) {
          if ("click" === e) return Mn(t);
        }
        function qn(e, t) {
          if ("input" === e || "change" === e) return Mn(t);
        }
        var Qn =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function Xn(e, t) {
          if (Qn(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!re.call(t, i) || !Qn(e[i], t[i])) return !1;
          }
          return !0;
        }
        function Gn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Jn(e, t) {
          var n,
            r = Gn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return {
                  node: r,
                  offset: t - e,
                };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Gn(r);
          }
        }
        function Zn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? Zn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function $n(e) {
          for (
            var t = ht(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = ht((e = t.contentWindow).document);
          }
          return t;
        }
        function er(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function tr(e, t) {
          var n = $n(t);
          t = e.focusedElem;
          var r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            Zn(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && er(t))
              if (
                ((e = r.start),
                void 0 === (n = r.end) && (n = e),
                "selectionStart" in t)
              )
                (t.selectionStart = e),
                  (t.selectionEnd = Math.min(n, t.value.length));
              else if (
                (n =
                  ((e = t.ownerDocument || document) && e.defaultView) ||
                  window).getSelection
              ) {
                n = n.getSelection();
                var i = t.textContent.length,
                  a = Math.min(r.start, i);
                (r = void 0 === r.end ? a : Math.min(r.end, i)),
                  !n.extend && a > r && ((i = r), (r = a), (a = i)),
                  (i = Jn(t, a));
                var o = Jn(t, r);
                i &&
                  o &&
                  (1 !== n.rangeCount ||
                    n.anchorNode !== i.node ||
                    n.anchorOffset !== i.offset ||
                    n.focusNode !== o.node ||
                    n.focusOffset !== o.offset) &&
                  ((e = e.createRange()).setStart(i.node, i.offset),
                  n.removeAllRanges(),
                  a > r
                    ? (n.addRange(e), n.extend(o.node, o.offset))
                    : (e.setEnd(o.node, o.offset), n.addRange(e)));
              }
            for (e = [], n = t; (n = n.parentNode); )
              1 === n.nodeType &&
                e.push({
                  element: n,
                  left: n.scrollLeft,
                  top: n.scrollTop,
                });
            for (
              "function" === typeof t.focus && t.focus(), t = 0;
              t < e.length;
              t++
            )
              ((n = e[t]).element.scrollLeft = n.left),
                (n.element.scrollTop = n.top);
          }
        }
        var nr =
            nt && "documentMode" in document && 11 >= document.documentMode,
          rr = null,
          ir = null,
          ar = null,
          or = !1;
        function sr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          or ||
            null == rr ||
            rr !== ht(r) ||
            ("selectionStart" in (r = rr) && er(r)
              ? (r = {
                  start: r.selectionStart,
                  end: r.selectionEnd,
                })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (ar && Xn(ar, r)) ||
              ((ar = r),
              0 < (r = Mc(ir, "onSelect")).length &&
                ((t = new Zt("onSelect", "select", null, t, n)),
                e.push({
                  event: t,
                  listeners: r,
                }),
                (t.target = rr))));
        }
        function lr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var ur = {
            animationend: lr("Animation", "AnimationEnd"),
            animationiteration: lr("Animation", "AnimationIteration"),
            animationstart: lr("Animation", "AnimationStart"),
            transitionrun: lr("Transition", "TransitionRun"),
            transitionstart: lr("Transition", "TransitionStart"),
            transitioncancel: lr("Transition", "TransitionCancel"),
            transitionend: lr("Transition", "TransitionEnd"),
          },
          cr = {},
          dr = {};
        function fr(e) {
          if (cr[e]) return cr[e];
          if (!ur[e]) return e;
          var t,
            n = ur[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in dr) return (cr[e] = n[t]);
          return e;
        }
        nt &&
          ((dr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete ur.animationend.animation,
            delete ur.animationiteration.animation,
            delete ur.animationstart.animation),
          "TransitionEvent" in window || delete ur.transitionend.transition);
        var hr = fr("animationend"),
          pr = fr("animationiteration"),
          mr = fr("animationstart"),
          gr = fr("transitionrun"),
          vr = fr("transitionstart"),
          yr = fr("transitioncancel"),
          br = fr("transitionend"),
          xr = new Map(),
          wr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
              " "
            );
        function Sr(e, t) {
          xr.set(e, t), et(t, [e]);
        }
        var kr = [],
          Ar = 0,
          Er = 0;
        function Pr() {
          for (var e = Ar, t = (Er = Ar = 0); t < e; ) {
            var n = kr[t];
            kr[t++] = null;
            var r = kr[t];
            kr[t++] = null;
            var i = kr[t];
            kr[t++] = null;
            var a = kr[t];
            if (((kr[t++] = null), null !== r && null !== i)) {
              var o = r.pending;
              null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
                (r.pending = i);
            }
            0 !== a && Dr(n, i, a);
          }
        }
        function Cr(e, t, n, r) {
          (kr[Ar++] = e),
            (kr[Ar++] = t),
            (kr[Ar++] = n),
            (kr[Ar++] = r),
            (Er |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r);
        }
        function Fr(e, t, n, r) {
          return Cr(e, t, n, r), jr(e);
        }
        function Tr(e, t) {
          return Cr(e, null, null, t), jr(e);
        }
        function Dr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var i = !1, a = e.return; null !== a; )
            (a.childLanes |= n),
              null !== (r = a.alternate) && (r.childLanes |= n),
              22 === a.tag &&
                (null === (e = a.stateNode) || 1 & e._visibility || (i = !0)),
              (e = a),
              (a = a.return);
          i &&
            null !== t &&
            3 === e.tag &&
            ((a = e.stateNode),
            (i = 31 - xe(n)),
            null === (e = (a = a.hiddenUpdates)[i]) ? (a[i] = [t]) : e.push(t),
            (t.lane = 536870912 | n));
        }
        function jr(e) {
          if (50 < Fu) throw ((Fu = 0), (Tu = null), Error(o(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Nr = {},
          Lr = new WeakMap();
        function Or(e, t) {
          if ("object" === typeof e && null !== e) {
            var n = Lr.get(e);
            return void 0 !== n
              ? n
              : ((t = {
                  value: e,
                  source: t,
                  stack: M(t),
                }),
                Lr.set(e, t),
                t);
          }
          return {
            value: e,
            source: t,
            stack: M(t),
          };
        }
        var Rr = [],
          Mr = 0,
          zr = null,
          Vr = 0,
          Br = [],
          Ir = 0,
          Ur = null,
          Wr = 1,
          _r = "";
        function Hr(e, t) {
          (Rr[Mr++] = Vr), (Rr[Mr++] = zr), (zr = e), (Vr = t);
        }
        function Yr(e, t, n) {
          (Br[Ir++] = Wr), (Br[Ir++] = _r), (Br[Ir++] = Ur), (Ur = e);
          var r = Wr;
          e = _r;
          var i = 32 - xe(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var a = 32 - xe(t) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (Wr = (1 << (32 - xe(t) + i)) | (n << i) | r),
              (_r = a + e);
          } else (Wr = (1 << a) | (n << i) | r), (_r = e);
        }
        function Kr(e) {
          null !== e.return && (Hr(e, 1), Yr(e, 1, 0));
        }
        function qr(e) {
          for (; e === zr; )
            (zr = Rr[--Mr]), (Rr[Mr] = null), (Vr = Rr[--Mr]), (Rr[Mr] = null);
          for (; e === Ur; )
            (Ur = Br[--Ir]),
              (Br[Ir] = null),
              (_r = Br[--Ir]),
              (Br[Ir] = null),
              (Wr = Br[--Ir]),
              (Br[Ir] = null);
        }
        var Qr = null,
          Xr = null,
          Gr = !1,
          Jr = null,
          Zr = !1,
          $r = Error(o(519));
        function ei(e) {
          throw (ai(Or(Error(o(418, "")), e)), $r);
        }
        function ti(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[Ve] = e), (t[Be] = r), n)) {
            case "dialog":
              Tc("cancel", t), Tc("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              Tc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < Pc.length; n++) Tc(Pc[n], t);
              break;
            case "source":
              Tc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              Tc("error", t), Tc("load", t);
              break;
            case "details":
              Tc("toggle", t);
              break;
            case "input":
              Tc("invalid", t),
                vt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0
                ),
                dt(t);
              break;
            case "select":
              Tc("invalid", t);
              break;
            case "textarea":
              Tc("invalid", t),
                wt(t, r.value, r.defaultValue, r.children),
                dt(t);
          }
          ("string" !== typeof (n = r.children) &&
            "number" !== typeof n &&
            "bigint" !== typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          Wc(t.textContent, n)
            ? (null != r.popover && (Tc("beforetoggle", t), Tc("toggle", t)),
              null != r.onScroll && Tc("scroll", t),
              null != r.onScrollEnd && Tc("scrollend", t),
              null != r.onClick && (t.onclick = _c),
              (t = !0))
            : (t = !1),
            t || ei(e);
        }
        function ni(e) {
          for (Qr = e.return; Qr; )
            switch (Qr.tag) {
              case 3:
              case 27:
                return void (Zr = !0);
              case 5:
              case 13:
                return void (Zr = !1);
              default:
                Qr = Qr.return;
            }
        }
        function ri(e) {
          if (e !== Qr) return !1;
          if (!Gr) return ni(e), (Gr = !0), !1;
          var t,
            n = !1;
          if (
            ((t = 3 !== e.tag && 27 !== e.tag) &&
              ((t = 5 === e.tag) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  Zc(e.type, e.memoizedProps)),
              (t = !t)),
            t && (n = !0),
            n && Xr && ei(e),
            ni(e),
            13 === e.tag)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ("/$" === (t = e.data)) {
                    if (0 === n) {
                      Xr = sd(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
              }
              Xr = null;
            }
          } else Xr = Qr ? sd(e.stateNode.nextSibling) : null;
          return !0;
        }
        function ii() {
          (Xr = Qr = null), (Gr = !1);
        }
        function ai(e) {
          null === Jr ? (Jr = [e]) : Jr.push(e);
        }
        var oi = Error(o(460)),
          si = Error(o(474)),
          li = {
            then: function () {},
          };
        function ui(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function ci() {}
        function di(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(ci, ci), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              if ((e = t.reason) === oi) throw Error(o(483));
              throw e;
            default:
              if ("string" === typeof t.status) t.then(ci, ci);
              else {
                if (null !== (e = tu) && 100 < e.shellSuspendCounter)
                  throw Error(o(482));
                ((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "fulfilled"), (n.value = e);
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "rejected"), (n.reason = e);
                      }
                    }
                  );
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  if ((e = t.reason) === oi) throw Error(o(483));
                  throw e;
              }
              throw ((fi = t), oi);
          }
        }
        var fi = null;
        function hi() {
          if (null === fi) throw Error(o(459));
          var e = fi;
          return (fi = null), e;
        }
        var pi = null,
          mi = 0;
        function gi(e) {
          var t = mi;
          return (mi += 1), null === pi && (pi = []), di(pi, e, t);
        }
        function vi(e, t) {
          (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
        }
        function yi(e, t) {
          if (t.$$typeof === l) throw Error(o(525));
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function bi(e) {
          return (0, e._init)(e._payload);
        }
        function xi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function i(e, t) {
            return ((e = zl(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 33554434), n)
                    : r
                  : ((t.flags |= 33554434), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 33554434), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Wl(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function f(e, t, n, r) {
            var a = n.type;
            return a === d
              ? p(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === w &&
                    bi(a) === t.type))
              ? (vi((t = i(t, n.props)), n), (t.return = e), t)
              : (vi((t = Bl(n.type, n.key, n.props, null, e.mode, r)), n),
                (t.return = e),
                t);
          }
          function h(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = _l(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function p(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Il(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function m(e, t, n) {
            if (
              ("string" === typeof t && "" !== t) ||
              "number" === typeof t ||
              "bigint" === typeof t
            )
              return ((t = Wl("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case u:
                  return (
                    vi((n = Bl(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case c:
                  return ((t = _l(t, e.mode, n)).return = e), t;
                case w:
                  return m(e, (t = (0, t._init)(t._payload)), n);
              }
              if (U(t) || E(t))
                return ((t = Il(t, e.mode, n, null)).return = e), t;
              if ("function" === typeof t.then) return m(e, gi(t), n);
              if (t.$$typeof === g) return m(e, Ps(e, t), n);
              yi(e, t);
            }
            return null;
          }
          function v(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (
              ("string" === typeof n && "" !== n) ||
              "number" === typeof n ||
              "bigint" === typeof n
            )
              return null !== i ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case u:
                  return n.key === i ? f(e, t, n, r) : null;
                case c:
                  return n.key === i ? h(e, t, n, r) : null;
                case w:
                  return v(e, t, (n = (i = n._init)(n._payload)), r);
              }
              if (U(n) || E(n)) return null !== i ? null : p(e, t, n, r, null);
              if ("function" === typeof n.then) return v(e, t, gi(n), r);
              if (n.$$typeof === g) return v(e, t, Ps(e, n), r);
              yi(e, n);
            }
            return null;
          }
          function y(e, t, n, r, i) {
            if (
              ("string" === typeof r && "" !== r) ||
              "number" === typeof r ||
              "bigint" === typeof r
            )
              return l(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case u:
                  return f(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case c:
                  return h(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case w:
                  return y(e, t, n, (r = (0, r._init)(r._payload)), i);
              }
              if (U(r) || E(r)) return p(t, (e = e.get(n) || null), r, i, null);
              if ("function" === typeof r.then) return y(e, t, n, gi(r), i);
              if (r.$$typeof === g) return y(e, t, n, Ps(t, r), i);
              yi(t, r);
            }
            return null;
          }
          function b(l, f, h, p) {
            if (
              ("object" === typeof h &&
                null !== h &&
                h.type === d &&
                null === h.key &&
                (h = h.props.children),
              "object" === typeof h && null !== h)
            ) {
              switch (h.$$typeof) {
                case u:
                  e: {
                    for (var x = h.key; null !== f; ) {
                      if (f.key === x) {
                        if ((x = h.type) === d) {
                          if (7 === f.tag) {
                            n(l, f.sibling),
                              ((p = i(f, h.props.children)).return = l),
                              (l = p);
                            break e;
                          }
                        } else if (
                          f.elementType === x ||
                          ("object" === typeof x &&
                            null !== x &&
                            x.$$typeof === w &&
                            bi(x) === f.type)
                        ) {
                          n(l, f.sibling),
                            vi((p = i(f, h.props)), h),
                            (p.return = l),
                            (l = p);
                          break e;
                        }
                        n(l, f);
                        break;
                      }
                      t(l, f), (f = f.sibling);
                    }
                    h.type === d
                      ? (((p = Il(h.props.children, l.mode, p, h.key)).return =
                          l),
                        (l = p))
                      : (vi(
                          (p = Bl(h.type, h.key, h.props, null, l.mode, p)),
                          h
                        ),
                        (p.return = l),
                        (l = p));
                  }
                  return s(l);
                case c:
                  e: {
                    for (x = h.key; null !== f; ) {
                      if (f.key === x) {
                        if (
                          4 === f.tag &&
                          f.stateNode.containerInfo === h.containerInfo &&
                          f.stateNode.implementation === h.implementation
                        ) {
                          n(l, f.sibling),
                            ((p = i(f, h.children || [])).return = l),
                            (l = p);
                          break e;
                        }
                        n(l, f);
                        break;
                      }
                      t(l, f), (f = f.sibling);
                    }
                    ((p = _l(h, l.mode, p)).return = l), (l = p);
                  }
                  return s(l);
                case w:
                  return b(l, f, (h = (x = h._init)(h._payload)), p);
              }
              if (U(h))
                return (function (i, o, s, l) {
                  for (
                    var u = null, c = null, d = o, f = (o = 0), h = null;
                    null !== d && f < s.length;
                    f++
                  ) {
                    d.index > f ? ((h = d), (d = null)) : (h = d.sibling);
                    var p = v(i, d, s[f], l);
                    if (null === p) {
                      null === d && (d = h);
                      break;
                    }
                    e && d && null === p.alternate && t(i, d),
                      (o = a(p, o, f)),
                      null === c ? (u = p) : (c.sibling = p),
                      (c = p),
                      (d = h);
                  }
                  if (f === s.length) return n(i, d), Gr && Hr(i, f), u;
                  if (null === d) {
                    for (; f < s.length; f++)
                      null !== (d = m(i, s[f], l)) &&
                        ((o = a(d, o, f)),
                        null === c ? (u = d) : (c.sibling = d),
                        (c = d));
                    return Gr && Hr(i, f), u;
                  }
                  for (d = r(d); f < s.length; f++)
                    null !== (h = y(d, i, f, s[f], l)) &&
                      (e &&
                        null !== h.alternate &&
                        d.delete(null === h.key ? f : h.key),
                      (o = a(h, o, f)),
                      null === c ? (u = h) : (c.sibling = h),
                      (c = h));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(i, e);
                      }),
                    Gr && Hr(i, f),
                    u
                  );
                })(l, f, h, p);
              if (E(h)) {
                if ("function" !== typeof (x = E(h))) throw Error(o(150));
                return (function (i, s, l, u) {
                  if (null == l) throw Error(o(151));
                  for (
                    var c = null,
                      d = null,
                      f = s,
                      h = (s = 0),
                      p = null,
                      g = l.next();
                    null !== f && !g.done;
                    h++, g = l.next()
                  ) {
                    f.index > h ? ((p = f), (f = null)) : (p = f.sibling);
                    var b = v(i, f, g.value, u);
                    if (null === b) {
                      null === f && (f = p);
                      break;
                    }
                    e && f && null === b.alternate && t(i, f),
                      (s = a(b, s, h)),
                      null === d ? (c = b) : (d.sibling = b),
                      (d = b),
                      (f = p);
                  }
                  if (g.done) return n(i, f), Gr && Hr(i, h), c;
                  if (null === f) {
                    for (; !g.done; h++, g = l.next())
                      null !== (g = m(i, g.value, u)) &&
                        ((s = a(g, s, h)),
                        null === d ? (c = g) : (d.sibling = g),
                        (d = g));
                    return Gr && Hr(i, h), c;
                  }
                  for (f = r(f); !g.done; h++, g = l.next())
                    null !== (g = y(f, i, h, g.value, u)) &&
                      (e &&
                        null !== g.alternate &&
                        f.delete(null === g.key ? h : g.key),
                      (s = a(g, s, h)),
                      null === d ? (c = g) : (d.sibling = g),
                      (d = g));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return t(i, e);
                      }),
                    Gr && Hr(i, h),
                    c
                  );
                })(l, f, (h = x.call(h)), p);
              }
              if ("function" === typeof h.then) return b(l, f, gi(h), p);
              if (h.$$typeof === g) return b(l, f, Ps(l, h), p);
              yi(l, h);
            }
            return ("string" === typeof h && "" !== h) ||
              "number" === typeof h ||
              "bigint" === typeof h
              ? ((h = "" + h),
                null !== f && 6 === f.tag
                  ? (n(l, f.sibling), ((p = i(f, h)).return = l), (l = p))
                  : (n(l, f), ((p = Wl(h, l.mode, p)).return = l), (l = p)),
                s(l))
              : n(l, f);
          }
          return function (e, t, n, r) {
            try {
              mi = 0;
              var i = b(e, t, n, r);
              return (pi = null), i;
            } catch (o) {
              if (o === oi) throw o;
              var a = Rl(29, o, null, e.mode);
              return (a.lanes = r), (a.return = e), a;
            }
          };
        }
        var wi = xi(!0),
          Si = xi(!1),
          ki = K(null),
          Ai = K(0);
        function Ei(e, t) {
          Q(Ai, (e = uu)), Q(ki, t), (uu = e | t.baseLanes);
        }
        function Pi() {
          Q(Ai, uu), Q(ki, ki.current);
        }
        function Ci() {
          (uu = Ai.current), q(ki), q(Ai);
        }
        var Fi = K(null),
          Ti = null;
        function Di(e) {
          var t = e.alternate;
          Q(Oi, 1 & Oi.current),
            Q(Fi, e),
            null === Ti &&
              (null === t || null !== ki.current || null !== t.memoizedState) &&
              (Ti = e);
        }
        function ji(e) {
          if (22 === e.tag) {
            if ((Q(Oi, Oi.current), Q(Fi, e), null === Ti)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (Ti = e);
            }
          } else Ni();
        }
        function Ni() {
          Q(Oi, Oi.current), Q(Fi, Fi.current);
        }
        function Li(e) {
          q(Fi), Ti === e && (Ti = null), q(Oi);
        }
        var Oi = K(0);
        function Ri(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Mi =
            "undefined" !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    (t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      });
                  };
                },
          zi = r.unstable_scheduleCallback,
          Vi = r.unstable_NormalPriority,
          Bi = {
            $$typeof: g,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Ii() {
          return {
            controller: new Mi(),
            data: new Map(),
            refCount: 0,
          };
        }
        function Ui(e) {
          e.refCount--,
            0 === e.refCount &&
              zi(Vi, function () {
                e.controller.abort();
              });
        }
        var Wi = null,
          _i = 0,
          Hi = 0,
          Yi = null;
        function Ki() {
          if (0 === --_i && null !== Wi) {
            null !== Yi && (Yi.status = "fulfilled");
            var e = Wi;
            (Wi = null), (Hi = 0), (Yi = null);
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var qi = D.S;
        D.S = function (e, t) {
          "object" === typeof t &&
            null !== t &&
            "function" === typeof t.then &&
            (function (e, t) {
              if (null === Wi) {
                var n = (Wi = []);
                (_i = 0),
                  (Hi = wc()),
                  (Yi = {
                    status: "pending",
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  });
              }
              _i++, t.then(Ki, Ki);
            })(0, t),
            null !== qi && qi(e, t);
        };
        var Qi = K(null);
        function Xi() {
          var e = Qi.current;
          return null !== e ? e : tu.pooledCache;
        }
        function Gi(e, t) {
          Q(Qi, null === t ? Qi.current : t.pool);
        }
        function Ji() {
          var e = Xi();
          return null === e
            ? null
            : {
                parent: Bi._currentValue,
                pool: e,
              };
        }
        var Zi = 0,
          $i = null,
          ea = null,
          ta = null,
          na = !1,
          ra = !1,
          ia = !1,
          aa = 0,
          oa = 0,
          sa = null,
          la = 0;
        function ua() {
          throw Error(o(321));
        }
        function ca(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Qn(e[n], t[n])) return !1;
          return !0;
        }
        function da(e, t, n, r, i, a) {
          return (
            (Zi = a),
            ($i = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (D.H = null === e || null === e.memoizedState ? Po : Co),
            (ia = !1),
            (a = n(r, i)),
            (ia = !1),
            ra && (a = ha(t, n, r, i)),
            fa(e),
            a
          );
        }
        function fa(e) {
          D.H = Eo;
          var t = null !== ea && null !== ea.next;
          if (
            ((Zi = 0),
            (ta = ea = $i = null),
            (na = !1),
            (oa = 0),
            (sa = null),
            t)
          )
            throw Error(o(300));
          null === e ||
            Ho ||
            (null !== (e = e.dependencies) && ks(e) && (Ho = !0));
        }
        function ha(e, t, n, r) {
          $i = e;
          var i = 0;
          do {
            if ((ra && (sa = null), (oa = 0), (ra = !1), 25 <= i))
              throw Error(o(301));
            if (((i += 1), (ta = ea = null), null != e.updateQueue)) {
              var a = e.updateQueue;
              (a.lastEffect = null),
                (a.events = null),
                (a.stores = null),
                null != a.memoCache && (a.memoCache.index = 0);
            }
            (D.H = Fo), (a = t(n, r));
          } while (ra);
          return a;
        }
        function pa() {
          var e = D.H,
            t = e.useState()[0];
          return (
            (t = "function" === typeof t.then ? xa(t) : t),
            (e = e.useState()[0]),
            (null !== ea ? ea.memoizedState : null) !== e && ($i.flags |= 1024),
            t
          );
        }
        function ma() {
          var e = 0 !== aa;
          return (aa = 0), e;
        }
        function ga(e, t, n) {
          (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
        }
        function va(e) {
          if (na) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              null !== t && (t.pending = null), (e = e.next);
            }
            na = !1;
          }
          (Zi = 0),
            (ta = ea = $i = null),
            (ra = !1),
            (oa = aa = 0),
            (sa = null);
        }
        function ya() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ta ? ($i.memoizedState = ta = e) : (ta = ta.next = e), ta
          );
        }
        function ba() {
          if (null === ea) {
            var e = $i.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ea.next;
          var t = null === ta ? $i.memoizedState : ta.next;
          if (null !== t) (ta = t), (ea = e);
          else {
            if (null === e) {
              if (null === $i.alternate) throw Error(o(467));
              throw Error(o(310));
            }
            (e = {
              memoizedState: (ea = e).memoizedState,
              baseState: ea.baseState,
              baseQueue: ea.baseQueue,
              queue: ea.queue,
              next: null,
            }),
              null === ta ? ($i.memoizedState = ta = e) : (ta = ta.next = e);
          }
          return ta;
        }
        function xa(e) {
          var t = oa;
          return (
            (oa += 1),
            null === sa && (sa = []),
            (e = di(sa, e, t)),
            (t = $i),
            null === (null === ta ? t.memoizedState : ta.next) &&
              ((t = t.alternate),
              (D.H = null === t || null === t.memoizedState ? Po : Co)),
            e
          );
        }
        function wa(e) {
          if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then) return xa(e);
            if (e.$$typeof === g) return Es(e);
          }
          throw Error(o(438, String(e)));
        }
        function Sa(e) {
          var t = null,
            n = $i.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = $i.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t &&
              (t = {
                data: [],
                index: 0,
              }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              ($i.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = k;
          return t.index++, n;
        }
        function ka(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Aa(e) {
          return Ea(ba(), ea, e);
        }
        function Ea(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(o(311));
          r.lastRenderedReducer = n;
          var i = e.baseQueue,
            a = r.pending;
          if (null !== a) {
            if (null !== i) {
              var s = i.next;
              (i.next = a.next), (a.next = s);
            }
            (t.baseQueue = i = a), (r.pending = null);
          }
          if (((a = e.baseState), null === i)) e.memoizedState = a;
          else {
            var l = (s = null),
              u = null,
              c = (t = i.next),
              d = !1;
            do {
              var f = -536870913 & c.lane;
              if (f !== c.lane ? (ru & f) === f : (Zi & f) === f) {
                var h = c.revertLane;
                if (0 === h)
                  null !== u &&
                    (u = u.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    f === Hi && (d = !0);
                else {
                  if ((Zi & h) === h) {
                    (c = c.next), h === Hi && (d = !0);
                    continue;
                  }
                  (f = {
                    lane: 0,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === u ? ((l = u = f), (s = a)) : (u = u.next = f),
                    ($i.lanes |= h),
                    (du |= h);
                }
                (f = c.action),
                  ia && n(a, f),
                  (a = c.hasEagerState ? c.eagerState : n(a, f));
              } else
                (h = {
                  lane: f,
                  revertLane: c.revertLane,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === u ? ((l = u = h), (s = a)) : (u = u.next = h),
                  ($i.lanes |= f),
                  (du |= f);
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === u ? (s = a) : (u.next = l),
              !Qn(a, e.memoizedState) && ((Ho = !0), d && null !== (n = Yi)))
            )
              throw n;
            (e.memoizedState = a),
              (e.baseState = s),
              (e.baseQueue = u),
              (r.lastRenderedState = a);
          }
          return null === i && (r.lanes = 0), [e.memoizedState, r.dispatch];
        }
        function Pa(e) {
          var t = ba(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            a = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var s = (i = i.next);
            do {
              (a = e(a, s.action)), (s = s.next);
            } while (s !== i);
            Qn(a, t.memoizedState) || (Ho = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function Ca(e, t, n) {
          var r = $i,
            i = ba(),
            a = Gr;
          if (a) {
            if (void 0 === n) throw Error(o(407));
            n = n();
          } else n = t();
          var s = !Qn((ea || i).memoizedState, n);
          if (
            (s && ((i.memoizedState = n), (Ho = !0)),
            (i = i.queue),
            Za(Da.bind(null, r, i, e), [e]),
            i.getSnapshot !== t ||
              s ||
              (null !== ta && 1 & ta.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              qa(
                9,
                Ta.bind(null, r, i, n, t),
                {
                  destroy: void 0,
                },
                null
              ),
              null === tu)
            )
              throw Error(o(349));
            a || 0 !== (60 & Zi) || Fa(r, t, n);
          }
          return n;
        }
        function Fa(e, t, n) {
          (e.flags |= 16384),
            (e = {
              getSnapshot: t,
              value: n,
            }),
            null === (t = $i.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                ($i.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ta(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), ja(t) && Na(e);
        }
        function Da(e, t, n) {
          return n(function () {
            ja(t) && Na(e);
          });
        }
        function ja(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Qn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Na(e) {
          var t = Tr(e, 2);
          null !== t && Nu(t, e, 2);
        }
        function La(e) {
          var t = ya();
          if ("function" === typeof e) {
            var n = e;
            if (((e = n()), ia)) {
              be(!0);
              try {
                n();
              } finally {
                be(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: ka,
              lastRenderedState: e,
            }),
            t
          );
        }
        function Oa(e, t, n, r) {
          return (e.baseState = n), Ea(e, ea, "function" === typeof r ? r : ka);
        }
        function Ra(e, t, n, r, i) {
          if (So(e)) throw Error(o(485));
          if (null !== (e = t.action)) {
            var a = {
              payload: i,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                a.listeners.push(e);
              },
            };
            null !== D.T ? n(!0) : (a.isTransition = !1),
              r(a),
              null === (n = t.pending)
                ? ((a.next = t.pending = a), Ma(t, a))
                : ((a.next = n.next), (t.pending = n.next = a));
          }
        }
        function Ma(e, t) {
          var n = t.action,
            r = t.payload,
            i = e.state;
          if (t.isTransition) {
            var a = D.T,
              o = {};
            D.T = o;
            try {
              var s = n(i, r),
                l = D.S;
              null !== l && l(o, s), za(e, t, s);
            } catch (u) {
              Ba(e, t, u);
            } finally {
              D.T = a;
            }
          } else
            try {
              za(e, t, (a = n(i, r)));
            } catch (c) {
              Ba(e, t, c);
            }
        }
        function za(e, t, n) {
          null !== n && "object" === typeof n && "function" === typeof n.then
            ? n.then(
                function (n) {
                  Va(e, t, n);
                },
                function (n) {
                  return Ba(e, t, n);
                }
              )
            : Va(e, t, n);
        }
        function Va(e, t, n) {
          (t.status = "fulfilled"),
            (t.value = n),
            Ia(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), Ma(e, n)));
        }
        function Ba(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              (t.status = "rejected"), (t.reason = n), Ia(t), (t = t.next);
            } while (t !== r);
          }
          e.action = null;
        }
        function Ia(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function Ua(e, t) {
          return t;
        }
        function Wa(e, t) {
          if (Gr) {
            var n = tu.formState;
            if (null !== n) {
              e: {
                var r = $i;
                if (Gr) {
                  if (Xr) {
                    t: {
                      for (var i = Xr, a = Zr; 8 !== i.nodeType; ) {
                        if (!a) {
                          i = null;
                          break t;
                        }
                        if (null === (i = sd(i.nextSibling))) {
                          i = null;
                          break t;
                        }
                      }
                      i = "F!" === (a = i.data) || "F" === a ? i : null;
                    }
                    if (i) {
                      (Xr = sd(i.nextSibling)), (r = "F!" === i.data);
                      break e;
                    }
                  }
                  ei(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = ya()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ua,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = bo.bind(null, $i, r)),
            (r.dispatch = n),
            (r = La(!1)),
            (a = wo.bind(null, $i, !1, r.queue)),
            (i = {
              state: t,
              dispatch: null,
              action: e,
              pending: null,
            }),
            ((r = ya()).queue = i),
            (n = Ra.bind(null, $i, i, a, n)),
            (i.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function _a(e) {
          return Ha(ba(), ea, e);
        }
        function Ha(e, t, n) {
          (t = Ea(e, t, Ua)[0]),
            (e = Aa(ka)[0]),
            (t =
              "object" === typeof t &&
              null !== t &&
              "function" === typeof t.then
                ? xa(t)
                : t);
          var r = ba(),
            i = r.queue,
            a = i.dispatch;
          return (
            n !== r.memoizedState &&
              (($i.flags |= 2048),
              qa(
                9,
                Ya.bind(null, i, n),
                {
                  destroy: void 0,
                },
                null
              )),
            [t, a, e]
          );
        }
        function Ya(e, t) {
          e.action = t;
        }
        function Ka(e) {
          var t = ba(),
            n = ea;
          if (null !== n) return Ha(t, n, e);
          ba(), (t = t.memoizedState);
          var r = (n = ba()).queue.dispatch;
          return (n.memoizedState = e), [t, r, !1];
        }
        function qa(e, t, n, r) {
          return (
            (e = {
              tag: e,
              create: t,
              inst: n,
              deps: r,
              next: null,
            }),
            null === (t = $i.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              ($i.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Qa() {
          return ba().memoizedState;
        }
        function Xa(e, t, n, r) {
          var i = ya();
          ($i.flags |= e),
            (i.memoizedState = qa(
              1 | t,
              n,
              {
                destroy: void 0,
              },
              void 0 === r ? null : r
            ));
        }
        function Ga(e, t, n, r) {
          var i = ba();
          r = void 0 === r ? null : r;
          var a = i.memoizedState.inst;
          null !== ea && null !== r && ca(r, ea.memoizedState.deps)
            ? (i.memoizedState = qa(t, n, a, r))
            : (($i.flags |= e), (i.memoizedState = qa(1 | t, n, a, r)));
        }
        function Ja(e, t) {
          Xa(8390656, 8, e, t);
        }
        function Za(e, t) {
          Ga(2048, 8, e, t);
        }
        function $a(e, t) {
          return Ga(4, 2, e, t);
        }
        function eo(e, t) {
          return Ga(4, 4, e, t);
        }
        function to(e, t) {
          if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function no(e, t, n) {
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ga(4, 4, to.bind(null, t, e), n);
        }
        function ro() {}
        function io(e, t) {
          var n = ba();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && ca(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function ao(e, t) {
          var n = ba();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && ca(t, r[1])) return r[0];
          if (((r = e()), ia)) {
            be(!0);
            try {
              e();
            } finally {
              be(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        }
        function oo(e, t, n) {
          return void 0 === n || 0 !== (1073741824 & Zi)
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = ju()),
              ($i.lanes |= e),
              (du |= e),
              n);
        }
        function so(e, t, n, r) {
          return Qn(n, t)
            ? n
            : null !== ki.current
            ? ((e = oo(e, n, r)), Qn(e, t) || (Ho = !0), e)
            : 0 === (42 & Zi)
            ? ((Ho = !0), (e.memoizedState = n))
            : ((e = ju()), ($i.lanes |= e), (du |= e), t);
        }
        function lo(e, t, n, r, i) {
          var a = W.p;
          W.p = 0 !== a && 8 > a ? a : 8;
          var o = D.T,
            s = {};
          (D.T = s), wo(e, !1, t, n);
          try {
            var l = i(),
              u = D.S;
            if (
              (null !== u && u(s, l),
              null !== l &&
                "object" === typeof l &&
                "function" === typeof l.then)
            )
              xo(
                e,
                t,
                (function (e, t) {
                  var n = [],
                    r = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        n.push(e);
                      },
                    };
                  return (
                    e.then(
                      function () {
                        (r.status = "fulfilled"), (r.value = t);
                        for (var e = 0; e < n.length; e++) (0, n[e])(t);
                      },
                      function (e) {
                        for (
                          r.status = "rejected", r.reason = e, e = 0;
                          e < n.length;
                          e++
                        )
                          (0, n[e])(void 0);
                      }
                    ),
                    r
                  );
                })(l, r),
                Du()
              );
            else xo(e, t, r, Du());
          } catch (c) {
            xo(
              e,
              t,
              {
                then: function () {},
                status: "rejected",
                reason: c,
              },
              Du()
            );
          } finally {
            (W.p = a), (D.T = o);
          }
        }
        function uo() {}
        function co(e, t, n, r) {
          if (5 !== e.tag) throw Error(o(476));
          var i = fo(e).queue;
          lo(
            e,
            i,
            t,
            _,
            null === n
              ? uo
              : function () {
                  return ho(e), n(r);
                }
          );
        }
        function fo(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: _,
              baseState: _,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ka,
                lastRenderedState: _,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ka,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function ho(e) {
          xo(e, fo(e).next.queue, {}, Du());
        }
        function po() {
          return Es(Md);
        }
        function mo() {
          return ba().memoizedState;
        }
        function go() {
          return ba().memoizedState;
        }
        function vo(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Du(),
                  r = Ns(t, (e = js(n)), n);
                return (
                  null !== r && (Nu(r, t, n), Ls(r, t, n)),
                  (t = {
                    cache: Ii(),
                  }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function yo(e, t, n) {
          var r = Du();
          (n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            So(e)
              ? ko(t, n)
              : null !== (n = Fr(e, t, n, r)) && (Nu(n, e, r), Ao(n, t, r));
        }
        function bo(e, t, n) {
          xo(e, t, n, Du());
        }
        function xo(e, t, n, r) {
          var i = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (So(e)) ko(t, i);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), Qn(s, o)))
                  return Cr(e, t, i, 0), null === tu && Pr(), !1;
              } catch (l) {}
            if (null !== (n = Fr(e, t, i, r)))
              return Nu(n, e, r), Ao(n, t, r), !0;
          }
          return !1;
        }
        function wo(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: wc(),
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            So(e))
          ) {
            if (t) throw Error(o(479));
          } else null !== (t = Fr(e, n, r, 2)) && Nu(t, e, 2);
        }
        function So(e) {
          var t = e.alternate;
          return e === $i || (null !== t && t === $i);
        }
        function ko(e, t) {
          ra = na = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Ao(e, t, n) {
          if (0 !== (4194176 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Oe(e, n);
          }
        }
        var Eo = {
          readContext: Es,
          use: wa,
          useCallback: ua,
          useContext: ua,
          useEffect: ua,
          useImperativeHandle: ua,
          useLayoutEffect: ua,
          useInsertionEffect: ua,
          useMemo: ua,
          useReducer: ua,
          useRef: ua,
          useState: ua,
          useDebugValue: ua,
          useDeferredValue: ua,
          useTransition: ua,
          useSyncExternalStore: ua,
          useId: ua,
        };
        (Eo.useCacheRefresh = ua),
          (Eo.useMemoCache = ua),
          (Eo.useHostTransitionStatus = ua),
          (Eo.useFormState = ua),
          (Eo.useActionState = ua),
          (Eo.useOptimistic = ua);
        var Po = {
          readContext: Es,
          use: wa,
          useCallback: function (e, t) {
            return (ya().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: Es,
          useEffect: Ja,
          useImperativeHandle: function (e, t, n) {
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              Xa(4194308, 4, to.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return Xa(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            Xa(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = ya();
            t = void 0 === t ? null : t;
            var r = e();
            if (ia) {
              be(!0);
              try {
                e();
              } finally {
                be(!1);
              }
            }
            return (n.memoizedState = [r, t]), r;
          },
          useReducer: function (e, t, n) {
            var r = ya();
            if (void 0 !== n) {
              var i = n(t);
              if (ia) {
                be(!0);
                try {
                  n(t);
                } finally {
                  be(!1);
                }
              }
            } else i = t;
            return (
              (r.memoizedState = r.baseState = i),
              (e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: i,
              }),
              (r.queue = e),
              (e = e.dispatch = yo.bind(null, $i, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (
              (e = {
                current: e,
              }),
              (ya().memoizedState = e)
            );
          },
          useState: function (e) {
            var t = (e = La(e)).queue,
              n = bo.bind(null, $i, t);
            return (t.dispatch = n), [e.memoizedState, n];
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            return oo(ya(), e, t);
          },
          useTransition: function () {
            var e = La(!1);
            return (
              (e = lo.bind(null, $i, e.queue, !0, !1)),
              (ya().memoizedState = e),
              [!1, e]
            );
          },
          useSyncExternalStore: function (e, t, n) {
            var r = $i,
              i = ya();
            if (Gr) {
              if (void 0 === n) throw Error(o(407));
              n = n();
            } else {
              if (((n = t()), null === tu)) throw Error(o(349));
              0 !== (60 & ru) || Fa(r, t, n);
            }
            i.memoizedState = n;
            var a = {
              value: n,
              getSnapshot: t,
            };
            return (
              (i.queue = a),
              Ja(Da.bind(null, r, a, e), [e]),
              (r.flags |= 2048),
              qa(
                9,
                Ta.bind(null, r, a, n, t),
                {
                  destroy: void 0,
                },
                null
              ),
              n
            );
          },
          useId: function () {
            var e = ya(),
              t = tu.identifierPrefix;
            if (Gr) {
              var n = _r;
              (t =
                ":" +
                t +
                "R" +
                (n = (Wr & ~(1 << (32 - xe(Wr) - 1))).toString(32) + n)),
                0 < (n = aa++) && (t += "H" + n.toString(32)),
                (t += ":");
            } else t = ":" + t + "r" + (n = la++).toString(32) + ":";
            return (e.memoizedState = t);
          },
          useCacheRefresh: function () {
            return (ya().memoizedState = vo.bind(null, $i));
          },
        };
        (Po.useMemoCache = Sa),
          (Po.useHostTransitionStatus = po),
          (Po.useFormState = Wa),
          (Po.useActionState = Wa),
          (Po.useOptimistic = function (e) {
            var t = ya();
            t.memoizedState = t.baseState = e;
            var n = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null,
            };
            return (
              (t.queue = n),
              (t = wo.bind(null, $i, !0, n)),
              (n.dispatch = t),
              [e, t]
            );
          });
        var Co = {
          readContext: Es,
          use: wa,
          useCallback: io,
          useContext: Es,
          useEffect: Za,
          useImperativeHandle: no,
          useInsertionEffect: $a,
          useLayoutEffect: eo,
          useMemo: ao,
          useReducer: Aa,
          useRef: Qa,
          useState: function () {
            return Aa(ka);
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            return so(ba(), ea.memoizedState, e, t);
          },
          useTransition: function () {
            var e = Aa(ka)[0],
              t = ba().memoizedState;
            return ["boolean" === typeof e ? e : xa(e), t];
          },
          useSyncExternalStore: Ca,
          useId: mo,
        };
        (Co.useCacheRefresh = go),
          (Co.useMemoCache = Sa),
          (Co.useHostTransitionStatus = po),
          (Co.useFormState = _a),
          (Co.useActionState = _a),
          (Co.useOptimistic = function (e, t) {
            return Oa(ba(), 0, e, t);
          });
        var Fo = {
          readContext: Es,
          use: wa,
          useCallback: io,
          useContext: Es,
          useEffect: Za,
          useImperativeHandle: no,
          useInsertionEffect: $a,
          useLayoutEffect: eo,
          useMemo: ao,
          useReducer: Pa,
          useRef: Qa,
          useState: function () {
            return Pa(ka);
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            var n = ba();
            return null === ea ? oo(n, e, t) : so(n, ea.memoizedState, e, t);
          },
          useTransition: function () {
            var e = Pa(ka)[0],
              t = ba().memoizedState;
            return ["boolean" === typeof e ? e : xa(e), t];
          },
          useSyncExternalStore: Ca,
          useId: mo,
        };
        function To(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : j({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        (Fo.useCacheRefresh = go),
          (Fo.useMemoCache = Sa),
          (Fo.useHostTransitionStatus = po),
          (Fo.useFormState = Ka),
          (Fo.useActionState = Ka),
          (Fo.useOptimistic = function (e, t) {
            var n = ba();
            return null !== ea
              ? Oa(n, 0, e, t)
              : ((n.baseState = e), [e, n.queue.dispatch]);
          });
        var Do = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && z(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Du(),
              i = js(r);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Ns(e, i, r)) && (Nu(t, e, r), Ls(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Du(),
              i = js(r);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Ns(e, i, r)) && (Nu(t, e, r), Ls(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Du(),
              r = js(n);
            (r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = Ns(e, r, n)) && (Nu(t, e, n), Ls(t, e, n));
          },
        };
        function jo(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Xn(n, r) ||
                !Xn(i, a);
        }
        function No(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Do.enqueueReplaceState(t, t.state, null);
        }
        function Lo(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var i in (n === t && (n = j({}, n)), e))
              void 0 === n[i] && (n[i] = e[i]);
          return n;
        }
        var Oo =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function Ro(e) {
          Oo(e);
        }
        function Mo(e) {
          console.error(e);
        }
        function zo(e) {
          Oo(e);
        }
        function Vo(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, {
              componentStack: t.stack,
            });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function Bo(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function Io(e, t, n) {
          return (
            ((n = js(n)).tag = 3),
            (n.payload = {
              element: null,
            }),
            (n.callback = function () {
              Vo(e, t);
            }),
            n
          );
        }
        function Uo(e) {
          return ((e = js(e)).tag = 3), e;
        }
        function Wo(e, t, n, r) {
          var i = n.type.getDerivedStateFromError;
          if ("function" === typeof i) {
            var a = r.value;
            (e.payload = function () {
              return i(a);
            }),
              (e.callback = function () {
                Bo(t, n, r);
              });
          }
          var o = n.stateNode;
          null !== o &&
            "function" === typeof o.componentDidCatch &&
            (e.callback = function () {
              Bo(t, n, r),
                "function" !== typeof i &&
                  (null === Su ? (Su = new Set([this])) : Su.add(this));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var _o = Error(o(461)),
          Ho = !1;
        function Yo(e, t, n, r) {
          t.child = null === e ? Si(t, null, n, r) : wi(t, e.child, n, r);
        }
        function Ko(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          if ("ref" in r) {
            var o = {};
            for (var s in r) "ref" !== s && (o[s] = r[s]);
          } else o = r;
          return (
            As(t),
            (r = da(e, t, n, o, a, i)),
            (s = ma()),
            null === e || Ho
              ? (Gr && s && Kr(t), (t.flags |= 1), Yo(e, t, r, i), t.child)
              : (ga(e, t, i), fs(e, t, i))
          );
        }
        function qo(e, t, n, r, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Ml(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare
              ? (((e = Bl(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Qo(e, t, a, r, i));
          }
          if (((a = e.child), !hs(e, i))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Xn)(o, r) &&
              e.ref === t.ref
            )
              return fs(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = zl(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Qo(e, t, n, r, i) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (Xn(a, r) && e.ref === t.ref) {
              if (((Ho = !1), (t.pendingProps = r = a), !hs(e, i)))
                return (t.lanes = e.lanes), fs(e, t, i);
              0 !== (131072 & e.flags) && (Ho = !0);
            }
          }
          return Zo(e, t, n, r, i);
        }
        function Xo(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = 0 !== (2 & t.stateNode._pendingVisibility),
            o = null !== e ? e.memoizedState : null;
          if ((Jo(e, t), "hidden" === r.mode || a)) {
            if (0 !== (128 & t.flags)) {
              if (((r = null !== o ? o.baseLanes | n : n), null !== e)) {
                for (i = t.child = e.child, a = 0; null !== i; )
                  (a = a | i.lanes | i.childLanes), (i = i.sibling);
                t.childLanes = a & ~r;
              } else (t.childLanes = 0), (t.child = null);
              return Go(e, t, r, n);
            }
            if (0 === (536870912 & n))
              return (
                (t.lanes = t.childLanes = 536870912),
                Go(e, t, null !== o ? o.baseLanes | n : n, n)
              );
            (t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
            }),
              null !== e && Gi(0, null !== o ? o.cachePool : null),
              null !== o ? Ei(t, o) : Pi(),
              ji(t);
          } else
            null !== o
              ? (Gi(0, o.cachePool), Ei(t, o), Ni(), (t.memoizedState = null))
              : (null !== e && Gi(0, null), Pi(), Ni());
          return Yo(e, t, i, n), t.child;
        }
        function Go(e, t, n, r) {
          var i = Xi();
          return (
            (i =
              null === i
                ? null
                : {
                    parent: Bi._currentValue,
                    pool: i,
                  }),
            (t.memoizedState = {
              baseLanes: n,
              cachePool: i,
            }),
            null !== e && Gi(0, null),
            Pi(),
            ji(t),
            null !== e && Ss(e, t, r, !0),
            null
          );
        }
        function Jo(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 2097664);
          else {
            if ("function" !== typeof n && "object" !== typeof n)
              throw Error(o(284));
            (null !== e && e.ref === n) || (t.flags |= 2097664);
          }
        }
        function Zo(e, t, n, r, i) {
          return (
            As(t),
            (n = da(e, t, n, r, void 0, i)),
            (r = ma()),
            null === e || Ho
              ? (Gr && r && Kr(t), (t.flags |= 1), Yo(e, t, n, i), t.child)
              : (ga(e, t, i), fs(e, t, i))
          );
        }
        function $o(e, t, n, r, i, a) {
          return (
            As(t),
            (t.updateQueue = null),
            (n = ha(t, r, n, i)),
            fa(e),
            (r = ma()),
            null === e || Ho
              ? (Gr && r && Kr(t), (t.flags |= 1), Yo(e, t, n, a), t.child)
              : (ga(e, t, a), fs(e, t, a))
          );
        }
        function es(e, t, n, r, i) {
          if ((As(t), null === t.stateNode)) {
            var a = Nr,
              o = n.contextType;
            "object" === typeof o && null !== o && (a = Es(o)),
              (a = new n(r, a)),
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
              (a.updater = Do),
              (t.stateNode = a),
              (a._reactInternals = t),
              ((a = t.stateNode).props = r),
              (a.state = t.memoizedState),
              (a.refs = {}),
              Ts(t),
              (o = n.contextType),
              (a.context = "object" === typeof o && null !== o ? Es(o) : Nr),
              (a.state = t.memoizedState),
              "function" === typeof (o = n.getDerivedStateFromProps) &&
                (To(t, n, o, r), (a.state = t.memoizedState)),
              "function" === typeof n.getDerivedStateFromProps ||
                "function" === typeof a.getSnapshotBeforeUpdate ||
                ("function" !== typeof a.UNSAFE_componentWillMount &&
                  "function" !== typeof a.componentWillMount) ||
                ((o = a.state),
                "function" === typeof a.componentWillMount &&
                  a.componentWillMount(),
                "function" === typeof a.UNSAFE_componentWillMount &&
                  a.UNSAFE_componentWillMount(),
                o !== a.state && Do.enqueueReplaceState(a, a.state, null),
                zs(t, r, a, i),
                Ms(),
                (a.state = t.memoizedState)),
              "function" === typeof a.componentDidMount && (t.flags |= 4194308),
              (r = !0);
          } else if (null === e) {
            a = t.stateNode;
            var s = t.memoizedProps,
              l = Lo(n, s);
            a.props = l;
            var u = a.context,
              c = n.contextType;
            (o = Nr), "object" === typeof c && null !== c && (o = Es(c));
            var d = n.getDerivedStateFromProps;
            (c =
              "function" === typeof d ||
              "function" === typeof a.getSnapshotBeforeUpdate),
              (s = t.pendingProps !== s),
              c ||
                ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof a.componentWillReceiveProps) ||
                ((s || u !== o) && No(t, a, r, o)),
              (Fs = !1);
            var f = t.memoizedState;
            (a.state = f),
              zs(t, r, a, i),
              Ms(),
              (u = t.memoizedState),
              s || f !== u || Fs
                ? ("function" === typeof d &&
                    (To(t, n, d, r), (u = t.memoizedState)),
                  (l = Fs || jo(t, n, l, r, f, u, o))
                    ? (c ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (a.props = r),
                  (a.state = u),
                  (a.context = o),
                  (r = l))
                : ("function" === typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              Ds(e, t),
              (c = Lo(n, (o = t.memoizedProps))),
              (a.props = c),
              (d = t.pendingProps),
              (f = a.context),
              (u = n.contextType),
              (l = Nr),
              "object" === typeof u && null !== u && (l = Es(u)),
              (u =
                "function" === typeof (s = n.getDerivedStateFromProps) ||
                "function" === typeof a.getSnapshotBeforeUpdate) ||
                ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof a.componentWillReceiveProps) ||
                ((o !== d || f !== l) && No(t, a, r, l)),
              (Fs = !1),
              (f = t.memoizedState),
              (a.state = f),
              zs(t, r, a, i),
              Ms();
            var h = t.memoizedState;
            o !== d ||
            f !== h ||
            Fs ||
            (null !== e && null !== e.dependencies && ks(e.dependencies))
              ? ("function" === typeof s &&
                  (To(t, n, s, r), (h = t.memoizedState)),
                (c =
                  Fs ||
                  jo(t, n, c, r, f, h, l) ||
                  (null !== e && null !== e.dependencies && ks(e.dependencies)))
                  ? (u ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, h, l),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (a.props = r),
                (a.state = h),
                (a.context = l),
                (r = c))
              : ("function" !== typeof a.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (a = r),
            Jo(e, t),
            (r = 0 !== (128 & t.flags)),
            a || r
              ? ((a = t.stateNode),
                (n =
                  r && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : a.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = wi(t, e.child, null, i)),
                    (t.child = wi(t, null, n, i)))
                  : Yo(e, t, n, i),
                (t.memoizedState = a.state),
                (e = t.child))
              : (e = fs(e, t, i)),
            e
          );
        }
        function ts(e, t, n, r) {
          return ii(), (t.flags |= 256), Yo(e, t, n, r), t.child;
        }
        var ns = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
        };
        function rs(e) {
          return {
            baseLanes: e,
            cachePool: Ji(),
          };
        }
        function is(e, t, n) {
          return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= pu), e;
        }
        function as(e, t, n) {
          var r,
            i = t.pendingProps,
            a = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r =
                (null === e || null !== e.memoizedState) &&
                0 !== (2 & Oi.current)),
            r && ((a = !0), (t.flags &= -129)),
            (r = 0 !== (32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (Gr) {
              if ((a ? Di(t) : Ni(), Gr)) {
                var l,
                  u = Xr;
                if ((l = u)) {
                  e: {
                    for (l = u, u = Zr; 8 !== l.nodeType; ) {
                      if (!u) {
                        u = null;
                        break e;
                      }
                      if (null === (l = sd(l.nextSibling))) {
                        u = null;
                        break e;
                      }
                    }
                    u = l;
                  }
                  null !== u
                    ? ((t.memoizedState = {
                        dehydrated: u,
                        treeContext:
                          null !== Ur
                            ? {
                                id: Wr,
                                overflow: _r,
                              }
                            : null,
                        retryLane: 536870912,
                      }),
                      ((l = Rl(18, null, null, 0)).stateNode = u),
                      (l.return = t),
                      (t.child = l),
                      (Qr = t),
                      (Xr = null),
                      (l = !0))
                    : (l = !1);
                }
                l || ei(t);
              }
              if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
                return (
                  "$!" === u.data ? (t.lanes = 16) : (t.lanes = 536870912), null
                );
              Li(t);
            }
            return (
              (u = i.children),
              (i = i.fallback),
              a
                ? (Ni(),
                  (u = ss(
                    {
                      mode: "hidden",
                      children: u,
                    },
                    (a = t.mode)
                  )),
                  (i = Il(i, a, n, null)),
                  (u.return = t),
                  (i.return = t),
                  (u.sibling = i),
                  (t.child = u),
                  ((a = t.child).memoizedState = rs(n)),
                  (a.childLanes = is(e, r, n)),
                  (t.memoizedState = ns),
                  i)
                : (Di(t), os(t, u))
            );
          }
          if (null !== (l = e.memoizedState) && null !== (u = l.dehydrated)) {
            if (s)
              256 & t.flags
                ? (Di(t), (t.flags &= -257), (t = ls(e, t, n)))
                : null !== t.memoizedState
                ? (Ni(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (Ni(),
                  (a = i.fallback),
                  (u = t.mode),
                  (i = ss(
                    {
                      mode: "visible",
                      children: i.children,
                    },
                    u
                  )),
                  ((a = Il(a, u, n, null)).flags |= 2),
                  (i.return = t),
                  (a.return = t),
                  (i.sibling = a),
                  (t.child = i),
                  wi(t, e.child, null, n),
                  ((i = t.child).memoizedState = rs(n)),
                  (i.childLanes = is(e, r, n)),
                  (t.memoizedState = ns),
                  (t = a));
            else if ((Di(t), "$!" === u.data)) {
              if ((r = u.nextSibling && u.nextSibling.dataset)) var c = r.dgst;
              (r = c),
                ((i = Error(o(419))).stack = ""),
                (i.digest = r),
                ai({
                  value: i,
                  source: null,
                  stack: null,
                }),
                (t = ls(e, t, n));
            } else if (
              (Ho || Ss(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Ho || r)
            ) {
              if (null !== (r = tu)) {
                if (0 !== (42 & (i = n & -n))) i = 1;
                else
                  switch (i) {
                    case 2:
                      i = 1;
                      break;
                    case 8:
                      i = 4;
                      break;
                    case 32:
                      i = 16;
                      break;
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                      i = 64;
                      break;
                    case 268435456:
                      i = 134217728;
                      break;
                    default:
                      i = 0;
                  }
                if (
                  0 !== (i = 0 !== (i & (r.suspendedLanes | n)) ? 0 : i) &&
                  i !== l.retryLane
                )
                  throw ((l.retryLane = i), Tr(e, i), Nu(r, e, i), _o);
              }
              "$?" === u.data || Hu(), (t = ls(e, t, n));
            } else
              "$?" === u.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = sc.bind(null, e)),
                  (u._reactRetry = t),
                  (t = null))
                : ((e = l.treeContext),
                  (Xr = sd(u.nextSibling)),
                  (Qr = t),
                  (Gr = !0),
                  (Jr = null),
                  (Zr = !1),
                  null !== e &&
                    ((Br[Ir++] = Wr),
                    (Br[Ir++] = _r),
                    (Br[Ir++] = Ur),
                    (Wr = e.id),
                    (_r = e.overflow),
                    (Ur = t)),
                  ((t = os(t, i.children)).flags |= 4096));
            return t;
          }
          return a
            ? (Ni(),
              (a = i.fallback),
              (u = t.mode),
              (c = (l = e.child).sibling),
              ((i = zl(l, {
                mode: "hidden",
                children: i.children,
              })).subtreeFlags = 31457280 & l.subtreeFlags),
              null !== c
                ? (a = zl(c, a))
                : ((a = Il(a, u, n, null)).flags |= 2),
              (a.return = t),
              (i.return = t),
              (i.sibling = a),
              (t.child = i),
              (i = a),
              (a = t.child),
              null === (u = e.child.memoizedState)
                ? (u = rs(n))
                : (null !== (l = u.cachePool)
                    ? ((c = Bi._currentValue),
                      (l =
                        l.parent !== c
                          ? {
                              parent: c,
                              pool: c,
                            }
                          : l))
                    : (l = Ji()),
                  (u = {
                    baseLanes: u.baseLanes | n,
                    cachePool: l,
                  })),
              (a.memoizedState = u),
              (a.childLanes = is(e, r, n)),
              (t.memoizedState = ns),
              i)
            : (Di(t),
              (e = (n = e.child).sibling),
              ((n = zl(n, {
                mode: "visible",
                children: i.children,
              })).return = t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function os(e, t) {
          return (
            ((t = ss(
              {
                mode: "visible",
                children: t,
              },
              e.mode
            )).return = e),
            (e.child = t)
          );
        }
        function ss(e, t) {
          return Ul(e, t, 0, null);
        }
        function ls(e, t, n) {
          return (
            wi(t, e.child, null, n),
            ((e = os(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function us(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), xs(e.return, t, n);
        }
        function cs(e, t, n, r, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i));
        }
        function ds(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((Yo(e, t, r.children, n), 0 !== (2 & (r = Oi.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && us(e, n, t);
                else if (19 === e.tag) us(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          switch ((Q(Oi, r), i)) {
            case "forwards":
              for (n = t.child, i = null; null !== n; )
                null !== (e = n.alternate) && null === Ri(e) && (i = n),
                  (n = n.sibling);
              null === (n = i)
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
                cs(t, !1, i, n, a);
              break;
            case "backwards":
              for (n = null, i = t.child, t.child = null; null !== i; ) {
                if (null !== (e = i.alternate) && null === Ri(e)) {
                  t.child = i;
                  break;
                }
                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
              }
              cs(t, !0, n, null, a);
              break;
            case "together":
              cs(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function fs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (du |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Ss(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = zl((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = zl(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function hs(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !ks(e))
          );
        }
        function ps(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Ho = !0;
            else {
              if (!hs(e, n) && 0 === (128 & t.flags))
                return (
                  (Ho = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        $(t, t.stateNode.containerInfo),
                          ys(t, Bi, e.memoizedState.cache),
                          ii();
                        break;
                      case 27:
                      case 5:
                        te(t);
                        break;
                      case 4:
                        $(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        ys(t, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (Di(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? as(e, t, n)
                            : (Di(t),
                              null !== (e = fs(e, t, n)) ? e.sibling : null);
                        Di(t);
                        break;
                      case 19:
                        var i = 0 !== (128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Ss(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          i)
                        ) {
                          if (r) return ds(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Q(Oi, Oi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Xo(e, t, n);
                      case 24:
                        ys(t, Bi, e.memoizedState.cache);
                    }
                    return fs(e, t, n);
                  })(e, t, n)
                );
              Ho = 0 !== (131072 & e.flags);
            }
          else (Ho = !1), Gr && 0 !== (1048576 & t.flags) && Yr(t, Vr, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  i = r._init;
                if (
                  ((r = i(r._payload)), (t.type = r), "function" !== typeof r)
                ) {
                  if (void 0 !== r && null !== r) {
                    if ((i = r.$$typeof) === v) {
                      (t.tag = 11), (t = Ko(null, t, r, e, n));
                      break e;
                    }
                    if (i === x) {
                      (t.tag = 14), (t = qo(null, t, r, e, n));
                      break e;
                    }
                  }
                  throw ((t = C(r) || r), Error(o(306, t, "")));
                }
                Ml(r)
                  ? ((e = Lo(r, e)), (t.tag = 1), (t = es(null, t, r, e, n)))
                  : ((t.tag = 0), (t = Zo(null, t, r, e, n)));
              }
              return t;
            case 0:
              return Zo(e, t, t.type, t.pendingProps, n);
            case 1:
              return es(e, t, (r = t.type), (i = Lo(r, t.pendingProps)), n);
            case 3:
              e: {
                if (($(t, t.stateNode.containerInfo), null === e))
                  throw Error(o(387));
                var a = t.pendingProps;
                (r = (i = t.memoizedState).element),
                  Ds(e, t),
                  zs(t, a, null, n);
                var s = t.memoizedState;
                if (
                  ((a = s.cache),
                  ys(t, Bi, a),
                  a !== i.cache && ws(t, [Bi], n, !0),
                  Ms(),
                  (a = s.element),
                  i.isDehydrated)
                ) {
                  if (
                    ((i = {
                      element: a,
                      isDehydrated: !1,
                      cache: s.cache,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = ts(e, t, a, n);
                    break e;
                  }
                  if (a !== r) {
                    ai((r = Or(Error(o(424)), t))), (t = ts(e, t, a, n));
                    break e;
                  }
                  for (
                    Xr = sd(t.stateNode.containerInfo.firstChild),
                      Qr = t,
                      Gr = !0,
                      Jr = null,
                      Zr = !0,
                      n = Si(t, null, a, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ii(), a === r)) {
                    t = fs(e, t, n);
                    break e;
                  }
                  Yo(e, t, a, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Jo(e, t),
                null === e
                  ? (n = gd(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : Gr ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = Xc(J.current).createElement(n))[Ve] = t),
                      (r[Be] = e),
                      Kc(r, n, e),
                      Je(r),
                      (t.stateNode = r))
                  : (t.memoizedState = gd(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState
                    )),
                null
              );
            case 27:
              return (
                te(t),
                null === e &&
                  Gr &&
                  ((r = t.stateNode = ud(t.type, t.pendingProps, J.current)),
                  (Qr = t),
                  (Zr = !0),
                  (Xr = sd(r.firstChild))),
                (r = t.pendingProps.children),
                null !== e || Gr
                  ? Yo(e, t, r, n)
                  : (t.child = wi(t, null, r, n)),
                Jo(e, t),
                t.child
              );
            case 5:
              return (
                null === e &&
                  Gr &&
                  ((i = r = Xr) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var i = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[Ye])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (a = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  a !== i.rel ||
                                  e.getAttribute("href") !==
                                    (null == i.href ? null : i.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == i.crossOrigin
                                      ? null
                                      : i.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == i.title ? null : i.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((a = e.getAttribute("src")) !==
                                    (null == i.src ? null : i.src) ||
                                    e.getAttribute("type") !==
                                      (null == i.type ? null : i.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == i.crossOrigin
                                        ? null
                                        : i.crossOrigin)) &&
                                  a &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var a = null == i.name ? null : "" + i.name;
                          if (
                            "hidden" === i.type &&
                            e.getAttribute("name") === a
                          )
                            return e;
                        }
                        if (null === (e = sd(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, Zr))
                      ? ((t.stateNode = r),
                        (Qr = t),
                        (Xr = sd(r.firstChild)),
                        (Zr = !1),
                        (i = !0))
                      : (i = !1)),
                  i || ei(t)),
                te(t),
                (i = t.type),
                (a = t.pendingProps),
                (s = null !== e ? e.memoizedProps : null),
                (r = a.children),
                Zc(i, a)
                  ? (r = null)
                  : null !== s && Zc(i, s) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((i = da(e, t, pa, null, null, n)), (Md._currentValue = i)),
                Jo(e, t),
                Yo(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  Gr &&
                  ((e = n = Xr) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = sd(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, Zr))
                      ? ((t.stateNode = n), (Qr = t), (Xr = null), (e = !0))
                      : (e = !1)),
                  e || ei(t)),
                null
              );
            case 13:
              return as(e, t, n);
            case 4:
              return (
                $(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wi(t, null, r, n)) : Yo(e, t, r, n),
                t.child
              );
            case 11:
              return Ko(e, t, t.type, t.pendingProps, n);
            case 7:
              return Yo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Yo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return (
                (r = t.pendingProps),
                ys(t, t.type, r.value),
                Yo(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (i = t.type._context),
                (r = t.pendingProps.children),
                As(t),
                (r = r((i = Es(i)))),
                (t.flags |= 1),
                Yo(e, t, r, n),
                t.child
              );
            case 14:
              return qo(e, t, t.type, t.pendingProps, n);
            case 15:
              return Qo(e, t, t.type, t.pendingProps, n);
            case 19:
              return ds(e, t, n);
            case 22:
              return Xo(e, t, n);
            case 24:
              return (
                As(t),
                (r = Es(Bi)),
                null === e
                  ? (null === (i = Xi()) &&
                      ((i = tu),
                      (a = Ii()),
                      (i.pooledCache = a),
                      a.refCount++,
                      null !== a && (i.pooledCacheLanes |= n),
                      (i = a)),
                    (t.memoizedState = {
                      parent: r,
                      cache: i,
                    }),
                    Ts(t),
                    ys(t, Bi, i))
                  : (0 !== (e.lanes & n) &&
                      (Ds(e, t), zs(t, null, null, n), Ms()),
                    (i = e.memoizedState),
                    (a = t.memoizedState),
                    i.parent !== r
                      ? ((i = {
                          parent: r,
                          cache: r,
                        }),
                        (t.memoizedState = i),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = i),
                        ys(t, Bi, r))
                      : ((r = a.cache),
                        ys(t, Bi, r),
                        r !== i.cache && ws(t, [Bi], n, !0))),
                Yo(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(o(156, t.tag));
        }
        var ms = K(null),
          gs = null,
          vs = null;
        function ys(e, t, n) {
          Q(ms, t._currentValue), (t._currentValue = n);
        }
        function bs(e) {
          (e._currentValue = ms.current), q(ms);
        }
        function xs(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function ws(e, t, n, r) {
          var i = e.child;
          for (null !== i && (i.return = e); null !== i; ) {
            var a = i.dependencies;
            if (null !== a) {
              var s = i.child;
              a = a.firstContext;
              e: for (; null !== a; ) {
                var l = a;
                a = i;
                for (var u = 0; u < t.length; u++)
                  if (l.context === t[u]) {
                    (a.lanes |= n),
                      null !== (l = a.alternate) && (l.lanes |= n),
                      xs(a.return, n, e),
                      r || (s = null);
                    break e;
                  }
                a = l.next;
              }
            } else if (18 === i.tag) {
              if (null === (s = i.return)) throw Error(o(341));
              (s.lanes |= n),
                null !== (a = s.alternate) && (a.lanes |= n),
                xs(s, n, e),
                (s = null);
            } else s = i.child;
            if (null !== s) s.return = i;
            else
              for (s = i; null !== s; ) {
                if (s === e) {
                  s = null;
                  break;
                }
                if (null !== (i = s.sibling)) {
                  (i.return = s.return), (s = i);
                  break;
                }
                s = s.return;
              }
            i = s;
          }
        }
        function Ss(e, t, n, r) {
          e = null;
          for (var i = t, a = !1; null !== i; ) {
            if (!a)
              if (0 !== (524288 & i.flags)) a = !0;
              else if (0 !== (262144 & i.flags)) break;
            if (10 === i.tag) {
              var s = i.alternate;
              if (null === s) throw Error(o(387));
              if (null !== (s = s.memoizedProps)) {
                var l = i.type;
                Qn(i.pendingProps.value, s.value) ||
                  (null !== e ? e.push(l) : (e = [l]));
              }
            } else if (i === Z.current) {
              if (null === (s = i.alternate)) throw Error(o(387));
              s.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
                (null !== e ? e.push(Md) : (e = [Md]));
            }
            i = i.return;
          }
          null !== e && ws(t, e, n, r), (t.flags |= 262144);
        }
        function ks(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Qn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function As(e) {
          (gs = e),
            (vs = null),
            null !== (e = e.dependencies) && (e.firstContext = null);
        }
        function Es(e) {
          return Cs(gs, e);
        }
        function Ps(e, t) {
          return null === gs && As(e), Cs(e, t);
        }
        function Cs(e, t) {
          var n = t._currentValue;
          if (
            ((t = {
              context: t,
              memoizedValue: n,
              next: null,
            }),
            null === vs)
          ) {
            if (null === e) throw Error(o(308));
            (vs = t),
              (e.dependencies = {
                lanes: 0,
                firstContext: t,
              }),
              (e.flags |= 524288);
          } else vs = vs.next = t;
          return n;
        }
        var Fs = !1;
        function Ts(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
              pending: null,
              lanes: 0,
              hiddenCallbacks: null,
            },
            callbacks: null,
          };
        }
        function Ds(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              });
        }
        function js(e) {
          return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ns(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & eu))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              (t = jr(e)),
              Dr(e, null, n),
              t
            );
          }
          return Cr(e, r, t, n), jr(e);
        }
        function Ls(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194176 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Oe(e, n);
          }
        }
        function Os(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        var Rs = !1;
        function Ms() {
          if (Rs) {
            if (null !== Yi) throw Yi;
          }
        }
        function zs(e, t, n, r) {
          Rs = !1;
          var i = e.updateQueue;
          Fs = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === o ? (a = u) : (o.next = u), (o = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== a) {
            var d = i.baseState;
            for (o = 0, c = u = l = null, s = a; ; ) {
              var f = -536870913 & s.lane,
                h = f !== s.lane;
              if (h ? (ru & f) === f : (r & f) === f) {
                0 !== f && f === Hi && (Rs = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null,
                      });
                e: {
                  var p = e,
                    m = s;
                  f = t;
                  var g = n;
                  switch (m.tag) {
                    case 1:
                      if ("function" === typeof (p = m.payload)) {
                        d = p.call(g, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (p = m.payload)
                              ? p.call(g, d, f)
                              : p) ||
                        void 0 === f
                      )
                        break e;
                      d = j({}, d, f);
                      break e;
                    case 2:
                      Fs = !0;
                  }
                }
                null !== (f = s.callback) &&
                  ((e.flags |= 64),
                  h && (e.flags |= 8192),
                  null === (h = i.callbacks) ? (i.callbacks = [f]) : h.push(f));
              } else
                (h = {
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = h), (l = d)) : (c = c.next = h),
                  (o |= f);
              if (null === (s = s.next)) {
                if (null === (s = i.shared.pending)) break;
                (s = (h = s).next),
                  (h.next = null),
                  (i.lastBaseUpdate = h),
                  (i.shared.pending = null);
              }
            }
            null === c && (l = d),
              (i.baseState = l),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = c),
              null === a && (i.shared.lanes = 0),
              (du |= o),
              (e.lanes = o),
              (e.memoizedState = d);
          }
        }
        function Vs(e, t) {
          if ("function" !== typeof e) throw Error(o(191, e));
          e.call(t);
        }
        function Bs(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) Vs(n[e], t);
        }
        function Is(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var i = r.next;
              n = i;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var a = n.create,
                    o = n.inst;
                  (r = a()), (o.destroy = r);
                }
                n = n.next;
              } while (n !== i);
            }
          } catch (s) {
            rc(t, t.return, s);
          }
        }
        function Us(e, t, n) {
          try {
            var r = t.updateQueue,
              i = null !== r ? r.lastEffect : null;
            if (null !== i) {
              var a = i.next;
              r = a;
              do {
                if ((r.tag & e) === e) {
                  var o = r.inst,
                    s = o.destroy;
                  if (void 0 !== s) {
                    (o.destroy = void 0), (i = t);
                    var l = n;
                    try {
                      s();
                    } catch (u) {
                      rc(i, l, u);
                    }
                  }
                }
                r = r.next;
              } while (r !== a);
            }
          } catch (u) {
            rc(t, t.return, u);
          }
        }
        function Ws(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              Bs(t, n);
            } catch (r) {
              rc(e, e.return, r);
            }
          }
        }
        function _s(e, t, n) {
          (n.props = Lo(e.type, e.memoizedProps)), (n.state = e.memoizedState);
          try {
            n.componentWillUnmount();
          } catch (r) {
            rc(e, t, r);
          }
        }
        function Hs(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              var r = e.stateNode;
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var i = r;
                  break;
                default:
                  i = r;
              }
              "function" === typeof n ? (e.refCleanup = n(i)) : (n.current = i);
            }
          } catch (a) {
            rc(e, t, a);
          }
        }
        function Ys(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" === typeof r)
              try {
                r();
              } catch (i) {
                rc(e, t, i);
              } finally {
                (e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null);
              }
            else if ("function" === typeof n)
              try {
                n(null);
              } catch (a) {
                rc(e, t, a);
              }
            else n.current = null;
        }
        function Ks(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (i) {
            rc(e, e.return, i);
          }
        }
        function qs(e, t, n) {
          try {
            var r = e.stateNode;
            !(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var i = null,
                    a = null,
                    s = null,
                    l = null,
                    u = null,
                    c = null,
                    d = null;
                  for (p in n) {
                    var f = n[p];
                    if (n.hasOwnProperty(p) && null != f)
                      switch (p) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          u = f;
                        default:
                          r.hasOwnProperty(p) || Hc(e, t, p, null, r, f);
                      }
                  }
                  for (var h in r) {
                    var p = r[h];
                    if (
                      ((f = n[h]),
                      r.hasOwnProperty(h) && (null != p || null != f))
                    )
                      switch (h) {
                        case "type":
                          a = p;
                          break;
                        case "name":
                          i = p;
                          break;
                        case "checked":
                          c = p;
                          break;
                        case "defaultChecked":
                          d = p;
                          break;
                        case "value":
                          s = p;
                          break;
                        case "defaultValue":
                          l = p;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(o(137, t));
                          break;
                        default:
                          p !== f && Hc(e, t, h, p, r, f);
                      }
                  }
                  return void gt(e, s, l, u, c, d, a, i);
                case "select":
                  for (a in ((p = s = l = h = null), n))
                    if (((u = n[a]), n.hasOwnProperty(a) && null != u))
                      switch (a) {
                        case "value":
                          break;
                        case "multiple":
                          p = u;
                        default:
                          r.hasOwnProperty(a) || Hc(e, t, a, null, r, u);
                      }
                  for (i in r)
                    if (
                      ((a = r[i]),
                      (u = n[i]),
                      r.hasOwnProperty(i) && (null != a || null != u))
                    )
                      switch (i) {
                        case "value":
                          h = a;
                          break;
                        case "defaultValue":
                          l = a;
                          break;
                        case "multiple":
                          s = a;
                        default:
                          a !== u && Hc(e, t, i, a, r, u);
                      }
                  return (
                    (t = l),
                    (n = s),
                    (r = p),
                    void (null != h
                      ? bt(e, !!n, h, !1)
                      : !!r !== !!n &&
                        (null != t
                          ? bt(e, !!n, t, !0)
                          : bt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (l in ((p = h = null), n))
                    if (
                      ((i = n[l]),
                      n.hasOwnProperty(l) && null != i && !r.hasOwnProperty(l))
                    )
                      switch (l) {
                        case "value":
                        case "children":
                          break;
                        default:
                          Hc(e, t, l, null, r, i);
                      }
                  for (s in r)
                    if (
                      ((i = r[s]),
                      (a = n[s]),
                      r.hasOwnProperty(s) && (null != i || null != a))
                    )
                      switch (s) {
                        case "value":
                          h = i;
                          break;
                        case "defaultValue":
                          p = i;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != i) throw Error(o(91));
                          break;
                        default:
                          i !== a && Hc(e, t, s, i, r, a);
                      }
                  return void xt(e, h, p);
                case "option":
                  for (var m in n)
                    if (
                      ((h = n[m]),
                      n.hasOwnProperty(m) && null != h && !r.hasOwnProperty(m))
                    )
                      if ("selected" === m) e.selected = !1;
                      else Hc(e, t, m, null, r, h);
                  for (u in r)
                    if (
                      ((h = r[u]),
                      (p = n[u]),
                      r.hasOwnProperty(u) &&
                        h !== p &&
                        (null != h || null != p))
                    )
                      if ("selected" === u)
                        e.selected =
                          h && "function" !== typeof h && "symbol" !== typeof h;
                      else Hc(e, t, u, h, r, p);
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    (h = n[g]),
                      n.hasOwnProperty(g) &&
                        null != h &&
                        !r.hasOwnProperty(g) &&
                        Hc(e, t, g, null, r, h);
                  for (c in r)
                    if (
                      ((h = r[c]),
                      (p = n[c]),
                      r.hasOwnProperty(c) &&
                        h !== p &&
                        (null != h || null != p))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != h) throw Error(o(137, t));
                          break;
                        default:
                          Hc(e, t, c, h, r, p);
                      }
                  return;
                default:
                  if (Pt(t)) {
                    for (var v in n)
                      (h = n[v]),
                        n.hasOwnProperty(v) &&
                          void 0 !== h &&
                          !r.hasOwnProperty(v) &&
                          Yc(e, t, v, void 0, r, h);
                    for (d in r)
                      (h = r[d]),
                        (p = n[d]),
                        !r.hasOwnProperty(d) ||
                          h === p ||
                          (void 0 === h && void 0 === p) ||
                          Yc(e, t, d, h, r, p);
                    return;
                  }
              }
              for (var y in n)
                (h = n[y]),
                  n.hasOwnProperty(y) &&
                    null != h &&
                    !r.hasOwnProperty(y) &&
                    Hc(e, t, y, null, r, h);
              for (f in r)
                (h = r[f]),
                  (p = n[f]),
                  !r.hasOwnProperty(f) ||
                    h === p ||
                    (null == h && null == p) ||
                    Hc(e, t, f, h, r, p);
            })(r, e.type, n, t),
              (r[Be] = t);
          } catch (i) {
            rc(e, e.return, i);
          }
        }
        function Qs(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            27 === e.tag ||
            4 === e.tag
          );
        }
        function Xs(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Qs(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Gs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = _c));
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Gs(e, t, n), e = e.sibling; null !== e; )
              Gs(e, t, n), (e = e.sibling);
        }
        function Js(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Js(e, t, n), e = e.sibling; null !== e; )
              Js(e, t, n), (e = e.sibling);
        }
        var Zs = !1,
          $s = !1,
          el = !1,
          tl = "function" === typeof WeakSet ? WeakSet : Set,
          nl = null,
          rl = !1;
        function il(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              vl(e, n), 4 & r && Is(5, n);
              break;
            case 1:
              if ((vl(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (s) {
                    rc(n, n.return, s);
                  }
                else {
                  var i = Lo(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      i,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate
                    );
                  } catch (l) {
                    rc(n, n.return, l);
                  }
                }
              64 & r && Ws(n), 512 & r && Hs(n, n.return);
              break;
            case 3:
              if ((vl(e, n), 64 & r && null !== (r = n.updateQueue))) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                try {
                  Bs(r, e);
                } catch (s) {
                  rc(n, n.return, s);
                }
              }
              break;
            case 26:
              vl(e, n), 512 & r && Hs(n, n.return);
              break;
            case 27:
            case 5:
              vl(e, n),
                null === t && 4 & r && Ks(n),
                512 & r && Hs(n, n.return);
              break;
            case 12:
            default:
              vl(e, n);
              break;
            case 13:
              vl(e, n), 4 & r && cl(e, n);
              break;
            case 22:
              if (!(i = null !== n.memoizedState || Zs)) {
                t = (null !== t && null !== t.memoizedState) || $s;
                var a = Zs,
                  o = $s;
                (Zs = i),
                  ($s = t) && !o
                    ? bl(e, n, 0 !== (8772 & n.subtreeFlags))
                    : vl(e, n),
                  (Zs = a),
                  ($s = o);
              }
              512 & r &&
                ("manual" === n.memoizedProps.mode
                  ? Hs(n, n.return)
                  : Ys(n, n.return));
          }
        }
        function al(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), al(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Ke(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        var ol = null,
          sl = !1;
        function ll(e, t, n) {
          for (n = n.child; null !== n; ) ul(e, t, n), (n = n.sibling);
        }
        function ul(e, t, n) {
          if (ye && "function" === typeof ye.onCommitFiberUnmount)
            try {
              ye.onCommitFiberUnmount(ve, n);
            } catch (o) {}
          switch (n.tag) {
            case 26:
              $s || Ys(n, t),
                ll(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
              break;
            case 27:
              $s || Ys(n, t);
              var r = ol,
                i = sl;
              for (
                ol = n.stateNode, ll(e, t, n), t = (n = n.stateNode).attributes;
                t.length;

              )
                n.removeAttributeNode(t[0]);
              Ke(n), (ol = r), (sl = i);
              break;
            case 5:
              $s || Ys(n, t);
            case 6:
              i = ol;
              var a = sl;
              if (((ol = null), ll(e, t, n), (sl = a), null !== (ol = i)))
                if (sl)
                  try {
                    (e = ol),
                      (r = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(r)
                        : e.removeChild(r);
                  } catch (s) {
                    rc(n, t, s);
                  }
                else
                  try {
                    ol.removeChild(n.stateNode);
                  } catch (s) {
                    rc(n, t, s);
                  }
              break;
            case 18:
              null !== ol &&
                (sl
                  ? ((t = ol),
                    (n = n.stateNode),
                    8 === t.nodeType
                      ? ad(t.parentNode, n)
                      : 1 === t.nodeType && ad(t, n),
                    gf(t))
                  : ad(ol, n.stateNode));
              break;
            case 4:
              (r = ol),
                (i = sl),
                (ol = n.stateNode.containerInfo),
                (sl = !0),
                ll(e, t, n),
                (ol = r),
                (sl = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              $s || Us(2, n, t), $s || Us(4, n, t), ll(e, t, n);
              break;
            case 1:
              $s ||
                (Ys(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount &&
                  _s(n, t, r)),
                ll(e, t, n);
              break;
            case 21:
              ll(e, t, n);
              break;
            case 22:
              $s || Ys(n, t),
                ($s = (r = $s) || null !== n.memoizedState),
                ll(e, t, n),
                ($s = r);
              break;
            default:
              ll(e, t, n);
          }
        }
        function cl(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              gf(e);
            } catch (n) {
              rc(t, t.return, n);
            }
        }
        function dl(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new tl()), t;
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new tl()),
                  t
                );
              default:
                throw Error(o(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = lc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function fl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r],
                a = e,
                s = t,
                l = s;
              e: for (; null !== l; ) {
                switch (l.tag) {
                  case 27:
                  case 5:
                    (ol = l.stateNode), (sl = !1);
                    break e;
                  case 3:
                  case 4:
                    (ol = l.stateNode.containerInfo), (sl = !0);
                    break e;
                }
                l = l.return;
              }
              if (null === ol) throw Error(o(160));
              ul(a, s, i),
                (ol = null),
                (sl = !1),
                null !== (a = i.alternate) && (a.return = null),
                (i.return = null);
            }
          if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t; ) pl(t, e), (t = t.sibling);
        }
        var hl = null;
        function pl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              fl(t, e),
                ml(e),
                4 & r && (Us(3, e, e.return), Is(3, e), Us(5, e, e.return));
              break;
            case 1:
              fl(t, e),
                ml(e),
                512 & r && ($s || null === n || Ys(n, n.return)),
                64 & r &&
                  Zs &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
              break;
            case 26:
              var i = hl;
              if (
                (fl(t, e),
                ml(e),
                512 & r && ($s || null === n || Ys(n, n.return)),
                4 & r)
              ) {
                var a = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        (r = e.type),
                          (n = e.memoizedProps),
                          (i = i.ownerDocument || i);
                        t: switch (r) {
                          case "title":
                            (!(a = i.getElementsByTagName("title")[0]) ||
                              a[Ye] ||
                              a[Ve] ||
                              "http://www.w3.org/2000/svg" === a.namespaceURI ||
                              a.hasAttribute("itemprop")) &&
                              ((a = i.createElement(r)),
                              i.head.insertBefore(
                                a,
                                i.querySelector("head > title")
                              )),
                              Kc(a, r, n),
                              (a[Ve] = e),
                              Je(a),
                              (r = a);
                            break e;
                          case "link":
                            var s = Cd("link", "href", i).get(
                              r + (n.href || "")
                            );
                            if (s)
                              for (var l = 0; l < s.length; l++)
                                if (
                                  (a = s[l]).getAttribute("href") ===
                                    (null == n.href ? null : n.href) &&
                                  a.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  a.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  a.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  s.splice(l, 1);
                                  break t;
                                }
                            Kc((a = i.createElement(r)), r, n),
                              i.head.appendChild(a);
                            break;
                          case "meta":
                            if (
                              (s = Cd("meta", "content", i).get(
                                r + (n.content || "")
                              ))
                            )
                              for (l = 0; l < s.length; l++)
                                if (
                                  (a = s[l]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  a.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  a.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  a.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  a.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  s.splice(l, 1);
                                  break t;
                                }
                            Kc((a = i.createElement(r)), r, n),
                              i.head.appendChild(a);
                            break;
                          default:
                            throw Error(o(468, r));
                        }
                        (a[Ve] = e), Je(a), (r = a);
                      }
                      e.stateNode = r;
                    } else Fd(i, e.type, e.stateNode);
                  else e.stateNode = Sd(i, r, e.memoizedProps);
                else
                  a !== r
                    ? (null === a
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : a.count--,
                      null === r
                        ? Fd(i, e.type, e.stateNode)
                        : Sd(i, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      qs(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              if (4 & r && null === e.alternate) {
                (i = e.stateNode), (a = e.memoizedProps);
                try {
                  for (var u = i.firstChild; u; ) {
                    var c = u.nextSibling,
                      d = u.nodeName;
                    u[Ye] ||
                      "HEAD" === d ||
                      "BODY" === d ||
                      "SCRIPT" === d ||
                      "STYLE" === d ||
                      ("LINK" === d && "stylesheet" === u.rel.toLowerCase()) ||
                      i.removeChild(u),
                      (u = c);
                  }
                  for (var f = e.type, h = i.attributes; h.length; )
                    i.removeAttributeNode(h[0]);
                  Kc(i, f, a), (i[Ve] = e), (i[Be] = a);
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
            case 5:
              if (
                (fl(t, e),
                ml(e),
                512 & r && ($s || null === n || Ys(n, n.return)),
                32 & e.flags)
              ) {
                i = e.stateNode;
                try {
                  St(i, "");
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
              4 & r &&
                null != e.stateNode &&
                qs(e, (i = e.memoizedProps), null !== n ? n.memoizedProps : i),
                1024 & r && (el = !0);
              break;
            case 6:
              if ((fl(t, e), ml(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                  n.nodeValue = r;
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                ((Pd = null),
                (i = hl),
                (hl = fd(t.containerInfo)),
                fl(t, e),
                (hl = i),
                ml(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  gf(t.containerInfo);
                } catch (m) {
                  rc(e, e.return, m);
                }
              el && ((el = !1), gl(e));
              break;
            case 4:
              (r = hl),
                (hl = fd(e.stateNode.containerInfo)),
                fl(t, e),
                ml(e),
                (hl = r);
              break;
            case 12:
              fl(t, e), ml(e);
              break;
            case 13:
              fl(t, e),
                ml(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !==
                    (null !== n && null !== n.memoizedState) &&
                  (bu = le()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), dl(e, r));
              break;
            case 22:
              if (
                (512 & r && ($s || null === n || Ys(n, n.return)),
                (u = null !== e.memoizedState),
                (c = null !== n && null !== n.memoizedState),
                (Zs = (d = Zs) || u),
                ($s = (f = $s) || c),
                fl(t, e),
                ($s = f),
                (Zs = d),
                ml(e),
                ((t = e.stateNode)._current = e),
                (t._visibility &= -3),
                (t._visibility |= 2 & t._pendingVisibility),
                8192 & r &&
                  ((t._visibility = u ? -2 & t._visibility : 1 | t._visibility),
                  u && ((t = Zs || $s), null === n || c || t || yl(e)),
                  null === e.memoizedProps ||
                    "manual" !== e.memoizedProps.mode))
              )
                e: for (n = null, t = e; ; ) {
                  if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((i = c.stateNode), u))
                          "function" === typeof (a = i.style).setProperty
                            ? a.setProperty("display", "none", "important")
                            : (a.display = "none");
                        else {
                          s = c.stateNode;
                          var p =
                            void 0 !== (l = c.memoizedProps.style) &&
                            null !== l &&
                            l.hasOwnProperty("display")
                              ? l.display
                              : null;
                          s.style.display =
                            null == p || "boolean" === typeof p
                              ? ""
                              : ("" + p).trim();
                        }
                      } catch (m) {
                        rc(c, c.return, m);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                      } catch (m) {
                        rc(c, c.return, m);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    n === t && (n = null), (t = t.return);
                  }
                  n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling);
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), dl(e, n));
              break;
            case 19:
              fl(t, e),
                ml(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), dl(e, r));
              break;
            case 21:
              break;
            default:
              fl(t, e), ml(e);
          }
        }
        function ml(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              if (27 !== e.tag) {
                e: {
                  for (var n = e.return; null !== n; ) {
                    if (Qs(n)) {
                      var r = n;
                      break e;
                    }
                    n = n.return;
                  }
                  throw Error(o(160));
                }
                switch (r.tag) {
                  case 27:
                    var i = r.stateNode;
                    Js(e, Xs(e), i);
                    break;
                  case 5:
                    var a = r.stateNode;
                    32 & r.flags && (St(a, ""), (r.flags &= -33)),
                      Js(e, Xs(e), a);
                    break;
                  case 3:
                  case 4:
                    var s = r.stateNode.containerInfo;
                    Gs(e, Xs(e), s);
                    break;
                  default:
                    throw Error(o(161));
                }
              }
            } catch (l) {
              rc(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gl(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              gl(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling);
            }
        }
        function vl(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              il(e, t.alternate, t), (t = t.sibling);
        }
        function yl(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Us(4, t, t.return), yl(t);
                break;
              case 1:
                Ys(t, t.return);
                var n = t.stateNode;
                "function" === typeof n.componentWillUnmount &&
                  _s(t, t.return, n),
                  yl(t);
                break;
              case 26:
              case 27:
              case 5:
                Ys(t, t.return), yl(t);
                break;
              case 22:
                Ys(t, t.return), null === t.memoizedState && yl(t);
                break;
              default:
                yl(t);
            }
            e = e.sibling;
          }
        }
        function bl(e, t, n) {
          for (
            n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var r = t.alternate,
              i = e,
              a = t,
              o = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                bl(i, a, n), Is(4, a);
                break;
              case 1:
                if (
                  (bl(i, a, n),
                  "function" ===
                    typeof (i = (r = a).stateNode).componentDidMount)
                )
                  try {
                    i.componentDidMount();
                  } catch (u) {
                    rc(r, r.return, u);
                  }
                if (null !== (i = (r = a).updateQueue)) {
                  var s = r.stateNode;
                  try {
                    var l = i.shared.hiddenCallbacks;
                    if (null !== l)
                      for (
                        i.shared.hiddenCallbacks = null, i = 0;
                        i < l.length;
                        i++
                      )
                        Vs(l[i], s);
                  } catch (u) {
                    rc(r, r.return, u);
                  }
                }
                n && 64 & o && Ws(a), Hs(a, a.return);
                break;
              case 26:
              case 27:
              case 5:
                bl(i, a, n), n && null === r && 4 & o && Ks(a), Hs(a, a.return);
                break;
              case 12:
              default:
                bl(i, a, n);
                break;
              case 13:
                bl(i, a, n), n && 4 & o && cl(i, a);
                break;
              case 22:
                null === a.memoizedState && bl(i, a, n), Hs(a, a.return);
            }
            t = t.sibling;
          }
        }
        function xl(e, t) {
          var n = null;
          null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Ui(n));
        }
        function wl(e, t) {
          (e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Ui(e));
        }
        function Sl(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) kl(e, t, n, r), (t = t.sibling);
        }
        function kl(e, t, n, r) {
          var i = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Sl(e, t, n, r), 2048 & i && Is(9, t);
              break;
            case 3:
              Sl(e, t, n, r),
                2048 & i &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Ui(e)));
              break;
            case 12:
              if (2048 & i) {
                Sl(e, t, n, r), (e = t.stateNode);
                try {
                  var a = t.memoizedProps,
                    o = a.id,
                    s = a.onPostCommit;
                  "function" === typeof s &&
                    s(
                      o,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0
                    );
                } catch (l) {
                  rc(t, t.return, l);
                }
              } else Sl(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              (a = t.stateNode),
                null !== t.memoizedState
                  ? 4 & a._visibility
                    ? Sl(e, t, n, r)
                    : El(e, t)
                  : 4 & a._visibility
                  ? Sl(e, t, n, r)
                  : ((a._visibility |= 4),
                    Al(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                2048 & i && xl(t.alternate, t);
              break;
            case 24:
              Sl(e, t, n, r), 2048 & i && wl(t.alternate, t);
              break;
            default:
              Sl(e, t, n, r);
          }
        }
        function Al(e, t, n, r, i) {
          for (
            i = i && 0 !== (10256 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var a = e,
              o = t,
              s = n,
              l = r,
              u = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Al(a, o, s, l, i), Is(8, o);
                break;
              case 23:
                break;
              case 22:
                var c = o.stateNode;
                null !== o.memoizedState
                  ? 4 & c._visibility
                    ? Al(a, o, s, l, i)
                    : El(a, o)
                  : ((c._visibility |= 4), Al(a, o, s, l, i)),
                  i && 2048 & u && xl(o.alternate, o);
                break;
              case 24:
                Al(a, o, s, l, i), i && 2048 & u && wl(o.alternate, o);
                break;
              default:
                Al(a, o, s, l, i);
            }
            t = t.sibling;
          }
        }
        function El(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                i = r.flags;
              switch (r.tag) {
                case 22:
                  El(n, r), 2048 & i && xl(r.alternate, r);
                  break;
                case 24:
                  El(n, r), 2048 & i && wl(r.alternate, r);
                  break;
                default:
                  El(n, r);
              }
              t = t.sibling;
            }
        }
        var Pl = 8192;
        function Cl(e) {
          if (e.subtreeFlags & Pl)
            for (e = e.child; null !== e; ) Fl(e), (e = e.sibling);
        }
        function Fl(e) {
          switch (e.tag) {
            case 26:
              Cl(e),
                e.flags & Pl &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === Dd) throw Error(o(475));
                    var r = Dd;
                    if (
                      "stylesheet" === t.type &&
                      ("string" !== typeof n.media ||
                        !1 !== matchMedia(n.media).matches) &&
                      0 === (4 & t.state.loading)
                    ) {
                      if (null === t.instance) {
                        var i = vd(n.href),
                          a = e.querySelector(yd(i));
                        if (a)
                          return (
                            null !== (e = a._p) &&
                              "object" === typeof e &&
                              "function" === typeof e.then &&
                              (r.count++, (r = Nd.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = a),
                            void Je(a)
                          );
                        (a = e.ownerDocument || e),
                          (n = bd(n)),
                          (i = cd.get(i)) && Ad(n, i),
                          Je((a = a.createElement("link")));
                        var s = a;
                        (s._p = new Promise(function (e, t) {
                          (s.onload = e), (s.onerror = t);
                        })),
                          Kc(a, "link", n),
                          (t.instance = a);
                      }
                      null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) &&
                          0 === (3 & t.state.loading) &&
                          (r.count++,
                          (t = Nd.bind(r)),
                          e.addEventListener("load", t),
                          e.addEventListener("error", t));
                    }
                  })(hl, e.memoizedState, e.memoizedProps);
              break;
            case 5:
            default:
              Cl(e);
              break;
            case 3:
            case 4:
              var t = hl;
              (hl = fd(e.stateNode.containerInfo)), Cl(e), (hl = t);
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                  ? ((t = Pl), (Pl = 16777216), Cl(e), (Pl = t))
                  : Cl(e));
          }
        }
        function Tl(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              (t = e.sibling), (e.sibling = null), (e = t);
            } while (null !== e);
          }
        }
        function Dl(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nl = r), Ll(r, e);
              }
            Tl(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) jl(e), (e = e.sibling);
        }
        function jl(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Dl(e), 2048 & e.flags && Us(9, e, e.return);
              break;
            case 3:
            case 12:
            default:
              Dl(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              4 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -5), Nl(e))
                : Dl(e);
          }
        }
        function Nl(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nl = r), Ll(r, e);
              }
            Tl(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                Us(8, t, t.return), Nl(t);
                break;
              case 22:
                4 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -5), Nl(t));
                break;
              default:
                Nl(t);
            }
            e = e.sibling;
          }
        }
        function Ll(e, t) {
          for (; null !== nl; ) {
            var n = nl;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Us(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Ui(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) (r.return = n), (nl = r);
            else
              e: for (n = e; null !== nl; ) {
                var i = (r = nl).sibling,
                  a = r.return;
                if ((al(r), r === n)) {
                  nl = null;
                  break e;
                }
                if (null !== i) {
                  (i.return = a), (nl = i);
                  break e;
                }
                nl = a;
              }
          }
        }
        function Ol(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Rl(e, t, n, r) {
          return new Ol(e, t, n, r);
        }
        function Ml(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function zl(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Rl(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 31457280 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : {
                    lanes: t.lanes,
                    firstContext: t.firstContext,
                  }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Vl(e, t) {
          e.flags &= 31457282;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : {
                        lanes: t.lanes,
                        firstContext: t.firstContext,
                      })),
            e
          );
        }
        function Bl(e, t, n, r, i, a) {
          var s = 0;
          if (((r = e), "function" === typeof e)) Ml(e) && (s = 1);
          else if ("string" === typeof e)
            s = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" !== typeof t.precedence ||
                    "string" !== typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" !== typeof t.rel ||
                    "string" !== typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" === typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" !== typeof t.async &&
                    "symbol" !== typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" === typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, X.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
          else
            e: switch (e) {
              case d:
                return Il(n.children, i, a, t);
              case f:
                (s = 8), (i |= 24);
                break;
              case h:
                return (
                  ((e = Rl(12, n, t, 2 | i)).elementType = h), (e.lanes = a), e
                );
              case y:
                return (
                  ((e = Rl(13, n, t, i)).elementType = y), (e.lanes = a), e
                );
              case b:
                return (
                  ((e = Rl(19, n, t, i)).elementType = b), (e.lanes = a), e
                );
              case S:
                return Ul(n, i, a, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case p:
                    case g:
                      s = 10;
                      break e;
                    case m:
                      s = 9;
                      break e;
                    case v:
                      s = 11;
                      break e;
                    case x:
                      s = 14;
                      break e;
                    case w:
                      (s = 16), (r = null);
                      break e;
                  }
                (s = 29),
                  (n = Error(o(130, null === e ? "null" : typeof e, ""))),
                  (r = null);
            }
          return (
            ((t = Rl(s, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Il(e, t, n, r) {
          return ((e = Rl(7, e, r, t)).lanes = n), e;
        }
        function Ul(e, t, n, r) {
          ((e = Rl(22, e, r, t)).elementType = S), (e.lanes = n);
          var i = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function () {
              var e = i._current;
              if (null === e) throw Error(o(456));
              if (0 === (2 & i._pendingVisibility)) {
                var t = Tr(e, 2);
                null !== t && ((i._pendingVisibility |= 2), Nu(t, e, 2));
              }
            },
            attach: function () {
              var e = i._current;
              if (null === e) throw Error(o(456));
              if (0 !== (2 & i._pendingVisibility)) {
                var t = Tr(e, 2);
                null !== t && ((i._pendingVisibility &= -3), Nu(t, e, 2));
              }
            },
          };
          return (e.stateNode = i), e;
        }
        function Wl(e, t, n) {
          return ((e = Rl(6, e, null, t)).lanes = n), e;
        }
        function _l(e, t, n) {
          return (
            ((t = Rl(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Hl(e) {
          e.flags |= 4;
        }
        function Yl(e, t) {
          if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !Td(t))) {
            if (
              null !== (t = Fi.current) &&
              ((4194176 & ru) === ru
                ? null !== Ti
                : ((62914560 & ru) !== ru && 0 === (536870912 & ru)) ||
                  t !== Ti)
            )
              throw ((fi = li), si);
            e.flags |= 8192;
          }
        }
        function Kl(e, t) {
          null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? De() : 536870912),
              (e.lanes |= t),
              (mu |= t));
        }
        function ql(e, t) {
          if (!Gr)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 31457280 & i.subtreeFlags),
                (r |= 31457280 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xl(e, t, n) {
          var r = t.pendingProps;
          switch ((qr(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return Ql(t), null;
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                bs(Bi),
                ee(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ri(t)
                    ? Hl(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Jr && (Ou(Jr), (Jr = null)))),
                Ql(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Hl(t),
                    null !== n
                      ? (Ql(t), Yl(t, n))
                      : (Ql(t), (t.flags &= -16777217)))
                  : n
                  ? n !== e.memoizedState
                    ? (Hl(t), Ql(t), Yl(t, n))
                    : (Ql(t), (t.flags &= -16777217))
                  : (e.memoizedProps !== r && Hl(t),
                    Ql(t),
                    (t.flags &= -16777217)),
                null
              );
            case 27:
              ne(t), (n = J.current);
              var i = t.type;
              if (null !== e && null != t.stateNode)
                e.memoizedProps !== r && Hl(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Ql(t), null;
                }
                (e = X.current),
                  ri(t) ? ti(t) : ((e = ud(i, r, n)), (t.stateNode = e), Hl(t));
              }
              return Ql(t), null;
            case 5:
              if ((ne(t), (n = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && Hl(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Ql(t), null;
                }
                if (((e = X.current), ri(t))) ti(t);
                else {
                  switch (((i = Xc(J.current)), e)) {
                    case 1:
                      e = i.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case 2:
                      e = i.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n
                      );
                      break;
                    default:
                      switch (n) {
                        case "svg":
                          e = i.createElementNS(
                            "http://www.w3.org/2000/svg",
                            n
                          );
                          break;
                        case "math":
                          e = i.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            n
                          );
                          break;
                        case "script":
                          ((e = i.createElement("div")).innerHTML =
                            "<script></script>"),
                            (e = e.removeChild(e.firstChild));
                          break;
                        case "select":
                          (e =
                            "string" === typeof r.is
                              ? i.createElement("select", {
                                  is: r.is,
                                })
                              : i.createElement("select")),
                            r.multiple
                              ? (e.multiple = !0)
                              : r.size && (e.size = r.size);
                          break;
                        default:
                          e =
                            "string" === typeof r.is
                              ? i.createElement(n, {
                                  is: r.is,
                                })
                              : i.createElement(n);
                      }
                  }
                  (e[Ve] = t), (e[Be] = r);
                  e: for (i = t.child; null !== i; ) {
                    if (5 === i.tag || 6 === i.tag) e.appendChild(i.stateNode);
                    else if (4 !== i.tag && 27 !== i.tag && null !== i.child) {
                      (i.child.return = i), (i = i.child);
                      continue;
                    }
                    if (i === t) break e;
                    for (; null === i.sibling; ) {
                      if (null === i.return || i.return === t) break e;
                      i = i.return;
                    }
                    (i.sibling.return = i.return), (i = i.sibling);
                  }
                  t.stateNode = e;
                  e: switch ((Kc(e, n, r), n)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      e = !!r.autoFocus;
                      break e;
                    case "img":
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Hl(t);
                }
              }
              return Ql(t), (t.flags &= -16777217), null;
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Hl(t);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((e = J.current), ri(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (i = Qr))
                  )
                    switch (i.tag) {
                      case 27:
                      case 5:
                        r = i.memoizedProps;
                    }
                  (e[Ve] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      Wc(e.nodeValue, n)
                    )) || ei(t);
                } else
                  ((e = Xc(e).createTextNode(r))[Ve] = t), (t.stateNode = e);
              }
              return Ql(t), null;
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((i = ri(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[Ve] = t;
                  } else
                    ii(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ql(t), (i = !1);
                } else null !== Jr && (Ou(Jr), (Jr = null)), (i = !0);
                if (!i) return 256 & t.flags ? (Li(t), t) : (Li(t), null);
              }
              if ((Li(t), 0 !== (128 & t.flags))) return (t.lanes = n), t;
              if (
                ((n = null !== r),
                (e = null !== e && null !== e.memoizedState),
                n)
              ) {
                (i = null),
                  null !== (r = t.child).alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (i = r.alternate.memoizedState.cachePool.pool);
                var a = null;
                null !== r.memoizedState &&
                  null !== r.memoizedState.cachePool &&
                  (a = r.memoizedState.cachePool.pool),
                  a !== i && (r.flags |= 2048);
              }
              return (
                n !== e && n && (t.child.flags |= 8192),
                Kl(t, t.updateQueue),
                Ql(t),
                null
              );
            case 4:
              return (
                ee(), null === e && Nc(t.stateNode.containerInfo), Ql(t), null
              );
            case 10:
              return bs(t.type), Ql(t), null;
            case 19:
              if ((q(Oi), null === (i = t.memoizedState))) return Ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (a = i.rendering)))
                if (r) ql(i, !1);
                else {
                  if (0 !== cu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (a = Ri(e))) {
                        for (
                          t.flags |= 128,
                            ql(i, !1),
                            e = a.updateQueue,
                            t.updateQueue = e,
                            Kl(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          Vl(n, e), (n = n.sibling);
                        return Q(Oi, (1 & Oi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    le() > xu &&
                    ((t.flags |= 128),
                    (r = !0),
                    ql(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = Ri(a))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      Kl(t, e),
                      ql(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !a.alternate &&
                        !Gr)
                    )
                      return Ql(t), null;
                  } else
                    2 * le() - i.renderingStartTime > xu &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      ql(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((a.sibling = t.child), (t.child = a))
                  : (null !== (e = i.last) ? (e.sibling = a) : (t.child = a),
                    (i.last = a));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = le()),
                  (t.sibling = null),
                  (e = Oi.current),
                  Q(Oi, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (Ql(t), null);
            case 22:
            case 23:
              return (
                Li(t),
                Ci(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 !== (536870912 & n) &&
                    0 === (128 & t.flags) &&
                    (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ql(t),
                null !== (n = t.updateQueue) && Kl(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && q(Qi),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                bs(Bi),
                Ql(t),
                null
              );
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gl(e, t) {
          switch ((qr(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                bs(Bi),
                ee(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return ne(t), null;
            case 13:
              if (
                (Li(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ii();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return q(Oi), null;
            case 4:
              return ee(), null;
            case 10:
              return bs(t.type), null;
            case 22:
            case 23:
              return (
                Li(t),
                Ci(),
                null !== e && q(Qi),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return bs(Bi), null;
            default:
              return null;
          }
        }
        function Jl(e, t) {
          switch ((qr(t), t.tag)) {
            case 3:
              bs(Bi), ee();
              break;
            case 26:
            case 27:
            case 5:
              ne(t);
              break;
            case 4:
              ee();
              break;
            case 13:
              Li(t);
              break;
            case 19:
              q(Oi);
              break;
            case 10:
              bs(t.type);
              break;
            case 22:
            case 23:
              Li(t), Ci(), null !== e && q(Qi);
              break;
            case 24:
              bs(Bi);
          }
        }
        var Zl = {
            getCacheForType: function (e) {
              var t = Es(Bi),
                n = t.data.get(e);
              return void 0 === n && ((n = e()), t.data.set(e, n)), n;
            },
          },
          $l = "function" === typeof WeakMap ? WeakMap : Map,
          eu = 0,
          tu = null,
          nu = null,
          ru = 0,
          iu = 0,
          au = null,
          ou = !1,
          su = !1,
          lu = !1,
          uu = 0,
          cu = 0,
          du = 0,
          fu = 0,
          hu = 0,
          pu = 0,
          mu = 0,
          gu = null,
          vu = null,
          yu = !1,
          bu = 0,
          xu = 1 / 0,
          wu = null,
          Su = null,
          ku = !1,
          Au = null,
          Eu = 0,
          Pu = 0,
          Cu = null,
          Fu = 0,
          Tu = null;
        function Du() {
          if (0 !== (2 & eu) && 0 !== ru) return ru & -ru;
          if (null !== D.T) {
            return 0 !== Hi ? Hi : wc();
          }
          return Me();
        }
        function ju() {
          0 === pu && (pu = 0 === (536870912 & ru) || Gr ? Te() : 536870912);
          var e = Fi.current;
          return null !== e && (e.flags |= 32), pu;
        }
        function Nu(e, t, n) {
          ((e === tu && 2 === iu) || null !== e.cancelPendingCommit) &&
            (Iu(e, 0), zu(e, ru, pu, !1)),
            Ne(e, n),
            (0 !== (2 & eu) && e === tu) ||
              (e === tu &&
                (0 === (2 & eu) && (fu |= n), 4 === cu && zu(e, ru, pu, !1)),
              mc(e));
        }
        function Lu(e, t, n) {
          if (0 !== (6 & eu)) throw Error(o(327));
          for (
            var r =
                (!n && 0 === (60 & t) && 0 === (t & e.expiredLanes)) ||
                Ce(e, t),
              i = r
                ? (function (e, t) {
                    var n = eu;
                    eu |= 2;
                    var r = Wu(),
                      i = _u();
                    tu !== e || ru !== t
                      ? ((wu = null), (xu = le() + 500), Iu(e, t))
                      : (su = Ce(e, t));
                    e: for (;;)
                      try {
                        if (0 !== iu && null !== nu) {
                          t = nu;
                          var a = au;
                          t: switch (iu) {
                            case 1:
                              (iu = 0), (au = null), Gu(e, t, a, 1);
                              break;
                            case 2:
                              if (ui(a)) {
                                (iu = 0), (au = null), Xu(t);
                                break;
                              }
                              (t = function () {
                                2 === iu && tu === e && (iu = 7), mc(e);
                              }),
                                a.then(t, t);
                              break e;
                            case 3:
                              iu = 7;
                              break e;
                            case 4:
                              iu = 5;
                              break e;
                            case 7:
                              ui(a)
                                ? ((iu = 0), (au = null), Xu(t))
                                : ((iu = 0), (au = null), Gu(e, t, a, 7));
                              break;
                            case 5:
                              var s = null;
                              switch (nu.tag) {
                                case 26:
                                  s = nu.memoizedState;
                                case 5:
                                case 27:
                                  var l = nu;
                                  if (!s || Td(s)) {
                                    (iu = 0), (au = null);
                                    var u = l.sibling;
                                    if (null !== u) nu = u;
                                    else {
                                      var c = l.return;
                                      null !== c
                                        ? ((nu = c), Ju(c))
                                        : (nu = null);
                                    }
                                    break t;
                                  }
                              }
                              (iu = 0), (au = null), Gu(e, t, a, 5);
                              break;
                            case 6:
                              (iu = 0), (au = null), Gu(e, t, a, 6);
                              break;
                            case 8:
                              Bu(), (cu = 6);
                              break e;
                            default:
                              throw Error(o(462));
                          }
                        }
                        qu();
                        break;
                      } catch (d) {
                        Uu(e, d);
                      }
                    return (
                      (vs = gs = null),
                      (D.H = r),
                      (D.A = i),
                      (eu = n),
                      null !== nu ? 0 : ((tu = null), (ru = 0), Pr(), cu)
                    );
                  })(e, t)
                : Yu(e, t, !0),
              a = r;
            ;

          ) {
            if (0 === i) {
              su && !r && zu(e, t, 0, !1);
              break;
            }
            if (6 === i) zu(e, t, 0, !ou);
            else {
              if (((n = e.current.alternate), a && !Mu(n))) {
                (i = Yu(e, t, !1)), (a = !1);
                continue;
              }
              if (2 === i) {
                if (((a = t), e.errorRecoveryDisabledLanes & a)) var s = 0;
                else
                  s =
                    0 !== (s = -536870913 & e.pendingLanes)
                      ? s
                      : 536870912 & s
                      ? 536870912
                      : 0;
                if (0 !== s) {
                  t = s;
                  e: {
                    var l = e;
                    i = gu;
                    var u = l.current.memoizedState.isDehydrated;
                    if (
                      (u && (Iu(l, s).flags |= 256), 2 !== (s = Yu(l, s, !1)))
                    ) {
                      if (lu && !u) {
                        (l.errorRecoveryDisabledLanes |= a), (fu |= a), (i = 4);
                        break e;
                      }
                      (a = vu), (vu = i), null !== a && Ou(a);
                    }
                    i = s;
                  }
                  if (((a = !1), 2 !== i)) continue;
                }
              }
              if (1 === i) {
                Iu(e, 0), zu(e, t, 0, !0);
                break;
              }
              e: {
                switch (((r = e), i)) {
                  case 0:
                  case 1:
                    throw Error(o(345));
                  case 4:
                    if ((4194176 & t) === t) {
                      zu(r, t, pu, !ou);
                      break e;
                    }
                    break;
                  case 2:
                    vu = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(o(329));
                }
                if (
                  ((r.finishedWork = n),
                  (r.finishedLanes = t),
                  (62914560 & t) === t && 10 < (a = bu + 300 - le()))
                ) {
                  if ((zu(r, t, pu, !ou), 0 !== Pe(r, 0))) break e;
                  r.timeoutHandle = ed(
                    Ru.bind(
                      null,
                      r,
                      n,
                      vu,
                      wu,
                      yu,
                      t,
                      pu,
                      fu,
                      mu,
                      ou,
                      2,
                      -0,
                      0
                    ),
                    a
                  );
                } else Ru(r, n, vu, wu, yu, t, pu, fu, mu, ou, 0, -0, 0);
              }
            }
            break;
          }
          mc(e);
        }
        function Ou(e) {
          null === vu ? (vu = e) : vu.push.apply(vu, e);
        }
        function Ru(e, t, n, r, i, a, s, l, u, c, d, f, h) {
          var p = t.subtreeFlags;
          if (
            (8192 & p || 16785408 === (16785408 & p)) &&
            ((Dd = {
              stylesheets: null,
              count: 0,
              unsuspend: jd,
            }),
            Fl(t),
            null !==
              (t = (function () {
                if (null === Dd) throw Error(o(475));
                var e = Dd;
                return (
                  e.stylesheets && 0 === e.count && Od(e, e.stylesheets),
                  0 < e.count
                    ? function (t) {
                        var n = setTimeout(function () {
                          if (
                            (e.stylesheets && Od(e, e.stylesheets), e.unsuspend)
                          ) {
                            var t = e.unsuspend;
                            (e.unsuspend = null), t();
                          }
                        }, 6e4);
                        return (
                          (e.unsuspend = t),
                          function () {
                            (e.unsuspend = null), clearTimeout(n);
                          }
                        );
                      }
                    : null
                );
              })()))
          )
            return (
              (e.cancelPendingCommit = t(
                $u.bind(null, e, n, r, i, s, l, u, 1, f, h)
              )),
              void zu(e, a, s, !c)
            );
          $u(e, n, r, i, s, l, u, d, f, h);
        }
        function Mu(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var i = n[r],
                  a = i.getSnapshot;
                i = i.value;
                try {
                  if (!Qn(a(), i)) return !1;
                } catch (o) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              (n.return = t), (t = n);
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return !0;
        }
        function zu(e, t, n, r) {
          (t &= ~hu),
            (t &= ~fu),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes);
          for (var i = t; 0 < i; ) {
            var a = 31 - xe(i),
              o = 1 << a;
            (r[a] = -1), (i &= ~o);
          }
          0 !== n && Le(e, n, t);
        }
        function Vu() {
          return 0 !== (6 & eu) || (gc(0, !1), !1);
        }
        function Bu() {
          if (null !== nu) {
            if (0 === iu) var e = nu.return;
            else
              (vs = gs = null), va((e = nu)), (pi = null), (mi = 0), (e = nu);
            for (; null !== e; ) Jl(e.alternate, e), (e = e.return);
            nu = null;
          }
        }
        function Iu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          -1 !== n && ((e.timeoutHandle = -1), td(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            Bu(),
            (tu = e),
            (nu = n = zl(e.current, null)),
            (ru = t),
            (iu = 0),
            (au = null),
            (ou = !1),
            (su = Ce(e, t)),
            (lu = !1),
            (mu = pu = hu = fu = du = cu = 0),
            (vu = gu = null),
            (yu = !1),
            0 !== (8 & t) && (t |= 32 & t);
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var i = 31 - xe(r),
                a = 1 << i;
              (t |= e[i]), (r &= ~a);
            }
          return (uu = t), Pr(), n;
        }
        function Uu(e, t) {
          ($i = null),
            (D.H = Eo),
            t === oi
              ? ((t = hi()), (iu = 3))
              : t === si
              ? ((t = hi()), (iu = 4))
              : (iu =
                  t === _o
                    ? 8
                    : null !== t &&
                      "object" === typeof t &&
                      "function" === typeof t.then
                    ? 6
                    : 1),
            (au = t),
            null === nu && ((cu = 1), Vo(e, Or(t, e.current)));
        }
        function Wu() {
          var e = D.H;
          return (D.H = Eo), null === e ? Eo : e;
        }
        function _u() {
          var e = D.A;
          return (D.A = Zl), e;
        }
        function Hu() {
          (cu = 4),
            ou || ((4194176 & ru) !== ru && null !== Fi.current) || (su = !0),
            (0 === (134217727 & du) && 0 === (134217727 & fu)) ||
              null === tu ||
              zu(tu, ru, pu, !1);
        }
        function Yu(e, t, n) {
          var r = eu;
          eu |= 2;
          var i = Wu(),
            a = _u();
          (tu === e && ru === t) || ((wu = null), Iu(e, t)), (t = !1);
          var o = cu;
          e: for (;;)
            try {
              if (0 !== iu && null !== nu) {
                var s = nu,
                  l = au;
                switch (iu) {
                  case 8:
                    Bu(), (o = 6);
                    break e;
                  case 3:
                  case 2:
                  case 6:
                    null === Fi.current && (t = !0);
                    var u = iu;
                    if (((iu = 0), (au = null), Gu(e, s, l, u), n && su)) {
                      o = 0;
                      break e;
                    }
                    break;
                  default:
                    (u = iu), (iu = 0), (au = null), Gu(e, s, l, u);
                }
              }
              Ku(), (o = cu);
              break;
            } catch (c) {
              Uu(e, c);
            }
          return (
            t && e.shellSuspendCounter++,
            (vs = gs = null),
            (eu = r),
            (D.H = i),
            (D.A = a),
            null === nu && ((tu = null), (ru = 0), Pr()),
            o
          );
        }
        function Ku() {
          for (; null !== nu; ) Qu(nu);
        }
        function qu() {
          for (; null !== nu && !oe(); ) Qu(nu);
        }
        function Qu(e) {
          var t = ps(e.alternate, e, uu);
          (e.memoizedProps = e.pendingProps), null === t ? Ju(e) : (nu = t);
        }
        function Xu(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = $o(n, t, t.pendingProps, t.type, void 0, ru);
              break;
            case 11:
              t = $o(n, t, t.pendingProps, t.type.render, t.ref, ru);
              break;
            case 5:
              va(t);
            default:
              Jl(n, t), (t = ps(n, (t = nu = Vl(t, uu)), uu));
          }
          (e.memoizedProps = e.pendingProps), null === t ? Ju(e) : (nu = t);
        }
        function Gu(e, t, n, r) {
          (vs = gs = null), va(t), (pi = null), (mi = 0);
          var i = t.return;
          try {
            if (
              (function (e, t, n, r, i) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" === typeof r &&
                    "function" === typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && Ss(t, n, i, !0),
                    null !== (n = Fi.current))
                  ) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === Ti
                            ? Hu()
                            : null === n.alternate && 0 === cu && (cu = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = i),
                          r === li
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              ic(e, r, i)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === li
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                ? (t.retryQueue = new Set([r]))
                                : n.add(r),
                              ic(e, r, i)),
                          !1
                        );
                    }
                    throw Error(o(435, n.tag));
                  }
                  return ic(e, r, i), Hu(), !1;
                }
                if (Gr)
                  return (
                    null !== (t = Fi.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = i),
                        r !== $r &&
                          ai(
                            Or(
                              (e = Error(o(422), {
                                cause: r,
                              })),
                              n
                            )
                          ))
                      : (r !== $r &&
                          ai(
                            Or(
                              (t = Error(o(423), {
                                cause: r,
                              })),
                              n
                            )
                          ),
                        ((e = e.current.alternate).flags |= 65536),
                        (i &= -i),
                        (e.lanes |= i),
                        (r = Or(r, n)),
                        Os(e, (i = Io(e.stateNode, r, i))),
                        4 !== cu && (cu = 2)),
                    !1
                  );
                var a = Error(o(520), {
                  cause: r,
                });
                if (
                  ((a = Or(a, n)),
                  null === gu ? (gu = [a]) : gu.push(a),
                  4 !== cu && (cu = 2),
                  null === t)
                )
                  return !0;
                (r = Or(r, n)), (n = t);
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = i & -i),
                        (n.lanes |= e),
                        Os(n, (e = Io(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (a = n.stateNode),
                        0 === (128 & n.flags) &&
                          ("function" === typeof t.getDerivedStateFromError ||
                            (null !== a &&
                              "function" === typeof a.componentDidCatch &&
                              (null === Su || !Su.has(a)))))
                      )
                        return (
                          (n.flags |= 65536),
                          (i &= -i),
                          (n.lanes |= i),
                          Wo((i = Uo(i)), e, n, r),
                          Os(n, i),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, i, t, n, ru)
            )
              return (cu = 1), Vo(e, Or(n, e.current)), void (nu = null);
          } catch (a) {
            if (null !== i) throw ((nu = i), a);
            return (cu = 1), Vo(e, Or(n, e.current)), void (nu = null);
          }
          32768 & t.flags
            ? (Gr || 1 === r
                ? (e = !0)
                : su || 0 !== (536870912 & ru)
                ? (e = !1)
                : ((ou = e = !0),
                  (2 === r || 3 === r || 6 === r) &&
                    null !== (r = Fi.current) &&
                    13 === r.tag &&
                    (r.flags |= 16384)),
              Zu(t, e))
            : Ju(t);
        }
        function Ju(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void Zu(t, ou);
            e = t.return;
            var n = Xl(t.alternate, t, uu);
            if (null !== n) return void (nu = n);
            if (null !== (t = t.sibling)) return void (nu = t);
            nu = t = e;
          } while (null !== t);
          0 === cu && (cu = 5);
        }
        function Zu(e, t) {
          do {
            var n = Gl(e.alternate, e);
            if (null !== n) return (n.flags &= 32767), void (nu = n);
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (nu = e);
            nu = e = n;
          } while (null !== e);
          (cu = 6), (nu = null);
        }
        function $u(e, t, n, r, i, a, s, l, u, c) {
          var d = D.T,
            f = W.p;
          try {
            (W.p = 2),
              (D.T = null),
              (function (e, t, n, r, i, a, s, l) {
                do {
                  tc();
                } while (null !== Au);
                if (0 !== (6 & eu)) throw Error(o(327));
                var u = e.finishedWork;
                if (((r = e.finishedLanes), null === u)) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  u === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null),
                  (e.callbackPriority = 0),
                  (e.cancelPendingCommit = null);
                var c = u.lanes | u.childLanes;
                if (
                  ((function (e, t, n, r, i, a) {
                    var o = e.pendingLanes;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.warmLanes = 0),
                      (e.expiredLanes &= n),
                      (e.entangledLanes &= n),
                      (e.errorRecoveryDisabledLanes &= n),
                      (e.shellSuspendCounter = 0);
                    var s = e.entanglements,
                      l = e.expirationTimes,
                      u = e.hiddenUpdates;
                    for (n = o & ~n; 0 < n; ) {
                      var c = 31 - xe(n),
                        d = 1 << c;
                      (s[c] = 0), (l[c] = -1);
                      var f = u[c];
                      if (null !== f)
                        for (u[c] = null, c = 0; c < f.length; c++) {
                          var h = f[c];
                          null !== h && (h.lane &= -536870913);
                        }
                      n &= ~d;
                    }
                    0 !== r && Le(e, r, 0),
                      0 !== a &&
                        0 === i &&
                        0 !== e.tag &&
                        (e.suspendedLanes |= a & ~(o & ~t));
                  })(e, r, (c |= Er), a, s, l),
                  e === tu && ((nu = tu = null), (ru = 0)),
                  (0 === (10256 & u.subtreeFlags) && 0 === (10256 & u.flags)) ||
                    ku ||
                    ((ku = !0),
                    (Pu = c),
                    (Cu = n),
                    (function (e, t) {
                      ie(e, t);
                    })(fe, function () {
                      return tc(), null;
                    })),
                  (n = 0 !== (15990 & u.flags)),
                  0 !== (15990 & u.subtreeFlags) || n
                    ? ((n = D.T),
                      (D.T = null),
                      (a = W.p),
                      (W.p = 2),
                      (s = eu),
                      (eu |= 4),
                      (function (e, t) {
                        if (
                          ((e = e.containerInfo), (qc = Hd), er((e = $n(e))))
                        ) {
                          if ("selectionStart" in e)
                            var n = {
                              start: e.selectionStart,
                              end: e.selectionEnd,
                            };
                          else
                            e: {
                              var r =
                                (n =
                                  ((n = e.ownerDocument) && n.defaultView) ||
                                  window).getSelection && n.getSelection();
                              if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var i = r.anchorOffset,
                                  a = r.focusNode;
                                r = r.focusOffset;
                                try {
                                  n.nodeType, a.nodeType;
                                } catch (g) {
                                  n = null;
                                  break e;
                                }
                                var s = 0,
                                  l = -1,
                                  u = -1,
                                  c = 0,
                                  d = 0,
                                  f = e,
                                  h = null;
                                t: for (;;) {
                                  for (
                                    var p;
                                    f !== n ||
                                      (0 !== i && 3 !== f.nodeType) ||
                                      (l = s + i),
                                      f !== a ||
                                        (0 !== r && 3 !== f.nodeType) ||
                                        (u = s + r),
                                      3 === f.nodeType &&
                                        (s += f.nodeValue.length),
                                      null !== (p = f.firstChild);

                                  )
                                    (h = f), (f = p);
                                  for (;;) {
                                    if (f === e) break t;
                                    if (
                                      (h === n && ++c === i && (l = s),
                                      h === a && ++d === r && (u = s),
                                      null !== (p = f.nextSibling))
                                    )
                                      break;
                                    h = (f = h).parentNode;
                                  }
                                  f = p;
                                }
                                n =
                                  -1 === l || -1 === u
                                    ? null
                                    : {
                                        start: l,
                                        end: u,
                                      };
                              } else n = null;
                            }
                          n = n || {
                            start: 0,
                            end: 0,
                          };
                        } else n = null;
                        for (
                          Qc = {
                            focusedElem: e,
                            selectionRange: n,
                          },
                            Hd = !1,
                            nl = t;
                          null !== nl;

                        )
                          if (
                            ((e = (t = nl).child),
                            0 !== (1028 & t.subtreeFlags) && null !== e)
                          )
                            (e.return = t), (nl = e);
                          else
                            for (; null !== nl; ) {
                              switch (
                                ((a = (t = nl).alternate), (e = t.flags), t.tag)
                              ) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 26:
                                case 27:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (0 !== (1024 & e) && null !== a) {
                                    (e = void 0),
                                      (n = t),
                                      (i = a.memoizedProps),
                                      (a = a.memoizedState),
                                      (r = n.stateNode);
                                    try {
                                      var m = Lo(
                                        n.type,
                                        i,
                                        (n.elementType, n.type)
                                      );
                                      (e = r.getSnapshotBeforeUpdate(m, a)),
                                        (r.__reactInternalSnapshotBeforeUpdate =
                                          e);
                                    } catch (v) {
                                      rc(n, n.return, v);
                                    }
                                  }
                                  break;
                                case 3:
                                  if (0 !== (1024 & e))
                                    if (
                                      9 ===
                                      (n = (e = t.stateNode.containerInfo)
                                        .nodeType)
                                    )
                                      od(e);
                                    else if (1 === n)
                                      switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                          od(e);
                                          break;
                                        default:
                                          e.textContent = "";
                                      }
                                  break;
                                default:
                                  if (0 !== (1024 & e)) throw Error(o(163));
                              }
                              if (null !== (e = t.sibling)) {
                                (e.return = t.return), (nl = e);
                                break;
                              }
                              nl = t.return;
                            }
                        (m = rl), (rl = !1);
                      })(e, u),
                      pl(u, e),
                      tr(Qc, e.containerInfo),
                      (Hd = !!qc),
                      (Qc = qc = null),
                      (e.current = u),
                      il(e, u.alternate, u),
                      se(),
                      (eu = s),
                      (W.p = a),
                      (D.T = n))
                    : (e.current = u),
                  ku ? ((ku = !1), (Au = e), (Eu = r)) : ec(e, c),
                  (c = e.pendingLanes),
                  0 === c && (Su = null),
                  (function (e) {
                    if (ye && "function" === typeof ye.onCommitFiberRoot)
                      try {
                        ye.onCommitFiberRoot(
                          ve,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(u.stateNode),
                  mc(e),
                  null !== t)
                )
                  for (i = e.onRecoverableError, u = 0; u < t.length; u++)
                    (c = t[u]),
                      i(c.value, {
                        componentStack: c.stack,
                      });
                0 !== (3 & Eu) && tc(),
                  (c = e.pendingLanes),
                  0 !== (4194218 & r) && 0 !== (42 & c)
                    ? e === Tu
                      ? Fu++
                      : ((Fu = 0), (Tu = e))
                    : (Fu = 0),
                  gc(0, !1);
              })(e, t, n, r, f, i, a, s);
          } finally {
            (D.T = d), (W.p = f);
          }
        }
        function ec(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ui(t));
        }
        function tc() {
          if (null !== Au) {
            var e = Au,
              t = Pu;
            Pu = 0;
            var n = Re(Eu),
              r = D.T,
              i = W.p;
            try {
              if (((W.p = 32 > n ? 32 : n), (D.T = null), null === Au))
                var a = !1;
              else {
                (n = Cu), (Cu = null);
                var s = Au,
                  l = Eu;
                if (((Au = null), (Eu = 0), 0 !== (6 & eu)))
                  throw Error(o(331));
                var u = eu;
                if (
                  ((eu |= 4),
                  jl(s.current),
                  kl(s, s.current, l, n),
                  (eu = u),
                  gc(0, !1),
                  ye && "function" === typeof ye.onPostCommitFiberRoot)
                )
                  try {
                    ye.onPostCommitFiberRoot(ve, s);
                  } catch (c) {}
                a = !0;
              }
              return a;
            } finally {
              (W.p = i), (D.T = r), ec(e, t);
            }
          }
          return !1;
        }
        function nc(e, t, n) {
          (t = Or(n, t)),
            null !== (e = Ns(e, (t = Io(e.stateNode, t, 2)), 2)) &&
              (Ne(e, 2), mc(e));
        }
        function rc(e, t, n) {
          if (3 === e.tag) nc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                nc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Su || !Su.has(r)))
                ) {
                  (e = Or(n, e)),
                    null !== (r = Ns(t, (n = Uo(2)), 2)) &&
                      (Wo(n, r, t, e), Ne(r, 2), mc(r));
                  break;
                }
              }
              t = t.return;
            }
        }
        function ic(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new $l();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) ||
            ((lu = !0), i.add(n), (e = ac.bind(null, e, t, n)), t.then(e, e));
        }
        function ac(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            tu === e &&
              (ru & n) === n &&
              (4 === cu ||
              (3 === cu && (62914560 & ru) === ru && 300 > le() - bu)
                ? 0 === (2 & eu) && Iu(e, 0)
                : (hu |= n),
              mu === ru && (mu = 0)),
            mc(e);
        }
        function oc(e, t) {
          0 === t && (t = De()), null !== (e = Tr(e, t)) && (Ne(e, t), mc(e));
        }
        function sc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), oc(e, n);
        }
        function lc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), oc(e, n);
        }
        var uc = null,
          cc = null,
          dc = !1,
          fc = !1,
          hc = !1,
          pc = 0;
        function mc(e) {
          var t;
          e !== cc &&
            null === e.next &&
            (null === cc ? (uc = cc = e) : (cc = cc.next = e)),
            (fc = !0),
            dc ||
              ((dc = !0),
              (t = vc),
              rd(function () {
                0 !== (6 & eu) ? ie(ce, t) : t();
              }));
        }
        function gc(e, t) {
          if (!hc && fc) {
            hc = !0;
            do {
              for (var n = !1, r = uc; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var i = r.pendingLanes;
                    if (0 === i) var a = 0;
                    else {
                      var o = r.suspendedLanes,
                        s = r.pingedLanes;
                      (a = (1 << (31 - xe(42 | e) + 1)) - 1),
                        (a =
                          201326677 & (a &= i & ~(o & ~s))
                            ? (201326677 & a) | 1
                            : a
                            ? 2 | a
                            : 0);
                    }
                    0 !== a && ((n = !0), xc(r, a));
                  } else
                    (a = ru),
                      0 === (3 & (a = Pe(r, r === tu ? a : 0))) ||
                        Ce(r, a) ||
                        ((n = !0), xc(r, a));
                r = r.next;
              }
            } while (n);
            hc = !1;
          }
        }
        function vc() {
          fc = dc = !1;
          var e = 0;
          0 !== pc &&
            ((function () {
              var e = window.event;
              if (e && "popstate" === e.type) return e !== $c && (($c = e), !0);
              return ($c = null), !1;
            })() && (e = pc),
            (pc = 0));
          for (var t = le(), n = null, r = uc; null !== r; ) {
            var i = r.next,
              a = yc(r, t);
            0 === a
              ? ((r.next = null),
                null === n ? (uc = i) : (n.next = i),
                null === i && (cc = n))
              : ((n = r), (0 !== e || 0 !== (3 & a)) && (fc = !0)),
              (r = i);
          }
          gc(e, !1);
        }
        function yc(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              i = e.expirationTimes,
              a = -62914561 & e.pendingLanes;
            0 < a;

          ) {
            var o = 31 - xe(a),
              s = 1 << o,
              l = i[o];
            -1 === l
              ? (0 !== (s & n) && 0 === (s & r)) || (i[o] = Fe(s, t))
              : l <= t && (e.expiredLanes |= s),
              (a &= ~s);
          }
          if (
            ((n = ru),
            (n = Pe(e, e === (t = tu) ? n : 0)),
            (r = e.callbackNode),
            0 === n || (e === t && 2 === iu) || null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && ae(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (0 === (3 & n) || Ce(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && ae(r), Re(n))) {
              case 2:
              case 8:
                n = de;
                break;
              case 32:
              default:
                n = fe;
                break;
              case 268435456:
                n = pe;
            }
            return (
              (r = bc.bind(null, e)),
              (n = ie(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && ae(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function bc(e, t) {
          var n = e.callbackNode;
          if (tc() && e.callbackNode !== n) return null;
          var r = ru;
          return 0 === (r = Pe(e, e === tu ? r : 0))
            ? null
            : (Lu(e, r, t),
              yc(e, le()),
              null != e.callbackNode && e.callbackNode === n
                ? bc.bind(null, e)
                : null);
        }
        function xc(e, t) {
          if (tc()) return null;
          Lu(e, t, !0);
        }
        function wc() {
          return 0 === pc && (pc = Te()), pc;
        }
        function Sc(e) {
          return null == e || "symbol" === typeof e || "boolean" === typeof e
            ? null
            : "function" === typeof e
            ? e
            : Tt("" + e);
        }
        function kc(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var Ac = 0; Ac < wr.length; Ac++) {
          var Ec = wr[Ac];
          Sr(Ec.toLowerCase(), "on" + (Ec[0].toUpperCase() + Ec.slice(1)));
        }
        Sr(hr, "onAnimationEnd"),
          Sr(pr, "onAnimationIteration"),
          Sr(mr, "onAnimationStart"),
          Sr("dblclick", "onDoubleClick"),
          Sr("focusin", "onFocus"),
          Sr("focusout", "onBlur"),
          Sr(gr, "onTransitionRun"),
          Sr(vr, "onTransitionStart"),
          Sr(yr, "onTransitionCancel"),
          Sr(br, "onTransitionEnd"),
          tt("onMouseEnter", ["mouseout", "mouseover"]),
          tt("onMouseLeave", ["mouseout", "mouseover"]),
          tt("onPointerEnter", ["pointerout", "pointerover"]),
          tt("onPointerLeave", ["pointerout", "pointerover"]),
          et(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          et(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          et("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          et(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Pc =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Cc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(Pc)
          );
        function Fc(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== a && i.isPropagationStopped()))
                    break e;
                  (a = s), (i.currentTarget = u);
                  try {
                    a(i);
                  } catch (c) {
                    Oo(c);
                  }
                  (i.currentTarget = null), (a = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== a && i.isPropagationStopped())
                  )
                    break e;
                  (a = s), (i.currentTarget = u);
                  try {
                    a(i);
                  } catch (c) {
                    Oo(c);
                  }
                  (i.currentTarget = null), (a = l);
                }
            }
          }
        }
        function Tc(e, t) {
          var n = t[Ue];
          void 0 === n && (n = t[Ue] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Lc(t, e, 2, !1), n.add(r));
        }
        function Dc(e, t, n) {
          var r = 0;
          t && (r |= 4), Lc(n, e, r, t);
        }
        var jc = "_reactListening" + Math.random().toString(36).slice(2);
        function Nc(e) {
          if (!e[jc]) {
            (e[jc] = !0),
              Ze.forEach(function (t) {
                "selectionchange" !== t &&
                  (Cc.has(t) || Dc(t, !1, e), Dc(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[jc] || ((t[jc] = !0), Dc("selectionchange", !1, t));
          }
        }
        function Lc(e, t, n, r) {
          switch (Jd(t)) {
            case 2:
              var i = Yd;
              break;
            case 8:
              i = Kd;
              break;
            default:
              i = qd;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Vt ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: i,
                  })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, {
                  passive: i,
                })
              : e.addEventListener(t, n, !1);
        }
        function Oc(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === i ||
                        (8 === l.nodeType && l.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = qe(s))) return;
                  if (5 === (l = o.tag) || 6 === l || 26 === l || 27 === l) {
                    r = a = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Mt(function () {
            var r = a,
              i = jt(n),
              o = [];
            e: {
              var s = xr.get(e);
              if (void 0 !== s) {
                var l = Zt,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === Ht(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = pn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = an);
                    break;
                  case "focusout":
                    (u = "blur"), (l = an);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = an;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = nn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = rn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = gn;
                    break;
                  case hr:
                  case pr:
                  case mr:
                    l = on;
                    break;
                  case br:
                    l = vn;
                    break;
                  case "scroll":
                  case "scrollend":
                    l = en;
                    break;
                  case "wheel":
                    l = yn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = sn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = mn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    l = bn;
                }
                var c = 0 !== (4 & t),
                  d = !c && ("scroll" === e || "scrollend" === e),
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var h, p = r; null !== p; ) {
                  var m = p;
                  if (
                    ((h = m.stateNode),
                    (5 !== (m = m.tag) && 26 !== m && 27 !== m) ||
                      null === h ||
                      null === f ||
                      (null != (m = zt(p, f)) && c.push(Rc(p, m, h))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, i)),
                  o.push({
                    event: s,
                    listeners: c,
                  }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === Dt ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!qe(u) && !u[Ie])) &&
                  (l || s) &&
                  ((s =
                    i.window === i
                      ? i
                      : (s = i.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? qe(u)
                          : null) &&
                        ((d = z(u)),
                        (c = u.tag),
                        u !== d || (5 !== c && 27 !== c && 6 !== c)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = nn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = mn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == l ? s : Xe(l)),
                  (h = null == u ? s : Xe(u)),
                  ((s = new c(m, p + "leave", l, n, i)).target = d),
                  (s.relatedTarget = h),
                  (m = null),
                  qe(i) === r &&
                    (((c = new c(f, p + "enter", u, n, i)).target = h),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  l && u)
                )
                  e: {
                    for (f = u, p = 0, h = c = l; h; h = zc(h)) p++;
                    for (h = 0, m = f; m; m = zc(m)) h++;
                    for (; 0 < p - h; ) (c = zc(c)), p--;
                    for (; 0 < h - p; ) (f = zc(f)), h--;
                    for (; p--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = zc(c)), (f = zc(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Vc(o, s, l, c, !1),
                  null !== u && null !== d && Vc(o, d, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? Xe(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = zn;
              else if (jn(s))
                if (Vn) g = qn;
                else {
                  g = Yn;
                  var v = Hn;
                }
              else
                !(l = s.nodeName) ||
                "input" !== l.toLowerCase() ||
                ("checkbox" !== s.type && "radio" !== s.type)
                  ? r && Pt(r.elementType) && (g = zn)
                  : (g = Kn);
              switch (
                (g && (g = g(e, r))
                  ? Nn(o, g, n, i)
                  : (v && v(e, s, r),
                    "focusout" === e &&
                      r &&
                      "number" === s.type &&
                      null != r.memoizedProps.value &&
                      yt(s, "number", s.value)),
                (v = r ? Xe(r) : window),
                e)
              ) {
                case "focusin":
                  (jn(v) || "true" === v.contentEditable) &&
                    ((rr = v), (ir = r), (ar = null));
                  break;
                case "focusout":
                  ar = ir = rr = null;
                  break;
                case "mousedown":
                  or = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (or = !1), sr(o, n, i);
                  break;
                case "selectionchange":
                  if (nr) break;
                case "keydown":
                case "keyup":
                  sr(o, n, i);
              }
              var y;
              if (wn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Tn
                  ? Cn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (An &&
                  "ko" !== n.locale &&
                  (Tn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Tn && (y = _t())
                    : ((Ut = "value" in (It = i) ? It.value : It.textContent),
                      (Tn = !0))),
                0 < (v = Mc(r, b)).length &&
                  ((b = new ln(b, e, null, n, i)),
                  o.push({
                    event: b,
                    listeners: v,
                  }),
                  y ? (b.data = y) : null !== (y = Fn(n)) && (b.data = y))),
                (y = kn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Fn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Pn = !0), En);
                        case "textInput":
                          return (e = t.data) === En && Pn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Tn)
                        return "compositionend" === e || (!wn && Cn(e, t))
                          ? ((e = _t()), (Wt = Ut = It = null), (Tn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return An && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (b = Mc(r, "onBeforeInput")).length &&
                  ((v = new ln("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({
                    event: v,
                    listeners: b,
                  }),
                  (v.data = y)),
                (function (e, t, n, r, i) {
                  if ("submit" === t && n && n.stateNode === i) {
                    var a = Sc((i[Be] || null).action),
                      o = r.submitter;
                    o &&
                      null !==
                        (t = (t = o[Be] || null)
                          ? Sc(t.formAction)
                          : o.getAttribute("formAction")) &&
                      ((a = t), (o = null));
                    var s = new Zt("action", "action", null, r, i);
                    e.push({
                      event: s,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== pc) {
                                var e = o ? kc(i, o) : new FormData(i);
                                co(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: i.method,
                                    action: a,
                                  },
                                  null,
                                  e
                                );
                              }
                            } else
                              "function" === typeof a &&
                                (s.preventDefault(),
                                (e = o ? kc(i, o) : new FormData(i)),
                                co(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: i.method,
                                    action: a,
                                  },
                                  a,
                                  e
                                ));
                          },
                          currentTarget: i,
                        },
                      ],
                    });
                  }
                })(o, e, r, n, i);
            }
            Fc(o, t);
          });
        }
        function Rc(e, t, n) {
          return {
            instance: e,
            listener: t,
            currentTarget: n,
          };
        }
        function Mc(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            (5 !== (i = i.tag) && 26 !== i && 27 !== i) ||
              null === a ||
              (null != (i = zt(e, n)) && r.unshift(Rc(e, i, a)),
              null != (i = zt(e, t)) && r.push(Rc(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function zc(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function Vc(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (((s = s.tag), null !== l && l === r)) break;
            (5 !== s && 26 !== s && 27 !== s) ||
              null === u ||
              ((l = u),
              i
                ? null != (u = zt(n, a)) && o.unshift(Rc(n, u, l))
                : i || (null != (u = zt(n, a)) && o.push(Rc(n, u, l)))),
              (n = n.return);
          }
          0 !== o.length &&
            e.push({
              event: t,
              listeners: o,
            });
        }
        var Bc = /\r\n?/g,
          Ic = /\u0000|\uFFFD/g;
        function Uc(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Bc, "\n")
            .replace(Ic, "");
        }
        function Wc(e, t) {
          return (t = Uc(t)), Uc(e) === t;
        }
        function _c() {}
        function Hc(e, t, n, r, i, a) {
          switch (n) {
            case "children":
              "string" === typeof r
                ? "body" === t || ("textarea" === t && "" === r) || St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  "body" !== t &&
                  St(e, "" + r);
              break;
            case "className":
              st(e, "class", r);
              break;
            case "tabIndex":
              st(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              st(e, n, r);
              break;
            case "style":
              Et(e, r, a);
              break;
            case "data":
              if ("object" !== t) {
                st(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" === typeof r ||
                "symbol" === typeof r ||
                "boolean" === typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Tt("" + r)), e.setAttribute(n, r);
              break;
            case "action":
            case "formAction":
              if ("function" === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                );
                break;
              }
              if (
                ("function" === typeof a &&
                  ("formAction" === n
                    ? ("input" !== t && Hc(e, t, "name", i.name, i, null),
                      Hc(e, t, "formEncType", i.formEncType, i, null),
                      Hc(e, t, "formMethod", i.formMethod, i, null),
                      Hc(e, t, "formTarget", i.formTarget, i, null))
                    : (Hc(e, t, "encType", i.encType, i, null),
                      Hc(e, t, "method", i.method, i, null),
                      Hc(e, t, "target", i.target, i, null))),
                null == r || "symbol" === typeof r || "boolean" === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Tt("" + r)), e.setAttribute(n, r);
              break;
            case "onClick":
              null != r && (e.onclick = _c);
              break;
            case "onScroll":
              null != r && Tc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Tc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != i.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple =
                r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "muted":
              e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" === typeof r ||
                "boolean" === typeof r ||
                "symbol" === typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              (n = Tt("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n
                );
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                  null != r &&
                  "function" !== typeof r &&
                  "symbol" !== typeof r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" !== typeof r &&
              "symbol" !== typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" === typeof r ||
              "symbol" === typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              Tc("beforetoggle", e), Tc("toggle", e), ot(e, "popover", r);
              break;
            case "xlinkActuate":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              ot(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                ot(e, (n = Ct.get(n) || n), r);
          }
        }
        function Yc(e, t, n, r, i, a) {
          switch (n) {
            case "style":
              Et(e, r, a);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != i.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" === typeof r
                ? St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  St(e, "" + r);
              break;
            case "onScroll":
              null != r && Tc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Tc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = _c);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              $e.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((i = n.endsWith("Capture")),
                (t = n.slice(2, i ? n.length - 7 : void 0)),
                "function" ===
                  typeof (a = null != (a = e[Be] || null) ? a[n] : null) &&
                  e.removeEventListener(t, a, i),
                "function" !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                    ? e.setAttribute(n, "")
                    : ot(e, n, r)
                  : ("function" !== typeof a &&
                      null !== a &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, i)));
          }
        }
        function Kc(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              Tc("error", e), Tc("load", e);
              var r,
                i = !1,
                a = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var s = n[r];
                  if (null != s)
                    switch (r) {
                      case "src":
                        i = !0;
                        break;
                      case "srcSet":
                        a = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                      default:
                        Hc(e, t, r, s, n, null);
                    }
                }
              return (
                a && Hc(e, t, "srcSet", n.srcSet, n, null),
                void (i && Hc(e, t, "src", n.src, n, null))
              );
            case "input":
              Tc("invalid", e);
              var l = (r = s = a = null),
                u = null,
                c = null;
              for (i in n)
                if (n.hasOwnProperty(i)) {
                  var d = n[i];
                  if (null != d)
                    switch (i) {
                      case "name":
                        a = d;
                        break;
                      case "type":
                        s = d;
                        break;
                      case "checked":
                        u = d;
                        break;
                      case "defaultChecked":
                        c = d;
                        break;
                      case "value":
                        r = d;
                        break;
                      case "defaultValue":
                        l = d;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != d) throw Error(o(137, t));
                        break;
                      default:
                        Hc(e, t, i, d, n, null);
                    }
                }
              return vt(e, r, l, u, c, s, a, !1), void dt(e);
            case "select":
              for (a in (Tc("invalid", e), (i = s = r = null), n))
                if (n.hasOwnProperty(a) && null != (l = n[a]))
                  switch (a) {
                    case "value":
                      r = l;
                      break;
                    case "defaultValue":
                      s = l;
                      break;
                    case "multiple":
                      i = l;
                    default:
                      Hc(e, t, a, l, n, null);
                  }
              return (
                (t = r),
                (n = s),
                (e.multiple = !!i),
                void (null != t
                  ? bt(e, !!i, t, !1)
                  : null != n && bt(e, !!i, n, !0))
              );
            case "textarea":
              for (s in (Tc("invalid", e), (r = a = i = null), n))
                if (n.hasOwnProperty(s) && null != (l = n[s]))
                  switch (s) {
                    case "value":
                      i = l;
                      break;
                    case "defaultValue":
                      a = l;
                      break;
                    case "children":
                      r = l;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != l) throw Error(o(91));
                      break;
                    default:
                      Hc(e, t, s, l, n, null);
                  }
              return wt(e, i, a, r), void dt(e);
            case "option":
              for (u in n)
                if (n.hasOwnProperty(u) && null != (i = n[u]))
                  if ("selected" === u)
                    e.selected =
                      i && "function" !== typeof i && "symbol" !== typeof i;
                  else Hc(e, t, u, i, n, null);
              return;
            case "dialog":
              Tc("cancel", e), Tc("close", e);
              break;
            case "iframe":
            case "object":
              Tc("load", e);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Pc.length; i++) Tc(Pc[i], e);
              break;
            case "image":
              Tc("error", e), Tc("load", e);
              break;
            case "details":
              Tc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              Tc("error", e), Tc("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (i = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(137, t));
                    default:
                      Hc(e, t, c, i, n, null);
                  }
              return;
            default:
              if (Pt(t)) {
                for (d in n)
                  n.hasOwnProperty(d) &&
                    void 0 !== (i = n[d]) &&
                    Yc(e, t, d, i, n, void 0);
                return;
              }
          }
          for (l in n)
            n.hasOwnProperty(l) &&
              null != (i = n[l]) &&
              Hc(e, t, l, i, n, null);
        }
        var qc = null,
          Qc = null;
        function Xc(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function Gc(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function Jc(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function Zc(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            "bigint" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var $c = null;
        var ed = "function" === typeof setTimeout ? setTimeout : void 0,
          td = "function" === typeof clearTimeout ? clearTimeout : void 0,
          nd = "function" === typeof Promise ? Promise : void 0,
          rd =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof nd
              ? function (e) {
                  return nd.resolve(null).then(e).catch(id);
                }
              : ed;
        function id(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ad(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void gf(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          gf(t);
        }
        function od(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                od(n), Ke(n);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function sd(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ld(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function ud(e, t, n) {
          switch (((t = Xc(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(o(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(o(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(o(454));
              return e;
            default:
              throw Error(o(451));
          }
        }
        var cd = new Map(),
          dd = new Set();
        function fd(e) {
          return "function" === typeof e.getRootNode
            ? e.getRootNode()
            : e.ownerDocument;
        }
        var hd = W.d;
        W.d = {
          f: function () {
            var e = hd.f(),
              t = Vu();
            return e || t;
          },
          r: function (e) {
            var t = Qe(e);
            null !== t && 5 === t.tag && "form" === t.type ? ho(t) : hd.r(e);
          },
          D: function (e) {
            hd.D(e), md("dns-prefetch", e, null);
          },
          C: function (e, t) {
            hd.C(e, t), md("preconnect", e, t);
          },
          L: function (e, t, n) {
            hd.L(e, t, n);
            var r = pd;
            if (r && e && t) {
              var i = 'link[rel="preload"][as="' + mt(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((i += '[imagesrcset="' + mt(n.imageSrcSet) + '"]'),
                  "string" === typeof n.imageSizes &&
                    (i += '[imagesizes="' + mt(n.imageSizes) + '"]'))
                : (i += '[href="' + mt(e) + '"]');
              var a = i;
              switch (t) {
                case "style":
                  a = vd(e);
                  break;
                case "script":
                  a = xd(e);
              }
              cd.has(a) ||
                ((e = j(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n
                )),
                cd.set(a, e),
                null !== r.querySelector(i) ||
                  ("style" === t && r.querySelector(yd(a))) ||
                  ("script" === t && r.querySelector(wd(a))) ||
                  (Kc((t = r.createElement("link")), "link", e),
                  Je(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            hd.m(e, t);
            var n = pd;
            if (n && e) {
              var r = t && "string" === typeof t.as ? t.as : "script",
                i =
                  'link[rel="modulepreload"][as="' +
                  mt(r) +
                  '"][href="' +
                  mt(e) +
                  '"]',
                a = i;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  a = xd(e);
              }
              if (
                !cd.has(a) &&
                ((e = j(
                  {
                    rel: "modulepreload",
                    href: e,
                  },
                  t
                )),
                cd.set(a, e),
                null === n.querySelector(i))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(wd(a))) return;
                }
                Kc((r = n.createElement("link")), "link", e),
                  Je(r),
                  n.head.appendChild(r);
              }
            }
          },
          X: function (e, t) {
            hd.X(e, t);
            var n = pd;
            if (n && e) {
              var r = Ge(n).hoistableScripts,
                i = xd(e),
                a = r.get(i);
              a ||
                ((a = n.querySelector(wd(i))) ||
                  ((e = j(
                    {
                      src: e,
                      async: !0,
                    },
                    t
                  )),
                  (t = cd.get(i)) && Ed(e, t),
                  Je((a = n.createElement("script"))),
                  Kc(a, "link", e),
                  n.head.appendChild(a)),
                (a = {
                  type: "script",
                  instance: a,
                  count: 1,
                  state: null,
                }),
                r.set(i, a));
            }
          },
          S: function (e, t, n) {
            hd.S(e, t, n);
            var r = pd;
            if (r && e) {
              var i = Ge(r).hoistableStyles,
                a = vd(e);
              t = t || "default";
              var o = i.get(a);
              if (!o) {
                var s = {
                  loading: 0,
                  preload: null,
                };
                if ((o = r.querySelector(yd(a)))) s.loading = 5;
                else {
                  (e = j(
                    {
                      rel: "stylesheet",
                      href: e,
                      "data-precedence": t,
                    },
                    n
                  )),
                    (n = cd.get(a)) && Ad(e, n);
                  var l = (o = r.createElement("link"));
                  Je(l),
                    Kc(l, "link", e),
                    (l._p = new Promise(function (e, t) {
                      (l.onload = e), (l.onerror = t);
                    })),
                    l.addEventListener("load", function () {
                      s.loading |= 1;
                    }),
                    l.addEventListener("error", function () {
                      s.loading |= 2;
                    }),
                    (s.loading |= 4),
                    kd(o, t, r);
                }
                (o = {
                  type: "stylesheet",
                  instance: o,
                  count: 1,
                  state: s,
                }),
                  i.set(a, o);
              }
            }
          },
          M: function (e, t) {
            hd.M(e, t);
            var n = pd;
            if (n && e) {
              var r = Ge(n).hoistableScripts,
                i = xd(e),
                a = r.get(i);
              a ||
                ((a = n.querySelector(wd(i))) ||
                  ((e = j(
                    {
                      src: e,
                      async: !0,
                      type: "module",
                    },
                    t
                  )),
                  (t = cd.get(i)) && Ed(e, t),
                  Je((a = n.createElement("script"))),
                  Kc(a, "link", e),
                  n.head.appendChild(a)),
                (a = {
                  type: "script",
                  instance: a,
                  count: 1,
                  state: null,
                }),
                r.set(i, a));
            }
          },
        };
        var pd = "undefined" === typeof document ? null : document;
        function md(e, t, n) {
          var r = pd;
          if (r && "string" === typeof t && t) {
            var i = mt(t);
            (i = 'link[rel="' + e + '"][href="' + i + '"]'),
              "string" === typeof n && (i += '[crossorigin="' + n + '"]'),
              dd.has(i) ||
                (dd.add(i),
                (e = {
                  rel: e,
                  crossOrigin: n,
                  href: t,
                }),
                null === r.querySelector(i) &&
                  (Kc((t = r.createElement("link")), "link", e),
                  Je(t),
                  r.head.appendChild(t)));
          }
        }
        function gd(e, t, n, r) {
          var i,
            a,
            s,
            l,
            u = (u = J.current) ? fd(u) : null;
          if (!u) throw Error(o(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" === typeof n.precedence &&
                "string" === typeof n.href
                ? ((t = vd(n.href)),
                  (r = (n = Ge(u).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null,
                  };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" === typeof n.href &&
                "string" === typeof n.precedence
              ) {
                e = vd(n.href);
                var c = Ge(u).hoistableStyles,
                  d = c.get(e);
                if (
                  (d ||
                    ((u = u.ownerDocument || u),
                    (d = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: {
                        loading: 0,
                        preload: null,
                      },
                    }),
                    c.set(e, d),
                    (c = u.querySelector(yd(e))) &&
                      !c._p &&
                      ((d.instance = c), (d.state.loading = 5)),
                    cd.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      cd.set(e, n),
                      c ||
                        ((i = u),
                        (a = e),
                        (s = n),
                        (l = d.state),
                        i.querySelector(
                          'link[rel="preload"][as="style"][' + a + "]"
                        )
                          ? (l.loading = 1)
                          : ((a = i.createElement("link")),
                            (l.preload = a),
                            a.addEventListener("load", function () {
                              return (l.loading |= 1);
                            }),
                            a.addEventListener("error", function () {
                              return (l.loading |= 2);
                            }),
                            Kc(a, "link", s),
                            Je(a),
                            i.head.appendChild(a))))),
                  t && null === r)
                )
                  throw Error(o(528, ""));
                return d;
              }
              if (t && null !== r) throw Error(o(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" === typeof (n = n.src) &&
                t &&
                "function" !== typeof t &&
                "symbol" !== typeof t
                  ? ((t = xd(n)),
                    (r = (n = Ge(u).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : {
                      type: "void",
                      instance: null,
                      count: 0,
                      state: null,
                    }
              );
            default:
              throw Error(o(444, e));
          }
        }
        function vd(e) {
          return 'href="' + mt(e) + '"';
        }
        function yd(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function bd(e) {
          return j({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function xd(e) {
          return '[src="' + mt(e) + '"]';
        }
        function wd(e) {
          return "script[async]" + e;
        }
        function Sd(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + mt(n.href) + '"]'
                );
                if (r) return (t.instance = r), Je(r), r;
                var i = j({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  Je((r = (e.ownerDocument || e).createElement("style"))),
                  Kc(r, "style", i),
                  kd(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                i = vd(n.href);
                var a = e.querySelector(yd(i));
                if (a)
                  return (t.state.loading |= 4), (t.instance = a), Je(a), a;
                (r = bd(n)),
                  (i = cd.get(i)) && Ad(r, i),
                  Je((a = (e.ownerDocument || e).createElement("link")));
                var s = a;
                return (
                  (s._p = new Promise(function (e, t) {
                    (s.onload = e), (s.onerror = t);
                  })),
                  Kc(a, "link", r),
                  (t.state.loading |= 4),
                  kd(a, n.precedence, e),
                  (t.instance = a)
                );
              case "script":
                return (
                  (a = xd(n.src)),
                  (i = e.querySelector(wd(a)))
                    ? ((t.instance = i), Je(i), i)
                    : ((r = n),
                      (i = cd.get(a)) && Ed((r = j({}, n)), i),
                      Je(
                        (i = (e = e.ownerDocument || e).createElement("script"))
                      ),
                      Kc(i, "link", r),
                      e.head.appendChild(i),
                      (t.instance = i))
                );
              case "void":
                return null;
              default:
                throw Error(o(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              0 === (4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              kd(r, n.precedence, e));
          return t.instance;
        }
        function kd(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]'
              ),
              i = r.length ? r[r.length - 1] : null,
              a = i,
              o = 0;
            o < r.length;
            o++
          ) {
            var s = r[o];
            if (s.dataset.precedence === t) a = s;
            else if (a !== i) break;
          }
          a
            ? a.parentNode.insertBefore(e, a.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Ad(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title);
        }
        function Ed(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity);
        }
        var Pd = null;
        function Cd(e, t, n) {
          if (null === Pd) {
            var r = new Map(),
              i = (Pd = new Map());
            i.set(n, r);
          } else (r = (i = Pd).get(n)) || ((r = new Map()), i.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), i = 0;
            i < n.length;
            i++
          ) {
            var a = n[i];
            if (
              !(
                a[Ye] ||
                a[Ve] ||
                ("link" === e && "stylesheet" === a.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== a.namespaceURI
            ) {
              var o = a.getAttribute(t) || "";
              o = e + o;
              var s = r.get(o);
              s ? s.push(a) : r.set(o, [a]);
            }
          }
          return r;
        }
        function Fd(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null
          );
        }
        function Td(e) {
          return "stylesheet" !== e.type || 0 !== (3 & e.state.loading);
        }
        var Dd = null;
        function jd() {}
        function Nd() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) Od(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              (this.unsuspend = null), e();
            }
        }
        var Ld = null;
        function Od(e, t) {
          (e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (Ld = new Map()),
              t.forEach(Rd, e),
              (Ld = null),
              Nd.call(e));
        }
        function Rd(e, t) {
          if (!(4 & t.state.loading)) {
            var n = Ld.get(e);
            if (n) var r = n.get(null);
            else {
              (n = new Map()), Ld.set(e, n);
              for (
                var i = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]"
                  ),
                  a = 0;
                a < i.length;
                a++
              ) {
                var o = i[a];
                ("LINK" !== o.nodeName &&
                  "not all" === o.getAttribute("media")) ||
                  (n.set(o.dataset.precedence, o), (r = o));
              }
              r && n.set(null, r);
            }
            (o = (i = t.instance).getAttribute("data-precedence")),
              (a = n.get(o) || r) === r && n.set(null, i),
              n.set(o, i),
              this.count++,
              (r = Nd.bind(this)),
              i.addEventListener("load", r),
              i.addEventListener("error", r),
              a
                ? a.parentNode.insertBefore(i, a.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    i,
                    e.firstChild
                  ),
              (t.state.loading |= 4);
          }
        }
        var Md = {
          $$typeof: g,
          Provider: null,
          Consumer: null,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
        };
        function zd(e, t, n, r, i, a, o, s) {
          (this.tag = 1),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = je(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.finishedLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = je(0)),
            (this.hiddenUpdates = je(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = i),
            (this.onCaughtError = a),
            (this.onRecoverableError = o),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = s),
            (this.incompleteTransitions = new Map());
        }
        function Vd(e, t, n, r, i, a, o, s, l, u, c, d) {
          return (
            (e = new zd(e, t, n, o, s, l, u, d)),
            (t = 1),
            !0 === a && (t |= 24),
            (a = Rl(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (t = Ii()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: t,
            }),
            Ts(a),
            e
          );
        }
        function Bd(e) {
          return e ? (e = Nr) : Nr;
        }
        function Id(e, t, n, r, i, a) {
          (i = Bd(i)),
            null === r.context ? (r.context = i) : (r.pendingContext = i),
            ((r = js(t)).payload = {
              element: n,
            }),
            null !== (a = void 0 === a ? null : a) && (r.callback = a),
            null !== (n = Ns(e, r, t)) && (Nu(n, 0, t), Ls(n, e, t));
        }
        function Ud(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Wd(e, t) {
          Ud(e, t), (e = e.alternate) && Ud(e, t);
        }
        function _d(e) {
          if (13 === e.tag) {
            var t = Tr(e, 67108864);
            null !== t && Nu(t, 0, 67108864), Wd(e, 67108864);
          }
        }
        var Hd = !0;
        function Yd(e, t, n, r) {
          var i = D.T;
          D.T = null;
          var a = W.p;
          try {
            (W.p = 2), qd(e, t, n, r);
          } finally {
            (W.p = a), (D.T = i);
          }
        }
        function Kd(e, t, n, r) {
          var i = D.T;
          D.T = null;
          var a = W.p;
          try {
            (W.p = 8), qd(e, t, n, r);
          } finally {
            (W.p = a), (D.T = i);
          }
        }
        function qd(e, t, n, r) {
          if (Hd) {
            var i = Qd(r);
            if (null === i) Oc(e, t, r, Xd, n), sf(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return ($d = lf($d, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (ef = lf(ef, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (tf = lf(tf, e, t, n, r, i)), !0;
                  case "pointerover":
                    var a = i.pointerId;
                    return nf.set(a, lf(nf.get(a) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (a = i.pointerId),
                      rf.set(a, lf(rf.get(a) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((sf(e, r), 4 & t && -1 < of.indexOf(e))) {
              for (; null !== i; ) {
                var a = Qe(i);
                if (null !== a)
                  switch (a.tag) {
                    case 3:
                      if (
                        (a = a.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var o = Ee(a.pendingLanes);
                        if (0 !== o) {
                          var s = a;
                          for (
                            s.pendingLanes |= 2, s.entangledLanes |= 2;
                            o;

                          ) {
                            var l = 1 << (31 - xe(o));
                            (s.entanglements[1] |= l), (o &= ~l);
                          }
                          mc(a),
                            0 === (6 & eu) && ((xu = le() + 500), gc(0, !1));
                        }
                      }
                      break;
                    case 13:
                      null !== (s = Tr(a, 2)) && Nu(s, 0, 2), Vu(), Wd(a, 2);
                  }
                if ((null === (a = Qd(r)) && Oc(e, t, r, Xd, n), a === i))
                  break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else Oc(e, t, r, null, n);
          }
        }
        function Qd(e) {
          return Gd((e = jt(e)));
        }
        var Xd = null;
        function Gd(e) {
          if (((Xd = null), null !== (e = qe(e)))) {
            var t = z(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = V(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return (Xd = e), null;
        }
        function Jd(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (ue()) {
                case ce:
                  return 2;
                case de:
                  return 8;
                case fe:
                case he:
                  return 32;
                case pe:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Zd = !1,
          $d = null,
          ef = null,
          tf = null,
          nf = new Map(),
          rf = new Map(),
          af = [],
          of =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " "
            );
        function sf(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              $d = null;
              break;
            case "dragenter":
            case "dragleave":
              ef = null;
              break;
            case "mouseover":
            case "mouseout":
              tf = null;
              break;
            case "pointerover":
            case "pointerout":
              nf.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              rf.delete(t.pointerId);
          }
        }
        function lf(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i],
              }),
              null !== t && null !== (t = Qe(t)) && _d(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function uf(e) {
          var t = qe(e.target);
          if (null !== t) {
            var n = z(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = V(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e, t) {
                      var n = W.p;
                      try {
                        return (W.p = e), t();
                      } finally {
                        W.p = n;
                      }
                    })(e.priority, function () {
                      if (13 === n.tag) {
                        var e = Du(),
                          t = Tr(n, e);
                        null !== t && Nu(t, 0, e), Wd(n, e);
                      }
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function cf(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qd(e.nativeEvent);
            if (null !== n)
              return null !== (t = Qe(n)) && _d(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Dt = r), n.target.dispatchEvent(r), (Dt = null), t.shift();
          }
          return !0;
        }
        function df(e, t, n) {
          cf(e) && n.delete(t);
        }
        function ff() {
          (Zd = !1),
            null !== $d && cf($d) && ($d = null),
            null !== ef && cf(ef) && (ef = null),
            null !== tf && cf(tf) && (tf = null),
            nf.forEach(df),
            rf.forEach(df);
        }
        function hf(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Zd ||
              ((Zd = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, ff)));
        }
        var pf = null;
        function mf(e) {
          pf !== e &&
            ((pf = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              pf === e && (pf = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  i = e[t + 2];
                if ("function" !== typeof r) {
                  if (null === Gd(r || n)) continue;
                  break;
                }
                var a = Qe(n);
                null !== a &&
                  (e.splice(t, 3),
                  (t -= 3),
                  co(
                    a,
                    {
                      pending: !0,
                      data: i,
                      method: n.method,
                      action: r,
                    },
                    r,
                    i
                  ));
              }
            }));
        }
        function gf(e) {
          function t(t) {
            return hf(t, e);
          }
          null !== $d && hf($d, e),
            null !== ef && hf(ef, e),
            null !== tf && hf(tf, e),
            nf.forEach(t),
            rf.forEach(t);
          for (var n = 0; n < af.length; n++) {
            var r = af[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < af.length && null === (n = af[0]).blockedOn; )
            uf(n), null === n.blockedOn && af.shift();
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var i = n[r],
                a = n[r + 1],
                o = i[Be] || null;
              if ("function" === typeof a) o || mf(n);
              else if (o) {
                var s = null;
                if (a && a.hasAttribute("formAction")) {
                  if (((i = a), (o = a[Be] || null))) s = o.formAction;
                  else if (null !== Gd(i)) continue;
                } else s = o.action;
                "function" === typeof s
                  ? (n[r + 1] = s)
                  : (n.splice(r, 3), (r -= 3)),
                  mf(n);
              }
            }
        }
        function vf(e) {
          this._internalRoot = e;
        }
        function yf(e) {
          this._internalRoot = e;
        }
        (yf.prototype.render = vf.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Id(t.current, Du(), e, t, null, null);
          }),
          (yf.prototype.unmount = vf.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                0 === e.tag && tc(),
                  Id(e.current, 2, null, e, null, null),
                  Vu(),
                  (t[Ie] = null);
              }
            }),
          (yf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Me();
              e = {
                blockedOn: null,
                target: e,
                priority: t,
              };
              for (
                var n = 0;
                n < af.length && 0 !== t && t < af[n].priority;
                n++
              );
              af.splice(n, 0, e), 0 === n && uf(e);
            }
          });
        var bf = i.version;
        if ("19.0.0" !== bf) throw Error(o(527, bf, "19.0.0"));
        W.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = z(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === a.child) {
                  for (a = i.child; a; ) {
                    if (a === n) return B(i), e;
                    if (a === r) return B(i), t;
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = i), (r = a);
                else {
                  for (var s = !1, l = i.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = i), (r = a);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = i), (n = a);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = a.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = a), (r = i);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = a), (n = i);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? I(e) : null) ? null : e.stateNode)
          );
        };
        var xf = {
          bundleType: 0,
          version: "19.0.0",
          rendererPackageName: "react-dom",
          currentDispatcherRef: D,
          findFiberByHostInstance: qe,
          reconcilerVersion: "19.0.0",
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var wf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!wf.isDisabled && wf.supportsFiber)
            try {
              (ve = wf.inject(xf)), (ye = wf);
            } catch (kf) {}
        }
        (t.createRoot = function (e, t) {
          if (!s(e)) throw Error(o(299));
          var n = !1,
            r = "",
            i = Ro,
            a = Mo,
            l = zo;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (i = t.onUncaughtError),
              void 0 !== t.onCaughtError && (a = t.onCaughtError),
              void 0 !== t.onRecoverableError && (l = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks &&
                t.unstable_transitionCallbacks),
            (t = Vd(e, 1, !1, null, 0, n, r, i, a, l, 0, null)),
            (e[Ie] = t.current),
            Nc(8 === e.nodeType ? e.parentNode : e),
            new vf(t)
          );
        }),
          (t.hydrateRoot = function (e, t, n) {
            if (!s(e)) throw Error(o(299));
            var r = !1,
              i = "",
              a = Ro,
              l = Mo,
              u = zo,
              c = null;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (a = n.onUncaughtError),
                void 0 !== n.onCaughtError && (l = n.onCaughtError),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError),
                void 0 !== n.unstable_transitionCallbacks &&
                  n.unstable_transitionCallbacks,
                void 0 !== n.formState && (c = n.formState)),
              ((t = Vd(e, 1, !0, t, 0, r, i, a, l, u, 0, c)).context =
                Bd(null)),
              (n = t.current),
              ((i = js((r = Du()))).callback = null),
              Ns(n, i, r),
              (t.current.lanes = r),
              Ne(t, r),
              mc(t),
              (e[Ie] = t.current),
              Nc(e),
              new yf(t)
            );
          }),
          (t.version = "19.0.0");
      },
      672: (e, t, n) => {
        var r = n(43);
        function i(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function a() {}
        var o = {
            d: {
              f: a,
              r: function () {
                throw Error(i(522));
              },
              D: a,
              C: a,
              L: a,
              m: a,
              X: a,
              S: a,
              M: a,
            },
            p: 0,
            findDOMNode: null,
          },
          s = Symbol.for("react.portal");
        var l =
          r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function u(e, t) {
          return "font" === e
            ? ""
            : "string" === typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
        }
        (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(i(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: s,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = l.T,
              n = o.p;
            try {
              if (((l.T = null), (o.p = 2), e)) return e();
            } finally {
              (l.T = t), (o.p = n), o.d.f();
            }
          }),
          (t.preconnect = function (e, t) {
            "string" === typeof e &&
              (t
                ? (t =
                    "string" === typeof (t = t.crossOrigin)
                      ? "use-credentials" === t
                        ? t
                        : ""
                      : void 0)
                : (t = null),
              o.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" === typeof e && o.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" === typeof e && t && "string" === typeof t.as) {
              var n = t.as,
                r = u(n, t.crossOrigin),
                i = "string" === typeof t.integrity ? t.integrity : void 0,
                a =
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0;
              "style" === n
                ? o.d.S(
                    e,
                    "string" === typeof t.precedence ? t.precedence : void 0,
                    {
                      crossOrigin: r,
                      integrity: i,
                      fetchPriority: a,
                    }
                  )
                : "script" === n &&
                  o.d.X(e, {
                    crossOrigin: r,
                    integrity: i,
                    fetchPriority: a,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" === typeof e)
              if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = u(t.as, t.crossOrigin);
                  o.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" === typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && o.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" === typeof e &&
              "object" === typeof t &&
              null !== t &&
              "string" === typeof t.as
            ) {
              var n = t.as,
                r = u(n, t.crossOrigin);
              o.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" === typeof t.integrity ? t.integrity : void 0,
                nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                type: "string" === typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0,
                referrerPolicy:
                  "string" === typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" === typeof e)
              if (t) {
                var n = u(t.as, t.crossOrigin);
                o.d.m(e, {
                  as:
                    "string" === typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" === typeof t.integrity ? t.integrity : void 0,
                });
              } else o.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            o.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return l.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return l.H.useHostTransitionStatus();
          }),
          (t.version = "19.0.0");
      },
      391: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4));
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(672));
      },
      799: (e, t) => {
        var n = Symbol.for("react.transitional.element");
        function r(e, t, r) {
          var i = null;
          if (
            (void 0 !== r && (i = "" + r),
            void 0 !== t.key && (i = "" + t.key),
            "key" in t)
          )
            for (var a in ((r = {}), t)) "key" !== a && (r[a] = t[a]);
          else r = t;
          return (
            (t = r.ref),
            {
              $$typeof: n,
              type: e,
              key: i,
              ref: void 0 !== t ? t : null,
              props: r,
            }
          );
        }
        Symbol.for("react.fragment"), (t.jsx = r), (t.jsxs = r);
      },
      288: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.consumer"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), m(x, v.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          S = {
            H: null,
            A: null,
            T: null,
            S: null,
          },
          k = Object.prototype.hasOwnProperty;
        function A(e, t, r, i, a, o) {
          return (
            (r = o.ref),
            {
              $$typeof: n,
              type: e,
              key: t,
              ref: void 0 !== r ? r : null,
              props: o,
            }
          );
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function C(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = {
                  "=": "=0",
                  ":": "=2",
                };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function F() {}
        function T(e, t, i, a, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l,
            u,
            c = !1;
          if (null === e) c = !0;
          else
            switch (s) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case f:
                    return T((c = e._init)(e._payload), t, i, a, o);
                }
            }
          if (c)
            return (
              (o = o(e)),
              (c = "" === a ? "." + C(e, 0) : a),
              w(o)
                ? ((i = ""),
                  null != c && (i = c.replace(P, "$&/") + "/"),
                  T(o, t, i, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (E(o) &&
                    ((l = o),
                    (u =
                      i +
                      (null == o.key || (e && e.key === o.key)
                        ? ""
                        : ("" + o.key).replace(P, "$&/") + "/") +
                      c),
                    (o = A(l.type, u, void 0, 0, 0, l.props))),
                  t.push(o)),
              1
            );
          c = 0;
          var d,
            p = "" === a ? "." : a + ":";
          if (w(e))
            for (var m = 0; m < e.length; m++)
              c += T((a = e[m]), t, i, (s = p + C(a, m)), o);
          else if (
            "function" ===
            typeof (m =
              null === (d = e) || "object" !== typeof d
                ? null
                : "function" === typeof (d = (h && d[h]) || d["@@iterator"])
                ? d
                : null)
          )
            for (e = m.call(e), m = 0; !(a = e.next()).done; )
              c += T((a = a.value), t, i, (s = p + C(a, m++)), o);
          else if ("object" === s) {
            if ("function" === typeof e.then)
              return T(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" === typeof e.status
                          ? e.then(F, F)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                i,
                a,
                o
              );
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          }
          return c;
        }
        function D(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function L() {}
        (t.Children = {
          map: D,
          forEach: function (e, t, n) {
            D(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              D(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              D(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = i),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            S),
          (t.act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = m({}, e.props),
              i = e.key;
            if (null != t)
              for (a in (void 0 !== t.ref && void 0,
              void 0 !== t.key && (i = "" + t.key),
              t))
                !k.call(t, a) ||
                  "key" === a ||
                  "__self" === a ||
                  "__source" === a ||
                  ("ref" === a && void 0 === t.ref) ||
                  (r[a] = t[a]);
            var a = arguments.length - 2;
            if (1 === a) r.children = n;
            else if (1 < a) {
              for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
              r.children = o;
            }
            return A(e.type, i, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = {
                $$typeof: s,
                _context: e,
              }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              i = {},
              a = null;
            if (null != t)
              for (r in (void 0 !== t.key && (a = "" + t.key), t))
                k.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (i[r] = t[r]);
            var o = arguments.length - 2;
            if (1 === o) i.children = n;
            else if (1 < o) {
              for (var s = Array(o), l = 0; l < o; l++) s[l] = arguments[l + 2];
              i.children = s;
            }
            if (e && e.defaultProps)
              for (r in (o = e.defaultProps)) void 0 === i[r] && (i[r] = o[r]);
            return A(e, a, void 0, 0, 0, i);
          }),
          (t.createRef = function () {
            return {
              current: null,
            };
          }),
          (t.forwardRef = function (e) {
            return {
              $$typeof: u,
              render: e,
            };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: {
                _status: -1,
                _result: e,
              },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return {
              $$typeof: d,
              type: e,
              compare: void 0 === t ? null : t,
            };
          }),
          (t.startTransition = function (e) {
            var t = S.T,
              n = {};
            S.T = n;
            try {
              var r = e(),
                i = S.S;
              null !== i && i(n, r),
                "object" === typeof r &&
                  null !== r &&
                  "function" === typeof r.then &&
                  r.then(L, N);
            } catch (a) {
              N(a);
            } finally {
              S.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return S.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return S.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return S.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return S.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return S.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return S.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t) {
            return S.H.useEffect(e, t);
          }),
          (t.useId = function () {
            return S.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return S.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return S.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return S.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return S.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return S.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return S.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return S.H.useRef(e);
          }),
          (t.useState = function (e) {
            return S.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return S.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return S.H.useTransition();
          }),
          (t.version = "19.0.0");
      },
      43: (e, t, n) => {
        e.exports = n(288);
      },
      579: (e, t, n) => {
        e.exports = n(799);
      },
      896: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < a(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > a(l, n))
                u < i && 0 > a(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < i && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" === typeof performance &&
            "function" === typeof performance.now)
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          h = 3,
          p = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(u)) (m = !0), j();
            else {
              var t = r(c);
              null !== t && N(w, t.startTime - e);
            }
        }
        var S,
          k = !1,
          A = -1,
          E = 5,
          P = -1;
        function C() {
          return !(t.unstable_now() - P < E);
        }
        function F() {
          if (k) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              e: {
                (m = !1), g && ((g = !1), y(A), (A = -1)), (p = !0);
                var a = h;
                try {
                  t: {
                    for (
                      x(e), f = r(u);
                      null !== f && !(f.expirationTime > e && C());

                    ) {
                      var o = f.callback;
                      if ("function" === typeof o) {
                        (f.callback = null), (h = f.priorityLevel);
                        var s = o(f.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" === typeof s)) {
                          (f.callback = s), x(e), (n = !0);
                          break t;
                        }
                        f === r(u) && i(u), x(e);
                      } else i(u);
                      f = r(u);
                    }
                    if (null !== f) n = !0;
                    else {
                      var l = r(c);
                      null !== l && N(w, l.startTime - e), (n = !1);
                    }
                  }
                  break e;
                } finally {
                  (f = null), (h = a), (p = !1);
                }
                n = void 0;
              }
            } finally {
              n ? S() : (k = !1);
            }
          }
        }
        if ("function" === typeof b)
          S = function () {
            b(F);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            D = T.port2;
          (T.port1.onmessage = F),
            (S = function () {
              D.postMessage(null);
            });
        } else
          S = function () {
            v(F, 0);
          };
        function j() {
          k || ((k = !0), S());
        }
        function N(e, n) {
          A = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || p || ((m = !0), j());
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(A), (A = -1)) : (g = !0), N(w, a - o)))
                : ((e.sortIndex = s), n(u, e), m || p || ((m = !0), j())),
              e
            );
          }),
          (t.unstable_shouldYield = C),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(896);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = {
      exports: {},
    });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r],
          });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".6fcbeeae.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "practice-figma:";
      n.l = (r, i, a, o) => {
        if (e[r]) e[r].push(i);
        else {
          var s, l;
          if (void 0 !== a)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + a
              ) {
                s = d;
                break;
              }
            }
          s ||
            ((l = !0),
            ((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + a),
            (s.src = r)),
            (e[r] = [i]);
          var f = (t, n) => {
              (s.onerror = s.onload = null), clearTimeout(h);
              var i = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                i && i.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            h = setTimeout(
              f.bind(null, void 0, {
                type: "timeout",
                target: s,
              }),
              12e4
            );
          (s.onerror = f.bind(null, s.onerror)),
            (s.onload = f.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (n.p = "/"),
    (() => {
      var e = {
        792: 0,
      };
      n.f.j = (t, r) => {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var a = new Promise((n, r) => (i = e[t] = [n, r]));
            r.push((i[2] = a));
            var o = n.p + n.u(t),
              s = new Error();
            n.l(
              o,
              (r) => {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = a),
                    (s.request = o),
                    i[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var i,
            a,
            o = r[0],
            s = r[1],
            l = r[2],
            u = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (i in s) n.o(s, i) && (n.m[i] = s[i]);
            if (l) l(n);
          }
          for (t && t(r); u < o.length; u++)
            (a = o[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkpractice_figma =
          self.webpackChunkpractice_figma || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n(43),
    i = n(391);
  const a = n.p + "static/media/google.c920552d98e3ca0c9df5.webp";
  var o = n(579);
  const s = (e) => {
    let { text: t, type: n } = e;
    const [i, s] = (0, r.useState)(!1);
    let l = "",
      u = "";
    "primary" === n
      ? ((l = "#482BE7"), (u = "#2c11bf"))
      : "secondary" === n
      ? ((l = "#25DAC5"), (u = "#20bdab"))
      : ((l = "#E93A7D"), (u = "#c72a66"));
    return "google" === n
      ? (0, o.jsxs)("div", {
          className:
            "px-5 border border-gray-900 hover:bg-gray-900 text-black hover:text-white rounded-[100px] flex justify-center items-center  cursor-pointer duration-500",
          children: [
            (0, o.jsx)("img", {
              className: "h-10",
              src: a,
              alt: "Google Logo",
            }),
            (0, o.jsx)("p", {
              className: "",
              children: t,
            }),
          ],
        })
      : "transparent" === n
      ? (0, o.jsx)("div", {
          className:
            "px-5 py-2 border-2 border-slate-400 hover:bg-[#E93A7D] hover:border-opacity-0 border-opacity-50 rounded-[100px]  cursor-pointer duration-500",
          children: (0, o.jsx)("p", {
            className: "text-white",
            children: t,
          }),
        })
      : (0, o.jsx)("div", {
          style: {
            backgroundColor: i ? u : l,
          },
          className: "px-5 py-2 rounded-[100px] cursor-pointer duration-500",
          onMouseEnter: () => {
            s(!0);
          },
          onMouseLeave: () => {
            s(!1);
          },
          children: (0, o.jsx)("p", {
            className: "text-white",
            children: t,
          }),
        });
  };
  function l(e) {
    return (
      (l =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      l(e)
    );
  }
  function u(e) {
    var t = (function (e, t) {
      if ("object" != l(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != l(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == l(t) ? t : t + "";
  }
  function c(e, t, n) {
    return (
      (t = u(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? d(Object(n), !0).forEach(function (t) {
            c(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : d(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function h(e) {
    return null !== e && "object" === typeof e && "function" === typeof e.start;
  }
  function p(e, t) {
    if (null == e) return {};
    var n,
      r,
      i = (function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (t.includes(r)) continue;
            n[r] = e[r];
          }
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++)
        (n = a[r]),
          t.includes(n) ||
            ({}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
  }
  function m(e) {
    const t = [{}, {}];
    return (
      null === e ||
        void 0 === e ||
        e.values.forEach((e, n) => {
          (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
        }),
      t
    );
  }
  function g(e, t, n, r) {
    if ("function" === typeof t) {
      const [i, a] = m(r);
      t = t(void 0 !== n ? n : e.custom, i, a);
    }
    if (
      ("string" === typeof t && (t = e.variants && e.variants[t]),
      "function" === typeof t)
    ) {
      const [i, a] = m(r);
      t = t(void 0 !== n ? n : e.custom, i, a);
    }
    return t;
  }
  function v(e, t, n) {
    const r = e.getProps();
    return g(r, t, void 0 !== n ? n : r.custom, e);
  }
  function y(e, t) {
    return e ? e[t] || e.default || e : void 0;
  }
  const b = [
      "transformPerspective",
      "x",
      "y",
      "z",
      "translateX",
      "translateY",
      "translateZ",
      "scale",
      "scaleX",
      "scaleY",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "skew",
      "skewX",
      "skewY",
    ],
    x = new Set(b),
    w = new Set(["width", "height", "top", "left", "right", "bottom", ...b]),
    S = (e) => Array.isArray(e),
    k = !1,
    A = !1,
    E = (e) => e,
    P = [
      "read",
      "resolveKeyframes",
      "update",
      "preRender",
      "render",
      "postRender",
    ],
    C = {
      value: null,
      addProjectionMetrics: null,
    };
  function F(e, t) {
    let n = !1,
      r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1,
      },
      a = () => (n = !0),
      o = P.reduce(
        (e, n) => (
          (e[n] = (function (e, t) {
            let n = new Set(),
              r = new Set(),
              i = !1,
              a = !1;
            const o = new WeakSet();
            let s = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1,
              },
              l = 0;
            function u(t) {
              o.has(t) && (c.schedule(t), e()), l++, t(s);
            }
            const c = {
              schedule: function (e) {
                const t =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2] &&
                  i
                    ? n
                    : r;
                return (
                  arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1] &&
                    o.add(e),
                  t.has(e) || t.add(e),
                  e
                );
              },
              cancel: (e) => {
                r.delete(e), o.delete(e);
              },
              process: (e) => {
                (s = e),
                  i
                    ? (a = !0)
                    : ((i = !0),
                      ([n, r] = [r, n]),
                      n.forEach(u),
                      t && C.value && C.value.frameloop[t].push(l),
                      (l = 0),
                      n.clear(),
                      (i = !1),
                      a && ((a = !1), c.process(e)));
              },
            };
            return c;
          })(a, t ? n : void 0)),
          e
        ),
        {}
      ),
      {
        read: s,
        resolveKeyframes: l,
        update: u,
        preRender: c,
        render: d,
        postRender: f,
      } = o,
      h = () => {
        const a = A ? i.timestamp : performance.now();
        (n = !1),
          A ||
            (i.delta = r
              ? 1e3 / 60
              : Math.max(Math.min(a - i.timestamp, 40), 1)),
          (i.timestamp = a),
          (i.isProcessing = !0),
          s.process(i),
          l.process(i),
          u.process(i),
          c.process(i),
          d.process(i),
          f.process(i),
          (i.isProcessing = !1),
          n && t && ((r = !1), e(h));
      },
      p = P.reduce((t, a) => {
        const s = o[a];
        return (
          (t[a] = function (t) {
            let a =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              o =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (
              n || ((n = !0), (r = !0), i.isProcessing || e(h)),
              s.schedule(t, a, o)
            );
          }),
          t
        );
      }, {});
    return {
      schedule: p,
      cancel: (e) => {
        for (let t = 0; t < P.length; t++) o[P[t]].cancel(e);
      },
      state: i,
      steps: o,
    };
  }
  const {
    schedule: T,
    cancel: D,
    state: j,
    steps: N,
  } = F(
    "undefined" !== typeof requestAnimationFrame ? requestAnimationFrame : E,
    !0
  );
  let L;
  function O() {
    L = void 0;
  }
  const R = {
    now: () => (
      void 0 === L &&
        R.set(j.isProcessing || A ? j.timestamp : performance.now()),
      L
    ),
    set: (e) => {
      (L = e), queueMicrotask(O);
    },
  };
  function M(e, t) {
    -1 === e.indexOf(t) && e.push(t);
  }
  function z(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class V {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return M(this.subscriptions, e), () => z(this.subscriptions, e);
    }
    notify(e, t, n) {
      const r = this.subscriptions.length;
      if (r)
        if (1 === r) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            const r = this.subscriptions[i];
            r && r(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  function B(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const I = {
    current: void 0,
  };
  class U {
    constructor(e) {
      var t = this;
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (this.version = "12.4.11"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = function (e) {
          let n =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const r = R.now();
          t.updatedAt !== r && t.setPrevFrameValue(),
            (t.prev = t.current),
            t.setCurrent(e),
            t.current !== t.prev &&
              t.events.change &&
              t.events.change.notify(t.current),
            n &&
              t.events.renderRequest &&
              t.events.renderRequest.notify(t.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = n.owner);
    }
    setCurrent(e) {
      var t;
      (this.current = e),
        (this.updatedAt = R.now()),
        null === this.canTrackVelocity &&
          void 0 !== e &&
          (this.canTrackVelocity = ((t = this.current), !isNaN(parseFloat(t))));
    }
    setPrevFrameValue() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : this.current;
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new V());
      const n = this.events[e].add(t);
      return "change" === e
        ? () => {
            n(),
              T.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (const e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e) {
      let t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      t && this.passiveEffect
        ? this.passiveEffect(e, this.updateAndNotify)
        : this.updateAndNotify(e, t);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e) {
      let t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return I.current && I.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const e = R.now();
      if (
        !this.canTrackVelocity ||
        void 0 === this.prevFrameValue ||
        e - this.updatedAt > 30
      )
        return 0;
      const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
      return B(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function W(e, t) {
    return new U(e, t);
  }
  const _ = ["transitionEnd", "transition"];
  function H(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, W(n));
  }
  const Y = (e) => Boolean(e && e.getVelocity);
  function K(e, t) {
    const n = e.getValue("willChange");
    if (((r = n), Boolean(Y(r) && r.add))) return n.add(t);
    var r;
  }
  const q = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
    Q = "data-" + q("framerAppearId");
  function X(e) {
    return e.props[Q];
  }
  function G(e) {
    let t;
    return () => (void 0 === t && (t = e()), t);
  }
  const J = G(() => void 0 !== window.ScrollTimeline);
  class Z {
    constructor(e) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = e.filter(Boolean));
    }
    get finished() {
      return Promise.all(
        this.animations.map((e) => ("finished" in e ? e.finished : e))
      );
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e, t) {
      const n = this.animations.map((n) =>
        J() && n.attachTimeline
          ? n.attachTimeline(e)
          : "function" === typeof t
          ? t(n)
          : void 0
      );
      return () => {
        n.forEach((e, t) => {
          e && e(), this.animations[t].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  class $ extends Z {
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
  }
  const ee = (e) => 1e3 * e,
    te = (e) => e / 1e3,
    ne = !1;
  function re(e) {
    return "function" === typeof e;
  }
  function ie(e, t) {
    (e.timeline = t), (e.onfinish = null);
  }
  const ae = (e) => Array.isArray(e) && "number" === typeof e[0],
    oe = {
      linearEasing: void 0,
    };
  function se(e, t) {
    const n = G(e);
    return () => {
      var e;
      return null !== (e = oe[t]) && void 0 !== e ? e : n();
    };
  }
  const le = se(() => {
      try {
        document.createElement("div").animate(
          {
            opacity: 0,
          },
          {
            easing: "linear(0, 1)",
          }
        );
      } catch (e) {
        return !1;
      }
      return !0;
    }, "linearEasing"),
    ue = (e, t, n) => {
      const r = t - e;
      return 0 === r ? 1 : (n - e) / r;
    },
    ce = function (e, t) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        r = "";
      const i = Math.max(Math.round(t / n), 2);
      for (let a = 0; a < i; a++) r += e(ue(0, i - 1, a)) + ", ";
      return "linear(".concat(r.substring(0, r.length - 2), ")");
    };
  function de(e) {
    return Boolean(
      ("function" === typeof e && le()) ||
        !e ||
        ("string" === typeof e && (e in he || le())) ||
        ae(e) ||
        (Array.isArray(e) && e.every(de))
    );
  }
  const fe = (e) => {
      let [t, n, r, i] = e;
      return "cubic-bezier("
        .concat(t, ", ")
        .concat(n, ", ")
        .concat(r, ", ")
        .concat(i, ")");
    },
    he = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: fe([0, 0.65, 0.55, 1]),
      circOut: fe([0.55, 0, 1, 0.45]),
      backIn: fe([0.31, 0.01, 0.66, -0.59]),
      backOut: fe([0.33, 1.53, 0.69, 0.99]),
    };
  function pe(e, t) {
    return e
      ? "function" === typeof e && le()
        ? ce(e, t)
        : ae(e)
        ? fe(e)
        : Array.isArray(e)
        ? e.map((e) => pe(e, t) || he.easeOut)
        : he[e]
      : void 0;
  }
  const me = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
  function ge(e, t, n, r) {
    if (e === t && n === r) return E;
    const i = (t) =>
      (function (e, t, n, r, i) {
        let a,
          o,
          s = 0;
        do {
          (o = t + (n - t) / 2),
            (a = me(o, r, i) - e),
            a > 0 ? (n = o) : (t = o);
        } while (Math.abs(a) > 1e-7 && ++s < 12);
        return o;
      })(t, 0, 1, e, n);
    return (e) => (0 === e || 1 === e ? e : me(i(e), t, r));
  }
  const ve = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    ye = (e) => (t) => 1 - e(1 - t),
    be = ge(0.33, 1.53, 0.69, 0.99),
    xe = ye(be),
    we = ve(xe),
    Se = (e) =>
      (e *= 2) < 1 ? 0.5 * xe(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
    ke = (e) => 1 - Math.sin(Math.acos(e)),
    Ae = ye(ke),
    Ee = ve(ke),
    Pe = (e) =>
      /^0(?:[\0-\x08\x0E-\x1F!-\x2D\/-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+$/.test(
        e
      );
  const Ce = (e, t, n) => (n > t ? t : n < e ? e : n),
    Fe = {
      test: (e) => "number" === typeof e,
      parse: parseFloat,
      transform: (e) => e,
    },
    Te = f(
      f({}, Fe),
      {},
      {
        transform: (e) => Ce(0, 1, e),
      }
    ),
    De = f(
      f({}, Fe),
      {},
      {
        default: 1,
      }
    ),
    je = (e) => Math.round(1e5 * e) / 1e5,
    Ne = /-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/g;
  const Le =
      /^(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))$/i,
    Oe = (e, t) => (n) =>
      Boolean(
        ("string" === typeof n && Le.test(n) && n.startsWith(e)) ||
          (t &&
            !(function (e) {
              return null == e;
            })(n) &&
            Object.prototype.hasOwnProperty.call(n, t))
      ),
    Re = (e, t, n) => (r) => {
      if ("string" !== typeof r) return r;
      const [i, a, o, s] = r.match(Ne);
      return {
        [e]: parseFloat(i),
        [t]: parseFloat(a),
        [n]: parseFloat(o),
        alpha: void 0 !== s ? parseFloat(s) : 1,
      };
    },
    Me = f(
      f({}, Fe),
      {},
      {
        transform: (e) => Math.round(((e) => Ce(0, 255, e))(e)),
      }
    ),
    ze = {
      test: Oe("rgb", "red"),
      parse: Re("red", "green", "blue"),
      transform: (e) => {
        let { red: t, green: n, blue: r, alpha: i = 1 } = e;
        return (
          "rgba(" +
          Me.transform(t) +
          ", " +
          Me.transform(n) +
          ", " +
          Me.transform(r) +
          ", " +
          je(Te.transform(i)) +
          ")"
        );
      },
    };
  const Ve = {
      test: Oe("#"),
      parse: function (e) {
        let t = "",
          n = "",
          r = "",
          i = "";
        return (
          e.length > 5
            ? ((t = e.substring(1, 3)),
              (n = e.substring(3, 5)),
              (r = e.substring(5, 7)),
              (i = e.substring(7, 9)))
            : ((t = e.substring(1, 2)),
              (n = e.substring(2, 3)),
              (r = e.substring(3, 4)),
              (i = e.substring(4, 5)),
              (t += t),
              (n += n),
              (r += r),
              (i += i)),
          {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: i ? parseInt(i, 16) / 255 : 1,
          }
        );
      },
      transform: ze.transform,
    },
    Be = (e) => ({
      test: (t) =>
        "string" === typeof t && t.endsWith(e) && 1 === t.split(" ").length,
      parse: parseFloat,
      transform: (t) => "".concat(t).concat(e),
    }),
    Ie = Be("deg"),
    Ue = Be("%"),
    We = Be("px"),
    _e = Be("vh"),
    He = Be("vw"),
    Ye = f(
      f({}, Ue),
      {},
      {
        parse: (e) => Ue.parse(e) / 100,
        transform: (e) => Ue.transform(100 * e),
      }
    ),
    Ke = {
      test: Oe("hsl", "hue"),
      parse: Re("hue", "saturation", "lightness"),
      transform: (e) => {
        let { hue: t, saturation: n, lightness: r, alpha: i = 1 } = e;
        return (
          "hsla(" +
          Math.round(t) +
          ", " +
          Ue.transform(je(n)) +
          ", " +
          Ue.transform(je(r)) +
          ", " +
          je(Te.transform(i)) +
          ")"
        );
      },
    },
    qe = {
      test: (e) => ze.test(e) || Ve.test(e) || Ke.test(e),
      parse: (e) =>
        ze.test(e) ? ze.parse(e) : Ke.test(e) ? Ke.parse(e) : Ve.parse(e),
      transform: (e) =>
        "string" === typeof e
          ? e
          : e.hasOwnProperty("red")
          ? ze.transform(e)
          : Ke.transform(e),
    },
    Qe =
      /(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))/gi;
  const Xe = "number",
    Ge = "color",
    Je =
      /var[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)|#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\)|-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/gi;
  function Ze(e) {
    const t = e.toString(),
      n = [],
      r = {
        color: [],
        number: [],
        var: [],
      },
      i = [];
    let a = 0;
    const o = t
      .replace(
        Je,
        (e) => (
          qe.test(e)
            ? (r.color.push(a), i.push(Ge), n.push(qe.parse(e)))
            : e.startsWith("var(")
            ? (r.var.push(a), i.push("var"), n.push(e))
            : (r.number.push(a), i.push(Xe), n.push(parseFloat(e))),
          ++a,
          "${}"
        )
      )
      .split("${}");
    return {
      values: n,
      split: o,
      indexes: r,
      types: i,
    };
  }
  function $e(e) {
    return Ze(e).values;
  }
  function et(e) {
    const { split: t, types: n } = Ze(e),
      r = t.length;
    return (e) => {
      let i = "";
      for (let a = 0; a < r; a++)
        if (((i += t[a]), void 0 !== e[a])) {
          const t = n[a];
          i += t === Xe ? je(e[a]) : t === Ge ? qe.transform(e[a]) : e[a];
        }
      return i;
    };
  }
  const tt = (e) => ("number" === typeof e ? 0 : e);
  const nt = {
      test: function (e) {
        var t, n;
        return (
          isNaN(e) &&
          "string" === typeof e &&
          ((null === (t = e.match(Ne)) || void 0 === t ? void 0 : t.length) ||
            0) +
            ((null === (n = e.match(Qe)) || void 0 === n ? void 0 : n.length) ||
              0) >
            0
        );
      },
      parse: $e,
      createTransformer: et,
      getAnimatableNone: function (e) {
        const t = $e(e);
        return et(e)(t.map(tt));
      },
    },
    rt = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function it(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if ("drop-shadow" === t) return e;
    const [r] = n.match(Ne) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let a = rt.has(t) ? 1 : 0;
    return r !== n && (a *= 100), t + "(" + a + i + ")";
  }
  const at =
      /\b([\x2Da-z]*)\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\)/g,
    ot = f(
      f({}, nt),
      {},
      {
        getAnimatableNone: (e) => {
          const t = e.match(at);
          return t ? t.map(it).join(" ") : e;
        },
      }
    ),
    st = {
      borderWidth: We,
      borderTopWidth: We,
      borderRightWidth: We,
      borderBottomWidth: We,
      borderLeftWidth: We,
      borderRadius: We,
      radius: We,
      borderTopLeftRadius: We,
      borderTopRightRadius: We,
      borderBottomRightRadius: We,
      borderBottomLeftRadius: We,
      width: We,
      maxWidth: We,
      height: We,
      maxHeight: We,
      top: We,
      right: We,
      bottom: We,
      left: We,
      padding: We,
      paddingTop: We,
      paddingRight: We,
      paddingBottom: We,
      paddingLeft: We,
      margin: We,
      marginTop: We,
      marginRight: We,
      marginBottom: We,
      marginLeft: We,
      backgroundPositionX: We,
      backgroundPositionY: We,
    },
    lt = {
      rotate: Ie,
      rotateX: Ie,
      rotateY: Ie,
      rotateZ: Ie,
      scale: De,
      scaleX: De,
      scaleY: De,
      scaleZ: De,
      skew: Ie,
      skewX: Ie,
      skewY: Ie,
      distance: We,
      translateX: We,
      translateY: We,
      translateZ: We,
      x: We,
      y: We,
      z: We,
      perspective: We,
      transformPerspective: We,
      opacity: Te,
      originX: Ye,
      originY: Ye,
      originZ: We,
    },
    ut = f(
      f({}, Fe),
      {},
      {
        transform: Math.round,
      }
    ),
    ct = f(
      f(f({}, st), lt),
      {},
      {
        zIndex: ut,
        size: We,
        fillOpacity: Te,
        strokeOpacity: Te,
        numOctaves: ut,
      }
    ),
    dt = f(
      f({}, ct),
      {},
      {
        color: qe,
        backgroundColor: qe,
        outlineColor: qe,
        fill: qe,
        stroke: qe,
        borderColor: qe,
        borderTopColor: qe,
        borderRightColor: qe,
        borderBottomColor: qe,
        borderLeftColor: qe,
        filter: ot,
        WebkitFilter: ot,
      }
    ),
    ft = (e) => dt[e];
  function ht(e, t) {
    let n = ft(e);
    return (
      n !== ot && (n = nt),
      n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    );
  }
  const pt = new Set(["auto", "none", "0"]);
  const mt = (e) => e === Fe || e === We,
    gt = (e, t) => parseFloat(e.split(", ")[t]),
    vt = (e, t) => (n, r) => {
      let { transform: i } = r;
      if ("none" === i || !i) return 0;
      const a = i.match(
        /^matrix3d\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\)$/
      );
      if (a) return gt(a[1], t);
      {
        const t = i.match(
          /^matrix\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\)$/
        );
        return t ? gt(t[1], e) : 0;
      }
    },
    yt = new Set(["x", "y", "z"]),
    bt = b.filter((e) => !yt.has(e));
  const xt = {
    width: (e, t) => {
      let { x: n } = e,
        { paddingLeft: r = "0", paddingRight: i = "0" } = t;
      return n.max - n.min - parseFloat(r) - parseFloat(i);
    },
    height: (e, t) => {
      let { y: n } = e,
        { paddingTop: r = "0", paddingBottom: i = "0" } = t;
      return n.max - n.min - parseFloat(r) - parseFloat(i);
    },
    top: (e, t) => {
      let { top: n } = t;
      return parseFloat(n);
    },
    left: (e, t) => {
      let { left: n } = t;
      return parseFloat(n);
    },
    bottom: (e, t) => {
      let { y: n } = e,
        { top: r } = t;
      return parseFloat(r) + (n.max - n.min);
    },
    right: (e, t) => {
      let { x: n } = e,
        { left: r } = t;
      return parseFloat(r) + (n.max - n.min);
    },
    x: vt(4, 13),
    y: vt(5, 14),
  };
  (xt.translateX = xt.x), (xt.translateY = xt.y);
  const wt = new Set();
  let St = !1,
    kt = !1;
  function At() {
    if (kt) {
      const e = Array.from(wt).filter((e) => e.needsMeasurement),
        t = new Set(e.map((e) => e.element)),
        n = new Map();
      t.forEach((e) => {
        const t = (function (e) {
          const t = [];
          return (
            bt.forEach((n) => {
              const r = e.getValue(n);
              void 0 !== r &&
                (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
            }),
            t
          );
        })(e);
        t.length && (n.set(e, t), e.render());
      }),
        e.forEach((e) => e.measureInitialState()),
        t.forEach((e) => {
          e.render();
          const t = n.get(e);
          t &&
            t.forEach((t) => {
              let [n, r] = t;
              var i;
              null === (i = e.getValue(n)) || void 0 === i || i.set(r);
            });
        }),
        e.forEach((e) => e.measureEndState()),
        e.forEach((e) => {
          void 0 !== e.suspendedScrollY &&
            window.scrollTo(0, e.suspendedScrollY);
        });
    }
    (kt = !1), (St = !1), wt.forEach((e) => e.complete()), wt.clear();
  }
  function Et() {
    wt.forEach((e) => {
      e.readKeyframes(), e.needsMeasurement && (kt = !0);
    });
  }
  class Pt {
    constructor(e, t, n, r, i) {
      let a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      (this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a);
    }
    scheduleResolve() {
      (this.isScheduled = !0),
        this.isAsync
          ? (wt.add(this),
            St || ((St = !0), T.read(Et), T.resolveKeyframes(At)))
          : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      for (let i = 0; i < e.length; i++)
        if (null === e[i])
          if (0 === i) {
            const i = null === r || void 0 === r ? void 0 : r.get(),
              a = e[e.length - 1];
            if (void 0 !== i) e[0] = i;
            else if (n && t) {
              const r = n.readValue(t, a);
              void 0 !== r && null !== r && (e[0] = r);
            }
            void 0 === e[0] && (e[0] = a), r && void 0 === i && r.set(e[0]);
          } else e[i] = e[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      (this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        wt.delete(this);
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), wt.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  }
  let Ct = E,
    Ft = E;
  const Tt = (e) => /^-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/.test(e),
    Dt = (e) => (t) => "string" === typeof t && t.startsWith(e),
    jt = Dt("--"),
    Nt = Dt("var(--"),
    Lt = (e) => !!Nt(e) && Ot.test(e.split("/*")[0].trim()),
    Ot =
      /var\(--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)$/i,
    Rt =
      /^var\(--(?:([\x2D0-9A-Z_a-z]+)|([\x2D0-9A-Z_a-z]+), ?([ #%\(\),-\.0-9A-Za-z]+))\)/;
  function Mt(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    Ft(
      n <= 4,
      'Max CSS variable fallback depth detected in property "'.concat(
        e,
        '". This may indicate a circular fallback dependency.'
      )
    );
    const [r, i] = (function (e) {
      const t = Rt.exec(e);
      if (!t) return [,];
      const [, n, r, i] = t;
      return ["--".concat(null !== n && void 0 !== n ? n : r), i];
    })(e);
    if (!r) return;
    const a = window.getComputedStyle(t).getPropertyValue(r);
    if (a) {
      const e = a.trim();
      return Tt(e) ? parseFloat(e) : e;
    }
    return Lt(i) ? Mt(i, t, n + 1) : i;
  }
  const zt = (e) => (t) => t.test(e),
    Vt = [
      Fe,
      We,
      Ue,
      Ie,
      He,
      _e,
      {
        test: (e) => "auto" === e,
        parse: (e) => e,
      },
    ],
    Bt = (e) => Vt.find(zt(e));
  class It extends Pt {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let s = 0; s < e.length; s++) {
        let n = e[s];
        if ("string" === typeof n && ((n = n.trim()), Lt(n))) {
          const r = Mt(n, t.current);
          void 0 !== r && (e[s] = r),
            s === e.length - 1 && (this.finalKeyframe = n);
        }
      }
      if ((this.resolveNoneKeyframes(), !w.has(n) || 2 !== e.length)) return;
      const [r, i] = e,
        a = Bt(r),
        o = Bt(i);
      if (a !== o)
        if (mt(a) && mt(o))
          for (let s = 0; s < e.length; s++) {
            const t = e[s];
            "string" === typeof t && (e[s] = parseFloat(t));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let i = 0; i < e.length; i++)
        ("number" === typeof (r = e[i])
          ? 0 === r
          : null === r || "none" === r || "0" === r || Pe(r)) && n.push(i);
      var r;
      n.length &&
        (function (e, t, n) {
          let r,
            i = 0;
          for (; i < e.length && !r; ) {
            const t = e[i];
            "string" === typeof t &&
              !pt.has(t) &&
              Ze(t).values.length &&
              (r = e[i]),
              i++;
          }
          if (r && n) for (const a of t) e[a] = ht(n, r);
        })(e, n, t);
    }
    measureInitialState() {
      const { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      "height" === n && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = xt[n](
          e.measureViewportBox(),
          window.getComputedStyle(e.current)
        )),
        (t[0] = this.measuredOrigin);
      const r = t[t.length - 1];
      void 0 !== r && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      var e;
      const { element: t, name: n, unresolvedKeyframes: r } = this;
      if (!t || !t.current) return;
      const i = t.getValue(n);
      i && i.jump(this.measuredOrigin, !1);
      const a = r.length - 1,
        o = r[a];
      (r[a] = xt[n](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
        null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
        (null === (e = this.removedTransforms) || void 0 === e
          ? void 0
          : e.length) &&
          this.removedTransforms.forEach((e) => {
            let [n, r] = e;
            t.getValue(n).set(r);
          }),
        this.resolveNoneKeyframes();
    }
  }
  const Ut = (e, t) =>
    "zIndex" !== t &&
    (!("number" !== typeof e && !Array.isArray(e)) ||
      !(
        "string" !== typeof e ||
        (!nt.test(e) && "0" !== e) ||
        e.startsWith("url(")
      ));
  function Wt(e, t, n, r) {
    const i = e[0];
    if (null === i) return !1;
    if ("display" === t || "visibility" === t) return !0;
    const a = e[e.length - 1],
      o = Ut(i, t),
      s = Ut(a, t);
    return (
      Ct(
        o === s,
        "You are trying to animate "
          .concat(t, ' from "')
          .concat(i, '" to "')
          .concat(a, '". ')
          .concat(
            i,
            " is not an animatable value - to enable this animation set "
          )
          .concat(i, " to a value animatable to ")
          .concat(a, " via the `style` property.")
      ),
      !(!o || !s) &&
        ((function (e) {
          const t = e[0];
          if (1 === e.length) return !0;
          for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
        })(e) ||
          (("spring" === n || re(n)) && r))
    );
  }
  const _t = (e) => null !== e;
  function Ht(e, t, n) {
    let { repeat: r, repeatType: i = "loop" } = t;
    const a = e.filter(_t),
      o = r && "loop" !== i && r % 2 === 1 ? 0 : a.length - 1;
    return o && void 0 !== n ? n : a[o];
  }
  const Yt = [
    "autoplay",
    "delay",
    "type",
    "repeat",
    "repeatDelay",
    "repeatType",
  ];
  class Kt {
    constructor(e) {
      let {
          autoplay: t = !0,
          delay: n = 0,
          type: r = "keyframes",
          repeat: i = 0,
          repeatDelay: a = 0,
          repeatType: o = "loop",
        } = e,
        s = p(e, Yt);
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = R.now()),
        (this.options = f(
          {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: a,
            repeatType: o,
          },
          s
        )),
        this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > 40
        ? this.resolvedAt
        : this.createdAt;
    }
    get resolved() {
      return (
        this._resolved || this.hasAttemptedResolve || (Et(), At()),
        this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      (this.resolvedAt = R.now()), (this.hasAttemptedResolve = !0);
      const {
        name: n,
        type: r,
        velocity: i,
        delay: a,
        onComplete: o,
        onUpdate: s,
        isGenerator: l,
      } = this.options;
      if (!l && !Wt(e, n, r, i)) {
        if (ne || !a)
          return (
            s && s(Ht(e, this.options, t)),
            o && o(),
            void this.resolveFinishedPromise()
          );
        this.options.duration = 0;
      }
      const u = this.initPlayback(e, t);
      !1 !== u &&
        ((this._resolved = f(
          {
            keyframes: e,
            finalKeyframe: t,
          },
          u
        )),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    flatten() {
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"), (this.options.ease = "linear"));
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  }
  const qt = 2e4;
  function Qt(e) {
    let t = 0;
    let n = e.next(t);
    for (; !n.done && t < qt; ) (t += 50), (n = e.next(t));
    return t >= qt ? 1 / 0 : t;
  }
  const Xt = {
      layout: 0,
      mainThread: 0,
      waapi: 0,
    },
    Gt = (e, t, n) => e + (t - e) * n;
  function Jt(e, t, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? e + 6 * (t - e) * n
        : n < 0.5
        ? t
        : n < 2 / 3
        ? e + (t - e) * (2 / 3 - n) * 6
        : e
    );
  }
  function Zt(e, t) {
    return (n) => (n > 0 ? t : e);
  }
  const $t = (e, t, n) => {
      const r = e * e,
        i = n * (t * t - r) + r;
      return i < 0 ? 0 : Math.sqrt(i);
    },
    en = [Ve, ze, Ke];
  function tn(e) {
    const t = ((n = e), en.find((e) => e.test(n)));
    var n;
    if (
      (Ct(
        Boolean(t),
        "'".concat(
          e,
          "' is not an animatable color. Use the equivalent color code instead."
        )
      ),
      !Boolean(t))
    )
      return !1;
    let r = t.parse(e);
    return (
      t === Ke &&
        (r = (function (e) {
          let { hue: t, saturation: n, lightness: r, alpha: i } = e;
          (t /= 360), (n /= 100), (r /= 100);
          let a = 0,
            o = 0,
            s = 0;
          if (n) {
            const e = r < 0.5 ? r * (1 + n) : r + n - r * n,
              i = 2 * r - e;
            (a = Jt(i, e, t + 1 / 3)),
              (o = Jt(i, e, t)),
              (s = Jt(i, e, t - 1 / 3));
          } else a = o = s = r;
          return {
            red: Math.round(255 * a),
            green: Math.round(255 * o),
            blue: Math.round(255 * s),
            alpha: i,
          };
        })(r)),
      r
    );
  }
  const nn = (e, t) => {
      const n = tn(e),
        r = tn(t);
      if (!n || !r) return Zt(e, t);
      const i = f({}, n);
      return (e) => (
        (i.red = $t(n.red, r.red, e)),
        (i.green = $t(n.green, r.green, e)),
        (i.blue = $t(n.blue, r.blue, e)),
        (i.alpha = Gt(n.alpha, r.alpha, e)),
        ze.transform(i)
      );
    },
    rn = (e, t) => (n) => t(e(n)),
    an = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.reduce(rn);
    },
    on = new Set(["none", "hidden"]);
  function sn(e, t) {
    return (n) => Gt(e, t, n);
  }
  function ln(e) {
    return "number" === typeof e
      ? sn
      : "string" === typeof e
      ? Lt(e)
        ? Zt
        : qe.test(e)
        ? nn
        : dn
      : Array.isArray(e)
      ? un
      : "object" === typeof e
      ? qe.test(e)
        ? nn
        : cn
      : Zt;
  }
  function un(e, t) {
    const n = [...e],
      r = n.length,
      i = e.map((e, n) => ln(e)(e, t[n]));
    return (e) => {
      for (let t = 0; t < r; t++) n[t] = i[t](e);
      return n;
    };
  }
  function cn(e, t) {
    const n = f(f({}, e), t),
      r = {};
    for (const i in n)
      void 0 !== e[i] && void 0 !== t[i] && (r[i] = ln(e[i])(e[i], t[i]));
    return (e) => {
      for (const t in r) n[t] = r[t](e);
      return n;
    };
  }
  const dn = (e, t) => {
    const n = nt.createTransformer(t),
      r = Ze(e),
      i = Ze(t);
    return r.indexes.var.length === i.indexes.var.length &&
      r.indexes.color.length === i.indexes.color.length &&
      r.indexes.number.length >= i.indexes.number.length
      ? (on.has(e) && !i.values.length) || (on.has(t) && !r.values.length)
        ? (function (e, t) {
            return on.has(e)
              ? (n) => (n <= 0 ? e : t)
              : (n) => (n >= 1 ? t : e);
          })(e, t)
        : an(
            un(
              (function (e, t) {
                var n;
                const r = [],
                  i = {
                    color: 0,
                    var: 0,
                    number: 0,
                  };
                for (let a = 0; a < t.values.length; a++) {
                  const o = t.types[a],
                    s = e.indexes[o][i[o]],
                    l = null !== (n = e.values[s]) && void 0 !== n ? n : 0;
                  (r[a] = l), i[o]++;
                }
                return r;
              })(r, i),
              i.values
            ),
            n
          )
      : (Ct(
          !0,
          "Complex values '"
            .concat(e, "' and '")
            .concat(
              t,
              "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
            )
        ),
        Zt(e, t));
  };
  function fn(e, t, n) {
    if ("number" === typeof e && "number" === typeof t && "number" === typeof n)
      return Gt(e, t, n);
    return ln(e)(e, t);
  }
  function hn(e, t, n) {
    const r = Math.max(t - 5, 0);
    return B(n - e(r), t - r);
  }
  const pn = {
      stiffness: 100,
      damping: 10,
      mass: 1,
      velocity: 0,
      duration: 800,
      bounce: 0.3,
      visualDuration: 0.3,
      restSpeed: {
        granular: 0.01,
        default: 2,
      },
      restDelta: {
        granular: 0.005,
        default: 0.5,
      },
      minDuration: 0.01,
      maxDuration: 10,
      minDamping: 0.05,
      maxDamping: 1,
    },
    mn = 0.001;
  function gn(e) {
    let t,
      n,
      {
        duration: r = pn.duration,
        bounce: i = pn.bounce,
        velocity: a = pn.velocity,
        mass: o = pn.mass,
      } = e;
    Ct(r <= ee(pn.maxDuration), "Spring duration must be 10 seconds or less");
    let s = 1 - i;
    (s = Ce(pn.minDamping, pn.maxDamping, s)),
      (r = Ce(pn.minDuration, pn.maxDuration, te(r))),
      s < 1
        ? ((t = (e) => {
            const t = e * s,
              n = t * r,
              i = t - a,
              o = yn(e, s),
              l = Math.exp(-n);
            return mn - (i / o) * l;
          }),
          (n = (e) => {
            const n = e * s * r,
              i = n * a + a,
              o = Math.pow(s, 2) * Math.pow(e, 2) * r,
              l = Math.exp(-n),
              u = yn(Math.pow(e, 2), s);
            return ((-t(e) + mn > 0 ? -1 : 1) * ((i - o) * l)) / u;
          }))
        : ((t = (e) => Math.exp(-e * r) * ((e - a) * r + 1) - 0.001),
          (n = (e) => Math.exp(-e * r) * (r * r * (a - e))));
    const l = (function (e, t, n) {
      let r = n;
      for (let i = 1; i < vn; i++) r -= e(r) / t(r);
      return r;
    })(t, n, 5 / r);
    if (((r = ee(r)), isNaN(l)))
      return {
        stiffness: pn.stiffness,
        damping: pn.damping,
        duration: r,
      };
    {
      const e = Math.pow(l, 2) * o;
      return {
        stiffness: e,
        damping: 2 * s * Math.sqrt(o * e),
        duration: r,
      };
    }
  }
  const vn = 12;
  function yn(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const bn = ["duration", "bounce"],
    xn = ["stiffness", "damping", "mass"];
  function wn(e, t) {
    return t.some((t) => void 0 !== e[t]);
  }
  function Sn() {
    let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : pn.visualDuration,
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : pn.bounce;
    const n =
      "object" !== typeof e
        ? {
            visualDuration: e,
            keyframes: [0, 1],
            bounce: t,
          }
        : e;
    let { restSpeed: r, restDelta: i } = n;
    const a = n.keyframes[0],
      o = n.keyframes[n.keyframes.length - 1],
      s = {
        done: !1,
        value: a,
      },
      {
        stiffness: l,
        damping: u,
        mass: c,
        duration: d,
        velocity: h,
        isResolvedFromDuration: p,
      } = (function (e) {
        let t = f(
          {
            velocity: pn.velocity,
            stiffness: pn.stiffness,
            damping: pn.damping,
            mass: pn.mass,
            isResolvedFromDuration: !1,
          },
          e
        );
        if (!wn(e, xn) && wn(e, bn))
          if (e.visualDuration) {
            const n = e.visualDuration,
              r = (2 * Math.PI) / (1.2 * n),
              i = r * r,
              a = 2 * Ce(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = f(
              f({}, t),
              {},
              {
                mass: pn.mass,
                stiffness: i,
                damping: a,
              }
            );
          } else {
            const n = gn(e);
            (t = f(
              f(f({}, t), n),
              {},
              {
                mass: pn.mass,
              }
            )),
              (t.isResolvedFromDuration = !0);
          }
        return t;
      })(
        f(
          f({}, n),
          {},
          {
            velocity: -te(n.velocity || 0),
          }
        )
      ),
      m = h || 0,
      g = u / (2 * Math.sqrt(l * c)),
      v = o - a,
      y = te(Math.sqrt(l / c)),
      b = Math.abs(v) < 5;
    let x;
    if (
      (r || (r = b ? pn.restSpeed.granular : pn.restSpeed.default),
      i || (i = b ? pn.restDelta.granular : pn.restDelta.default),
      g < 1)
    ) {
      const e = yn(y, g);
      x = (t) => {
        const n = Math.exp(-g * y * t);
        return (
          o -
          n * (((m + g * y * v) / e) * Math.sin(e * t) + v * Math.cos(e * t))
        );
      };
    } else if (1 === g) x = (e) => o - Math.exp(-y * e) * (v + (m + y * v) * e);
    else {
      const e = y * Math.sqrt(g * g - 1);
      x = (t) => {
        const n = Math.exp(-g * y * t),
          r = Math.min(e * t, 300);
        return (
          o - (n * ((m + g * y * v) * Math.sinh(r) + e * v * Math.cosh(r))) / e
        );
      };
    }
    const w = {
      calculatedDuration: (p && d) || null,
      next: (e) => {
        const t = x(e);
        if (p) s.done = e >= d;
        else {
          let n = 0;
          g < 1 && (n = 0 === e ? ee(m) : hn(x, e, t));
          const a = Math.abs(n) <= r,
            l = Math.abs(o - t) <= i;
          s.done = a && l;
        }
        return (s.value = s.done ? o : t), s;
      },
      toString: () => {
        const e = Math.min(Qt(w), qt),
          t = ce((t) => w.next(e * t).value, e, 30);
        return e + "ms " + t;
      },
    };
    return w;
  }
  function kn(e) {
    let {
      keyframes: t,
      velocity: n = 0,
      power: r = 0.8,
      timeConstant: i = 325,
      bounceDamping: a = 10,
      bounceStiffness: o = 500,
      modifyTarget: s,
      min: l,
      max: u,
      restDelta: c = 0.5,
      restSpeed: d,
    } = e;
    const f = t[0],
      h = {
        done: !1,
        value: f,
      },
      p = (e) =>
        void 0 === l
          ? u
          : void 0 === u || Math.abs(l - e) < Math.abs(u - e)
          ? l
          : u;
    let m = r * n;
    const g = f + m,
      v = void 0 === s ? g : s(g);
    v !== g && (m = v - f);
    const y = (e) => -m * Math.exp(-e / i),
      b = (e) => v + y(e),
      x = (e) => {
        const t = y(e),
          n = b(e);
        (h.done = Math.abs(t) <= c), (h.value = h.done ? v : n);
      };
    let w, S;
    const k = (e) => {
      var t;
      ((t = h.value), (void 0 !== l && t < l) || (void 0 !== u && t > u)) &&
        ((w = e),
        (S = Sn({
          keyframes: [h.value, p(h.value)],
          velocity: hn(b, e, h.value),
          damping: a,
          stiffness: o,
          restDelta: c,
          restSpeed: d,
        })));
    };
    return (
      k(0),
      {
        calculatedDuration: null,
        next: (e) => {
          let t = !1;
          return (
            S || void 0 !== w || ((t = !0), x(e), k(e)),
            void 0 !== w && e >= w ? S.next(e - w) : (!t && x(e), h)
          );
        },
      }
    );
  }
  const An = ge(0.42, 0, 1, 1),
    En = ge(0, 0, 0.58, 1),
    Pn = ge(0.42, 0, 0.58, 1),
    Cn = {
      linear: E,
      easeIn: An,
      easeInOut: Pn,
      easeOut: En,
      circIn: ke,
      circInOut: Ee,
      circOut: Ae,
      backIn: xe,
      backInOut: we,
      backOut: be,
      anticipate: Se,
    },
    Fn = (e) => {
      if (ae(e)) {
        Ft(
          4 === e.length,
          "Cubic bezier arrays must contain four numerical values."
        );
        const [t, n, r, i] = e;
        return ge(t, n, r, i);
      }
      return "string" === typeof e
        ? (Ft(void 0 !== Cn[e], "Invalid easing type '".concat(e, "'")), Cn[e])
        : e;
    };
  function Tn(e, t) {
    let {
      clamp: n = !0,
      ease: r,
      mixer: i,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const a = e.length;
    if (
      (Ft(
        a === t.length,
        "Both input and output ranges must be the same length"
      ),
      1 === a)
    )
      return () => t[0];
    if (2 === a && t[0] === t[1]) return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const s = (function (e, t, n) {
        const r = [],
          i = n || fn,
          a = e.length - 1;
        for (let o = 0; o < a; o++) {
          let n = i(e[o], e[o + 1]);
          if (t) {
            const e = Array.isArray(t) ? t[o] || E : t;
            n = an(e, n);
          }
          r.push(n);
        }
        return r;
      })(t, r, i),
      l = s.length,
      u = (n) => {
        if (o && n < e[0]) return t[0];
        let r = 0;
        if (l > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
        const i = ue(e[r], e[r + 1], n);
        return s[r](i);
      };
    return n ? (t) => u(Ce(e[0], e[a - 1], t)) : u;
  }
  function Dn(e) {
    const t = [0];
    return (
      (function (e, t) {
        const n = e[e.length - 1];
        for (let r = 1; r <= t; r++) {
          const i = ue(0, t, r);
          e.push(Gt(n, 1, i));
        }
      })(t, e.length - 1),
      t
    );
  }
  function jn(e) {
    let {
      duration: t = 300,
      keyframes: n,
      times: r,
      ease: i = "easeInOut",
    } = e;
    const a = ((e) => Array.isArray(e) && "number" !== typeof e[0])(i)
        ? i.map(Fn)
        : Fn(i),
      o = {
        done: !1,
        value: n[0],
      },
      s = (function (e, t) {
        return e.map((e) => e * t);
      })(r && r.length === n.length ? r : Dn(n), t),
      l = Tn(s, n, {
        ease: Array.isArray(a)
          ? a
          : ((u = n), (c = a), u.map(() => c || Pn).splice(0, u.length - 1)),
      });
    var u, c;
    return {
      calculatedDuration: t,
      next: (e) => ((o.value = l(e)), (o.done = e >= t), o),
    };
  }
  const Nn = (e) => {
      const t = (t) => {
        let { timestamp: n } = t;
        return e(n);
      };
      return {
        start: () => T.update(t, !0),
        stop: () => D(t),
        now: () => (j.isProcessing ? j.timestamp : R.now()),
      };
    },
    Ln = {
      decay: kn,
      inertia: kn,
      tween: jn,
      keyframes: jn,
      spring: Sn,
    },
    On = (e) => e / 100;
  class Rn extends Kt {
    constructor(e) {
      super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.startTime = null),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.teardown();
          const { onStop: e } = this.options;
          e && e();
        });
      const {
          name: t,
          motionValue: n,
          element: r,
          keyframes: i,
        } = this.options,
        a = (null === r || void 0 === r ? void 0 : r.KeyframeResolver) || Pt;
      (this.resolver = new a(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r
      )),
        this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes)
          );
    }
    initPlayback(e) {
      const {
          type: t = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = this.options,
        o = re(t) ? t : Ln[t] || jn;
      let s, l;
      o !== jn &&
        "number" !== typeof e[0] &&
        ((s = an(On, fn(e[0], e[1]))), (e = [0, 100]));
      const u = o(
        f(
          f({}, this.options),
          {},
          {
            keyframes: e,
          }
        )
      );
      "mirror" === i &&
        (l = o(
          f(
            f({}, this.options),
            {},
            {
              keyframes: [...e].reverse(),
              velocity: -a,
            }
          )
        )),
        null === u.calculatedDuration && (u.calculatedDuration = Qt(u));
      const { calculatedDuration: c } = u,
        d = c + r;
      return {
        generator: u,
        mirroredGenerator: l,
        mapPercentToKeyframes: s,
        calculatedDuration: c,
        resolvedDuration: d,
        totalDuration: d * (n + 1) - r,
      };
    }
    onPostResolved() {
      const { autoplay: e = !0 } = this.options;
      Xt.mainThread++,
        this.play(),
        "paused" !== this.pendingPlayState && e
          ? (this.state = this.pendingPlayState)
          : this.pause();
    }
    tick(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const { resolved: n } = this;
      if (!n) {
        const { keyframes: e } = this.options;
        return {
          done: !0,
          value: e[e.length - 1],
        };
      }
      const {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: a,
        mapPercentToKeyframes: o,
        keyframes: s,
        calculatedDuration: l,
        totalDuration: u,
        resolvedDuration: c,
      } = n;
      if (null === this.startTime) return i.next(0);
      const {
        delay: d,
        repeat: f,
        repeatType: h,
        repeatDelay: p,
        onUpdate: m,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - u / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : null !== this.holdTime
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed);
      const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
        v = this.speed >= 0 ? g < 0 : g > u;
      (this.currentTime = Math.max(g, 0)),
        "finished" === this.state &&
          null === this.holdTime &&
          (this.currentTime = u);
      let y = this.currentTime,
        b = i;
      if (f) {
        const e = Math.min(this.currentTime, u) / c;
        let t = Math.floor(e),
          n = e % 1;
        !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, f + 1));
        Boolean(t % 2) &&
          ("reverse" === h
            ? ((n = 1 - n), p && (n -= p / c))
            : "mirror" === h && (b = a)),
          (y = Ce(0, 1, n) * c);
      }
      const x = v
        ? {
            done: !1,
            value: s[0],
          }
        : b.next(y);
      o && (x.value = o(x.value));
      let { done: w } = x;
      v ||
        null === l ||
        (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
      const S =
        null === this.holdTime &&
        ("finished" === this.state || ("running" === this.state && w));
      return (
        S && void 0 !== r && (x.value = Ht(s, this.options, r)),
        m && m(x.value),
        S && this.finish(),
        x
      );
    }
    get duration() {
      const { resolved: e } = this;
      return e ? te(e.calculatedDuration) : 0;
    }
    get time() {
      return te(this.currentTime);
    }
    set time(e) {
      (e = ee(e)),
        (this.currentTime = e),
        null !== this.holdTime || 0 === this.speed
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      const t = this.playbackSpeed !== e;
      (this.playbackSpeed = e), t && (this.time = te(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      )
        return void (this.pendingPlayState = "running");
      if (this.isStopped) return;
      const { driver: e = Nn, onPlay: t, startTime: n } = this.options;
      this.driver || (this.driver = e((e) => this.tick(e))), t && t();
      const r = this.driver.now();
      null !== this.holdTime
        ? (this.startTime = r - this.holdTime)
        : this.startTime
        ? "finished" === this.state && (this.startTime = r)
        : (this.startTime =
            null !== n && void 0 !== n ? n : this.calcStartTime()),
        "finished" === this.state && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var e;
      this._resolved
        ? ((this.state = "paused"),
          (this.holdTime =
            null !== (e = this.currentTime) && void 0 !== e ? e : 0))
        : (this.pendingPlayState = "paused");
    }
    complete() {
      "running" !== this.state && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      const { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      null !== this.cancelTime && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel(),
        Xt.mainThread--;
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0);
    }
  }
  const Mn = new Set(["opacity", "clipPath", "filter", "transform"]);
  function zn(e, t, n) {
    let {
      delay: r = 0,
      duration: i = 300,
      repeat: a = 0,
      repeatType: o = "loop",
      ease: s = "easeInOut",
      times: l,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const u = {
      [t]: n,
    };
    l && (u.offset = l);
    const c = pe(s, i);
    Array.isArray(c) && (u.easing = c), C.value && Xt.waapi++;
    const d = e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: a + 1,
      direction: "reverse" === o ? "alternate" : "normal",
    });
    return (
      C.value &&
        d.finished.finally(() => {
          Xt.waapi--;
        }),
      d
    );
  }
  const Vn = G(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Bn = ["onComplete", "onUpdate", "motionValue", "element"],
    In = ["motionValue", "onUpdate", "onComplete", "element"];
  const Un = {
    anticipate: Se,
    backInOut: we,
    circInOut: Ee,
  };
  class Wn extends Kt {
    constructor(e) {
      super(e);
      const {
        name: t,
        motionValue: n,
        element: r,
        keyframes: i,
      } = this.options;
      (this.resolver = new It(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r
      )),
        this.resolver.scheduleResolve();
    }
    initPlayback(e, t) {
      let {
        duration: n = 300,
        times: r,
        ease: i,
        type: a,
        motionValue: o,
        name: s,
        startTime: l,
      } = this.options;
      if (!o.owner || !o.owner.current) return !1;
      var u;
      if (
        ("string" === typeof i && le() && i in Un && (i = Un[i]),
        re((u = this.options).type) || "spring" === u.type || !de(u.ease))
      ) {
        const t = this.options,
          { onComplete: o, onUpdate: s, motionValue: l, element: u } = t,
          c = p(t, Bn),
          d = (function (e, t) {
            const n = new Rn(
              f(
                f({}, t),
                {},
                {
                  keyframes: e,
                  repeat: 0,
                  delay: 0,
                  isGenerator: !0,
                }
              )
            );
            let r = {
              done: !1,
              value: e[0],
            };
            const i = [];
            let a = 0;
            for (; !r.done && a < 2e4; )
              (r = n.sample(a)), i.push(r.value), (a += 10);
            return {
              times: void 0,
              keyframes: i,
              duration: a - 10,
              ease: "linear",
            };
          })(e, c);
        1 === (e = d.keyframes).length && (e[1] = e[0]),
          (n = d.duration),
          (r = d.times),
          (i = d.ease),
          (a = "keyframes");
      }
      const c = zn(
        o.owner.current,
        s,
        e,
        f(
          f({}, this.options),
          {},
          {
            duration: n,
            times: r,
            ease: i,
          }
        )
      );
      return (
        (c.startTime = null !== l && void 0 !== l ? l : this.calcStartTime()),
        this.pendingTimeline
          ? (ie(c, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (c.onfinish = () => {
              const { onComplete: n } = this.options;
              o.set(Ht(e, this.options, t)),
                n && n(),
                this.cancel(),
                this.resolveFinishedPromise();
            }),
        {
          animation: c,
          duration: n,
          times: r,
          type: a,
          ease: i,
          keyframes: e,
        }
      );
    }
    get duration() {
      const { resolved: e } = this;
      if (!e) return 0;
      const { duration: t } = e;
      return te(t);
    }
    get time() {
      const { resolved: e } = this;
      if (!e) return 0;
      const { animation: t } = e;
      return te(t.currentTime || 0);
    }
    set time(e) {
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.currentTime = ee(e);
    }
    get speed() {
      const { resolved: e } = this;
      if (!e) return 1;
      const { animation: t } = e;
      return t.playbackRate;
    }
    set speed(e) {
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.playbackRate = e;
    }
    get state() {
      const { resolved: e } = this;
      if (!e) return "idle";
      const { animation: t } = e;
      return t.playState;
    }
    get startTime() {
      const { resolved: e } = this;
      if (!e) return null;
      const { animation: t } = e;
      return t.startTime;
    }
    attachTimeline(e) {
      if (this._resolved) {
        const { resolved: t } = this;
        if (!t) return E;
        const { animation: n } = t;
        ie(n, e);
      } else this.pendingTimeline = e;
      return E;
    }
    play() {
      if (this.isStopped) return;
      const { resolved: e } = this;
      if (!e) return;
      const { animation: t } = e;
      "finished" === t.playState && this.updateFinishedPromise(), t.play();
    }
    pause() {
      const { resolved: e } = this;
      if (!e) return;
      const { animation: t } = e;
      t.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)
      )
        return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      const { resolved: e } = this;
      if (!e) return;
      const {
        animation: t,
        keyframes: n,
        duration: r,
        type: i,
        ease: a,
        times: o,
      } = e;
      if ("idle" === t.playState || "finished" === t.playState) return;
      if (this.time) {
        const e = this.options,
          { motionValue: t, onUpdate: s, onComplete: l, element: u } = e,
          c = p(e, In),
          d = new Rn(
            f(
              f({}, c),
              {},
              {
                keyframes: n,
                duration: r,
                type: i,
                ease: a,
                times: o,
                isGenerator: !0,
              }
            )
          ),
          h = ee(this.time);
        t.setWithVelocity(d.sample(h - 10).value, d.sample(h).value, 10);
      }
      const { onStop: s } = this.options;
      s && s(), this.cancel();
    }
    complete() {
      const { resolved: e } = this;
      e && e.animation.finish();
    }
    cancel() {
      const { resolved: e } = this;
      e && e.animation.cancel();
    }
    static supports(e) {
      const {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: a,
        type: o,
      } = e;
      if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
        return !1;
      const { onUpdate: s, transformTemplate: l } = t.owner.getProps();
      return (
        Vn() &&
        n &&
        Mn.has(n) &&
        !s &&
        !l &&
        !r &&
        "mirror" !== i &&
        0 !== a &&
        "inertia" !== o
      );
    }
  }
  const _n = {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restSpeed: 10,
    },
    Hn = {
      type: "keyframes",
      duration: 0.8,
    },
    Yn = {
      type: "keyframes",
      ease: [0.25, 0.1, 0.35, 1],
      duration: 0.3,
    },
    Kn = (e, t) => {
      let { keyframes: n } = t;
      return n.length > 2
        ? Hn
        : x.has(e)
        ? e.startsWith("scale")
          ? {
              type: "spring",
              stiffness: 550,
              damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
              restSpeed: 10,
            }
          : _n
        : Yn;
    },
    qn = [
      "when",
      "delay",
      "delayChildren",
      "staggerChildren",
      "staggerDirection",
      "repeat",
      "repeatType",
      "repeatDelay",
      "from",
      "elapsed",
    ];
  const Qn = function (e, t, n) {
      let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = arguments.length > 4 ? arguments[4] : void 0,
        a = arguments.length > 5 ? arguments[5] : void 0;
      return (o) => {
        const s = y(r, e) || {},
          l = s.delay || r.delay || 0;
        let { elapsed: u = 0 } = r;
        u -= ee(l);
        let c = f(
          f(
            {
              keyframes: Array.isArray(n) ? n : [null, n],
              ease: "easeOut",
              velocity: t.getVelocity(),
            },
            s
          ),
          {},
          {
            delay: -u,
            onUpdate: (e) => {
              t.set(e), s.onUpdate && s.onUpdate(e);
            },
            onComplete: () => {
              o(), s.onComplete && s.onComplete();
            },
            name: e,
            motionValue: t,
            element: a ? void 0 : i,
          }
        );
        (function (e) {
          let {
              when: t,
              delay: n,
              delayChildren: r,
              staggerChildren: i,
              staggerDirection: a,
              repeat: o,
              repeatType: s,
              repeatDelay: l,
              from: u,
              elapsed: c,
            } = e,
            d = p(e, qn);
          return !!Object.keys(d).length;
        })(s) || (c = f(f({}, c), Kn(e, c))),
          c.duration && (c.duration = ee(c.duration)),
          c.repeatDelay && (c.repeatDelay = ee(c.repeatDelay)),
          void 0 !== c.from && (c.keyframes[0] = c.from);
        let d = !1;
        if (
          ((!1 === c.type || (0 === c.duration && !c.repeatDelay)) &&
            ((c.duration = 0), 0 === c.delay && (d = !0)),
          (ne || k) && ((d = !0), (c.duration = 0), (c.delay = 0)),
          (c.allowFlatten = !s.type && !s.ease),
          d && !a && void 0 !== t.get())
        ) {
          const e = Ht(c.keyframes, s);
          if (void 0 !== e)
            return (
              T.update(() => {
                c.onUpdate(e), c.onComplete();
              }),
              new $([])
            );
        }
        return !a && Wn.supports(c) ? new Wn(c) : new Rn(c);
      };
    },
    Xn = ["transition", "transitionEnd"];
  function Gn(e, t) {
    let { protectedKeys: n, needsAnimating: r } = e;
    const i = n.hasOwnProperty(t) && !0 !== r[t];
    return (r[t] = !1), i;
  }
  function Jn(e, t) {
    let {
      delay: n = 0,
      transitionOverride: r,
      type: i,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var a;
    let { transition: o = e.getDefaultTransition(), transitionEnd: s } = t,
      l = p(t, Xn);
    r && (o = r);
    const u = [],
      c = i && e.animationState && e.animationState.getState()[i];
    for (const d in l) {
      const t = e.getValue(
          d,
          null !== (a = e.latestValues[d]) && void 0 !== a ? a : null
        ),
        r = l[d];
      if (void 0 === r || (c && Gn(c, d))) continue;
      const i = f(
        {
          delay: n,
        },
        y(o || {}, d)
      );
      let s = !1;
      if (window.MotionHandoffAnimation) {
        const t = X(e);
        if (t) {
          const e = window.MotionHandoffAnimation(t, d, T);
          null !== e && ((i.startTime = e), (s = !0));
        }
      }
      K(e, d),
        t.start(
          Qn(
            d,
            t,
            r,
            e.shouldReduceMotion && w.has(d)
              ? {
                  type: !1,
                }
              : i,
            e,
            s
          )
        );
      const h = t.animation;
      h && u.push(h);
    }
    return (
      s &&
        Promise.all(u).then(() => {
          T.update(() => {
            s &&
              (function (e, t) {
                let n = v(e, t) || {},
                  { transitionEnd: r = {}, transition: i = {} } = n,
                  a = p(n, _);
                a = f(f({}, a), r);
                for (const s in a)
                  H(e, s, ((o = a[s]), S(o) ? o[o.length - 1] || 0 : o));
                var o;
              })(e, s);
          });
        }),
      u
    );
  }
  function Zn(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var r;
    const i = v(
      e,
      t,
      "exit" === n.type
        ? null === (r = e.presenceContext) || void 0 === r
          ? void 0
          : r.custom
        : void 0
    );
    let { transition: a = e.getDefaultTransition() || {} } = i || {};
    n.transitionOverride && (a = n.transitionOverride);
    const o = i ? () => Promise.all(Jn(e, i, n)) : () => Promise.resolve(),
      s =
        e.variantChildren && e.variantChildren.size
          ? function () {
              let r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              const {
                delayChildren: i = 0,
                staggerChildren: o,
                staggerDirection: s,
              } = a;
              return (function (e, t) {
                let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 1,
                  a = arguments.length > 5 ? arguments[5] : void 0;
                const o = [],
                  s = (e.variantChildren.size - 1) * r,
                  l =
                    1 === i
                      ? function () {
                          return (
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0) * r
                          );
                        }
                      : function () {
                          return (
                            s -
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0) *
                              r
                          );
                        };
                return (
                  Array.from(e.variantChildren)
                    .sort($n)
                    .forEach((e, r) => {
                      e.notify("AnimationStart", t),
                        o.push(
                          Zn(
                            e,
                            t,
                            f(
                              f({}, a),
                              {},
                              {
                                delay: n + l(r),
                              }
                            )
                          ).then(() => e.notify("AnimationComplete", t))
                        );
                    }),
                  Promise.all(o)
                );
              })(e, t, i + r, o, s, n);
            }
          : () => Promise.resolve(),
      { when: l } = a;
    if (l) {
      const [e, t] = "beforeChildren" === l ? [o, s] : [s, o];
      return e().then(() => t());
    }
    return Promise.all([o(), s(n.delay)]);
  }
  function $n(e, t) {
    return e.sortNodePosition(t);
  }
  function er(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0;
  }
  function tr(e) {
    return "string" === typeof e || Array.isArray(e);
  }
  const nr = [
      "animate",
      "whileInView",
      "whileFocus",
      "whileHover",
      "whileTap",
      "whileDrag",
      "exit",
    ],
    rr = ["initial", ...nr],
    ir = rr.length;
  function ar(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
      const t = (e.parent && ar(e.parent)) || {};
      return void 0 !== e.props.initial && (t.initial = e.props.initial), t;
    }
    const t = {};
    for (let n = 0; n < ir; n++) {
      const r = rr[n],
        i = e.props[r];
      (tr(i) || !1 === i) && (t[r] = i);
    }
    return t;
  }
  const or = ["transition", "transitionEnd"],
    sr = [...nr].reverse(),
    lr = nr.length;
  function ur(e) {
    return (t) =>
      Promise.all(
        t.map((t) => {
          let { animation: n, options: r } = t;
          return (function (e, t) {
            let n,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            if ((e.notify("AnimationStart", t), Array.isArray(t))) {
              const i = t.map((t) => Zn(e, t, r));
              n = Promise.all(i);
            } else if ("string" === typeof t) n = Zn(e, t, r);
            else {
              const i = "function" === typeof t ? v(e, t, r.custom) : t;
              n = Promise.all(Jn(e, i, r));
            }
            return n.then(() => {
              e.notify("AnimationComplete", t);
            });
          })(e, n, r);
        })
      );
  }
  function cr(e) {
    let t = ur(e),
      n = hr(),
      r = !0;
    const i = (t) => (n, r) => {
      var i;
      const a = v(
        e,
        r,
        "exit" === t
          ? null === (i = e.presenceContext) || void 0 === i
            ? void 0
            : i.custom
          : void 0
      );
      if (a) {
        const { transition: e, transitionEnd: t } = a,
          r = p(a, or);
        n = f(f(f({}, n), r), t);
      }
      return n;
    };
    function a(a) {
      const { props: o } = e,
        s = ar(e.parent) || {},
        l = [],
        u = new Set();
      let c = {},
        d = 1 / 0;
      for (let t = 0; t < lr; t++) {
        const p = sr[t],
          m = n[p],
          g = void 0 !== o[p] ? o[p] : s[p],
          v = tr(g),
          y = p === a ? m.isActive : null;
        !1 === y && (d = t);
        let b = g === s[p] && g !== o[p] && v;
        if (
          (b && r && e.manuallyAnimateOnMount && (b = !1),
          (m.protectedKeys = f({}, c)),
          (!m.isActive && null === y) ||
            (!g && !m.prevProp) ||
            h(g) ||
            "boolean" === typeof g)
        )
          continue;
        const x = dr(m.prevProp, g);
        let w = x || (p === a && m.isActive && !b && v) || (t > d && v),
          k = !1;
        const A = Array.isArray(g) ? g : [g];
        let E = A.reduce(i(p), {});
        !1 === y && (E = {});
        const { prevResolvedValues: P = {} } = m,
          C = f(f({}, P), E),
          F = (t) => {
            (w = !0),
              u.has(t) && ((k = !0), u.delete(t)),
              (m.needsAnimating[t] = !0);
            const n = e.getValue(t);
            n && (n.liveStyle = !1);
          };
        for (const e in C) {
          const t = E[e],
            n = P[e];
          if (c.hasOwnProperty(e)) continue;
          let r = !1;
          (r = S(t) && S(n) ? !er(t, n) : t !== n),
            r
              ? void 0 !== t && null !== t
                ? F(e)
                : u.add(e)
              : void 0 !== t && u.has(e)
              ? F(e)
              : (m.protectedKeys[e] = !0);
        }
        (m.prevProp = g),
          (m.prevResolvedValues = E),
          m.isActive && (c = f(f({}, c), E)),
          r && e.blockInitialAnimation && (w = !1);
        w &&
          (!(b && x) || k) &&
          l.push(
            ...A.map((e) => ({
              animation: e,
              options: {
                type: p,
              },
            }))
          );
      }
      if (u.size) {
        const t = {};
        if ("boolean" !== typeof o.initial) {
          const n = v(e, Array.isArray(o.initial) ? o.initial[0] : o.initial);
          n && n.transition && (t.transition = n.transition);
        }
        u.forEach((n) => {
          const r = e.getBaseTarget(n),
            i = e.getValue(n);
          i && (i.liveStyle = !0),
            (t[n] = null !== r && void 0 !== r ? r : null);
        }),
          l.push({
            animation: t,
          });
      }
      let p = Boolean(l.length);
      return (
        !r ||
          (!1 !== o.initial && o.initial !== o.animate) ||
          e.manuallyAnimateOnMount ||
          (p = !1),
        (r = !1),
        p ? t(l) : Promise.resolve()
      );
    }
    return {
      animateChanges: a,
      setActive: function (t, r) {
        var i;
        if (n[t].isActive === r) return Promise.resolve();
        null === (i = e.variantChildren) ||
          void 0 === i ||
          i.forEach((e) => {
            var n;
            return null === (n = e.animationState) || void 0 === n
              ? void 0
              : n.setActive(t, r);
          }),
          (n[t].isActive = r);
        const o = a(t);
        for (const e in n) n[e].protectedKeys = {};
        return o;
      },
      setAnimateFunction: function (n) {
        t = n(e);
      },
      getState: () => n,
      reset: () => {
        (n = hr()), (r = !0);
      },
    };
  }
  function dr(e, t) {
    return "string" === typeof t ? t !== e : !!Array.isArray(t) && !er(t, e);
  }
  function fr() {
    return {
      isActive: arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function hr() {
    return {
      animate: fr(!0),
      whileInView: fr(),
      whileHover: fr(),
      whileTap: fr(),
      whileDrag: fr(),
      whileFocus: fr(),
      exit: fr(),
    };
  }
  class pr {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  }
  let mr = 0;
  const gr = {
      animation: {
        Feature: class extends pr {
          constructor(e) {
            super(e), e.animationState || (e.animationState = cr(e));
          }
          updateAnimationControlsSubscription() {
            const { animate: e } = this.node.getProps();
            h(e) && (this.unmountControls = e.subscribe(this.node));
          }
          mount() {
            this.updateAnimationControlsSubscription();
          }
          update() {
            const { animate: e } = this.node.getProps(),
              { animate: t } = this.node.prevProps || {};
            e !== t && this.updateAnimationControlsSubscription();
          }
          unmount() {
            var e;
            this.node.animationState.reset(),
              null === (e = this.unmountControls) ||
                void 0 === e ||
                e.call(this);
          }
        },
      },
      exit: {
        Feature: class extends pr {
          constructor() {
            super(...arguments), (this.id = mr++);
          }
          update() {
            if (!this.node.presenceContext) return;
            const { isPresent: e, onExitComplete: t } =
                this.node.presenceContext,
              { isPresent: n } = this.node.prevPresenceContext || {};
            if (!this.node.animationState || e === n) return;
            const r = this.node.animationState.setActive("exit", !e);
            t &&
              !e &&
              r.then(() => {
                t(this.id);
              });
          }
          mount() {
            const { register: e, onExitComplete: t } =
              this.node.presenceContext || {};
            t && t(this.id), e && (this.unmount = e(this.id));
          }
          unmount() {}
        },
      },
    },
    vr = {
      x: !1,
      y: !1,
    };
  function yr() {
    return vr.x || vr.y;
  }
  function br(e, t, n) {
    let r =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : {
            passive: !0,
          };
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  const xr = (e) =>
    "mouse" === e.pointerType
      ? "number" !== typeof e.button || e.button <= 0
      : !1 !== e.isPrimary;
  function wr(e) {
    return {
      point: {
        x: e.pageX,
        y: e.pageY,
      },
    };
  }
  function Sr(e, t, n, r) {
    return br(
      e,
      t,
      (
        (e) => (t) =>
          xr(t) && e(t, wr(t))
      )(n),
      r
    );
  }
  function kr(e) {
    let { top: t, left: n, right: r, bottom: i } = e;
    return {
      x: {
        min: n,
        max: r,
      },
      y: {
        min: t,
        max: i,
      },
    };
  }
  function Ar(e) {
    return e.max - e.min;
  }
  function Er(e, t, n) {
    let r =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
    (e.origin = r),
      (e.originPoint = Gt(t.min, t.max, e.origin)),
      (e.scale = Ar(n) / Ar(t)),
      (e.translate = Gt(n.min, n.max, e.origin) - e.originPoint),
      ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
        (e.scale = 1),
      ((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) &&
        (e.translate = 0);
  }
  function Pr(e, t, n, r) {
    Er(e.x, t.x, n.x, r ? r.originX : void 0),
      Er(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function Cr(e, t, n) {
    (e.min = n.min + t.min), (e.max = e.min + Ar(t));
  }
  function Fr(e, t, n) {
    (e.min = t.min - n.min), (e.max = e.min + Ar(t));
  }
  function Tr(e, t, n) {
    Fr(e.x, t.x, n.x), Fr(e.y, t.y, n.y);
  }
  const Dr = () => ({
    x: {
      min: 0,
      max: 0,
    },
    y: {
      min: 0,
      max: 0,
    },
  });
  function jr(e) {
    return [e("x"), e("y")];
  }
  function Nr(e) {
    return void 0 === e || 1 === e;
  }
  function Lr(e) {
    let { scale: t, scaleX: n, scaleY: r } = e;
    return !Nr(t) || !Nr(n) || !Nr(r);
  }
  function Or(e) {
    return (
      Lr(e) ||
      Rr(e) ||
      e.z ||
      e.rotate ||
      e.rotateX ||
      e.rotateY ||
      e.skewX ||
      e.skewY
    );
  }
  function Rr(e) {
    return Mr(e.x) || Mr(e.y);
  }
  function Mr(e) {
    return e && "0%" !== e;
  }
  function zr(e, t, n) {
    return n + t * (e - n);
  }
  function Vr(e, t, n, r, i) {
    return void 0 !== i && (e = zr(e, i, r)), zr(e, n, r) + t;
  }
  function Br(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
      r = arguments.length > 3 ? arguments[3] : void 0,
      i = arguments.length > 4 ? arguments[4] : void 0;
    (e.min = Vr(e.min, t, n, r, i)), (e.max = Vr(e.max, t, n, r, i));
  }
  function Ir(e, t) {
    let { x: n, y: r } = t;
    Br(e.x, n.translate, n.scale, n.originPoint),
      Br(e.y, r.translate, r.scale, r.originPoint);
  }
  const Ur = 0.999999999999,
    Wr = 1.0000000000001;
  function _r(e, t) {
    (e.min = e.min + t), (e.max = e.max + t);
  }
  function Hr(e, t, n, r) {
    let i =
      arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0.5;
    Br(e, t, n, Gt(e.min, e.max, i), r);
  }
  function Yr(e, t) {
    Hr(e.x, t.x, t.scaleX, t.scale, t.originX),
      Hr(e.y, t.y, t.scaleY, t.scale, t.originY);
  }
  function Kr(e, t) {
    return kr(
      (function (e, t) {
        if (!t) return e;
        const n = t({
            x: e.left,
            y: e.top,
          }),
          r = t({
            x: e.right,
            y: e.bottom,
          });
        return {
          top: n.y,
          left: n.x,
          bottom: r.y,
          right: r.x,
        };
      })(e.getBoundingClientRect(), t)
    );
  }
  function qr(e) {
    return (
      e &&
      "object" === typeof e &&
      Object.prototype.hasOwnProperty.call(e, "current")
    );
  }
  function Qr(e, t) {
    const n = "".concat(t, "PointerCapture");
    if (e.target instanceof Element && n in e.target && void 0 !== e.pointerId)
      try {
        e.target[n](e.pointerId);
      } catch (r) {}
  }
  const Xr = (e, t) => Math.abs(e - t);
  class Gr {
    constructor(e, t) {
      let { transformPagePoint: n, dragSnapToOrigin: r = !1 } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = () => {
          if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
          const e = $r(this.lastMoveEventInfo, this.history),
            t = null !== this.startEvent,
            n =
              (function (e, t) {
                const n = Xr(e.x, t.x),
                  r = Xr(e.y, t.y);
                return Math.sqrt(n ** 2 + r ** 2);
              })(e.offset, {
                x: 0,
                y: 0,
              }) >= 3;
          if (!t && !n) return;
          const { point: r } = e,
            { timestamp: i } = j;
          this.history.push(
            f(
              f({}, r),
              {},
              {
                timestamp: i,
              }
            )
          );
          const { onStart: a, onMove: o } = this.handlers;
          t ||
            (a && a(this.lastMoveEvent, e),
            (this.startEvent = this.lastMoveEvent)),
            o && o(this.lastMoveEvent, e);
        }),
        (this.handlePointerMove = (e, t) => {
          if (
            ((this.index = ri(e.currentTarget)),
            e.target instanceof Element &&
              e.target.hasPointerCapture &&
              void 0 !== e.pointerId)
          )
            try {
              if (!e.target.hasPointerCapture(e.pointerId)) return;
            } catch (n) {}
          (this.lastMoveEvent = e),
            (this.lastMoveEventInfo = Jr(t, this.transformPagePoint)),
            T.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (e, t) => {
          Qr(e, "release"), this.end();
          const {
            onEnd: n,
            onSessionEnd: r,
            resumeAnimation: i,
          } = this.handlers;
          if (
            (this.dragSnapToOrigin && i && i(),
            !this.lastMoveEvent || !this.lastMoveEventInfo)
          )
            return;
          const a = $r(
            "pointercancel" === e.type || "lostpointercapture" === e.type
              ? this.lastMoveEventInfo
              : Jr(t, this.transformPagePoint),
            this.history
          );
          this.startEvent && n && n(e, a), r && r(e, a);
        }),
        !xr(e))
      )
        return;
      (this.dragSnapToOrigin = r),
        (this.handlers = t),
        (this.transformPagePoint = n);
      const i = Jr(wr(e), this.transformPagePoint),
        { point: a } = i,
        { timestamp: o } = j;
      this.history = [
        f(
          f({}, a),
          {},
          {
            timestamp: o,
          }
        ),
      ];
      const { onSessionStart: s } = t;
      s && s(e, $r(i, this.history)),
        Qr(e, "set"),
        (this.removeListeners = an(
          Sr(e.currentTarget, "pointermove", this.handlePointerMove),
          Sr(e.currentTarget, "pointerup", this.handlePointerUp),
          Sr(e.currentTarget, "pointercancel", this.handlePointerUp),
          Sr(e.currentTarget, "lostpointercapture", (e, t) => {
            ri(e.currentTarget) !== this.index
              ? Qr(e, "set")
              : this.handlePointerUp(e, t);
          })
        ));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), D(this.updatePoint);
    }
  }
  function Jr(e, t) {
    return t
      ? {
          point: t(e.point),
        }
      : e;
  }
  function Zr(e, t) {
    return {
      x: e.x - t.x,
      y: e.y - t.y,
    };
  }
  function $r(e, t) {
    let { point: n } = e;
    return {
      point: n,
      delta: Zr(n, ti(t)),
      offset: Zr(n, ei(t)),
      velocity: ni(t, 0.1),
    };
  }
  function ei(e) {
    return e[0];
  }
  function ti(e) {
    return e[e.length - 1];
  }
  function ni(e, t) {
    if (e.length < 2)
      return {
        x: 0,
        y: 0,
      };
    let n = e.length - 1,
      r = null;
    const i = ti(e);
    for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ee(t))); ) n--;
    if (!r)
      return {
        x: 0,
        y: 0,
      };
    const a = te(i.timestamp - r.timestamp);
    if (0 === a)
      return {
        x: 0,
        y: 0,
      };
    const o = {
      x: (i.x - r.x) / a,
      y: (i.y - r.y) / a,
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
  }
  function ri(e) {
    return e.parentNode ? Array.from(e.parentNode.children).indexOf(e) : -1;
  }
  function ii(e, t, n) {
    return {
      min: void 0 !== t ? e.min + t : void 0,
      max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
    };
  }
  function ai(e, t) {
    let n = t.min - e.min,
      r = t.max - e.max;
    return (
      t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
      {
        min: n,
        max: r,
      }
    );
  }
  const oi = 0.35;
  function si(e, t, n) {
    return {
      min: li(e, t),
      max: li(e, n),
    };
  }
  function li(e, t) {
    return "number" === typeof e ? e : e[t] || 0;
  }
  const ui = new WeakMap();
  class ci {
    constructor(e) {
      (this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = {
          x: 0,
          y: 0,
        }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = {
          x: {
            min: 0,
            max: 0,
          },
          y: {
            min: 0,
            max: 0,
          },
        }),
        (this.visualElement = e);
    }
    start(e) {
      let { snapToCursor: t = !1 } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const { presenceContext: n } = this.visualElement;
      if (n && !1 === n.isPresent) return;
      const { dragSnapToOrigin: r } = this.getProps();
      this.panSession = new Gr(
        e,
        {
          onSessionStart: (e) => {
            const { dragSnapToOrigin: n } = this.getProps();
            n ? this.pauseAnimation() : this.stopAnimation(),
              t && this.snapToCursor(wr(e).point);
          },
          onStart: (e, t) => {
            const {
              drag: n,
              dragPropagation: r,
              onDragStart: i,
            } = this.getProps();
            if (
              n &&
              !r &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock =
                "x" === (a = n) || "y" === a
                  ? vr[a]
                    ? null
                    : ((vr[a] = !0),
                      () => {
                        vr[a] = !1;
                      })
                  : vr.x || vr.y
                  ? null
                  : ((vr.x = vr.y = !0),
                    () => {
                      vr.x = vr.y = !1;
                    })),
              !this.openDragLock)
            )
              return;
            var a;
            (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              jr((e) => {
                let t = this.getAxisMotionValue(e).get() || 0;
                if (Ue.test(t)) {
                  const { projection: n } = this.visualElement;
                  if (n && n.layout) {
                    const r = n.layout.layoutBox[e];
                    if (r) {
                      t = Ar(r) * (parseFloat(t) / 100);
                    }
                  }
                }
                this.originPoint[e] = t;
              }),
              i && T.postRender(() => i(e, t)),
              K(this.visualElement, "transform");
            const { animationState: o } = this.visualElement;
            o && o.setActive("whileDrag", !0);
          },
          onMove: (e, t) => {
            const {
              dragPropagation: n,
              dragDirectionLock: r,
              onDirectionLock: i,
              onDrag: a,
            } = this.getProps();
            if (!n && !this.openDragLock) return;
            const { offset: o } = t;
            if (r && null === this.currentDirection)
              return (
                (this.currentDirection = (function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 10,
                    n = null;
                  Math.abs(e.y) > t
                    ? (n = "y")
                    : Math.abs(e.x) > t && (n = "x");
                  return n;
                })(o)),
                void (
                  null !== this.currentDirection &&
                  i &&
                  i(this.currentDirection)
                )
              );
            this.updateAxis("x", t.point, o),
              this.updateAxis("y", t.point, o),
              this.visualElement.render(),
              a && a(e, t);
          },
          onSessionEnd: (e, t) => this.stop(e, t),
          resumeAnimation: () =>
            jr((e) => {
              var t;
              return (
                "paused" === this.getAnimationState(e) &&
                (null === (t = this.getAxisMotionValue(e).animation) ||
                void 0 === t
                  ? void 0
                  : t.play())
              );
            }),
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: r,
        }
      );
    }
    stop(e, t) {
      const n = this.isDragging;
      if ((this.cancel(), !n)) return;
      const { velocity: r } = t;
      this.startAnimation(r);
      const { onDragEnd: i } = this.getProps();
      i && T.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      const { dragPropagation: n } = this.getProps();
      !n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive("whileDrag", !1);
    }
    updateAxis(e, t, n) {
      const { drag: r } = this.getProps();
      if (!n || !di(e, r, this.currentDirection)) return;
      const i = this.getAxisMotionValue(e);
      let a = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (a = (function (e, t, n) {
          let { min: r, max: i } = t;
          return (
            void 0 !== r && e < r
              ? (e = n ? Gt(r, e, n.min) : Math.max(e, r))
              : void 0 !== i &&
                e > i &&
                (e = n ? Gt(i, e, n.max) : Math.min(e, i)),
            e
          );
        })(a, this.constraints[e], this.elastic[e])),
        i.set(a);
    }
    resolveConstraints() {
      var e;
      const { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : null === (e = this.visualElement.projection) || void 0 === e
            ? void 0
            : e.layout,
        i = this.constraints;
      t && qr(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : (this.constraints =
            !(!t || !r) &&
            (function (e, t) {
              let { top: n, left: r, bottom: i, right: a } = t;
              return {
                x: ii(e.x, r, a),
                y: ii(e.y, n, i),
              };
            })(r.layoutBox, t)),
        (this.elastic = (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oi;
          return (
            !1 === e ? (e = 0) : !0 === e && (e = oi),
            {
              x: si(e, "left", "right"),
              y: si(e, "top", "bottom"),
            }
          );
        })(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          jr((e) => {
            !1 !== this.constraints &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = (function (e, t) {
                const n = {};
                return (
                  void 0 !== t.min && (n.min = t.min - e.min),
                  void 0 !== t.max && (n.max = t.max - e.min),
                  n
                );
              })(r.layoutBox[e], this.constraints[e]));
          });
    }
    resolveRefConstraints() {
      const { dragConstraints: e, onMeasureDragConstraints: t } =
        this.getProps();
      if (!e || !qr(e)) return !1;
      const n = e.current;
      Ft(
        null !== n,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      const { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      const i = (function (e, t, n) {
        const r = Kr(e, n),
          { scroll: i } = t;
        return i && (_r(r.x, i.offset.x), _r(r.y, i.offset.y)), r;
      })(n, r.root, this.visualElement.getTransformPagePoint());
      let a = (function (e, t) {
        return {
          x: ai(e.x, t.x),
          y: ai(e.y, t.y),
        };
      })(r.layout.layoutBox, i);
      if (t) {
        const e = t(
          (function (e) {
            let { x: t, y: n } = e;
            return {
              top: n.min,
              right: t.max,
              bottom: n.max,
              left: t.min,
            };
          })(a)
        );
        (this.hasMutatedConstraints = !!e), e && (a = kr(e));
      }
      return a;
    }
    startAnimation(e) {
      const {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        l = jr((o) => {
          if (!di(o, t, this.currentDirection)) return;
          let l = (s && s[o]) || {};
          a &&
            (l = {
              min: 0,
              max: 0,
            });
          const u = r ? 200 : 1e6,
            c = r ? 40 : 1e7,
            d = f(
              f(
                {
                  type: "inertia",
                  velocity: n ? e[o] : 0,
                  bounceStiffness: u,
                  bounceDamping: c,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                },
                i
              ),
              l
            );
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(l).then(o);
    }
    startAxisValueAnimation(e, t) {
      const n = this.getAxisMotionValue(e);
      return (
        K(this.visualElement, e),
        n.start(Qn(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      jr((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      jr((e) => {
        var t;
        return null === (t = this.getAxisMotionValue(e).animation) ||
          void 0 === t
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      const t = "_drag".concat(e.toUpperCase()),
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      jr((t) => {
        const { drag: n } = this.getProps();
        if (!di(t, n, this.currentDirection)) return;
        const { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          const { min: n, max: a } = r.layout.layoutBox[t];
          i.set(e[t] - Gt(n, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!qr(t) || !n || !this.constraints) return;
      this.stopAnimation();
      const r = {
        x: 0,
        y: 0,
      };
      jr((e) => {
        const t = this.getAxisMotionValue(e);
        if (t && !1 !== this.constraints) {
          const n = t.get();
          r[e] = (function (e, t) {
            let n = 0.5;
            const r = Ar(e),
              i = Ar(t);
            return (
              i > r
                ? (n = ue(t.min, t.max - r, e.min))
                : r > i && (n = ue(e.min, e.max - i, t.min)),
              Ce(0, 1, n)
            );
          })(
            {
              min: n,
              max: n,
            },
            this.constraints[e]
          );
        }
      });
      const { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        jr((t) => {
          if (!di(t, e, null)) return;
          const n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(Gt(i, a, r[t]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      ui.set(this.visualElement, this);
      const e = Sr(this.visualElement.current, "pointerdown", (e) => {
          const { drag: t, dragListener: n = !0 } = this.getProps();
          t && n && this.start(e);
        }),
        t = () => {
          const { dragConstraints: e } = this.getProps();
          qr(e) &&
            e.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: n } = this.visualElement,
        r = n.addEventListener("measure", t);
      n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
        T.read(t);
      const i = br(window, "resize", () =>
          this.scalePositionWithinConstraints()
        ),
        a = n.addEventListener("didUpdate", (e) => {
          let { delta: t, hasLayoutChanged: n } = e;
          this.isDragging &&
            n &&
            (jr((e) => {
              const n = this.getAxisMotionValue(e);
              n &&
                ((this.originPoint[e] += t[e].translate),
                n.set(n.get() + t[e].translate));
            }),
            this.visualElement.render());
        });
      return () => {
        i(), e(), r(), a && a();
      };
    }
    getProps() {
      const e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = oi,
          dragMomentum: o = !0,
        } = e;
      return f(
        f({}, e),
        {},
        {
          drag: t,
          dragDirectionLock: n,
          dragPropagation: r,
          dragConstraints: i,
          dragElastic: a,
          dragMomentum: o,
        }
      );
    }
  }
  function di(e, t, n) {
    return (!0 === t || t === e) && (null === n || n === e);
  }
  const fi = (e) => (t, n) => {
    e && T.postRender(() => e(t, n));
  };
  const hi = (0, r.createContext)(null);
  const pi = (0, r.createContext)({}),
    mi = (0, r.createContext)({}),
    { schedule: gi, cancel: vi } = F(queueMicrotask, !1),
    yi = {
      hasAnimatedSinceResize: !0,
      hasEverUpdated: !1,
    };
  function bi(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
  }
  const xi = {
      correct: (e, t) => {
        if (!t.target) return e;
        if ("string" === typeof e) {
          if (!We.test(e)) return e;
          e = parseFloat(e);
        }
        const n = bi(e, t.target.x),
          r = bi(e, t.target.y);
        return "".concat(n, "% ").concat(r, "%");
      },
    },
    wi = {
      correct: (e, t) => {
        let { treeScale: n, projectionDelta: r } = t;
        const i = e,
          a = nt.parse(e);
        if (a.length > 5) return i;
        const o = nt.createTransformer(e),
          s = "number" !== typeof a[0] ? 1 : 0,
          l = r.x.scale * n.x,
          u = r.y.scale * n.y;
        (a[0 + s] /= l), (a[1 + s] /= u);
        const c = Gt(l, u, 0.5);
        return (
          "number" === typeof a[2 + s] && (a[2 + s] /= c),
          "number" === typeof a[3 + s] && (a[3 + s] /= c),
          o(a)
        );
      },
    },
    Si = {};
  class ki extends r.Component {
    componentDidMount() {
      const {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      !(function (e) {
        for (const t in e) (Si[t] = e[t]), jt(t) && (Si[t].isCSSVariable = !0);
      })(Ei),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions(
            f(
              f({}, i.options),
              {},
              {
                onExitComplete: () => this.safeToRemove(),
              }
            )
          )),
        (yi.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      const {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        a = n.projection;
      return a
        ? ((a.isPresent = i),
          r || e.layoutDependency !== t || void 0 === t || e.isPresent !== i
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                T.postRender(() => {
                  const e = a.getStack();
                  (e && e.members.length) || this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      const { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        gi.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      const {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      const { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  }
  function Ai(e) {
    const [t, n] = (function () {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const t = (0, r.useContext)(hi);
        if (null === t) return [!0, null];
        const { isPresent: n, onExitComplete: i, register: a } = t,
          o = (0, r.useId)();
        (0, r.useEffect)(() => {
          if (e) return a(o);
        }, [e]);
        const s = (0, r.useCallback)(() => e && i && i(o), [o, i, e]);
        return !n && i ? [!1, s] : [!0];
      })(),
      i = (0, r.useContext)(pi);
    return (0, o.jsx)(
      ki,
      f(
        f({}, e),
        {},
        {
          layoutGroup: i,
          switchLayoutGroup: (0, r.useContext)(mi),
          isPresent: t,
          safeToRemove: n,
        }
      )
    );
  }
  const Ei = {
    borderRadius: f(
      f({}, xi),
      {},
      {
        applyTo: [
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ],
      }
    ),
    borderTopLeftRadius: xi,
    borderTopRightRadius: xi,
    borderBottomLeftRadius: xi,
    borderBottomRightRadius: xi,
    boxShadow: wi,
  };
  const Pi = (e, t) => e.depth - t.depth;
  class Ci {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      M(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      z(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(Pi),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  }
  function Fi(e, t) {
    const n = R.now(),
      r = (i) => {
        let { timestamp: a } = i;
        const o = a - n;
        o >= t && (D(r), e(o - t));
      };
    return T.read(r, !0), () => D(r);
  }
  function Ti(e) {
    const t = Y(e) ? e.get() : e;
    return (
      (n = t),
      Boolean(n && "object" === typeof n && n.mix && n.toValue)
        ? t.toValue()
        : t
    );
    var n;
  }
  const Di = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    ji = Di.length,
    Ni = (e) => ("string" === typeof e ? parseFloat(e) : e),
    Li = (e) => "number" === typeof e || We.test(e);
  function Oi(e, t) {
    return void 0 !== e[t] ? e[t] : e.borderRadius;
  }
  const Ri = zi(0, 0.5, Ae),
    Mi = zi(0.5, 0.95, E);
  function zi(e, t, n) {
    return (r) => (r < e ? 0 : r > t ? 1 : n(ue(e, t, r)));
  }
  function Vi(e, t) {
    (e.min = t.min), (e.max = t.max);
  }
  function Bi(e, t) {
    Vi(e.x, t.x), Vi(e.y, t.y);
  }
  function Ii(e, t) {
    (e.translate = t.translate),
      (e.scale = t.scale),
      (e.originPoint = t.originPoint),
      (e.origin = t.origin);
  }
  function Ui(e, t, n, r, i) {
    return (
      (e = zr((e -= t), 1 / n, r)), void 0 !== i && (e = zr(e, 1 / i, r)), e
    );
  }
  function Wi(e, t, n, r, i) {
    let [a, o, s] = n;
    !(function (e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5,
        i = arguments.length > 4 ? arguments[4] : void 0,
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
      Ue.test(t) &&
        ((t = parseFloat(t)), (t = Gt(o.min, o.max, t / 100) - o.min));
      if ("number" !== typeof t) return;
      let s = Gt(a.min, a.max, r);
      e === a && (s -= t),
        (e.min = Ui(e.min, t, n, s, i)),
        (e.max = Ui(e.max, t, n, s, i));
    })(e, t[a], t[o], t[s], t.scale, r, i);
  }
  const _i = ["x", "scaleX", "originX"],
    Hi = ["y", "scaleY", "originY"];
  function Yi(e, t, n, r) {
    Wi(e.x, t, _i, n ? n.x : void 0, r ? r.x : void 0),
      Wi(e.y, t, Hi, n ? n.y : void 0, r ? r.y : void 0);
  }
  function Ki(e) {
    return 0 === e.translate && 1 === e.scale;
  }
  function qi(e) {
    return Ki(e.x) && Ki(e.y);
  }
  function Qi(e, t) {
    return e.min === t.min && e.max === t.max;
  }
  function Xi(e, t) {
    return (
      Math.round(e.min) === Math.round(t.min) &&
      Math.round(e.max) === Math.round(t.max)
    );
  }
  function Gi(e, t) {
    return Xi(e.x, t.x) && Xi(e.y, t.y);
  }
  function Ji(e) {
    return Ar(e.x) / Ar(e.y);
  }
  function Zi(e, t) {
    return (
      e.translate === t.translate &&
      e.scale === t.scale &&
      e.originPoint === t.originPoint
    );
  }
  class $i {
    constructor() {
      this.members = [];
    }
    add(e) {
      M(this.members, e), e.scheduleRender();
    }
    remove(e) {
      if (
        (z(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead)
      ) {
        const e = this.members[this.members.length - 1];
        e && this.promote(e);
      }
    }
    relegate(e) {
      const t = this.members.findIndex((t) => e === t);
      if (0 === t) return !1;
      let n;
      for (let r = t; r >= 0; r--) {
        const e = this.members[r];
        if (!1 !== e.isPresent) {
          n = e;
          break;
        }
      }
      return !!n && (this.promote(n), !0);
    }
    promote(e, t) {
      const n = this.lead;
      if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
        n.instance && n.scheduleRender(),
          e.scheduleRender(),
          (e.resumeFrom = n),
          t && (e.resumeFrom.preserveOpacity = !0),
          n.snapshot &&
            ((e.snapshot = n.snapshot),
            (e.snapshot.latestValues = n.animationValues || n.latestValues)),
          e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
        const { crossfade: r } = e.options;
        !1 === r && n.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e) => {
        const { options: t, resumingFrom: n } = e;
        t.onExitComplete && t.onExitComplete(),
          n && n.options.onExitComplete && n.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((e) => {
        e.instance && e.scheduleRender(!1);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  const ea = {
      nodes: 0,
      calculatedTargetDeltas: 0,
      calculatedProjections: 0,
    },
    ta = ["", "X", "Y", "Z"],
    na = {
      visibility: "hidden",
    };
  let ra = 0;
  function ia(e, t, n, r) {
    const { latestValues: i } = t;
    i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
  }
  function aa(e) {
    if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
    const { visualElement: t } = e.options;
    if (!t) return;
    const n = X(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: t, layoutId: r } = e.options;
      window.MotionCancelOptimisedAnimation(n, "transform", T, !(t || r));
    }
    const { parent: r } = e;
    r && !r.hasCheckedOptimisedAppear && aa(r);
  }
  function oa(e) {
    let {
      attachResizeListener: t,
      defaultParent: n,
      measureScroll: r,
      checkIsScrollRoot: i,
      resetTransform: a,
    } = e;
    return class {
      constructor() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null === n || void 0 === n
              ? void 0
              : n();
        (this.id = ra++),
          (this.animationId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.hasCheckedOptimisedAppear = !1),
          (this.treeScale = {
            x: 1,
            y: 1,
          }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.updateScheduled = !1),
          (this.scheduleUpdate = () => this.update()),
          (this.projectionUpdateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            (this.projectionUpdateScheduled = !1),
              C.value &&
                (ea.nodes =
                  ea.calculatedTargetDeltas =
                  ea.calculatedProjections =
                    0),
              this.nodes.forEach(ua),
              this.nodes.forEach(ga),
              this.nodes.forEach(va),
              this.nodes.forEach(ca),
              C.addProjectionMetrics && C.addProjectionMetrics(ea);
          }),
          (this.resolvedRelativeTargetAt = 0),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = e),
          (this.root = t ? t.root || t : this),
          (this.path = t ? [...t.path, t] : []),
          (this.parent = t),
          (this.depth = t ? t.depth + 1 : 0);
        for (let n = 0; n < this.path.length; n++)
          this.path[n].shouldResetTransform = !0;
        this.root === this && (this.nodes = new Ci());
      }
      addEventListener(e, t) {
        return (
          this.eventHandlers.has(e) || this.eventHandlers.set(e, new V()),
          this.eventHandlers.get(e).add(t)
        );
      }
      notifyListeners(e) {
        const t = this.eventHandlers.get(e);
        for (
          var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
          i < n;
          i++
        )
          r[i - 1] = arguments[i];
        t && t.notify(...r);
      }
      hasListeners(e) {
        return this.eventHandlers.has(e);
      }
      mount(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : this.root.hasTreeAnimated;
        if (this.instance) return;
        var r;
        (this.isSVG = (r = e) instanceof SVGElement && "svg" !== r.tagName),
          (this.instance = e);
        const { layoutId: i, layout: a, visualElement: o } = this.options;
        if (
          (o && !o.current && o.mount(e),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          n && (a || i) && (this.isLayoutDirty = !0),
          t)
        ) {
          let n;
          const r = () => (this.root.updateBlockedByResize = !1);
          t(e, () => {
            (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = Fi(r, 250)),
              yi.hasAnimatedSinceResize &&
                ((yi.hasAnimatedSinceResize = !1), this.nodes.forEach(ma));
          });
        }
        i && this.root.registerSharedNode(i, this),
          !1 !== this.options.animate &&
            o &&
            (i || a) &&
            this.addEventListener("didUpdate", (e) => {
              let {
                delta: t,
                hasLayoutChanged: n,
                hasRelativeLayoutChanged: r,
                layout: i,
              } = e;
              if (this.isTreeAnimationBlocked())
                return (
                  (this.target = void 0), void (this.relativeTarget = void 0)
                );
              const a =
                  this.options.transition || o.getDefaultTransition() || ka,
                { onLayoutAnimationStart: s, onLayoutAnimationComplete: l } =
                  o.getProps(),
                u = !this.targetLayout || !Gi(this.targetLayout, i),
                c = !n && r;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                c ||
                (n && (u || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(t, c);
                const e = f(
                  f({}, y(a, "layout")),
                  {},
                  {
                    onPlay: s,
                    onComplete: l,
                  }
                );
                (o.shouldReduceMotion || this.options.layoutRoot) &&
                  ((e.delay = 0), (e.type = !1)),
                  this.startAnimation(e);
              } else
                n || ma(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = i;
            });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this);
        const e = this.getStack();
        e && e.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          D(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(ya),
          this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: e } = this.options;
        return e && e.getProps().transformTemplate;
      }
      willUpdate() {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
          return void (
            this.options.onExitComplete && this.options.onExitComplete()
          );
        if (
          (window.MotionCancelOptimisedAnimation &&
            !this.hasCheckedOptimisedAppear &&
            aa(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let i = 0; i < this.path.length; i++) {
          const e = this.path[i];
          (e.shouldResetTransform = !0),
            e.updateScroll("snapshot"),
            e.options.layoutRoot && e.willUpdate(!1);
        }
        const { layoutId: t, layout: n } = this.options;
        if (void 0 === t && !n) return;
        const r = this.getTransformTemplate();
        (this.prevTransformTemplateValue = r
          ? r(this.latestValues, "")
          : void 0),
          this.updateSnapshot(),
          e && this.notifyListeners("willUpdate");
      }
      update() {
        this.updateScheduled = !1;
        if (this.isUpdateBlocked())
          return (
            this.unblockUpdate(),
            this.clearAllSnapshots(),
            void this.nodes.forEach(fa)
          );
        this.isUpdating || this.nodes.forEach(ha),
          (this.isUpdating = !1),
          this.nodes.forEach(pa),
          this.nodes.forEach(sa),
          this.nodes.forEach(la),
          this.clearAllSnapshots();
        const e = R.now();
        (j.delta = Ce(0, 1e3 / 60, e - j.timestamp)),
          (j.timestamp = e),
          (j.isProcessing = !0),
          N.update.process(j),
          N.preRender.process(j),
          N.render.process(j),
          (j.isProcessing = !1);
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), gi.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(da), this.sharedNodes.forEach(ba);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled ||
          ((this.projectionUpdateScheduled = !0),
          T.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        T.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        !this.snapshot &&
          this.instance &&
          ((this.snapshot = this.measure()),
          !this.snapshot ||
            Ar(this.snapshot.measuredBox.x) ||
            Ar(this.snapshot.measuredBox.y) ||
            (this.snapshot = void 0));
      }
      updateLayout() {
        if (!this.instance) return;
        if (
          (this.updateScroll(),
          (!this.options.alwaysMeasureLayout || !this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let n = 0; n < this.path.length; n++) {
            this.path[n].updateScroll();
          }
        const e = this.layout;
        (this.layout = this.measure(!1)),
          (this.layoutCorrected = {
            x: {
              min: 0,
              max: 0,
            },
            y: {
              min: 0,
              max: 0,
            },
          }),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: t } = this.options;
        t &&
          t.notify(
            "LayoutMeasure",
            this.layout.layoutBox,
            e ? e.layoutBox : void 0
          );
      }
      updateScroll() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "measure",
          t = Boolean(this.options.layoutScroll && this.instance);
        if (
          (this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === e &&
            (t = !1),
          t)
        ) {
          const t = i(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: e,
            isRoot: t,
            offset: r(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : t,
          };
        }
      }
      resetTransform() {
        if (!a) return;
        const e =
            this.isLayoutDirty ||
            this.shouldResetTransform ||
            this.options.alwaysMeasureLayout,
          t = this.projectionDelta && !qi(this.projectionDelta),
          n = this.getTransformTemplate(),
          r = n ? n(this.latestValues, "") : void 0,
          i = r !== this.prevTransformTemplateValue;
        e &&
          (t || Or(this.latestValues) || i) &&
          (a(this.instance, r),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure() {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const t = this.measurePageBox();
        let n = this.removeElementScroll(t);
        var r;
        return (
          e && (n = this.removeTransform(n)),
          Pa((r = n).x),
          Pa(r.y),
          {
            animationId: this.root.animationId,
            measuredBox: t,
            layoutBox: n,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        var e;
        const { visualElement: t } = this.options;
        if (!t)
          return {
            x: {
              min: 0,
              max: 0,
            },
            y: {
              min: 0,
              max: 0,
            },
          };
        const n = t.measureViewportBox();
        if (
          !(
            (null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) ||
            this.path.some(Fa)
          )
        ) {
          const { scroll: e } = this.root;
          e && (_r(n.x, e.offset.x), _r(n.y, e.offset.y));
        }
        return n;
      }
      removeElementScroll(e) {
        var t;
        const n = {
          x: {
            min: 0,
            max: 0,
          },
          y: {
            min: 0,
            max: 0,
          },
        };
        if (
          (Bi(n, e),
          null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
        )
          return n;
        for (let r = 0; r < this.path.length; r++) {
          const t = this.path[r],
            { scroll: i, options: a } = t;
          t !== this.root &&
            i &&
            a.layoutScroll &&
            (i.wasRoot && Bi(n, e), _r(n.x, i.offset.x), _r(n.y, i.offset.y));
        }
        return n;
      }
      applyTransform(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = {
          x: {
            min: 0,
            max: 0,
          },
          y: {
            min: 0,
            max: 0,
          },
        };
        Bi(n, e);
        for (let r = 0; r < this.path.length; r++) {
          const e = this.path[r];
          !t &&
            e.options.layoutScroll &&
            e.scroll &&
            e !== e.root &&
            Yr(n, {
              x: -e.scroll.offset.x,
              y: -e.scroll.offset.y,
            }),
            Or(e.latestValues) && Yr(n, e.latestValues);
        }
        return Or(this.latestValues) && Yr(n, this.latestValues), n;
      }
      removeTransform(e) {
        const t = {
          x: {
            min: 0,
            max: 0,
          },
          y: {
            min: 0,
            max: 0,
          },
        };
        Bi(t, e);
        for (let n = 0; n < this.path.length; n++) {
          const e = this.path[n];
          if (!e.instance) continue;
          if (!Or(e.latestValues)) continue;
          Lr(e.latestValues) && e.updateSnapshot();
          const r = {
            x: {
              min: 0,
              max: 0,
            },
            y: {
              min: 0,
              max: 0,
            },
          };
          Bi(r, e.measurePageBox()),
            Yi(
              t,
              e.latestValues,
              e.snapshot ? e.snapshot.layoutBox : void 0,
              r
            );
        }
        return Or(this.latestValues) && Yi(t, this.latestValues), t;
      }
      setTargetDelta(e) {
        (this.targetDelta = e),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0);
      }
      setOptions(e) {
        this.options = f(
          f(f({}, this.options), e),
          {},
          {
            crossfade: void 0 === e.crossfade || e.crossfade,
          }
        );
      }
      clearMeasurements() {
        (this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1);
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !== j.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var t;
        const n = this.getLead();
        this.isProjectionDirty ||
          (this.isProjectionDirty = n.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
        const r = Boolean(this.resumingFrom) || this !== n;
        if (
          !(
            e ||
            (r && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            (null === (t = this.parent) || void 0 === t
              ? void 0
              : t.isProjectionDirty) ||
            this.attemptToResolveRelativeTarget ||
            this.root.updateBlockedByResize
          )
        )
          return;
        const { layout: i, layoutId: a } = this.options;
        if (this.layout && (i || a)) {
          if (
            ((this.resolvedRelativeTargetAt = j.timestamp),
            !this.targetDelta && !this.relativeTarget)
          ) {
            const e = this.getClosestProjectingParent();
            e && e.layout && 1 !== this.animationProgress
              ? ((this.relativeParent = e),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = {
                  x: {
                    min: 0,
                    max: 0,
                  },
                  y: {
                    min: 0,
                    max: 0,
                  },
                }),
                (this.relativeTargetOrigin = {
                  x: {
                    min: 0,
                    max: 0,
                  },
                  y: {
                    min: 0,
                    max: 0,
                  },
                }),
                Tr(
                  this.relativeTargetOrigin,
                  this.layout.layoutBox,
                  e.layout.layoutBox
                ),
                Bi(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          if (this.relativeTarget || this.targetDelta) {
            var o, s, l;
            if (
              (this.target ||
                ((this.target = {
                  x: {
                    min: 0,
                    max: 0,
                  },
                  y: {
                    min: 0,
                    max: 0,
                  },
                }),
                (this.targetWithTransforms = {
                  x: {
                    min: 0,
                    max: 0,
                  },
                  y: {
                    min: 0,
                    max: 0,
                  },
                })),
              this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.relativeParent &&
              this.relativeParent.target
                ? (this.forceRelativeParentToResolveTarget(),
                  (o = this.target),
                  (s = this.relativeTarget),
                  (l = this.relativeParent.target),
                  Cr(o.x, s.x, l.x),
                  Cr(o.y, s.y, l.y))
                : this.targetDelta
                ? (Boolean(this.resumingFrom)
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Bi(this.target, this.layout.layoutBox),
                  Ir(this.target, this.targetDelta))
                : Bi(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)
            ) {
              this.attemptToResolveRelativeTarget = !1;
              const e = this.getClosestProjectingParent();
              e &&
              Boolean(e.resumingFrom) === Boolean(this.resumingFrom) &&
              !e.options.layoutScroll &&
              e.target &&
              1 !== this.animationProgress
                ? ((this.relativeParent = e),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = {
                    x: {
                      min: 0,
                      max: 0,
                    },
                    y: {
                      min: 0,
                      max: 0,
                    },
                  }),
                  (this.relativeTargetOrigin = {
                    x: {
                      min: 0,
                      max: 0,
                    },
                    y: {
                      min: 0,
                      max: 0,
                    },
                  }),
                  Tr(this.relativeTargetOrigin, this.target, e.target),
                  Bi(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            C.value && ea.calculatedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (
          this.parent &&
          !Lr(this.parent.latestValues) &&
          !Rr(this.parent.latestValues)
        )
          return this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return Boolean(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
            this.layout
        );
      }
      calcProjection() {
        var e;
        const t = this.getLead(),
          n = Boolean(this.resumingFrom) || this !== t;
        let r = !0;
        if (
          ((this.isProjectionDirty ||
            (null === (e = this.parent) || void 0 === e
              ? void 0
              : e.isProjectionDirty)) &&
            (r = !1),
          n &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (r = !1),
          this.resolvedRelativeTargetAt === j.timestamp && (r = !1),
          r)
        )
          return;
        const { layout: i, layoutId: a } = this.options;
        if (
          ((this.isTreeAnimating = Boolean(
            (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || (!i && !a))
        )
          return;
        Bi(this.layoutCorrected, this.layout.layoutBox);
        const o = this.treeScale.x,
          s = this.treeScale.y;
        !(function (e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const i = n.length;
          if (!i) return;
          let a, o;
          t.x = t.y = 1;
          for (let s = 0; s < i; s++) {
            (a = n[s]), (o = a.projectionDelta);
            const { visualElement: i } = a.options;
            (i && i.props.style && "contents" === i.props.style.display) ||
              (r &&
                a.options.layoutScroll &&
                a.scroll &&
                a !== a.root &&
                Yr(e, {
                  x: -a.scroll.offset.x,
                  y: -a.scroll.offset.y,
                }),
              o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Ir(e, o)),
              r && Or(a.latestValues) && Yr(e, a.latestValues));
          }
          t.x < Wr && t.x > Ur && (t.x = 1), t.y < Wr && t.y > Ur && (t.y = 1);
        })(this.layoutCorrected, this.treeScale, this.path, n),
          !t.layout ||
            t.target ||
            (1 === this.treeScale.x && 1 === this.treeScale.y) ||
            ((t.target = t.layout.layoutBox),
            (t.targetWithTransforms = {
              x: {
                min: 0,
                max: 0,
              },
              y: {
                min: 0,
                max: 0,
              },
            }));
        const { target: l } = t;
        l
          ? (this.projectionDelta && this.prevProjectionDelta
              ? (Ii(this.prevProjectionDelta.x, this.projectionDelta.x),
                Ii(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
            Pr(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
            (this.treeScale.x === o &&
              this.treeScale.y === s &&
              Zi(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              Zi(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0),
              this.scheduleRender(),
              this.notifyListeners("projectionUpdate", l)),
            C.value && ea.calculatedProjections++)
          : this.prevProjectionDelta &&
            (this.createProjectionDeltas(), this.scheduleRender());
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender() {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        var t;
        if (
          (null === (t = this.options.visualElement) ||
            void 0 === t ||
            t.scheduleRender(),
          e)
        ) {
          const e = this.getStack();
          e && e.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        (this.prevProjectionDelta = {
          x: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0,
          },
          y: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0,
          },
        }),
          (this.projectionDelta = {
            x: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0,
            },
            y: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0,
            },
          }),
          (this.projectionDeltaWithTransform = {
            x: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0,
            },
            y: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0,
            },
          });
      }
      setAnimationOrigin(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = this.snapshot,
          r = n ? n.latestValues : {},
          i = f({}, this.latestValues),
          a = {
            x: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0,
            },
            y: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0,
            },
          };
        (this.relativeParent && this.relativeParent.options.layoutRoot) ||
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !t);
        const o = {
            x: {
              min: 0,
              max: 0,
            },
            y: {
              min: 0,
              max: 0,
            },
          },
          s =
            (n ? n.source : void 0) !==
            (this.layout ? this.layout.source : void 0),
          l = this.getStack(),
          u = !l || l.members.length <= 1,
          c = Boolean(
            s && !u && !0 === this.options.crossfade && !this.path.some(Sa)
          );
        let d;
        (this.animationProgress = 0),
          (this.mixTargetDelta = (t) => {
            const n = t / 1e3;
            var l, f, h, p, m, g;
            xa(a.x, e.x, n),
              xa(a.y, e.y, n),
              this.setTargetDelta(a),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout &&
                (Tr(
                  o,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox
                ),
                (h = this.relativeTarget),
                (p = this.relativeTargetOrigin),
                (m = o),
                (g = n),
                wa(h.x, p.x, m.x, g),
                wa(h.y, p.y, m.y, g),
                d &&
                  ((l = this.relativeTarget),
                  (f = d),
                  Qi(l.x, f.x) && Qi(l.y, f.y)) &&
                  (this.isProjectionDirty = !1),
                d ||
                  (d = {
                    x: {
                      min: 0,
                      max: 0,
                    },
                    y: {
                      min: 0,
                      max: 0,
                    },
                  }),
                Bi(d, this.relativeTarget)),
              s &&
                ((this.animationValues = i),
                (function (e, t, n, r, i, a) {
                  i
                    ? ((e.opacity = Gt(
                        0,
                        void 0 !== n.opacity ? n.opacity : 1,
                        Ri(r)
                      )),
                      (e.opacityExit = Gt(
                        void 0 !== t.opacity ? t.opacity : 1,
                        0,
                        Mi(r)
                      )))
                    : a &&
                      (e.opacity = Gt(
                        void 0 !== t.opacity ? t.opacity : 1,
                        void 0 !== n.opacity ? n.opacity : 1,
                        r
                      ));
                  for (let o = 0; o < ji; o++) {
                    const i = "border".concat(Di[o], "Radius");
                    let a = Oi(t, i),
                      s = Oi(n, i);
                    (void 0 === a && void 0 === s) ||
                      (a || (a = 0),
                      s || (s = 0),
                      0 === a || 0 === s || Li(a) === Li(s)
                        ? ((e[i] = Math.max(Gt(Ni(a), Ni(s), r), 0)),
                          (Ue.test(s) || Ue.test(a)) && (e[i] += "%"))
                        : (e[i] = s));
                  }
                  (t.rotate || n.rotate) &&
                    (e.rotate = Gt(t.rotate || 0, n.rotate || 0, r));
                })(i, r, this.latestValues, n, c, u)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              (this.animationProgress = n);
          }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(e) {
        this.notifyListeners("animationStart"),
          this.currentAnimation && this.currentAnimation.stop(),
          this.resumingFrom &&
            this.resumingFrom.currentAnimation &&
            this.resumingFrom.currentAnimation.stop(),
          this.pendingAnimation &&
            (D(this.pendingAnimation), (this.pendingAnimation = void 0)),
          (this.pendingAnimation = T.update(() => {
            (yi.hasAnimatedSinceResize = !0),
              Xt.layout++,
              (this.currentAnimation = (function (e, t, n) {
                const r = Y(e) ? e : W(e);
                return r.start(Qn("", r, t, n)), r.animation;
              })(
                0,
                1e3,
                f(
                  f({}, e),
                  {},
                  {
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onStop: () => {
                      Xt.layout--;
                    },
                    onComplete: () => {
                      Xt.layout--,
                        e.onComplete && e.onComplete(),
                        this.completeAnimation();
                    },
                  }
                )
              )),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0);
          }));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        const e = this.getStack();
        e && e.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(1e3),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }
      applyTransformsToTarget() {
        const e = this.getLead();
        let {
          targetWithTransforms: t,
          target: n,
          layout: r,
          latestValues: i,
        } = e;
        if (t && n && r) {
          if (
            this !== e &&
            this.layout &&
            r &&
            Ca(this.options.animationType, this.layout.layoutBox, r.layoutBox)
          ) {
            n = this.target || {
              x: {
                min: 0,
                max: 0,
              },
              y: {
                min: 0,
                max: 0,
              },
            };
            const t = Ar(this.layout.layoutBox.x);
            (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
            const r = Ar(this.layout.layoutBox.y);
            (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
          }
          Bi(t, n),
            Yr(t, i),
            Pr(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
        }
      }
      registerSharedNode(e, t) {
        this.sharedNodes.has(e) || this.sharedNodes.set(e, new $i());
        this.sharedNodes.get(e).add(t);
        const n = t.options.initialPromotionConfig;
        t.promote({
          transition: n ? n.transition : void 0,
          preserveFollowOpacity:
            n && n.shouldPreserveFollowOpacity
              ? n.shouldPreserveFollowOpacity(t)
              : void 0,
        });
      }
      isLead() {
        const e = this.getStack();
        return !e || e.lead === this;
      }
      getLead() {
        var e;
        const { layoutId: t } = this.options;
        return (
          (t &&
            (null === (e = this.getStack()) || void 0 === e
              ? void 0
              : e.lead)) ||
          this
        );
      }
      getPrevLead() {
        var e;
        const { layoutId: t } = this.options;
        return t
          ? null === (e = this.getStack()) || void 0 === e
            ? void 0
            : e.prevLead
          : void 0;
      }
      getStack() {
        const { layoutId: e } = this.options;
        if (e) return this.root.sharedNodes.get(e);
      }
      promote() {
        let {
          needsReset: e,
          transition: t,
          preserveFollowOpacity: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const r = this.getStack();
        r && r.promote(this, n),
          e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          t &&
            this.setOptions({
              transition: t,
            });
      }
      relegate() {
        const e = this.getStack();
        return !!e && e.relegate(this);
      }
      resetSkewAndRotation() {
        const { visualElement: e } = this.options;
        if (!e) return;
        let t = !1;
        const { latestValues: n } = e;
        if (
          ((n.z ||
            n.rotate ||
            n.rotateX ||
            n.rotateY ||
            n.rotateZ ||
            n.skewX ||
            n.skewY) &&
            (t = !0),
          !t)
        )
          return;
        const r = {};
        n.z && ia("z", e, r, this.animationValues);
        for (let i = 0; i < ta.length; i++)
          ia("rotate".concat(ta[i]), e, r, this.animationValues),
            ia("skew".concat(ta[i]), e, r, this.animationValues);
        e.render();
        for (const i in r)
          e.setStaticValue(i, r[i]),
            this.animationValues && (this.animationValues[i] = r[i]);
        e.scheduleRender();
      }
      getProjectionStyles(e) {
        var t, n;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return na;
        const r = {
            visibility: "",
          },
          i = this.getTransformTemplate();
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (r.opacity = ""),
            (r.pointerEvents =
              Ti(null === e || void 0 === e ? void 0 : e.pointerEvents) || ""),
            (r.transform = i ? i(this.latestValues, "") : "none"),
            r
          );
        const a = this.getLead();
        if (!this.projectionDelta || !this.layout || !a.target) {
          const t = {};
          return (
            this.options.layoutId &&
              ((t.opacity =
                void 0 !== this.latestValues.opacity
                  ? this.latestValues.opacity
                  : 1),
              (t.pointerEvents =
                Ti(null === e || void 0 === e ? void 0 : e.pointerEvents) ||
                "")),
            this.hasProjected &&
              !Or(this.latestValues) &&
              ((t.transform = i ? i({}, "") : "none"),
              (this.hasProjected = !1)),
            t
          );
        }
        const o = a.animationValues || a.latestValues;
        this.applyTransformsToTarget(),
          (r.transform = (function (e, t, n) {
            let r = "";
            const i = e.x.translate / t.x,
              a = e.y.translate / t.y,
              o = (null === n || void 0 === n ? void 0 : n.z) || 0;
            if (
              ((i || a || o) &&
                (r = "translate3d("
                  .concat(i, "px, ")
                  .concat(a, "px, ")
                  .concat(o, "px) ")),
              (1 === t.x && 1 === t.y) ||
                (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
              n)
            ) {
              const {
                transformPerspective: e,
                rotate: t,
                rotateX: i,
                rotateY: a,
                skewX: o,
                skewY: s,
              } = n;
              e && (r = "perspective(".concat(e, "px) ").concat(r)),
                t && (r += "rotate(".concat(t, "deg) ")),
                i && (r += "rotateX(".concat(i, "deg) ")),
                a && (r += "rotateY(".concat(a, "deg) ")),
                o && (r += "skewX(".concat(o, "deg) ")),
                s && (r += "skewY(".concat(s, "deg) "));
            }
            const s = e.x.scale * t.x,
              l = e.y.scale * t.y;
            return (
              (1 === s && 1 === l) ||
                (r += "scale(".concat(s, ", ").concat(l, ")")),
              r || "none"
            );
          })(this.projectionDeltaWithTransform, this.treeScale, o)),
          i && (r.transform = i(o, r.transform));
        const { x: s, y: l } = this.projectionDelta;
        (r.transformOrigin = ""
          .concat(100 * s.origin, "% ")
          .concat(100 * l.origin, "% 0")),
          a.animationValues
            ? (r.opacity =
                a === this
                  ? null !==
                      (n =
                        null !== (t = o.opacity) && void 0 !== t
                          ? t
                          : this.latestValues.opacity) && void 0 !== n
                    ? n
                    : 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : o.opacityExit)
            : (r.opacity =
                a === this
                  ? void 0 !== o.opacity
                    ? o.opacity
                    : ""
                  : void 0 !== o.opacityExit
                  ? o.opacityExit
                  : 0);
        for (const u in Si) {
          if (void 0 === o[u]) continue;
          const { correct: e, applyTo: t, isCSSVariable: n } = Si[u],
            i = "none" === r.transform ? o[u] : e(o[u], a);
          if (t) {
            const e = t.length;
            for (let n = 0; n < e; n++) r[t[n]] = i;
          } else
            n
              ? (this.options.visualElement.renderState.vars[u] = i)
              : (r[u] = i);
        }
        return (
          this.options.layoutId &&
            (r.pointerEvents =
              a === this
                ? Ti(null === e || void 0 === e ? void 0 : e.pointerEvents) ||
                  ""
                : "none"),
          r
        );
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((e) => {
          var t;
          return null === (t = e.currentAnimation) || void 0 === t
            ? void 0
            : t.stop();
        }),
          this.root.nodes.forEach(fa),
          this.root.sharedNodes.clear();
      }
    };
  }
  function sa(e) {
    e.updateLayout();
  }
  function la(e) {
    var t;
    const n =
      (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
      e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: t, measuredBox: r } = e.layout,
        { animationType: i } = e.options,
        a = n.source !== e.layout.source;
      "size" === i
        ? jr((e) => {
            const r = a ? n.measuredBox[e] : n.layoutBox[e],
              i = Ar(r);
            (r.min = t[e].min), (r.max = r.min + i);
          })
        : Ca(i, n.layoutBox, t) &&
          jr((r) => {
            const i = a ? n.measuredBox[r] : n.layoutBox[r],
              o = Ar(t[r]);
            (i.max = i.min + o),
              e.relativeTarget &&
                !e.currentAnimation &&
                ((e.isProjectionDirty = !0),
                (e.relativeTarget[r].max = e.relativeTarget[r].min + o));
          });
      const o = {
        x: {
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0,
        },
        y: {
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0,
        },
      };
      Pr(o, t, n.layoutBox);
      const s = {
        x: {
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0,
        },
        y: {
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0,
        },
      };
      a ? Pr(s, e.applyTransform(r, !0), n.measuredBox) : Pr(s, t, n.layoutBox);
      const l = !qi(o);
      let u = !1;
      if (!e.resumeFrom) {
        const r = e.getClosestProjectingParent();
        if (r && !r.resumeFrom) {
          const { snapshot: i, layout: a } = r;
          if (i && a) {
            const o = {
              x: {
                min: 0,
                max: 0,
              },
              y: {
                min: 0,
                max: 0,
              },
            };
            Tr(o, n.layoutBox, i.layoutBox);
            const s = {
              x: {
                min: 0,
                max: 0,
              },
              y: {
                min: 0,
                max: 0,
              },
            };
            Tr(s, t, a.layoutBox),
              Gi(o, s) || (u = !0),
              r.options.layoutRoot &&
                ((e.relativeTarget = s),
                (e.relativeTargetOrigin = o),
                (e.relativeParent = r));
          }
        }
      }
      e.notifyListeners("didUpdate", {
        layout: t,
        snapshot: n,
        delta: s,
        layoutDelta: o,
        hasLayoutChanged: l,
        hasRelativeLayoutChanged: u,
      });
    } else if (e.isLead()) {
      const { onExitComplete: t } = e.options;
      t && t();
    }
    e.options.transition = void 0;
  }
  function ua(e) {
    C.value && ea.nodes++,
      e.parent &&
        (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty ||
          (e.isSharedProjectionDirty = Boolean(
            e.isProjectionDirty ||
              e.parent.isProjectionDirty ||
              e.parent.isSharedProjectionDirty
          )),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function ca(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function da(e) {
    e.clearSnapshot();
  }
  function fa(e) {
    e.clearMeasurements();
  }
  function ha(e) {
    e.isLayoutDirty = !1;
  }
  function pa(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
      e.resetTransform();
  }
  function ma(e) {
    e.finishAnimation(),
      (e.targetDelta = e.relativeTarget = e.target = void 0),
      (e.isProjectionDirty = !0);
  }
  function ga(e) {
    e.resolveTargetDelta();
  }
  function va(e) {
    e.calcProjection();
  }
  function ya(e) {
    e.resetSkewAndRotation();
  }
  function ba(e) {
    e.removeLeadSnapshot();
  }
  function xa(e, t, n) {
    (e.translate = Gt(t.translate, 0, n)),
      (e.scale = Gt(t.scale, 1, n)),
      (e.origin = t.origin),
      (e.originPoint = t.originPoint);
  }
  function wa(e, t, n, r) {
    (e.min = Gt(t.min, n.min, r)), (e.max = Gt(t.max, n.max, r));
  }
  function Sa(e) {
    return e.animationValues && void 0 !== e.animationValues.opacityExit;
  }
  const ka = {
      duration: 0.45,
      ease: [0.4, 0, 0.1, 1],
    },
    Aa = (e) =>
      "undefined" !== typeof navigator &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().includes(e),
    Ea = Aa("applewebkit/") && !Aa("chrome/") ? Math.round : E;
  function Pa(e) {
    (e.min = Ea(e.min)), (e.max = Ea(e.max));
  }
  function Ca(e, t, n) {
    return (
      "position" === e ||
      ("preserve-aspect" === e &&
        ((r = Ji(t)), (i = Ji(n)), (a = 0.2), !(Math.abs(r - i) <= a)))
    );
    var r, i, a;
  }
  function Fa(e) {
    var t;
    return (
      e !== e.root &&
      (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
    );
  }
  const Ta = oa({
      attachResizeListener: (e, t) => br(e, "resize", t),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
    }),
    Da = {
      current: void 0,
    },
    ja = oa({
      measureScroll: (e) => ({
        x: e.scrollLeft,
        y: e.scrollTop,
      }),
      defaultParent: () => {
        if (!Da.current) {
          const e = new Ta({});
          e.mount(window),
            e.setOptions({
              layoutScroll: !0,
            }),
            (Da.current = e);
        }
        return Da.current;
      },
      resetTransform: (e, t) => {
        e.style.transform = void 0 !== t ? t : "none";
      },
      checkIsScrollRoot: (e) =>
        Boolean("fixed" === window.getComputedStyle(e).position),
    }),
    Na = {
      pan: {
        Feature: class extends pr {
          constructor() {
            super(...arguments), (this.removePointerDownListener = E);
          }
          onPointerDown(e) {
            this.session = new Gr(e, this.createPanHandlers(), {
              transformPagePoint: this.node.getTransformPagePoint(),
            });
          }
          createPanHandlers() {
            const {
              onPanSessionStart: e,
              onPanStart: t,
              onPan: n,
              onPanEnd: r,
            } = this.node.getProps();
            return {
              onSessionStart: fi(e),
              onStart: fi(t),
              onMove: n,
              onEnd: (e, t) => {
                delete this.session, r && T.postRender(() => r(e, t));
              },
            };
          }
          mount() {
            this.removePointerDownListener = Sr(
              this.node.current,
              "pointerdown",
              (e) => this.onPointerDown(e)
            );
          }
          update() {
            this.session &&
              this.session.updateHandlers(this.createPanHandlers());
          }
          unmount() {
            this.removePointerDownListener(),
              this.session && this.session.end();
          }
        },
      },
      drag: {
        Feature: class extends pr {
          constructor(e) {
            super(e),
              (this.removeGroupControls = E),
              (this.removeListeners = E),
              (this.controls = new ci(e));
          }
          mount() {
            const { dragControls: e } = this.node.getProps();
            e && (this.removeGroupControls = e.subscribe(this.controls)),
              (this.removeListeners = this.controls.addListeners() || E);
          }
          unmount() {
            this.removeGroupControls(), this.removeListeners();
          }
        },
        ProjectionNode: ja,
        MeasureLayout: Ai,
      },
    };
  function La(e, t) {
    const n = (function (e, t, n) {
        var r;
        if (e instanceof EventTarget) return [e];
        if ("string" === typeof e) {
          let i = document;
          t && (i = t.current);
          const a =
            null !== (r = null === n || void 0 === n ? void 0 : n[e]) &&
            void 0 !== r
              ? r
              : i.querySelectorAll(e);
          return a ? Array.from(a) : [];
        }
        return Array.from(e);
      })(e),
      r = new AbortController();
    return [
      n,
      f(
        f(
          {
            passive: !0,
          },
          t
        ),
        {},
        {
          signal: r.signal,
        }
      ),
      () => r.abort(),
    ];
  }
  function Oa(e) {
    return !("touch" === e.pointerType || yr());
  }
  function Ra(e, t, n) {
    const { props: r } = e;
    e.animationState &&
      r.whileHover &&
      e.animationState.setActive("whileHover", "Start" === n);
    const i = r["onHover" + n];
    i && T.postRender(() => i(t, wr(t)));
  }
  const Ma = (e, t) => !!t && (e === t || Ma(e, t.parentElement)),
    za = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
  const Va = new WeakSet();
  function Ba(e) {
    return (t) => {
      "Enter" === t.key && e(t);
    };
  }
  function Ia(e, t) {
    e.dispatchEvent(
      new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0,
      })
    );
  }
  function Ua(e) {
    return xr(e) && !yr();
  }
  function Wa(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const [r, i, a] = La(e, n),
      o = (e) => {
        const n = e.currentTarget;
        if (!n || !Ua(e) || Va.has(n)) return;
        Va.add(n), Qr(e, "set");
        const r = t(n, e),
          a = (e, t) => {
            n.removeEventListener("pointerup", o),
              n.removeEventListener("pointercancel", s),
              Qr(e, "release"),
              Ua(e) &&
                Va.has(n) &&
                (Va.delete(n),
                "function" === typeof r &&
                  r(e, {
                    success: t,
                  }));
          },
          o = (e) => {
            const t =
              !!e.isTrusted &&
              ((r = e),
              (i =
                n instanceof Element
                  ? n.getBoundingClientRect()
                  : {
                      left: 0,
                      top: 0,
                      right: window.innerWidth,
                      bottom: window.innerHeight,
                    }),
              r.clientX < i.left ||
                r.clientX > i.right ||
                r.clientY < i.top ||
                r.clientY > i.bottom);
            var r, i;
            a(e, !t && (!(n instanceof Element) || Ma(n, e.target)));
          },
          s = (e) => {
            a(e, !1);
          };
        n.addEventListener("pointerup", o, i),
          n.addEventListener("pointercancel", s, i),
          n.addEventListener("lostpointercapture", s, i);
      };
    return (
      r.forEach((e) => {
        let t = !1;
        var r;
        (e = n.useGlobalTarget ? window : e) instanceof HTMLElement &&
          ((t = !0),
          (r = e),
          za.has(r.tagName) ||
            -1 !== r.tabIndex ||
            null !== e.getAttribute("tabindex") ||
            (e.tabIndex = 0)),
          e.addEventListener("pointerdown", o, i),
          t &&
            e.addEventListener(
              "focus",
              (e) =>
                ((e, t) => {
                  const n = e.currentTarget;
                  if (!n) return;
                  const r = Ba(() => {
                    if (Va.has(n)) return;
                    Ia(n, "down");
                    const e = Ba(() => {
                      Ia(n, "up");
                    });
                    n.addEventListener("keyup", e, t),
                      n.addEventListener("blur", () => Ia(n, "cancel"), t);
                  });
                  n.addEventListener("keydown", r, t),
                    n.addEventListener(
                      "blur",
                      () => n.removeEventListener("keydown", r),
                      t
                    );
                })(e, i),
              i
            );
      }),
      a
    );
  }
  function _a(e, t, n) {
    const { props: r } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState &&
      r.whileTap &&
      e.animationState.setActive("whileTap", "Start" === n);
    const i = r["onTap" + ("End" === n ? "" : n)];
    i && T.postRender(() => i(t, wr(t)));
  }
  const Ha = ["root"],
    Ya = new WeakMap(),
    Ka = new WeakMap(),
    qa = (e) => {
      const t = Ya.get(e.target);
      t && t(e);
    },
    Qa = (e) => {
      e.forEach(qa);
    };
  function Xa(e, t, n) {
    const r = (function (e) {
      let { root: t } = e,
        n = p(e, Ha);
      const r = t || document;
      Ka.has(r) || Ka.set(r, {});
      const i = Ka.get(r),
        a = JSON.stringify(n);
      return (
        i[a] ||
          (i[a] = new IntersectionObserver(
            Qa,
            f(
              {
                root: t,
              },
              n
            )
          )),
        i[a]
      );
    })(t);
    return (
      Ya.set(e, n),
      r.observe(e),
      () => {
        Ya.delete(e), r.unobserve(e);
      }
    );
  }
  const Ga = {
    some: 0,
    all: 1,
  };
  const Ja = {
      inView: {
        Feature: class extends pr {
          constructor() {
            super(...arguments),
              (this.hasEnteredView = !1),
              (this.isInView = !1);
          }
          startObserver() {
            this.unmount();
            const { viewport: e = {} } = this.node.getProps(),
              { root: t, margin: n, amount: r = "some", once: i } = e,
              a = {
                root: t ? t.current : void 0,
                rootMargin: n,
                threshold: "number" === typeof r ? r : Ga[r],
              };
            return Xa(this.node.current, a, (e) => {
              const { isIntersecting: t } = e;
              if (this.isInView === t) return;
              if (((this.isInView = t), i && !t && this.hasEnteredView)) return;
              t && (this.hasEnteredView = !0),
                this.node.animationState &&
                  this.node.animationState.setActive("whileInView", t);
              const { onViewportEnter: n, onViewportLeave: r } =
                  this.node.getProps(),
                a = t ? n : r;
              a && a(e);
            });
          }
          mount() {
            this.startObserver();
          }
          update() {
            if ("undefined" === typeof IntersectionObserver) return;
            const { props: e, prevProps: t } = this.node,
              n = ["amount", "margin", "root"].some(
                (function (e) {
                  let { viewport: t = {} } = e,
                    { viewport: n = {} } =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (e) => t[e] !== n[e];
                })(e, t)
              );
            n && this.startObserver();
          }
          unmount() {}
        },
      },
      tap: {
        Feature: class extends pr {
          mount() {
            const { current: e } = this.node;
            e &&
              (this.unmount = Wa(
                e,
                (e, t) => (
                  _a(this.node, t, "Start"),
                  (e, t) => {
                    let { success: n } = t;
                    return _a(this.node, e, n ? "End" : "Cancel");
                  }
                ),
                {
                  useGlobalTarget: this.node.props.globalTapTarget,
                }
              ));
          }
          unmount() {}
        },
      },
      focus: {
        Feature: class extends pr {
          constructor() {
            super(...arguments), (this.isActive = !1);
          }
          onFocus() {
            let e = !1;
            try {
              e = this.node.current.matches(":focus-visible");
            } catch (t) {
              e = !0;
            }
            e &&
              this.node.animationState &&
              (this.node.animationState.setActive("whileFocus", !0),
              (this.isActive = !0));
          }
          onBlur() {
            this.isActive &&
              this.node.animationState &&
              (this.node.animationState.setActive("whileFocus", !1),
              (this.isActive = !1));
          }
          mount() {
            this.unmount = an(
              br(this.node.current, "focus", () => this.onFocus()),
              br(this.node.current, "blur", () => this.onBlur())
            );
          }
          unmount() {}
        },
      },
      hover: {
        Feature: class extends pr {
          mount() {
            const { current: e } = this.node;
            e &&
              (this.unmount = (function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                const [r, i, a] = La(e, n),
                  o = (e) => {
                    if (!Oa(e)) return;
                    const { target: n } = e,
                      r = t(n, e);
                    if ("function" !== typeof r || !n) return;
                    const a = (e) => {
                      Oa(e) && (r(e), n.removeEventListener("pointerleave", a));
                    };
                    n.addEventListener("pointerleave", a, i);
                  };
                return (
                  r.forEach((e) => {
                    e.addEventListener("pointerenter", o, i);
                  }),
                  a
                );
              })(
                e,
                (e, t) => (
                  Ra(this.node, t, "Start"), (e) => Ra(this.node, e, "End")
                )
              ));
          }
          unmount() {}
        },
      },
    },
    Za = {
      layout: {
        ProjectionNode: ja,
        MeasureLayout: Ai,
      },
    },
    $a = (0, r.createContext)({
      strict: !1,
    }),
    eo = (0, r.createContext)({
      transformPagePoint: (e) => e,
      isStatic: !1,
      reducedMotion: "never",
    }),
    to = (0, r.createContext)({});
  function no(e) {
    return h(e.animate) || rr.some((t) => tr(e[t]));
  }
  function ro(e) {
    return Boolean(no(e) || e.variants);
  }
  function io(e) {
    const { initial: t, animate: n } = (function (e, t) {
      if (no(e)) {
        const { initial: t, animate: n } = e;
        return {
          initial: !1 === t || tr(t) ? t : void 0,
          animate: tr(n) ? n : void 0,
        };
      }
      return !1 !== e.inherit ? t : {};
    })(e, (0, r.useContext)(to));
    return (0, r.useMemo)(
      () => ({
        initial: t,
        animate: n,
      }),
      [ao(t), ao(n)]
    );
  }
  function ao(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const oo = "undefined" !== typeof window,
    so = {
      animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
      ],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
    },
    lo = {};
  for (const nl in so)
    lo[nl] = {
      isEnabled: (e) => so[nl].some((t) => !!e[t]),
    };
  const uo = Symbol.for("motionComponentSymbol");
  function co(e, t, n) {
    return (0, r.useCallback)(
      (r) => {
        r && e.onMount && e.onMount(r),
          t && (r ? t.mount(r) : t.unmount()),
          n && ("function" === typeof n ? n(r) : qr(n) && (n.current = r));
      },
      [t]
    );
  }
  const fo = oo ? r.useLayoutEffect : r.useEffect;
  function ho(e, t, n, i, a) {
    var o, s;
    const { visualElement: l } = (0, r.useContext)(to),
      u = (0, r.useContext)($a),
      c = (0, r.useContext)(hi),
      d = (0, r.useContext)(eo).reducedMotion,
      f = (0, r.useRef)(null);
    (i = i || u.renderer),
      !f.current &&
        i &&
        (f.current = i(e, {
          visualState: t,
          parent: l,
          props: n,
          presenceContext: c,
          blockInitialAnimation: !!c && !1 === c.initial,
          reducedMotionConfig: d,
        }));
    const h = f.current,
      p = (0, r.useContext)(mi);
    !h ||
      h.projection ||
      !a ||
      ("html" !== h.type && "svg" !== h.type) ||
      (function (e, t, n, r) {
        const {
          layoutId: i,
          layout: a,
          drag: o,
          dragConstraints: s,
          layoutScroll: l,
          layoutRoot: u,
        } = t;
        (e.projection = new n(
          e.latestValues,
          t["data-framer-portal-id"] ? void 0 : po(e.parent)
        )),
          e.projection.setOptions({
            layoutId: i,
            layout: a,
            alwaysMeasureLayout: Boolean(o) || (s && qr(s)),
            visualElement: e,
            animationType: "string" === typeof a ? a : "both",
            initialPromotionConfig: r,
            layoutScroll: l,
            layoutRoot: u,
          });
      })(f.current, n, a, p);
    const m = (0, r.useRef)(!1);
    (0, r.useInsertionEffect)(() => {
      h && m.current && h.update(n, c);
    });
    const g = n[Q],
      v = (0, r.useRef)(
        Boolean(g) &&
          !(null === (o = window.MotionHandoffIsComplete) || void 0 === o
            ? void 0
            : o.call(window, g)) &&
          (null === (s = window.MotionHasOptimisedAnimation) || void 0 === s
            ? void 0
            : s.call(window, g))
      );
    return (
      fo(() => {
        h &&
          ((m.current = !0),
          (window.MotionIsMounted = !0),
          h.updateFeatures(),
          gi.render(h.render),
          v.current && h.animationState && h.animationState.animateChanges());
      }),
      (0, r.useEffect)(() => {
        h &&
          (!v.current && h.animationState && h.animationState.animateChanges(),
          v.current &&
            (queueMicrotask(() => {
              var e;
              null === (e = window.MotionHandoffMarkAsComplete) ||
                void 0 === e ||
                e.call(window, g);
            }),
            (v.current = !1)));
      }),
      h
    );
  }
  function po(e) {
    if (e)
      return !1 !== e.options.allowProjection ? e.projection : po(e.parent);
  }
  function mo(e) {
    let {
      preloadedFeatures: t,
      createVisualElement: n,
      useRender: i,
      useVisualState: a,
      Component: s,
    } = e;
    var l, u;
    function c(e, t) {
      let l;
      const u = f(
          f(f({}, (0, r.useContext)(eo)), e),
          {},
          {
            layoutId: go(e),
          }
        ),
        { isStatic: c } = u,
        d = io(e),
        h = a(e, c);
      if (!c && oo) {
        !(function () {
          (0, r.useContext)($a).strict;
          0;
        })();
        const e = (function (e) {
          const { drag: t, layout: n } = lo;
          if (!t && !n) return {};
          const r = f(f({}, t), n);
          return {
            MeasureLayout:
              (null === t || void 0 === t ? void 0 : t.isEnabled(e)) ||
              (null === n || void 0 === n ? void 0 : n.isEnabled(e))
                ? r.MeasureLayout
                : void 0,
            ProjectionNode: r.ProjectionNode,
          };
        })(u);
        (l = e.MeasureLayout),
          (d.visualElement = ho(s, h, u, n, e.ProjectionNode));
      }
      return (0, o.jsxs)(to.Provider, {
        value: d,
        children: [
          l && d.visualElement
            ? (0, o.jsx)(
                l,
                f(
                  {
                    visualElement: d.visualElement,
                  },
                  u
                )
              )
            : null,
          i(s, e, co(h, d.visualElement, t), h, c, d.visualElement),
        ],
      });
    }
    t &&
      (function (e) {
        for (const t in e) lo[t] = f(f({}, lo[t]), e[t]);
      })(t),
      (c.displayName = "motion.".concat(
        "string" === typeof s
          ? s
          : "create(".concat(
              null !==
                (u =
                  null !== (l = s.displayName) && void 0 !== l ? l : s.name) &&
                void 0 !== u
                ? u
                : "",
              ")"
            )
      ));
    const d = (0, r.forwardRef)(c);
    return (d[uo] = s), d;
  }
  function go(e) {
    let { layoutId: t } = e;
    const n = (0, r.useContext)(pi).id;
    return n && void 0 !== t ? n + "-" + t : t;
  }
  function vo(e, t) {
    let { layout: n, layoutId: r } = t;
    return (
      x.has(e) ||
      e.startsWith("origin") ||
      ((n || void 0 !== r) && (!!Si[e] || "opacity" === e))
    );
  }
  const yo = (e, t) => (t && "number" === typeof e ? t.transform(e) : e),
    bo = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    },
    xo = b.length;
  function wo(e, t, n) {
    const { style: r, vars: i, transformOrigin: a } = e;
    let o = !1,
      s = !1;
    for (const l in t) {
      const e = t[l];
      if (x.has(l)) o = !0;
      else if (jt(l)) i[l] = e;
      else {
        const t = yo(e, ct[l]);
        l.startsWith("origin") ? ((s = !0), (a[l] = t)) : (r[l] = t);
      }
    }
    if (
      (t.transform ||
        (o || n
          ? (r.transform = (function (e, t, n) {
              let r = "",
                i = !0;
              for (let a = 0; a < xo; a++) {
                const o = b[a],
                  s = e[o];
                if (void 0 === s) continue;
                let l = !0;
                if (
                  ((l =
                    "number" === typeof s
                      ? s === (o.startsWith("scale") ? 1 : 0)
                      : 0 === parseFloat(s)),
                  !l || n)
                ) {
                  const e = yo(s, ct[o]);
                  l ||
                    ((i = !1),
                    (r += "".concat(bo[o] || o, "(").concat(e, ") "))),
                    n && (t[o] = e);
                }
              }
              return (
                (r = r.trim()),
                n ? (r = n(t, i ? "" : r)) : i && (r = "none"),
                r
              );
            })(t, e.transform, n))
          : r.transform && (r.transform = "none")),
      s)
    ) {
      const { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
      r.transformOrigin = "".concat(e, " ").concat(t, " ").concat(n);
    }
  }
  const So = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
  });
  function ko(e, t, n) {
    for (const r in t) Y(t[r]) || vo(r, n) || (e[r] = t[r]);
  }
  function Ao(e, t) {
    const n = {};
    return (
      ko(n, e.style || {}, e),
      Object.assign(
        n,
        (function (e, t) {
          let { transformTemplate: n } = e;
          return (0, r.useMemo)(() => {
            const e = {
              style: {},
              transform: {},
              transformOrigin: {},
              vars: {},
            };
            return wo(e, t, n), Object.assign({}, e.vars, e.style);
          }, [t]);
        })(e, t)
      ),
      n
    );
  }
  function Eo(e, t) {
    const n = {},
      r = Ao(e, t);
    return (
      e.drag &&
        !1 !== e.dragListener &&
        ((n.draggable = !1),
        (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
        (r.touchAction =
          !0 === e.drag ? "none" : "pan-".concat("x" === e.drag ? "y" : "x"))),
      void 0 === e.tabIndex &&
        (e.onTap || e.onTapStart || e.whileTap) &&
        (n.tabIndex = 0),
      (n.style = r),
      n
    );
  }
  const Po = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
  function Co(e) {
    return (
      e.startsWith("while") ||
      (e.startsWith("drag") && "draggable" !== e) ||
      e.startsWith("layout") ||
      e.startsWith("onTap") ||
      e.startsWith("onPan") ||
      e.startsWith("onLayout") ||
      Po.has(e)
    );
  }
  let Fo = (e) => !Co(e);
  try {
    (To = require("@emotion/is-prop-valid").default) &&
      (Fo = (e) => (e.startsWith("on") ? !Co(e) : To(e)));
  } catch (tl) {}
  var To;
  const Do = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
  function jo(e) {
    return (
      "string" === typeof e &&
      !e.includes("-") &&
      !!(Do.indexOf(e) > -1 || /[A-Z]/.test(e))
    );
  }
  const No = {
      offset: "stroke-dashoffset",
      array: "stroke-dasharray",
    },
    Lo = {
      offset: "strokeDashoffset",
      array: "strokeDasharray",
    };
  function Oo(e, t, n) {
    return "string" === typeof e ? e : We.transform(t + n * e);
  }
  const Ro = [
    "attrX",
    "attrY",
    "attrScale",
    "originX",
    "originY",
    "pathLength",
    "pathSpacing",
    "pathOffset",
  ];
  function Mo(e, t, n, r) {
    let {
      attrX: i,
      attrY: a,
      attrScale: o,
      originX: s,
      originY: l,
      pathLength: u,
      pathSpacing: c = 1,
      pathOffset: d = 0,
    } = t;
    if ((wo(e, p(t, Ro), r), n))
      return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
    (e.attrs = e.style), (e.style = {});
    const { attrs: f, style: h, dimensions: m } = e;
    f.transform && (m && (h.transform = f.transform), delete f.transform),
      m &&
        (void 0 !== s || void 0 !== l || h.transform) &&
        (h.transformOrigin = (function (e, t, n) {
          const r = Oo(t, e.x, e.width),
            i = Oo(n, e.y, e.height);
          return "".concat(r, " ").concat(i);
        })(m, void 0 !== s ? s : 0.5, void 0 !== l ? l : 0.5)),
      void 0 !== i && (f.x = i),
      void 0 !== a && (f.y = a),
      void 0 !== o && (f.scale = o),
      void 0 !== u &&
        (function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            i =
              !(arguments.length > 4 && void 0 !== arguments[4]) ||
              arguments[4];
          e.pathLength = 1;
          const a = i ? No : Lo;
          e[a.offset] = We.transform(-r);
          const o = We.transform(t),
            s = We.transform(n);
          e[a.array] = "".concat(o, " ").concat(s);
        })(f, u, c, d, !1);
  }
  const zo = () =>
      f(
        f(
          {},
          {
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
          }
        ),
        {},
        {
          attrs: {},
        }
      ),
    Vo = (e) => "string" === typeof e && "svg" === e.toLowerCase();
  function Bo(e, t, n, i) {
    const a = (0, r.useMemo)(() => {
      const n = zo();
      return (
        Mo(n, t, Vo(i), e.transformTemplate),
        f(
          f({}, n.attrs),
          {},
          {
            style: f({}, n.style),
          }
        )
      );
    }, [t]);
    if (e.style) {
      const t = {};
      ko(t, e.style, e), (a.style = f(f({}, t), a.style));
    }
    return a;
  }
  function Io() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (t, n, i, a, o) => {
      let { latestValues: s } = a;
      const l = (jo(t) ? Bo : Eo)(n, s, o, t),
        u = (function (e, t, n) {
          const r = {};
          for (const i in e)
            ("values" === i && "object" === typeof e.values) ||
              ((Fo(i) ||
                (!0 === n && Co(i)) ||
                (!t && !Co(i)) ||
                (e.draggable && i.startsWith("onDrag"))) &&
                (r[i] = e[i]));
          return r;
        })(n, "string" === typeof t, e),
        c =
          t !== r.Fragment
            ? f(
                f(f({}, u), l),
                {},
                {
                  ref: i,
                }
              )
            : {},
        { children: d } = n,
        h = (0, r.useMemo)(() => (Y(d) ? d.get() : d), [d]);
      return (0, r.createElement)(
        t,
        f(
          f({}, c),
          {},
          {
            children: h,
          }
        )
      );
    };
  }
  const Uo = ["transitionEnd", "transition"];
  const Wo = (e) => (t, n) => {
    const i = (0, r.useContext)(to),
      a = (0, r.useContext)(hi),
      o = () =>
        (function (e, t, n, r) {
          let {
            scrapeMotionValuesFromProps: i,
            createRenderState: a,
            onUpdate: o,
          } = e;
          const s = {
            latestValues: _o(t, n, r, i),
            renderState: a(),
          };
          return (
            o &&
              ((s.onMount = (e) =>
                o(
                  f(
                    {
                      props: t,
                      current: e,
                    },
                    s
                  )
                )),
              (s.onUpdate = (e) => o(e))),
            s
          );
        })(e, t, i, a);
    return n
      ? o()
      : (function (e) {
          const t = (0, r.useRef)(null);
          return null === t.current && (t.current = e()), t.current;
        })(o);
  };
  function _o(e, t, n, r) {
    const i = {},
      a = r(e, {});
    for (const f in a) i[f] = Ti(a[f]);
    let { initial: o, animate: s } = e;
    const l = no(e),
      u = ro(e);
    t &&
      u &&
      !l &&
      !1 !== e.inherit &&
      (void 0 === o && (o = t.initial), void 0 === s && (s = t.animate));
    let c = !!n && !1 === n.initial;
    c = c || !1 === o;
    const d = c ? s : o;
    if (d && "boolean" !== typeof d && !h(d)) {
      const t = Array.isArray(d) ? d : [d];
      for (let n = 0; n < t.length; n++) {
        const r = g(e, t[n]);
        if (r) {
          const { transitionEnd: e, transition: t } = r,
            n = p(r, Uo);
          for (const r in n) {
            let e = n[r];
            if (Array.isArray(e)) {
              e = e[c ? e.length - 1 : 0];
            }
            null !== e && (i[r] = e);
          }
          for (const r in e) i[r] = e[r];
        }
      }
    }
    return i;
  }
  function Ho(e, t, n) {
    var r;
    const { style: i } = e,
      a = {};
    for (const o in i)
      (Y(i[o]) ||
        (t.style && Y(t.style[o])) ||
        vo(o, e) ||
        void 0 !==
          (null === (r = null === n || void 0 === n ? void 0 : n.getValue(o)) ||
          void 0 === r
            ? void 0
            : r.liveStyle)) &&
        (a[o] = i[o]);
    return a;
  }
  const Yo = {
    useVisualState: Wo({
      scrapeMotionValuesFromProps: Ho,
      createRenderState: So,
    }),
  };
  function Ko(e, t) {
    try {
      t.dimensions =
        "function" === typeof e.getBBox
          ? e.getBBox()
          : e.getBoundingClientRect();
    } catch (n) {
      t.dimensions = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
    }
  }
  function qo(e, t, n, r) {
    let { style: i, vars: a } = t;
    Object.assign(e.style, i, r && r.getProjectionStyles(n));
    for (const o in a) e.style.setProperty(o, a[o]);
  }
  const Qo = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]);
  function Xo(e, t, n, r) {
    qo(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(Qo.has(i) ? i : q(i), t.attrs[i]);
  }
  function Go(e, t, n) {
    const r = Ho(e, t, n);
    for (const i in e)
      if (Y(e[i]) || Y(t[i])) {
        r[
          -1 !== b.indexOf(i)
            ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
            : i
        ] = e[i];
      }
    return r;
  }
  const Jo = ["x", "y", "width", "height", "cx", "cy", "r"],
    Zo = {
      useVisualState: Wo({
        scrapeMotionValuesFromProps: Go,
        createRenderState: zo,
        onUpdate: (e) => {
          let {
            props: t,
            prevProps: n,
            current: r,
            renderState: i,
            latestValues: a,
          } = e;
          if (!r) return;
          let o = !!t.drag;
          if (!o)
            for (const l in a)
              if (x.has(l)) {
                o = !0;
                break;
              }
          if (!o) return;
          let s = !n;
          if (n)
            for (let l = 0; l < Jo.length; l++) {
              const e = Jo[l];
              t[e] !== n[e] && (s = !0);
            }
          s &&
            T.read(() => {
              Ko(r, i),
                T.render(() => {
                  Mo(i, a, Vo(r.tagName), t.transformTemplate), Xo(r, i);
                });
            });
        },
      }),
    };
  function $o(e, t) {
    return function (n) {
      let { forwardMotionProps: r } =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : {
              forwardMotionProps: !1,
            };
      return mo(
        f(
          f({}, jo(n) ? Zo : Yo),
          {},
          {
            preloadedFeatures: e,
            useRender: Io(r),
            createVisualElement: t,
            Component: n,
          }
        )
      );
    };
  }
  const es = {
      current: null,
    },
    ts = {
      current: !1,
    };
  const ns = [...Vt, qe, nt],
    rs = new WeakMap();
  const is = ["willChange"],
    as = [
      "AnimationStart",
      "AnimationComplete",
      "Update",
      "BeforeLayoutMeasure",
      "LayoutMeasure",
      "LayoutAnimationStart",
      "LayoutAnimationComplete",
    ];
  class os {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(e) {
      let {
          parent: t,
          props: n,
          presenceContext: r,
          reducedMotionConfig: i,
          blockInitialAnimation: a,
          visualState: o,
        } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Pt),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          const e = R.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), T.render(this.render, !1, !0));
        });
      const { latestValues: l, renderState: u, onUpdate: c } = o;
      (this.onUpdate = c),
        (this.latestValues = l),
        (this.baseTarget = f({}, l)),
        (this.initialValues = n.initial ? f({}, l) : {}),
        (this.renderState = u),
        (this.parent = t),
        (this.props = n),
        (this.presenceContext = r),
        (this.depth = t ? t.depth + 1 : 0),
        (this.reducedMotionConfig = i),
        (this.options = s),
        (this.blockInitialAnimation = Boolean(a)),
        (this.isControllingVariants = no(n)),
        (this.isVariantNode = ro(n)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = Boolean(t && t.current));
      const d = this.scrapeMotionValuesFromProps(n, {}, this),
        { willChange: h } = d,
        m = p(d, is);
      for (const f in m) {
        const e = m[f];
        void 0 !== l[f] && Y(e) && e.set(l[f], !1);
      }
    }
    mount(e) {
      (this.current = e),
        rs.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        ts.current ||
          (function () {
            if (((ts.current = !0), oo))
              if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => (es.current = e.matches);
                e.addListener(t), t();
              } else es.current = !1;
          })(),
        (this.shouldReduceMotion =
          "never" !== this.reducedMotionConfig &&
          ("always" === this.reducedMotionConfig || es.current)),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      this.projection && this.projection.unmount(),
        D(this.notifyUpdate),
        D(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (const e in this.events) this.events[e].clear();
      for (const e in this.features) {
        const t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      const n = x.has(e);
      n && this.onBindTransform && this.onBindTransform();
      const r = t.on("change", (t) => {
          (this.latestValues[e] = t),
            this.props.onUpdate && T.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0);
        }),
        i = t.on("renderRequest", this.scheduleRender);
      let a;
      window.MotionCheckAppearSync &&
        (a = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          r(), i(), a && a(), t.owner && t.stop();
        });
    }
    sortNodePosition(e) {
      return this.current &&
        this.sortInstanceNodePosition &&
        this.type === e.type
        ? this.sortInstanceNodePosition(this.current, e.current)
        : 0;
    }
    updateFeatures() {
      let e = "animation";
      for (e in lo) {
        const t = lo[e];
        if (!t) continue;
        const { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          const t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : {
            x: {
              min: 0,
              max: 0,
            },
            y: {
              min: 0,
              max: 0,
            },
          };
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t);
      for (let n = 0; n < as.length; n++) {
        const t = as[n];
        this.propEventSubscriptions[t] &&
          (this.propEventSubscriptions[t](),
          delete this.propEventSubscriptions[t]);
        const r = e["on" + t];
        r && (this.propEventSubscriptions[t] = this.on(t, r));
      }
      (this.prevMotionValues = (function (e, t, n) {
        for (const r in t) {
          const i = t[r],
            a = n[r];
          if (Y(i)) e.addValue(r, i);
          else if (Y(a))
            e.addValue(
              r,
              W(i, {
                owner: e,
              })
            );
          else if (a !== i)
            if (e.hasValue(r)) {
              const t = e.getValue(r);
              !0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i);
            } else {
              const t = e.getStaticValue(r);
              e.addValue(
                r,
                W(void 0 !== t ? t : i, {
                  owner: e,
                })
              );
            }
        }
        for (const r in n) void 0 === t[r] && e.removeValue(r);
        return t;
      })(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this);
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    addVariantChild(e) {
      const t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      const n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      const t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        void 0 === n &&
          void 0 !== t &&
          ((n = W(null === t ? void 0 : t, {
            owner: this,
          })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      var n;
      let r =
        void 0 === this.latestValues[e] && this.current
          ? null !== (n = this.getBaseTargetFromProps(this.props, e)) &&
            void 0 !== n
            ? n
            : this.readValueFromInstance(this.current, e, this.options)
          : this.latestValues[e];
      var i;
      return (
        void 0 !== r &&
          null !== r &&
          ("string" === typeof r && (Tt(r) || Pe(r))
            ? (r = parseFloat(r))
            : ((i = r), !ns.find(zt(i)) && nt.test(t) && (r = ht(e, t))),
          this.setBaseTarget(e, Y(r) ? r.get() : r)),
        Y(r) ? r.get() : r
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      var t;
      const { initial: n } = this.props;
      let r;
      if ("string" === typeof n || "object" === typeof n) {
        const i = g(
          this.props,
          n,
          null === (t = this.presenceContext) || void 0 === t
            ? void 0
            : t.custom
        );
        i && (r = i[e]);
      }
      if (n && void 0 !== r) return r;
      const i = this.getBaseTargetFromProps(this.props, e);
      return void 0 === i || Y(i)
        ? void 0 !== this.initialValues[e] && void 0 === r
          ? void 0
          : this.baseTarget[e]
        : i;
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new V()), this.events[e].add(t)
      );
    }
    notify(e) {
      if (this.events[e]) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        this.events[e].notify(...n);
      }
    }
  }
  class ss extends os {
    constructor() {
      super(...arguments), (this.KeyframeResolver = It);
    }
    sortInstanceNodePosition(e, t) {
      return 2 & e.compareDocumentPosition(t) ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, t) {
      let { vars: n, style: r } = t;
      delete n[e], delete r[e];
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: e } = this.props;
      Y(e) &&
        (this.childSubscription = e.on("change", (e) => {
          this.current && (this.current.textContent = "".concat(e));
        }));
    }
  }
  class ls extends ss {
    constructor() {
      super(...arguments), (this.type = "html"), (this.renderInstance = qo);
    }
    readValueFromInstance(e, t) {
      if (x.has(t)) {
        const e = ft(t);
        return (e && e.default) || 0;
      }
      {
        const r = ((n = e), window.getComputedStyle(n)),
          i = (jt(t) ? r.getPropertyValue(t) : r[t]) || 0;
        return "string" === typeof i ? i.trim() : i;
      }
      var n;
    }
    measureInstanceViewportBox(e, t) {
      let { transformPagePoint: n } = t;
      return Kr(e, n);
    }
    build(e, t, n) {
      wo(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Ho(e, t, n);
    }
  }
  class us extends ss {
    constructor() {
      super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = Dr),
        (this.updateDimensions = () => {
          this.current &&
            !this.renderState.dimensions &&
            Ko(this.current, this.renderState);
        });
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (x.has(t)) {
        const e = ft(t);
        return (e && e.default) || 0;
      }
      return (t = Qo.has(t) ? t : q(t)), e.getAttribute(t);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Go(e, t, n);
    }
    onBindTransform() {
      this.current &&
        !this.renderState.dimensions &&
        T.postRender(this.updateDimensions);
    }
    build(e, t, n) {
      Mo(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      Xo(e, t, 0, r);
    }
    mount(e) {
      (this.isSVGTag = Vo(e.tagName)), super.mount(e);
    }
  }
  const cs = (e, t) =>
      jo(e)
        ? new us(t)
        : new ls(t, {
            allowProjection: e !== r.Fragment,
          }),
    ds = $o(f(f(f(f({}, gr), Ja), Na), Za), cs),
    fs = ds("div"),
    hs = ds("li"),
    ps = ds("ul"),
    ms = (e) => {
      let { children: t, className: n = "", duration: r = 0.4 } = e;
      return (0, o.jsx)("div", {
        className: n,
        children: (0, o.jsx)(fs, {
          initial: {
            opacity: 0,
            scale: 0,
          },
          whileInView: {
            opacity: 1,
            scale: 1,
          },
          viewport: {
            once: !0,
          },
          transition: {
            duration: r,
            scale: {
              type: "spring",
              visualDuration: 0.4,
              bounce: 0.5,
            },
          },
          children: t,
        }),
      });
    },
    gs = () =>
      (0, o.jsx)("div", {
        className:
          "bg-[url('./assets/hero-image.png')] bg-cover bg-center bg-no-repeat bg-fixed",
        children: (0, o.jsxs)("div", {
          className:
            "bg-[rgba(47,24,147,0.5)] h-full w-full text-white flex flex-col items-center py-32 px-5",
          children: [
            (0, o.jsxs)(ms, {
              children: [
                (0, o.jsx)("h1", {
                  className: "",
                  children: "Easy to setup.",
                }),
                (0, o.jsx)("h1", {
                  className: "mb-10",
                  children: "Easy to maintain.",
                }),
              ],
            }),
            (0, o.jsx)(ms, {
              duration: 0.8,
              children: (0, o.jsx)("p", {
                className: "max-w-[500px] mb-10",
                children:
                  "Bootsrap is a widely-used, sleek, intuituve and powerful front-end framework for faster and easier web development.",
              }),
            }),
            (0, o.jsx)(ms, {
              duration: 1.2,
              children: (0, o.jsxs)("div", {
                className: "flex gap-10 flex-row",
                children: [
                  (0, o.jsx)("div", {
                    className:
                      "h-12 w-12 bg-red-500 rounded-[100px] flex justify-center items-center cursor-pointer",
                    children: (0, o.jsx)("img", {
                      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVHgBpZMBDYAgEEVPExjBJkbRJmoCIxAFmxDBCOcxuQ0F5Tjf9gcb+2/AABDRUEbQQmWHF5bSQy2RgDFVooyAWUSiDwGGtfGPoCwSChibHKtSwBgWNV5AYw861hb07BSrOYLD+EJRLjgoM6W77UMo2JKiUGCx9BpfBL44gISHwM/rvnYo5S9IKJhUxcAJe3UEJhsr4AsAAAAASUVORK5CYII=",
                      alt: "play icon",
                      className: "translate-x-[2px]",
                    }),
                  }),
                  (0, o.jsx)("div", {
                    className: "flex items-center",
                    children: (0, o.jsx)(s, {
                      text: "Get Started",
                      type: "secondary",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    vs = () =>
      (0, o.jsxs)("div", {
        className: "bg-cover bg-center bg-no-repeat py-20 px-5 md:px-10",
        children: [
          (0, o.jsx)(ms, {
            children: (0, o.jsx)("p", {
              className: "text-lg mb-10",
              children: "Free Sample",
            }),
          }),
          (0, o.jsxs)(ms, {
            duration: 0.8,
            children: [
              (0, o.jsx)("h1", {
                className: "font-bold mb-5 text-xl md:text-3xl xl:text-5xl",
                children: "Powerful Generator and Free",
              }),
              (0, o.jsx)("h1", {
                className: "font-bold mb-10 text-xl md:text-3xl xl:text-5xl",
                children: "Figma Sources",
              }),
            ],
          }),
          (0, o.jsx)(ms, {
            duration: 1.2,
            children: (0, o.jsx)("p", {
              className: "text-lg w-full lg:w-3/4 max-w-[1000px] mx-auto",
              children:
                "Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style and can easily be integrated into projects, allowing you to create hundreds of solutions.",
            }),
          }),
        ],
      }),
    ys = n.p + "static/media/macbook.1585a779d352c854259e.png",
    bs = n.p + "static/media/screen.09ad4641716ad0e7d7b0.png",
    xs = (e) => {
      let { children: t, className: n = "", duration: r = 0.5 } = e;
      return (0, o.jsx)(fs, {
        className: n,
        initial: {
          x: -100,
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
        viewport: {
          once: !0,
        },
        transition: {
          duration: r,
        },
        children: t,
      });
    },
    ws = () =>
      (0, o.jsx)("div", {
        className:
          "absolute left-0 top-[50%] translate-y-[-50%] hidden md:block",
        children: (0, o.jsxs)(xs, {
          duration: 0.8,
          children: [
            (0, o.jsx)("img", {
              className: "h-[200px] md:h-[350px] xl:h-[500px]",
              src: ys,
              alt: "Macbook Pro",
            }),
            (0, o.jsx)("img", {
              className:
                "absolute h-[167px] md:h-[298px] xl:h-[425px] translate-y-[-113%] md:translate-y-[-113%] xl:translate-y-[-113%]",
              src: bs,
              alt: "Macbook Pro",
            }),
          ],
        }),
      }),
    Ss =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFBSURBVHgB7ZiBTcMwEEW/qw7QDcgIHSEbwAaECRATMAIwAWUDNggbNBtgJgAmMP9ILKIIYZ/EmQj5SSc3lRW/OPbpHAcSQmjYdIwT2PLknHvI6ilSjNdQjvtcsT6Up80RixwZOxghMrOxrlP9N7PfA9//G+zwms4brJTVim1RCC4TH8a0JLyn+meJTZvinLHHL8F7Lv+S9T3EPJcUm56yZzQogOxeyl3krDHZ2g3K0VHuNOdVnk2tZ7SwQ5bJYxwzRywmXc8pfoERnCU3v655TEsV01LFtFQxLVVMSxXTUsW0SNnjMRaC3awmF6TMvcIfIWJ3jJvpusVK2HJWbjlTchC4xFdRKFgefpN8VrCUO7A5YEXUXanlX4iZfaL6jpzj24DxzLfn7u1hx24x5s9QpgtleV4k+qTcMdgi34H7KPUBeAQnUoCev+4AAAAASUVORK5CYII=",
    ks = () =>
      (0, o.jsx)("div", {
        id: "features-section",
        className:
          "bg-[url('./assets/features-image.png')] bg-cover bg-center bg-no-repeat lg:h-screen bg-fixed",
        children: (0, o.jsxs)("div", {
          className:
            "bg-[rgba(47,24,147,0.5)] w-full h-full px-5 py-20 relative flex items-center",
          children: [
            (0, o.jsx)(ws, {}),
            (0, o.jsxs)("div", {
              className:
                "text-white md:w-[60%] xl:w-[45%] ml-auto lg:mr-[10%] xl:mr-[15%] flex flex-col justify-between",
              children: [
                (0, o.jsxs)(ms, {
                  className: "text-left",
                  children: [
                    (0, o.jsx)("h1", {
                      className: "font-bold",
                      children: "We Create Something New",
                    }),
                    (0, o.jsx)("p", {
                      className: "text-lg mt-5",
                      children:
                        "We have created a new product that will help designers, developers, and companies create websites for their startups quickly and easily.",
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "block md:flex mt-10",
                  children: [
                    (0, o.jsxs)(ms, {
                      className: "text-left pr-10",
                      duration: 0.8,
                      children: [
                        (0, o.jsx)("img", {
                          className: "mb-5",
                          src: Ss,
                          alt: "Icon",
                        }),
                        (0, o.jsx)("p", {
                          children: "30 NEW FEATURE PAGES",
                        }),
                        (0, o.jsx)("p", {
                          className: "mb-5 leading-loose font-extralight",
                          children:
                            "Startup Framework contains components and complex blocks which can easily.",
                        }),
                      ],
                    }),
                    (0, o.jsxs)(ms, {
                      className: "text-left",
                      duration: 1,
                      children: [
                        (0, o.jsx)("img", {
                          className: "mb-5",
                          src: Ss,
                          alt: "Icon",
                        }),
                        (0, o.jsx)("p", {
                          children: "30 NEW FEATURE PAGES",
                        }),
                        (0, o.jsx)("p", {
                          className: "mb-5 leading-loose font-extralight",
                          children:
                            "Samples will show you the feeling on how to play around using the components.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    As = () =>
      (0, o.jsxs)("div", {
        className:
          "border-grey border rounded-[10px] max-w-[35rem] py-8 px-10 mx-auto lg:mx-0",
        children: [
          (0, o.jsx)("p", {
            className: "mb-10 text-lg",
            children: "SIGN IN",
          }),
          (0, o.jsx)("div", {
            className: "w-full mb-8 border border-grey rounded-md px-5 py-2",
            children: (0, o.jsx)("input", {
              className: "w-full focus:outline-none",
              placeholder: "EMAIL",
            }),
          }),
          (0, o.jsx)("div", {
            className: "w-full mb-8 border border-grey rounded-md px-5 py-2",
            children: (0, o.jsx)("input", {
              className: "w-full focus:outline-none",
              placeholder: "PASSWORD",
              type: "password",
            }),
          }),
          (0, o.jsx)(s, {
            text: "Login",
            type: "secondary",
          }),
          (0, o.jsx)("div", {
            className: "h-[1px] w-full bg-slate-300 my-10 relative",
            children: (0, o.jsx)("p", {
              className:
                "absolute top-[-12px] left-[50%] translate-x-[-50%] bg-white px-5 text-slate-400",
              children: "or",
            }),
          }),
          (0, o.jsx)(s, {
            text: "Sign in with Google",
            type: "google",
          }),
        ],
      }),
    Es = () =>
      (0, o.jsxs)("div", {
        className: "py-20 px-5 md:px-10 lg:p-20 lg:flex",
        children: [
          (0, o.jsxs)(ms, {
            className: "lg:w-1/2 xl:p-20 text-left",
            children: [
              (0, o.jsx)("h1", {
                children:
                  "We solve digital problems with an outstanding creative flare",
              }),
              (0, o.jsx)("p", {
                className: "mt-10 text-lg",
                children:
                  "We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.",
              }),
            ],
          }),
          (0, o.jsx)(ms, {
            duration: 0.8,
            className: "lg:w-1/2 mt-16 lg:mt-0",
            children: (0, o.jsx)(As, {}),
          }),
        ],
      });
  const Ps =
    n.p + "static/media/bars-icon.58dd4c251f6174d801ff0052f5b53b2b.svg";
  const Cs = n.p + "static/media/x-icon.d8fd2a875d34b6e35ca135b132b7961d.svg",
    Fs = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    },
    Ts = {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
    },
    Ds = () => {
      const [e, t] = (0, r.useState)(!1),
        n = [
          {
            name: "Home",
            url: "#hero-section",
          },
          {
            name: "Features",
            url: "#features-section",
          },
          {
            name: "Pricing",
            url: "#pricing-section",
          },
          {
            name: "Our Team",
            url: "#team-section",
          },
          {
            name: "Contact",
            url: "#pricing-section",
          },
        ];
      return (0, o.jsxs)("div", {
        className: "w-screen md:w-auto px-10",
        children: [
          (0, o.jsx)(ps, {
            className: "hidden md:flex",
            initial: "hidden",
            animate: "visible",
            variants: Fs,
            children: n.map((e, t) =>
              (0, o.jsx)(
                hs,
                {
                  className:
                    "py-2 px-6 text-[#FFFFFF] hover:text-blue-500 duration-500",
                  variants: Ts,
                  children: (0, o.jsx)("a", {
                    href: e.url,
                    children: e.name,
                  }),
                },
                t
              )
            ),
          }),
          (0, o.jsx)("img", {
            className: "h-8 ml-auto cursor-pointer text-white md:hidden",
            src: Ps,
            alt: "",
            onClick: () => {
              t(!e);
            },
          }),
          (0, o.jsxs)("div", {
            className:
              "md:hidden bg-[rgba(47,24,147,0.9)] absolute right-0 top-0 h-full min-w-64 p-5 pre-slide ".concat(
                !e && "slide-x-right"
              ),
            children: [
              (0, o.jsx)("img", {
                className: "h-5 cursor-pointer mb-10",
                src: Cs,
                alt: "",
                onClick: () => {
                  t(!e);
                },
              }),
              (0, o.jsx)("ul", {
                className: "text-left",
                children: n.map((e, n) =>
                  (0, o.jsx)(
                    "li",
                    {
                      className:
                        "py-2 px-6  cursor-pointer text-[#FFFFFF] hover:bg-gray-900 rounded-md duration-500",
                      onClick: () => t(!1),
                      children: (0, o.jsx)("a", {
                        href: e.url,
                        children: e.name,
                      }),
                    },
                    n
                  )
                ),
              }),
            ],
          }),
        ],
      });
    },
    js = () =>
      (0, o.jsx)("div", {
        id: "hero-section",
        className:
          "bg-[url('./assets/hero-image.png')] bg-cover bg-center bg-no-repeat sm:h-auto lg:h-screen bg-fixed",
        children: (0, o.jsxs)("div", {
          className:
            "bg-[rgba(47,24,147,0.5)] h-full w-full text-white flex flex-col items-center p-10 xl:p-20 relative overflow-x-hidden",
          children: [
            (0, o.jsx)(Ds, {}),
            (0, o.jsxs)(ms, {
              children: [
                (0, o.jsx)("p", {
                  className: "text-xl mt-40",
                  children: "Startup 3",
                }),
                (0, o.jsx)("h1", {
                  className: "font-bold tracking-wide mt-5",
                  children: "Forget About Code",
                }),
                (0, o.jsx)("p", {
                  className: "text-lg w-full xl:w-[40%] mt-10 mx-auto",
                  children:
                    "Startup Framework gives you complete freedom over your creative process - you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
                }),
              ],
            }),
            (0, o.jsx)(ms, {
              className: "mt-10",
              children: (0, o.jsx)(s, {
                text: "Create an Account",
                type: "primary",
              }),
            }),
          ],
        }),
      });
  const Ns =
      n.p + "static/media/check-icon.d3c3c0d5ef34c448a3f2d8a8bb207bfb.svg",
    Ls = (e) => {
      let { children: t, className: n = "", duration: r = 0.5 } = e;
      return (0, o.jsx)(fs, {
        className: n,
        initial: {
          y: 150,
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
        viewport: {
          once: !0,
        },
        transition: {
          duration: r,
        },
        children: t,
      });
    },
    Os = (e) => {
      let {
        name: t,
        price: n,
        includedFeatures: r,
        unincludedFeatures: i,
        show: a,
        slideDuration: l,
      } = e;
      return (0, o.jsxs)(Ls, {
        duration: l,
        className:
          "w-[320px] lg:w-1/3 border-2 border-slate-400 border-opacity-45 rounded-md mx-auto px-5 xl:px-16 py-10 \n            ".concat(
            !a && "hidden"
          ),
        children: [
          (0, o.jsx)("h3", {
            className: "text-2xl mb-10",
            children: t,
          }),
          (0, o.jsxs)("div", {
            className: "flex items-baseline",
            children: [
              (0, o.jsxs)("h1", {
                className: "mb-10 ml-5 md:mr-0",
                children: ["$", n],
              }),
              (0, o.jsx)("p", {
                className: "text-lg mb-10 ml-2",
                children: "/month",
              }),
            ],
          }),
          (0, o.jsxs)("ul", {
            className: "w-full text-start mb-10",
            children: [
              r.map((e, t) =>
                (0, o.jsxs)(
                  "li",
                  {
                    className: "mb-2 flex",
                    children: [
                      (0, o.jsx)("img", {
                        src: Ns,
                        alt: "Check Mark",
                        className: "h-4 mr-2",
                      }),
                      e,
                    ],
                  },
                  t
                )
              ),
              i.map((e, t) =>
                (0, o.jsx)(
                  "li",
                  {
                    className: "mb-2 text-gray-400 pl-6",
                    children: e,
                  },
                  t
                )
              ),
            ],
          }),
          "Professional" === t || window.innerWidth <= 1024
            ? (0, o.jsx)(s, {
                text: "Get Started",
                type: "teriary",
              })
            : (0, o.jsx)(s, {
                text: "Get Started",
                type: "transparent",
              }),
        ],
      });
    },
    Rs = () => {
      const [e, t] = (0, r.useState)(!1),
        [n, i] = (0, r.useState)(!1),
        [a, s] = (0, r.useState)(!1),
        [l, u] = (0, r.useState)("table2"),
        c = [
          {
            name: "Starter",
            price: "9.99",
            includedFeatures: [
              "2 GB of space",
              "14 days of backups",
              "Social integrations",
              "Client Billing",
            ],
            unincludedFeatures: [
              "Remote access",
              "Custom domain",
              "24 hour support",
              "Admin tools",
              "Collaboration tools",
              "User management",
            ],
          },
          {
            name: "Professional",
            price: "19.99",
            includedFeatures: [
              "2 GB of space",
              "14 days of backups",
              "Social integrations",
              "Client Billing",
              "Remote access",
              "Custom domain",
              "24 hour support",
            ],
            unincludedFeatures: [
              "Admin tools",
              "Collaboration tools",
              "User management",
            ],
          },
          {
            name: "Team",
            price: "49.99",
            includedFeatures: [
              "2 GB of space",
              "14 days of backups",
              "Social integrations",
              "Client Billing",
              "Remote access",
              "Custom domain",
              "24 hour support",
              "Admin tools",
              "Collaboration tools",
              "User management",
            ],
            unincludedFeatures: [],
          },
        ],
        d = (e) => {
          t(!1),
            i(!1),
            s(!1),
            "table1" === e
              ? (t(!0), u("table1"))
              : "table2" === e
              ? (i(!0), u("table2"))
              : (s(!0), u("table3"));
        },
        f = (0, r.useCallback)(() => {
          if (parseInt(window.innerWidth) >= 1024)
            return t(!0), i(!0), void s(!0);
          t(!1),
            i(!1),
            s(!1),
            "table1" === l ? t(!0) : "table2" === l ? i(!0) : s(!0);
        }, [l]);
      return (
        (0, r.useEffect)(
          () => (
            f(),
            window.addEventListener("resize", f),
            () => {
              window.removeEventListener("resize", f);
            }
          ),
          [f]
        ),
        (0, o.jsx)("div", {
          id: "pricing-section",
          className:
            "bg-[url('./assets/pricing.png')] bg-cover bg-center bg-no-repeat lg:h-screen bg-fixed",
          children: (0, o.jsxs)("div", {
            className:
              "bg-[rgba(47,24,147,0.4)] h-full w-full text-white flex flex-col items-center py-20 px-5",
            children: [
              (0, o.jsx)(ms, {
                children: (0, o.jsx)("h1", {
                  className: "mb-5",
                  children: "Plans & Pricing",
                }),
              }),
              (0, o.jsx)(ms, {
                children: (0, o.jsx)("p", {
                  className: "mb-5 text-lg",
                  children:
                    "Startup Framework is free foreever - you only pay for custom domain hosting or to export you site.",
                }),
              }),
              (0, o.jsxs)("div", {
                className: "lg:hidden flex gap-2 mb-5 bg-gray-800 rounded-md",
                children: [
                  (0, o.jsx)("div", {
                    className: "text-sm px-5 py-2 cursor-pointer ".concat(
                      e && "bg-red-400"
                    ),
                    onClick: () => {
                      d("table1");
                    },
                    children: (0, o.jsx)("p", {
                      children: "Starter",
                    }),
                  }),
                  (0, o.jsx)("div", {
                    className: "text-sm px-5 py-2 cursor-pointer ".concat(
                      n && "bg-red-400"
                    ),
                    onClick: () => {
                      d("table2");
                    },
                    children: (0, o.jsx)("p", {
                      children: "Professional",
                    }),
                  }),
                  (0, o.jsx)("div", {
                    className: "text-sm px-5 py-2 cursor-pointer ".concat(
                      a && "bg-red-400"
                    ),
                    onClick: () => {
                      d("table3");
                    },
                    children: (0, o.jsx)("p", {
                      children: "Team",
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: "h-full w-full max-w-[1200px] gap-8 lg:flex",
                children: [
                  (0, o.jsx)(Os, {
                    name: c[0].name,
                    price: c[0].price,
                    includedFeatures: c[0].includedFeatures,
                    unincludedFeatures: c[0].unincludedFeatures,
                    show: e,
                    slideDuration: 0.4,
                  }),
                  (0, o.jsx)(Os, {
                    name: c[1].name,
                    price: c[1].price,
                    includedFeatures: c[1].includedFeatures,
                    unincludedFeatures: c[1].unincludedFeatures,
                    show: n,
                    slideDuration: 0.8,
                  }),
                  (0, o.jsx)(Os, {
                    name: c[2].name,
                    price: c[2].price,
                    includedFeatures: c[2].includedFeatures,
                    unincludedFeatures: c[2].unincludedFeatures,
                    show: a,
                    slideDuration: 1.2,
                  }),
                ],
              }),
            ],
          }),
        })
      );
    },
    Ms = n.p + "static/media/show1.bb31d37e9aea65ac8be4.png",
    zs = n.p + "static/media/show2.ecc5586a1bb0ad826cdf.png",
    Vs = n.p + "static/media/show3.7cc04d37902a3a207e9a.png",
    Bs = n.p + "static/media/show4.d823c9fd5fc7d222bcdc.png",
    Is = () => {
      const e = [
        {
          name: "Mozart Project",
          desc: "UI KIT",
          image: Ms,
        },
        {
          name: "Startup Framework 2.0",
          desc: "FRAMEWORK",
          image: zs,
        },
        {
          name: "Fromo the Sky",
          desc: "UI PHOTOS",
          image: Vs,
        },
        {
          name: "Air Forces",
          desc: "Pictures",
          image: Bs,
        },
      ];
      return (0, o.jsxs)("div", {
        className: "px-10 py-20",
        children: [
          (0, o.jsxs)("div", {
            className:
              "w-full max-w-[1000px] mx-auto flex justify-between mb-10",
            children: [
              (0, o.jsx)("h1", {
                children: "Last Works",
              }),
              (0, o.jsx)("div", {
                className: "w-40 items-center hidden md:flex",
                children: (0, o.jsx)(s, {
                  text: "View all Works",
                  type: "primary",
                }),
              }),
            ],
          }),
          (0, o.jsx)("div", {
            className: "md:flex md:flex-wrap mx-auto max-w-[1000px] gap-8",
            children: e.map((e, t) =>
              (0, o.jsxs)(
                xs,
                {
                  duration: 0.6,
                  className:
                    "p-5 md:w-[calc(50%-1rem)] mb-10 text-left border-2 border-transparent hover:border-[#E93A7D] rounded-md cursor-pointer duration-500",
                  children: [
                    (0, o.jsx)("img", {
                      className: "w-full mb-5",
                      src: e.image,
                      alt: "Project",
                    }),
                    (0, o.jsx)("p", {
                      className: "mb-2 text-sm",
                      children: e.desc,
                    }),
                    (0, o.jsx)("h3", {
                      className: "text-2xl lg:text-3xl",
                      children: e.name,
                    }),
                  ],
                },
                t
              )
            ),
          }),
          (0, o.jsx)("div", {
            className: "flex items-center md:hidden justify-center",
            children: (0, o.jsx)(s, {
              text: "View all Works",
              type: "primary",
            }),
          }),
        ],
      });
    },
    Us = n.p + "static/media/start1.2178321226658eef8572.png",
    Ws = n.p + "static/media/start2.d5219c6c4434705965e6.png",
    _s = n.p + "static/media/start3.50cfc12f9fb540383f2f.png",
    Hs = n.p + "static/media/start4.10a77be757d8b564336b.png",
    Ys = n.p + "static/media/start5.b577776e9ab3cb2cd677.png",
    Ks = () => {
      const e = [
        {
          image: Us,
          name: "Leah Salomon",
          role: "UI Designer",
        },
        {
          image: Ws,
          name: "Colin Timmons",
          role: "UX Designer",
        },
        {
          image: _s,
          name: "Miguel Osborne",
          role: "Front-end Developer",
        },
        {
          image: Hs,
          name: "Taylor Simon",
          role: "Product Manager",
        },
        {
          image: Ys,
          name: "Steven MacAlister",
          role: "Copyrighter",
        },
      ];
      return (0, o.jsx)("div", {
        id: "team-section",
        className: "px-10 xl:px-20 py-32",
        children: (0, o.jsxs)("div", {
          className: "text-left max-w-[1000px]",
          children: [
            (0, o.jsx)("h1", {
              className: "text-5xl mb-5",
              children: "Startup Crew",
            }),
            (0, o.jsx)("p", {
              className: "text-lg mb-10",
              children:
                "The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.",
            }),
            (0, o.jsx)("div", {
              className: "flex flex-col md:flex-row flex-wrap justify-stretch",
              children: e.map((e, t) =>
                (0, o.jsxs)(
                  "div",
                  {
                    className:
                      "py-5 w-40  mb-10 md:mb-0 mx-auto md:mx-0 md:mr-20 lg:mr-40 md:w-[17%]",
                    children: [
                      (0, o.jsx)("img", {
                        src: e.image,
                        alt: "Profile",
                        className: "rounded-[50px] mb-5 h-20",
                      }),
                      (0, o.jsx)("p", {
                        className: "text-lg",
                        children: e.name,
                      }),
                      (0, o.jsx)("p", {
                        className: "text-sm",
                        children: e.role,
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
          ],
        }),
      });
    },
    qs = n.p + "static/media/test1.b6ea9fcfd1bddcbc6418.png",
    Qs = n.p + "static/media/test2.a7900004f4ca9fb992e1.png",
    Xs = n.p + "static/media/test3.c5102c5543527a062a31.png",
    Gs = (e) => {
      let { name: t, quote: n, image: r, duration: i } = e;
      return (0, o.jsxs)(xs, {
        duration: i,
        className:
          "min-h-[220px] lg:w-[calc(50%-2.5rem)] m-5 p-5 rounded-md border-2 border-slate-400 border-opacity-50 flex",
        children: [
          (0, o.jsx)("div", {
            className: "h-full w-20",
            children: (0, o.jsx)("img", {
              className: "h-15 w-15",
              src: r,
              alt: "User Profile",
            }),
          }),
          (0, o.jsxs)("div", {
            className:
              "w-[calc(100%-5rem)] text-left flex flex-col justify-between px-5 text-white",
            children: [
              (0, o.jsxs)("p", {
                children: ['"', n, '"'],
              }),
              (0, o.jsxs)("p", {
                className: "mt-5",
                children: ["-", t],
              }),
            ],
          }),
        ],
      });
    },
    Js = () => {
      const e = [
        {
          name: "Rayhan Curran",
          quote:
            "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
          image: qs,
        },
        {
          name: "Kayley Frame",
          quote:
            "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
          image: Qs,
        },
        {
          name: "Gene Whitfield",
          quote:
            "The most important part of the Startup Framework is the samples",
          image: Xs,
        },
        {
          name: "Allan Kim",
          quote:
            "I\u2019ve built my website with Startup just in one day, and it was ready-to-go. ",
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACTNSURBVHgBnXtpcBzneebTx9wzwOAGSIAACBIERYqkSMmSvZJ8Ko7jOLb3ymbXW7ZTe1aqNpvaH/tnqyJX7Y+t/eXaf1lvbexkvVElUSJHsg7roGRJJHVQvE+ABAiQuI/BMXdPd5736+6ZnsGAZGWk4Qymr+97+j2e93m/1tDkde7cuXRej3y/ojlfArRjGpwh+V3TNHcHh7+A3+VPx/F+d+Du459FU/upD/8Xb6NTPab+98a/vb2r3zTvH83fovn/1C6pOd4YNKfpueFuOu/o2pRu6C89Njz4MzR5bTvq1LmL37EN40/5Nf2ggTs7nUTTqr8Fj3Uc3TvOCUxeqzuJv7fjbxMQ9Z2BVCBDrx2ludsbwW88LvDjlKZrzzcCVLfnh5cu/5h34A811O70w17kfvts2xcBG/DQ1XRsOzZ4zmZ/7/S637bquVCbPHGH7Tg/emz/8PPVffwvpy9ceR669sdagx3ISWzXZ7a5hB406SYXf9Dftm17v2u431wexu12Om6b2wb+lTnp9bbx4yMjg39U3eP0xWs/IGZ/6h+//WKaOxHvIo67k9qiu2blgeZUf6+LJ2Lssk/DaR/a3HF/QDT/9nufde7p3U0v3Hnv+9wFx/7ukX3DL6k9zly+NskfhrZdsOkgg8DwEg2Tc7z44g9ED9qsv4/Oc9BaguFVDwLPT3kbhrFtLI1j0r0TNI67EfTGYTQD2nFkTMhYmj1sfHjx8g94+h94UUsdrmOHaK7VTF5NWkPABRz1XVPm6b41rWE0HKyuu8BtrK9jfWUNuVwOMHQYPMKqVGDzLdfRCYrsZzfElUZL0ZpOsj47+scF3437B46LhnRt3tQ0/dt1gVa+OfVgbAeoBkazl/+r7t05HxR5VTjxYqmI3OYW2tvbEInHUSoUUSoWaSE6zFAIpm5442EE8PKvb0W+JWieZdaowvb03LjNB2r7POq3OLb2JZOjP9boc2LqmrOzXzsBk/d/rwKAWmD1fyuXy7D4DnHSsi0SjiDdlkZmLYPcnbtIpluQam1VAy0JaOU8ASxBM0xEozHEohFmLb1ufo5dA6xqrUF3E+sMuJR/aHDMjagEcDhmGo5L3lxH1d071cQQgn5b9ZDAyfXAxW0VP+RTXIdWUiorS1xfW8XG8hoyq6tYXlxGPruFDYKzubGurCNK64m1tiCZSCIcicAwDWxk1lGxK8rg0i0tiKdS6BkcwN79+6CbJgwhm4EB60G/QMD9dgTE3dZgHEOmobtguMe5O2iB7NIITvBi2/bgSXxLkXiRWV7ErctXMXnlKjLrG1hbXsZWNo/1bA5lqwLTDKFkWZy47bmJDZNWYtBiyzze8cCVOOMTvjCtLZFM4okvPIV/+r1/hrZ0ugpGs/jROPZmvztNtpu6e+tVFnE8puk0SWfBKO94f+teMBZQBZD5e7PYzGQwN3Ebd+5MYWZ8AmsEJFcsoGLZap8yPwuVMsFwY4iQYfndf6tsxJslYEkAdsdnqIsqwHl8sVTCr0/+GolYCN/4x99BG93Sz2LBGLQTOA9TkpgatCrJcjyQ1B1qHle3o827vElzn5mcgl0s49233sJNWkmY2wq0hmyhhFLFUr5nEggbvs/bKJWLyrJU0KX1+Oe0VfbSXaAg7qHX4pVVVueyCM6NK9ewp78fx57+vKQvtNANH5S2/d93siD/ZVbzO++cIYOqqPsDW/MCVTCAeYOrfvK/LLPLFq1idX4OL/z0/2F5awthPYRcqYAigVHB1nOPQpmWwwmEeWfDmoBBy5BJ8jwVq6ws1bUaqLghbqVLhrLrJ2fxvMVCHsurGcWTrl+4BDMSxdihg0gk4nVjfBigmgJTTdU0bUW5dA9RZbruCWw0JDwP8VKxxEC6hpN/90u89sYbzCi0kGIeLYkWTjrMHQ1UmI0itIYILSBEIAY629CRTKAlFldusrmVw+pWFsuMPRtlC5tM24UyXY6WqHv0QTc0lebtIED8mJ9dwCuvvIpkSwqPPHoYAwzKwpPiDOLODiavuXd0W7CoMXsfGAQIjvru+6gXkJ2aXzpeoPKtbOnONF74yU9x6cZ1sWTlOrFIjBOowJJ4UC4hGQ6jvzWBwa52jO3uYlyIkquYyq0MsSRmFokn2QJdhGa7zBh1+upNzNIS88UKyl4iMHRUgak4EqssAljCJbpTW1sHyuRCTz39BTiphHJvzcuwtXlpVUqjaYEytpawAuUCrbV6B7x9HfEhDkLXtSq0mo1AWnNPJAP54LVXcW38Jl3HQL5SVHEhGg5xknQZRteWSAiPD+7CkZF+dHf3oJPgiAUpziGnpiVJfHF4XDvPoROofoK0u38Xzl++httzS1jJF7FCayrYZc+ldMamsgq0ESOkBr22voapKeDP//f/xXO//Zs48OghxOlSIZ6v6jqOW4IEs7lrVVVaF9imuRbjcflaPSHcwHGrZ0X9dblLDuwqrg6ufnIGn529wLtWRozELUcwWhIpFEjQ7IqDPrrLN44dwKEDe1V2SbSnFTfREHMHYLvncyUOBlqxUk6UvAq9/b14KhrGXgIzNTuHD8fvwCk4yDPgCkmUgO2TBVulREdd/8bNcWz9fB0DQ4N47tu/jdEDowEAmjBdrWY1WoAsyqhM301qAanegvxfJHgqf+H/W+sZfHLyJC0jr7Zu5gsIh8JIcuLy23A6hW88fgiHD+1HJNWiAqi4j1uOiTnS1B2tSgQlFqlUKxUWfxNi197bg1hLK8JkvTPrDOjrWSzwunJ4JBJWFikWVCJYcu5sPof1rQ26XwnzS8sw+JtYoxDBRmbeDJzGv/Vg6tICliPvirIcrcqG5W5qjoXbly+hkM1yEGVmnjK28nkkONit3BZ6UnF8/bExHHpkP1I9PYiSjMXJMwxulzqIahmzTQg6XU7xFLEScSnGGslSwmahrAcKoLbuTgx2tjP7VBDmNpuAmHQ9U1yQ/8WiUZdT6TVppH/3bty6dhO/eOFF/m03BcB/+fVX4z4qQjWri/zIbStzdQGSeqVIMFrSrZhbWkWBGaTIt5w2Txcq8wIHujuwb/8wkj2dMOkOJu+4LtUzLUona5W0CkXcJEuFFSByXsW3VZ521DYBS6wwzHMM9HUjQguI8LhWxg4hgBLPZOBuoNWq7DjLDHf+0lVEEzFmzBWUaUFBa9ACAGheuJDsJ2lfDxiVqc5fq34COl09qra3XajylXMXsLaRJ2231Vtcgvigmxnh8NAutHV0cEJRNTlNd+UDkRV80maTvEj9JBX20hKZ8vIqLAbZoZFBdPZ0uWxX0jtBTUUMjB4axWYhh9dPncdKLk+rMpSbRAm01FFhI0zqwIAsYIdMBeyNiVv42rNPI7Oyir5dfeo3n8w6gUrc9oygainedzOk+Tv7LuQGXr888F8VuD69uryEd371HiwOSDFauAGwTFPfReY5uLsHYfIIZSHiOnIeofd0JfkUYatctHDl4nV8dOU67iyusGQooyOewKVbk4jHaCGDQzh8YB/SrUllXdFkCieOH8Hq0hrevXITGQZalcK5TchemJQgShBL5EEW37ZdQjzaintT04xHpkom4pqaV2zqnhlUhfQm8cfU3CJE7Wr4tYRWy0AOvO9exD795ru4y+AW4h2VAhAexZe7PNbTjtYemj0JlyEuo7u/a25BRKvKY2VuBb9850OcYQwwGKw729sxONKFnpYEoqkkxh47ShFrE3/2q1PooeUN9XVgd1cberpa8dXfeIZWqOOdizewRJeRmkkAyjLeRXg9cYkILVXcO0fLitANsxTEOjp6glk58KEFVAKtznRMJUE6bkWteyTI8SARhF04bIXy6tISPnzvfVqLpdzB5T2Oh7CBvv4eJCTQ0sTdICqAsEpm0Vik21w/dxHj04u4MjmN/r4+jO7ZrYJ0mqk8TyXv9GcXyYTX8c4v30QbrWF+ahXXbt6AQ1fp7u7Gbgbilu49GOjPYY2uUlKW44pfkqWiBEeIYDu1nXwxi8WFJawtzWPP0F4/AQcyrZ9wHI/EOnVuZYop+UywVgP5L9utn1RwtvFr0v7Je/PqRDkWgO7uLqiRkIGurg6CElVEzfFc1CaIDvct5rIMhiw2lzPoJHjDtILh9hYsTE/j5OmzFFpL1BTDOE9uFGNA3UuwHtnVxUrcQiaTw+LGHCbmZ5DXowgnWzG0/xjm525T41lTfSeLxzNMkWwCXdRsDD2OMge+OL+kMpNbFHpW4dRiqRawFM0rGmVepioSvY1BucavKRx3V5x66yTefOUNBa7Ju0miW+eaLVTa0sxWBmsgixnKypZcpsw6x2FKD/HTjIdp3hGcGBhEK9P6FGud05MzCFHi1FvaVHxxCISk8WmWG4eY3Xr6urB3wFSxRDLvEgvHCxN38MnkLMKsyVpb25DPr3NMMTx3Ygzf+9ZzjFcp3FpYwU9efAOZ+QU1Xlehc8d83yJScxmw6WtSVQ3GjzN2rdIo8W6c+/gsDhw9imM88+vvf6jikF5Nkw4S8QgiVN42SMLGL99A1OBvjCHpjjRS6TbYuomPpubxrSceRZkZaZ3F57WJSRwfG4PZ04GbBOhoB+OTuG1nGhbJWksiipa2JINvi8pQIdZh++ieh44+isRrJ/H+9VvYkvKDVvmV0b34588cQ4YB9+a5q9h7dAzffvZJ3OV2qcmq874fKE71H4Kp2W4Vrde3AjVfwOLEF2dm0NbViX/5T76F11/4G5X7QxxgRcXUitpPYsrs3CJeO/UZrszMoYsTOTLQA4OfK9wnxaBYYqEoQM3fncXWRgYpjreTNt7JMYyNDiovz+SKtIQ49o48ohizRiJoCBlk6pcsZzLepDo0HD+4DzdmF5U9l5iFSgT7L/7qbRwd6sHxpx9HhsXlY1/8CnILa27t59ToSDMO7MufPnCm7jE5KiII9uWqNQbTSrqjHcNDu3HpzCl0pJOKbOWK3Je2XZBUTJCWSNtffv8c1llcdjJti09/fGdOUfxnjh6gIG4xBhQxMXUXHay2hbMkEgnFGzS6T7yDrkQedOviNRwb6UZCJEu6gMQHRzfcu67GVOH1HGaaNMb29GHlygTStEwZQxfdc2TPLiQPj0EjUDa1oTZSh7DiTy4ctXpvB3C8l0fw/Hhhe8007x/HzU4p+vHIwQO4cPoMVugqjx4cweTUPczT3w3DItESdtpHSm/ixL4h7KErxBiMz1y7jat3ZhAjuCeOH0bxo8+wkMljN13HJrh9e/pV+yQSjzJVt6oyQXjQ7l29KqGJFdqay5Ociit7qMKT1+tkoTnGa124NYMOstwDfe1IhEj6yLxBbTk5uh/F+WUG3wXlukbIqEKiOXYdODULCgBj+N10Ddt2dAwfSZ3K/BC+3NWN/OY63v67VzG2dwinPj6vUu/o0B4lPRwcGsCJY6P44Mw5nL1+WwEW4WTTrJlGDj+KVDyJn7/yFvraKSzRdYT9hoTzECRh0Gc/vYAnThxWNZXYsqAjbFnsuELtxfb4lkgXwqALLF47WYvt6m7H4WOHcPOTc7j+3scY7u9C1+eegkHAyuUlAlMkI07Av/VOY+GIGu+vAlMzo+COvjjl/m1rrpPp3gQKrGQPHT6IMwzIYwSlq60Ni0zjYSb/sx9/hlOXb8FhlkrQEvqSUbTv2sXJhtFOgH73G1/FmY/OKn7TzXrKoCWsk9BJvfTU544iFot4TNx7i7XYFVf+8Bm6KH+r0nbZYLYqk3PQqnu7cOKZJ6BRm9HK0pMyVDZao4WvMtDHCZKambOTI6FOWBDVEO7bZb56g0aqWC1qUqfNtsfnv/wsM1AC/+EP/i1aWpIYHB3BoROH8On1cVxiKn3iyBhGezvx5GAvWkWLobuIz4s7dDJDPX38EUTYQllmUC9yIhJ4Dx8aQYSVu2aVqwqiJn0piQ1lIYm228GgpUhdJZaU52fRa7+I/LDC4B8fHkbb8ccZ4yyUmAkv0HLn7t2r+oLL2eymn357WRxFrzhuQBIhSolRO+gWMhDhIL17BjFy5BhGjj6GDz86j5nFVQyMHcSTz3wBvfTvdGsKNin6oW7GDAbcLlpFC81dY7yIMriabHlIXOllYdcejSPNq9srizxmS4GgiXUICGSzEHIo/SXVLfC5vKOkixUWngWpjXizNnIFdUwXrbd1cFBpR3oshXc+vcSksE51706V9tc6xtvn6coumpIwTIn6urciqV7FwjaFXRmy4aa1SCzGSYZVtnnrl69jdGwEv/cH/w5rbKNcee89FpglBuwRrHLQvQyolY1N5Ro5diE3l1YUnW+ltcmnMGWN+zt0VY2VsyKFvGN2xVJdBeVOLEFsClzS7s2zTsoT/I3NrOp5r1L6XGBP6+jBvXC4zQgncHV8En/y168z80WxQVdS7N1neVWfsesAqglnAoyffbTGXpJTJxK7zX4dPhcWoH747/8Nfuubv4kX//oXHLCD//Zfn8cI0/BRptJ2yUyk/nFnDcXVZWSlJcv0uUDu8b9efgOL6zl8Z/8gPkdA20kFwqxzhN1KfDB0V9AS/Vm4jfxuEagyrSnD89hsui2trCNL94yzUJQ4M08acIgFp72Rxd2VLfzklXcos1JZZHW9srbuFS4By3Bc/didp1MHkHwzHcfvLNZbR8DAgoSwirZaS8KvvQN78JWvfQWbvIP/6vu/Rx34HIzleaTJKVaohQzs6cX1T8+jzJgiqVPy79f3jajU3Mu7GWHB5zAwFy2NGY8slRZGpg+dbitpVhWIvJNSLUvfe5UutEnOpKRN/hemlW0x1iwwGN+6OgEz3Y5yJEFwllyCqJkYvzbBirukArunhVUrJV8dqAPGUV0CvR5J+C3aWsGFekyqpbqv4xw68igmbt7E+I2bZKwDWHAKuHN7CgcPjLA0EE7g4NX3P4bNFJz0tOHFrTymN/NoZU01wj7SIl1s/O4cinSVdmrGX/78MYwyqEvjf+HekmrN5DZz2NjY4r5ranIpnidPbUdIqMaywWptp06cpPsk8fjBUbxz7jqLXQtTKxv4kz/7S2pGdJFkOx4j4fzi4WH46oxdvfO15rQJaA1WEiA+vgThS4E+SpqGYEtf3HFkdBT7eJGyVUQ7M1Y7qUgkzJiR30R/Vxpfe/o4/ubDzxBlITlO65pby6pgLzLlOdZJchaJudIvmphbxgxFqe89V0KaE11kt+AOJYSipRq82ODxOTJskRnEvUrMlEVaYpLVekIF+hC+9ORjOHVpnHXXAIyBUbw9kVHLSeKFRYyzZju+fw9vkOlpSbYCKE8QVyi6zy5vuNW43qSwcvlCg4kFE321Jq8RJNFCQqEYUl19mNUuwqIcGeKgdbJOi2a9wZ7aEmuXVCKEAU5CupBhkjnJOnEOOs9O5rpVUmrbKmPFJRaJ3W0pDnQNW7SMZQ56ky5hsSwQoT7B/fN0N4tufYfVdInAGYw5IrAPDexiKTKG0yu60ocKhZLqRmwVLLTk53D13jJG2hM4NzGLi9SIbs8s0RI31DqeMDmY2ZiefcE4+PdOL6fhu60swFZZJpHuQGlxTng9wi0tuLO2RbMuoZ2dyO9//Vk4jAmXx6cwxbsjInqOGnI6FcOXD47h/fG7mOQg7y6vq5Q9zX0s2vs6uxEFAp0lZxECJvxK/pZe1grJ3hqB7uLvYZI5h5/PPv4ozrx1Xd0xVQZIBqZeVCGgf/nmR7h68g3YPftgh2OIkk6IlqxLvGPQNrdN8CGb3s1AE2Ck2Db1CjpHDuDWzBT1mSgW7s7jo8vjKrscYCNu4tPLtJYs2686fuupx9BGOaEc1ZRbWEzbHXdXMG9uYYbZpELr2MiXkOPkpajM886L/lxmllqxskp9FNmhJAw4pLmLjDR3tUQbrU3qKsmmwoRLDOTSsdDirco9Q+192JDmHa1Eeh26XKMs1X2iVhI0A2SndST3A0/T3L5cnM2yZM8uZOfu4mNmi6WtTYS5bYF3tUKAHqd+cuDRUUpuBlYYeEWJy2wU0Urg2qjtdMRjmGGgFc1YyhBhuLrlNvvFeqRLIBMNqdau2zWQEkD6TiKMKW3SlMgfohvlFTBSkwkFkHPYm5skhPuwde2qshitIk28smL4hbVCsFbSHmgRO65fa9xHGu8cfOfIGOYmJnBjalYRQZMDlSb97zz3jxiLDFy9eRuX7t7DErNThBPrp5wpheUAq+8lkjbpQC4zEwmTlXWBIpOW7Vp6Vaqe4ca6Lt6IaCTmWi6LS4dJoLi+QT5kIhQ21XjE+YQgEgXEKcxXZEEktWF7Y5kgU/7kTXK0kKrbzG1goJaX7B0W3TQuSmwGFO8J4p0drJ7T5CMlpYtkmHr7utswv7yCz27PYIIkLUMAkuQ03WyVMAyjmzrv3DxbKowdMbZcNsiMZVkaVJPNjX/CbSxvDMJWKRGwwu5Uek+LFUNF+k4iUxRzsBnXnLIsThLCaKnuZp7CvGj1W6tLSFJSWZvPustvybQ1pYKbLjB6gOhUJwy3sHQcZ1sMagSqOXCakkdbdvVz0G3qTq+zEyAD+2R6FuPsZK6Ry/j9KxnI0OBuptw0OigNJu8uIUzCxx6n17iXxp57jbJl+YNRsWSgswf93WnlRpbljdcSgZ6qn8gVYlnka2EGXhmuxbhDm0LcZgainLpK95auqloY6i0S8CymYRW18xAPMzRIgX7vqQ44fk2ybyRLVRNMvwkyz6WNnPTQSPQocAuv4K3by/IhTulzemkdi7fvkbukkGMQzcmSEamjHKtujZ5bVGrVdTC7OlvRwrikmvyURHKMFTHyJWnExWgpee4XYRypKPVPU008Ges6a62IkWP3sw/LK8vsTUUUoxaETL9NqT8AjKDbuB28+mym+2AFwJVXCyVK6V9Ltkwxjd7NbGA/Y0hbexx9zC8j3X2q43j25iQuUPFb5MQSsQSydIOSZBuJCXCrezmjrL3zmzxyjVaCvUfcKF9U7hIKO2pxksXupqT6FK9dEMvif8KeJUgLACJyFfhp0r3D3WwLE/xKRVfBWSxLR5NJNhZVwYk2LnTe6eVvE4X/4OMnWEvllTwgJi2N+b27u9l9TJE3sBd+5x4uUUuZojaT4YBnM2vkJVtVrUWCrNvzrijw/TEIOdzHhn+McSFGYpcg8EIai2p5CtSxcZbJZiSsVqPD06fFKiRth8JxOIx9InSld/erFWBijWVanKlr2kNlpH/Iy1ff+vYMYOTQAXzIxhrzK2YpQWySZM2uZHj3lknQKlgledM16R/llXYs11ctWO880vP2BW0Zs+zTRWBHdnWzZ6Wr5SBFchzpYVucXEUkC1nVZVRwl/uXaLERHiNVfKlYcNfjMKjLMw2R4hacZCcBjKvGoM4xmyo6VDuKCOgVTapH7/tO8agBFlcVYybp7O2jFHoIp89eUhlmnpLD9Mqmu3SEf4vuXJbJcEDiMioNK7LoLoJWzXv57lX0sjamm6AcGWJHIBpCigKYuFieEy6XqTML+SGXkTqsLcIikXVVIsXeFm+GJJqwGSYhLCqgpL0j1+1mtatHezB95RK1pjj0wAz9+aBam/tQeHdMveELWc2VvnoAZR2MgQ6K6F/8ja+ij0FWQBQwtmjuWWYCWT4mvi/GoFYriPtIOpb1v6abG9wupBt4pa3RyRbsQWq8ezrbGLfi3kpyS5Ui0ueSHtM6g70suu5jmVHKrCChW2gjw4xaBYKgY3fMQItTQi+BkWAf5pvlOzsN5D3KYrwq0AkQGK06bwfbpGNf4XtQ1qrhAwnNre0d+MP/8p/wP/77/6Q2YlVrKwHA8uKHTw3q45h7EgUKLWWQWW5/XyfBSaj1eOJSAoSAImpenAK84/XcpQhO0KKiog6ybmvbM4RsuUBZdJbcpoQs3ddhsN/MrqNEkinjiLamqfkaQpwRuPnuhOseTNU8eJyA2/hWpdUAcpzgRIIG5656Em4/duwIvvs738T/+fMXaB0V+FqQrVYrVBSlb3z8xnfrEPlPV6oFveyPd1BXFhFeJi7ygywWyrOSF2YtxaKskYky5ogbz6zn1fpi2X759Nvq+YZKKa9SsrJooQN0LZ1vOd4hiEW6nFl3Y53gHwEj8Sfc6D0Bq6oBUv+4sXs6t8sgzdznvvtNvPrmu7hJKZJRpYFUOqoXJdcXd6uoLATFcRK0jI5knEE2RCUu6j3o5ShQBHgByuBtlqX6pu6tU6YFrBYcilsZZO5Neje1oqiJrAMUAzBCERa6MQWMXMtiVpQ2UcOzq36nrvaGUu4dz5iauI1vPbb7rh4TOIfmA8aRJFNp/P7v/y52d3VA8zi3nFfWByfiCfT19uDo6D52O/ezJIhSTAqz05jAIJtqIkvIwqGCCrIuv5FnEMIemKZKwabLbq2K0okzJMmOWIivHwl9FoLHyYfZAIzzmlFaSpTXkXk6aqWT0nx3foQ3+NvDvHbat7H4fPKLX2L7pB8vs6OZZPB8/4PTOH70qOoO9BKY/WMH8ObJD7CZ2WKVTTfJl1VKdlQaloafuwalJMFZJYQKekjSQhH3TiuBn/uKDNrWywr/3FnX5FVnk8AxNoVbOlWxaIvFiFvJ+hw20kPizkzb2uTUuOMHOH/hc3ASjZN+ULBtfCCj6T5eB0KtlOCnepALbktGlootL2fwr3/wH1FyQhhuDaE9Iut4i6qzyWKahI68hZVwghmlhSKYWFKL9Kw4YQnE4loC4Lu3M5i2TVw7c4quoqtmoZhwKJ5Coq1PtWpUe0YGxeMYkbm5Qus1/AXQXgzRHNRAClbQzcFqBKTZ9x2QcZ91MtQzHiwPOmpsm2N4+91TWMswdbb34BKr8INs2HdSVsiwtkmT3Yr7REnnY3S/FHtb0UhI8Z8Cs4z7gJiJe+RK1zdoVYUlV4eRKxnuPM0YK3k2+2TBgOg5JTLdsrBe2Yc9qTJd2Gw6ag+b6qfzcCz4Ydxu2yM+DceLQP7yq++4GUp3FzlfmpnHvt4KdqVb1HDEUqSskDsbI0DyjGU+VyRwW+o8ou3czFGNDxWweHOKJzZV0FV9JLqOFoqqGkyCrHrCjz0xWwQv7hejNUntKEfIkUO1AdfVgu6A9QCh8x+o9tjygwHa/lBYo3UF9z/Ntu8ShW2DLVadwpOs6ZNr3l7MKKZ8pH8XlllSFCUl01I2C2W1XkcmKk/fmrSihYKGi1dvYHFJrCWk6iPZ7jC+mLQUXQ+56p7hPmGnKfXPVKtIbbUgO3Re2ifnOZ6h4ICDKXebG2lBi3LqmSGcwPYaEdQcp2p11ceXNdR4orevVL6v/eoDxoAYZEGmLBYS8Vr6KhIIFzbL+GjyLsHpZXFYYUehzMK0pOKTZKu4rCum5Vxdr2BpcZF0P6a0GAnHuhGm2hdS7quEF6UBu0RTlpWo5pxS+6JCK6YEnncZ7r/TPLA+yIVcIKpdTDcvw20RO/5XDwendkaf82juckj1qB//np1bwdXr4wy65CLUT4yYPIfQy7u4puoZQTFb2MJHt6YxxDbwCFO4NPNEltTKGrayBcV98pEOqoddKLNVQjWGelAHsrktWF6dJ11QYblyTZFSZRmbCti2pdq9BOwlFhf6z5jAn+c+6ftlnbptTg0DeUnqd/TG/WvHuSDAE7Lq4fb7niJb/vzFX0FLtPGXDcVe5WGvaKLVfXzYjLCUWWFc6eC2IqbpTstb09jbRX4j+guDrtRaeYKUtdk+YcUeo2xpFSPq2W2L56gUy+omiqAVjppqbbGySmmISWUv5UnZmpo6+fOfmcPDw5mJyRs/ZCb/2yAAzXSXRnUuCFpdzHacoHN556yFpaqW7B0n1jQ9l6FQNcn7xLRq0n1sVr+JFKKsbTSHBC2ZZioW9Z7WkUyhTNMv0x1uI45kzkI6IgsXGWdk6VucimCF2q6kZwbbIjOOVRZXDcsjLWo8IVpJ2TBr81MPpIqWrIzEZb77hg+8xKH+GDu8mqViR6t/N+5fTb8+SEEm7X36oUf8+xevf6CeRpFl+BFmhiR13B7S/C4St3B7F4qbG4w9CcRjbvA0hMKLq/UMI5fehfkYJYNQF8bL1FQceXyn5OnElkv65GE0QD3jIGt1JK2rsXMQRRHcCbpTKT8//e5f/EyGW03XI8P7/2jyzniGZvb8Tl2AOmmzsdkGdznagwheXZfBcZdizLPpfursFZU5ROhmclAai2TDyVu3KE2yAB3cw1LAUhpxhb3m4kYrligqFVdmKS8UGTP8RYwWCgSlQMkyUSkgG29XaTksjy9X3Mab+0iPu76v4q3gopv9eOaTl3/kj7OOxwwP7v/RxOS1O4aj/7GkcP9u++5RZzGBYFGth/z/nNr+O72q7sXd/v8r75O4JTFzdwatlChbyVfKzKbyMFaWccVMtKul+k5xE5n5GcYPAsG7bMvSNN2sShuSuUTDMeiCKR7/Lw73YKVo49fZlBKurGJFARIWyi8PiVBXZjrP2Jbzw5lPXnopOL5tReS+4YM/Hd57YJi2+EMi+RIvOhWYTRWoYLFZBUp9uX8uC+rJ8jG/uIZ7axStJNB2dsNkwFxYy2Dyxri66xobYPKQxgatqZDNeQC4d16eodS8u686jbJIWrFpDR2pMEaHejHSRkVPK6vuZ4jFpui5PMUUAXypWMz/Z9uwhqdOv/hS4zj/HmeVAUhwSuLMAAAAAElFTkSuQmCC",
        },
      ];
      return (0, o.jsxs)("div", {
        className: "bg-[#261360] md:px-20 py-20",
        children: [
          (0, o.jsx)("h1", {
            className:
              "text-white max-w-[1000px] mx-auto text-left mb-5 pl-5 md:pl-0",
            children: "Our Happy Clients",
          }),
          (0, o.jsxs)("div", {
            className: "lg:flex lg:flex-wrap max-w-[1000px] mx-auto",
            children: [
              (0, o.jsx)(Gs, {
                name: e[0].name,
                quote: e[0].quote,
                image: e[0].image,
                duration: 0.4,
              }),
              (0, o.jsx)(Gs, {
                name: e[1].name,
                quote: e[1].quote,
                image: e[1].image,
                duration: 0.8,
              }),
              (0, o.jsx)(Gs, {
                name: e[2].name,
                quote: e[2].quote,
                image: e[2].image,
                duration: 1.2,
              }),
              (0, o.jsx)(Gs, {
                name: e[3].name,
                quote: e[3].quote,
                image: e[3].image,
                duration: 1.6,
              }),
            ],
          }),
        ],
      });
    },
    Zs = () =>
      (0, o.jsxs)("div", {
        id: "contact-section",
        className: "bg-[rgb(47,24,147)] py-10 px-5  xl:px-20 text-white",
        children: [
          (0, o.jsxs)("div", {
            className: "lg:flex justify-between",
            children: [
              (0, o.jsx)("h3", {
                className: "text-left text-2xl mb-5 xl:mb-0",
                children: "Startup3",
              }),
              (0, o.jsxs)("div", {
                className: "flex items-center",
                children: [
                  (0, o.jsx)("p", {
                    className: "mr-5 cursor-pointer",
                    children: "Privacy Policy",
                  }),
                  (0, o.jsx)("p", {
                    className: "mr-5 cursor-pointer",
                    children: "Terms",
                  }),
                  (0, o.jsx)("img", {
                    className: "h-4 mr-5 cursor-pointer",
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADVSURBVHgBlVMBEYMwDGynAAerBBysDjYHs4CDSeDmYA6YA3AwCTAFMAXZZwSOQVrg7/5ypM8nhNSaDSCiBCEDj2AH3q21DfIesRpEOZgGDBxY0z/4uQRvUuAn5EQLZopJTjpYX3ARTciGfmJSBEzq0UCEqTjPK5VKfiw2vH+QmMnApuBv9RI1dHOTCnRmH56LjEx6D9y8E8YbbMw2PHhPtE4SGeQa6mkXKiA4R/5IGzTAgQcv1O9LyOAV7QCHJ+qXSjMowWuse6sY8iVzph/yBwPszAq+j3Wg6/2Xth0AAAAASUVORK5CYII=",
                    alt: "icon",
                  }),
                  (0, o.jsx)("img", {
                    className: "h-4 mr-5 cursor-pointer",
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgBrVEBEcIwDEx3CEDCHAAKNgk4ARQwJKBgFkDBhgKGAkABc1A+kHJd6dFu7O/+mrT5tP0QAVrrFKzAh44D15WsIwMkVz0MFesVgjnWM4VRgwewBVmzlv0FvyKPuLG0uzmabEJx2BvvsORgZh9GNVFKNRKurG98kFA/TH2boSap0GAjeec1P7+Db9ydnCfTwhuKboLirYh3ki+xzOhtbqcwOGKrtvQcZ32N9WK0Jg39h0sijhc0DAXrX9Nh92FQTa7r3ziCN4lr6E4cPAGpvAvkMfryZgAAAABJRU5ErkJggg==",
                    alt: "icon",
                  }),
                  (0, o.jsx)("img", {
                    className: "h-4 mr-5 cursor-pointer",
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBpVTBbcMwDKSB/usNog3qDeIRskG6ibtBu4HQCTJC2gnSDeQN4k7AHhsGYQgpgZQDDrKt45GUaXfkwMw9lg34Asr1DH53XfdFjwLmb+CR80jgllogVYN7vo+kHVYn+DAm0sEEDuAKXINRzQPVAkGjMx8Kuv6Oj5zCq9BvRJOg7YxPPuFsYp8/gaNeL5iUTx+EJRQ8Z+hn1Y1Wp/eCHzLVHzJVRS5j6yvPYCUdLHSa9/rpMN3oGtz9fwV7kzHQdQeDTtGZO6NdO232HcjGZIJ2VIAaJKPtC/vJB8p42a/3PdOJaA5GE6kGCNjwNZIeR9QjPLq9QLXQJIlvo83cJAl8+S1444kb/kPdjWRi9gz+4oNaqBF/qD8a/NQATnsAAAAASUVORK5CYII=",
                    alt: "icon",
                  }),
                ],
              }),
            ],
          }),
          (0, o.jsx)("div", {
            className: "h-[1px] bg-slate-400 my-5 xl:my-10 w-full opacity-50",
          }),
          (0, o.jsxs)("div", {
            className: "lg:flex justify-between",
            children: [
              (0, o.jsxs)("ul", {
                className: "lg:flex text-left",
                children: [
                  (0, o.jsx)("li", {
                    className: "mr-10 cursor-pointer",
                    children: "Tour",
                  }),
                  (0, o.jsx)("li", {
                    className: "mr-10 cursor-pointer",
                    children: "Features",
                  }),
                  (0, o.jsx)("li", {
                    className: "mr-10 cursor-pointer",
                    children: "Pricing Plans",
                  }),
                  (0, o.jsx)("li", {
                    className: "mr-10 cursor-pointer",
                    children: "Our Works",
                  }),
                  (0, o.jsx)("li", {
                    className: "mr-10 cursor-pointer",
                    children: "Brands",
                  }),
                  (0, o.jsx)("li", {
                    className: "mr-10 cursor-pointer",
                    children: "Contacts",
                  }),
                ],
              }),
              (0, o.jsx)("p", {
                className: "mt-5 xl:mt-0 text-sm",
                children: "@2017 Designmodeo. All rights reserved.",
              }),
            ],
          }),
        ],
      });
  const $s = function () {
      return (0, o.jsxs)("div", {
        className: "App w-full overflow-x-hidden",
        children: [
          (0, o.jsx)(js, {}),
          (0, o.jsx)(vs, {}),
          (0, o.jsx)(ks, {}),
          (0, o.jsx)(Es, {}),
          (0, o.jsx)(Js, {}),
          (0, o.jsx)(Is, {}),
          (0, o.jsx)(gs, {}),
          (0, o.jsx)(Ks, {}),
          (0, o.jsx)(Rs, {}),
          (0, o.jsx)(Zs, {}),
        ],
      });
    },
    el = (e) => {
      e &&
        e instanceof Function &&
        n
          .e(488)
          .then(n.bind(n, 488))
          .then((t) => {
            let { getCLS: n, getFID: r, getFCP: i, getLCP: a, getTTFB: o } = t;
            n(e), r(e), i(e), a(e), o(e);
          });
    };
  i.createRoot(document.getElementById("root")).render(
    (0, o.jsx)(r.StrictMode, {
      children: (0, o.jsx)($s, {}),
    })
  ),
    el();
})();
//# sourceMappingURL=main.9557216c.js.map
