var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  c = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  l = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    c(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n,
    )
  );
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var u,
  d,
  f,
  p,
  m,
  h,
  g,
  _,
  v,
  y,
  b,
  x,
  S,
  C,
  ee,
  w = {},
  T = [],
  E = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  te = Array.isArray;
function D(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function ne(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function O(e, t, n) {
  var r,
    i,
    a,
    o = {};
  for (a in t)
    a == `key` ? (r = t[a]) : a == `ref` ? (i = t[a]) : (o[a] = t[a]);
  if (
    (arguments.length > 2 &&
      (o.children = arguments.length > 3 ? u.call(arguments, 2) : n),
    typeof e == `function` && e.defaultProps != null)
  )
    for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
  return k(e, o, r, i, null);
}
function k(e, t, n, r, i) {
  var a = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: i ?? ++f,
    __i: -1,
    __u: 0,
  };
  return (i == null && d.vnode != null && d.vnode(a), a);
}
function re() {
  return { current: null };
}
function ie(e) {
  return e.children;
}
function A(e, t) {
  ((this.props = e), (this.context = t));
}
function ae(e, t) {
  if (t == null) return e.__ ? ae(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == `function` ? ae(e) : null;
}
function oe(e) {
  if (e.__P && e.__d) {
    var t = e.__v,
      n = t.__e,
      r = [],
      i = [],
      a = D({}, t);
    ((a.__v = t.__v + 1),
      d.vnode && d.vnode(a),
      he(
        e.__P,
        a,
        t,
        e.__n,
        e.__P.namespaceURI,
        32 & t.__u ? [n] : null,
        r,
        n ?? ae(t),
        !!(32 & t.__u),
        i,
      ),
      (a.__v = t.__v),
      (a.__.__k[a.__i] = a),
      _e(r, a, i),
      (t.__e = t.__ = null),
      a.__e != n && j(a));
  }
}
function j(e) {
  if ((e = e.__) != null && e.__c != null)
    return (
      (e.__e = e.__c.base = null),
      e.__k.some(function (t) {
        if (t != null && t.__e != null) return (e.__e = e.__c.base = t.__e);
      }),
      j(e)
    );
}
function se(e) {
  ((!e.__d && (e.__d = !0) && p.push(e) && !ce.__r++) ||
    m != d.debounceRendering) &&
    ((m = d.debounceRendering) || h)(ce);
}
function ce() {
  try {
    for (var e, t = 1; p.length; )
      (p.length > t && p.sort(g), (e = p.shift()), (t = p.length), oe(e));
  } finally {
    p.length = ce.__r = 0;
  }
}
function le(e, t, n, r, i, a, o, s, c, l, u) {
  var d,
    f,
    p,
    m,
    h,
    g,
    _,
    v = (r && r.__k) || T,
    y = t.length;
  for (c = ue(n, t, v, c, y), d = 0; d < y; d++)
    (p = n.__k[d]) != null &&
      ((f = (p.__i != -1 && v[p.__i]) || w),
      (p.__i = d),
      (g = he(e, p, f, i, a, o, s, c, l, u)),
      (m = p.__e),
      p.ref &&
        f.ref != p.ref &&
        (f.ref && be(f.ref, null, p), u.push(p.ref, p.__c || m, p)),
      h == null && m != null && (h = m),
      (_ = !!(4 & p.__u)) || f.__k === p.__k
        ? ((c = M(p, c, e, _)), _ && f.__e && (f.__e = null))
        : typeof p.type == `function` && g !== void 0
          ? (c = g)
          : m && (c = m.nextSibling),
      (p.__u &= -7));
  return ((n.__e = h), c);
}
function ue(e, t, n, r, i) {
  var a,
    o,
    s,
    c,
    l,
    u = n.length,
    d = u,
    f = 0;
  for (e.__k = Array(i), a = 0; a < i; a++)
    (o = t[a]) != null && typeof o != `boolean` && typeof o != `function`
      ? (typeof o == `string` ||
        typeof o == `number` ||
        typeof o == `bigint` ||
        o.constructor == String
          ? (o = e.__k[a] = k(null, o, null, null, null))
          : te(o)
            ? (o = e.__k[a] = k(ie, { children: o }, null, null, null))
            : o.constructor === void 0 && o.__b > 0
              ? (o = e.__k[a] =
                  k(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v))
              : (e.__k[a] = o),
        (c = a + f),
        (o.__ = e),
        (o.__b = e.__b + 1),
        (s = null),
        (l = o.__i = de(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)),
        s == null || s.__v == null
          ? (l == -1 && (i > u ? f-- : i < u && f++),
            typeof o.type != `function` && (o.__u |= 4))
          : l != c &&
            (l == c - 1
              ? f--
              : l == c + 1
                ? f++
                : (l > c ? f-- : f++, (o.__u |= 4))))
      : (e.__k[a] = null);
  if (d)
    for (a = 0; a < u; a++)
      (s = n[a]) != null &&
        !(2 & s.__u) &&
        (s.__e == r && (r = ae(s)), xe(s, s));
  return r;
}
function M(e, t, n, r) {
  var i, a;
  if (typeof e.type == `function`) {
    for (i = e.__k, a = 0; i && a < i.length; a++)
      i[a] && ((i[a].__ = e), (t = M(i[a], t, n, r)));
    return t;
  }
  e.__e != t &&
    (r &&
      (t && e.type && !t.parentNode && (t = ae(e)),
      n.insertBefore(e.__e, t || null)),
    (t = e.__e));
  do t &&= t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function N(e, t) {
  return (
    (t ||= []),
    e == null ||
      typeof e == `boolean` ||
      (te(e)
        ? e.some(function (e) {
            N(e, t);
          })
        : t.push(e)),
    t
  );
}
function de(e, t, n, r) {
  var i,
    a,
    o,
    s = e.key,
    c = e.type,
    l = t[n],
    u = l != null && (2 & l.__u) == 0;
  if ((l === null && s == null) || (u && s == l.key && c == l.type)) return n;
  if (r > +!!u) {
    for (i = n - 1, a = n + 1; i >= 0 || a < t.length; )
      if (
        (l = t[(o = i >= 0 ? i-- : a++)]) != null &&
        !(2 & l.__u) &&
        s == l.key &&
        c == l.type
      )
        return o;
  }
  return -1;
}
function fe(e, t, n) {
  t[0] == `-`
    ? e.setProperty(t, n ?? ``)
    : (e[t] =
        n == null ? `` : typeof n != `number` || E.test(t) ? n : n + `px`);
}
function pe(e, t, n, r, i) {
  var a, o;
  n: if (t == `style`)
    if (typeof n == `string`) e.style.cssText = n;
    else {
      if ((typeof r == `string` && (e.style.cssText = r = ``), r))
        for (t in r) (n && t in n) || fe(e.style, t, ``);
      if (n) for (t in n) (r && n[t] == r[t]) || fe(e.style, t, n[t]);
    }
  else if (t[0] == `o` && t[1] == `n`)
    ((a = t != (t = t.replace(b, `$1`))),
      (o = t.toLowerCase()),
      (t =
        o in e || t == `onFocusOut` || t == `onFocusIn`
          ? o.slice(2)
          : t.slice(2)),
      (e.l ||= {}),
      (e.l[t + a] = n),
      n
        ? r
          ? (n[y] = r[y])
          : ((n[y] = x), e.addEventListener(t, a ? C : S, a))
        : e.removeEventListener(t, a ? C : S, a));
  else {
    if (i == `http://www.w3.org/2000/svg`)
      t = t.replace(/xlink(H|:h)/, `h`).replace(/sName$/, `s`);
    else if (
      t != `width` &&
      t != `height` &&
      t != `href` &&
      t != `list` &&
      t != `form` &&
      t != `tabIndex` &&
      t != `download` &&
      t != `rowSpan` &&
      t != `colSpan` &&
      t != `role` &&
      t != `popover` &&
      t in e
    )
      try {
        e[t] = n ?? ``;
        break n;
      } catch {}
    typeof n == `function` ||
      (n == null || (!1 === n && t[4] != `-`)
        ? e.removeAttribute(t)
        : e.setAttribute(t, t == `popover` && n == 1 ? `` : n));
  }
}
function me(e) {
  return function (t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[v] == null) t[v] = x++;
      else if (t[v] < n[y]) return;
      return n(d.event ? d.event(t) : t);
    }
  };
}
function he(e, t, n, r, i, a, o, s, c, l) {
  var u,
    f,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    ee,
    w,
    E,
    O = t.type;
  if (t.constructor !== void 0) return null;
  (128 & n.__u && ((c = !!(32 & n.__u)), (a = [(s = t.__e = n.__e)])),
    (u = d.__b) && u(t));
  n: if (typeof O == `function`) {
    f = o.length;
    try {
      if (
        ((y = t.props),
        (b = O.prototype && O.prototype.render),
        (x = (u = O.contextType) && r[u.__c]),
        (S = u ? (x ? x.props.value : u.__) : r),
        n.__c
          ? (v = (p = t.__c = n.__c).__ = p.__E)
          : (b
              ? (t.__c = p = new O(y, S))
              : ((t.__c = p = new A(y, S)),
                (p.constructor = O),
                (p.render = Se)),
            x && x.sub(p),
            (p.state ||= {}),
            (p.__n = r),
            (m = p.__d = !0),
            (p.__h = []),
            (p._sb = [])),
        b && p.__s == null && (p.__s = p.state),
        b &&
          O.getDerivedStateFromProps != null &&
          (p.__s == p.state && (p.__s = D({}, p.__s)),
          D(p.__s, O.getDerivedStateFromProps(y, p.__s))),
        (h = p.props),
        (g = p.state),
        (p.__v = t),
        m)
      )
        (b &&
          O.getDerivedStateFromProps == null &&
          p.componentWillMount != null &&
          p.componentWillMount(),
          b && p.componentDidMount != null && p.__h.push(p.componentDidMount));
      else {
        if (
          (b &&
            O.getDerivedStateFromProps == null &&
            y !== h &&
            p.componentWillReceiveProps != null &&
            p.componentWillReceiveProps(y, S),
          t.__v == n.__v ||
            (!p.__e &&
              p.shouldComponentUpdate != null &&
              !1 === p.shouldComponentUpdate(y, p.__s, S)))
        ) {
          (t.__v != n.__v && ((p.props = y), (p.state = p.__s), (p.__d = !1)),
            (t.__e = n.__e),
            (t.__k = n.__k),
            t.__k.some(function (e) {
              e && (e.__ = t);
            }),
            T.push.apply(p.__h, p._sb),
            (p._sb = []),
            p.__h.length && o.push(p));
          break n;
        }
        (p.componentWillUpdate != null && p.componentWillUpdate(y, p.__s, S),
          b &&
            p.componentDidUpdate != null &&
            p.__h.push(function () {
              p.componentDidUpdate(h, g, _);
            }));
      }
      if (
        ((p.context = S),
        (p.props = y),
        (p.__P = e),
        (p.__e = !1),
        (C = d.__r),
        (ee = 0),
        b)
      )
        ((p.state = p.__s),
          (p.__d = !1),
          C && C(t),
          (u = p.render(p.props, p.state, p.context)),
          T.push.apply(p.__h, p._sb),
          (p._sb = []));
      else
        do
          ((p.__d = !1),
            C && C(t),
            (u = p.render(p.props, p.state, p.context)),
            (p.state = p.__s));
        while (p.__d && ++ee < 25);
      ((p.state = p.__s),
        p.getChildContext != null && (r = D(D({}, r), p.getChildContext())),
        b &&
          !m &&
          p.getSnapshotBeforeUpdate != null &&
          (_ = p.getSnapshotBeforeUpdate(h, g)),
        (w =
          u != null && u.type === ie && u.key == null
            ? ve(u.props.children)
            : u),
        (s = le(e, te(w) ? w : [w], t, n, r, i, a, o, s, c, l)),
        (p.base = t.__e),
        (t.__u &= -161),
        p.__h.length && o.push(p),
        v && (p.__E = p.__ = null));
    } catch (e) {
      if (((o.length = f), (t.__v = null), c || a != null)) {
        if (e.then) {
          for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; )
            s = s.nextSibling;
          (a != null && (a[a.indexOf(s)] = null), (t.__e = s));
        } else if (a != null) for (E = a.length; E--; ) ne(a[E]);
      } else t.__e = n.__e;
      ((t.__k ??= n.__k || []), e.then || ge(t), d.__e(e, t, n));
    }
  } else
    a == null && t.__v == n.__v
      ? ((t.__k = n.__k), (t.__e = n.__e))
      : (s = t.__e = ye(n.__e, t, n, r, i, a, o, c, l));
  return ((u = d.diffed) && u(t), 128 & t.__u ? void 0 : s);
}
function ge(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(ge));
}
function _e(e, t, n) {
  for (var r = 0; r < n.length; r++) be(n[r], n[++r], n[++r]);
  (d.__c && d.__c(t, e),
    e.some(function (t) {
      try {
        ((e = t.__h),
          (t.__h = []),
          e.some(function (e) {
            e.call(t);
          }));
      } catch (e) {
        d.__e(e, t.__v);
      }
    }));
}
function ve(e) {
  return typeof e != `object` || !e || e.__b > 0
    ? e
    : te(e)
      ? e.map(ve)
      : e.constructor === void 0
        ? D({}, e)
        : null;
}
function ye(e, t, n, r, i, a, o, s, c) {
  var l,
    f,
    p,
    m,
    h,
    g,
    _,
    v = n.props || w,
    y = t.props,
    b = t.type;
  if (
    (b == `svg`
      ? (i = `http://www.w3.org/2000/svg`)
      : b == `math`
        ? (i = `http://www.w3.org/1998/Math/MathML`)
        : (i ||= `http://www.w3.org/1999/xhtml`),
    a != null)
  ) {
    for (l = 0; l < a.length; l++)
      if (
        (h = a[l]) &&
        `setAttribute` in h == !!b &&
        (b ? h.localName == b : h.nodeType == 3)
      ) {
        ((e = h), (a[l] = null));
        break;
      }
  }
  if (e == null) {
    if (b == null) return document.createTextNode(y);
    ((e = document.createElementNS(i, b, y.is && y)),
      (s &&= (d.__m && d.__m(t, a), !1)),
      (a = null));
  }
  if (b == null) v === y || (s && e.data == y) || (e.data = y);
  else {
    if (
      ((a =
        b == `textarea` && y.defaultValue != null
          ? null
          : a && u.call(e.childNodes)),
      !s && a != null)
    )
      for (v = {}, l = 0; l < e.attributes.length; l++)
        v[(h = e.attributes[l]).name] = h.value;
    for (l in v)
      ((h = v[l]),
        l == `dangerouslySetInnerHTML`
          ? (p = h)
          : l == `children` ||
            l in y ||
            (l == `value` && `defaultValue` in y) ||
            (l == `checked` && `defaultChecked` in y) ||
            pe(e, l, null, h, i));
    for (l in y)
      ((h = y[l]),
        l == `children`
          ? (m = h)
          : l == `dangerouslySetInnerHTML`
            ? (f = h)
            : l == `value`
              ? (g = h)
              : l == `checked`
                ? (_ = h)
                : (s && typeof h != `function`) ||
                  v[l] === h ||
                  pe(e, l, h, v[l], i));
    if (f)
      (s ||
        (p && (f.__html == p.__html || f.__html == e.innerHTML)) ||
        (e.innerHTML = f.__html),
        (t.__k = []));
    else if (
      (p && (e.innerHTML = ``),
      le(
        t.type == `template` ? e.content : e,
        te(m) ? m : [m],
        t,
        n,
        r,
        b == `foreignObject` ? `http://www.w3.org/1999/xhtml` : i,
        a,
        o,
        a ? a[0] : n.__k && ae(n, 0),
        s,
        c,
      ),
      a != null)
    )
      for (l = a.length; l--; ) ne(a[l]);
    (s && b != `textarea`) ||
      ((l = `value`),
      b == `progress` && g == null
        ? e.removeAttribute(`value`)
        : g != null &&
          (g !== e[l] ||
            (b == `progress` && !g) ||
            (b == `option` && g != v[l])) &&
          pe(e, l, g, v[l], i),
      (l = `checked`),
      _ != null && _ != e[l] && pe(e, l, _, v[l], i));
  }
  return e;
}
function be(e, t, n) {
  try {
    if (typeof e == `function`) {
      var r = typeof e.__u == `function`;
      (r && e.__u(), (r && t == null) || (e.__u = e(t)));
    } else e.current = t;
  } catch (e) {
    d.__e(e, n);
  }
}
function xe(e, t, n) {
  var r, i;
  if (
    (d.unmount && d.unmount(e),
    (r = e.ref) && ((r.current && r.current != e.__e) || be(r, null, t)),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (e) {
        d.__e(e, t);
      }
    r.base = r.__P = r.__n = null;
  }
  if ((r = e.__k))
    for (i = 0; i < r.length; i++)
      r[i] && xe(r[i], t, n || typeof e.type != `function`);
  (n || ne(e.__e), (e.__c = e.__ = e.__e = void 0));
}
function Se(e, t, n) {
  return this.constructor(e, n);
}
function Ce(e, t, n) {
  var r, i, a, o;
  (t == document && (t = document.documentElement),
    d.__ && d.__(e, t),
    (i = (r = typeof n == `function`) ? null : (n && n.__k) || t.__k),
    (a = []),
    (o = []),
    he(
      t,
      (e = ((!r && n) || t).__k = O(ie, null, [e])),
      i || w,
      w,
      t.namespaceURI,
      !r && n ? [n] : i ? null : t.firstChild ? u.call(t.childNodes) : null,
      a,
      !r && n ? n : i ? i.__e : t.firstChild,
      r,
      o,
    ),
    _e(a, e, o),
    (e.props.children = null));
}
function we(e, t) {
  Ce(e, t, we);
}
function Te(e, t, n) {
  var r,
    i,
    a,
    o,
    s = D({}, e.props);
  for (a in (e.type && e.type.defaultProps && (o = e.type.defaultProps), t))
    a == `key`
      ? (r = t[a])
      : a == `ref`
        ? (i = t[a])
        : (s[a] = t[a] === void 0 && o != null ? o[a] : t[a]);
  return (
    arguments.length > 2 &&
      (s.children = arguments.length > 3 ? u.call(arguments, 2) : n),
    k(e.type, s, r || e.key, i || e.ref, null)
  );
}
function Ee(e) {
  function t(e) {
    var n, r;
    return (
      this.getChildContext ||
        ((n = new Set()),
        ((r = {})[t.__c] = this),
        (this.getChildContext = function () {
          return r;
        }),
        (this.componentWillUnmount = function () {
          n = null;
        }),
        (this.shouldComponentUpdate = function (e) {
          this.props.value != e.value &&
            n.forEach(function (e) {
              ((e.__e = !0), se(e));
            });
        }),
        (this.sub = function (e) {
          n.add(e);
          var t = e.componentWillUnmount;
          e.componentWillUnmount = function () {
            (n && n.delete(e), t && t.call(e));
          };
        })),
      e.children
    );
  }
  return (
    (t.__c = `__cC` + ee++),
    (t.__ = e),
    (t.Provider =
      t.__l =
      (t.Consumer = function (e, t) {
        return e.children(t);
      }).contextType =
        t),
    t
  );
}
((u = T.slice),
  (d = {
    __e: function (e, t, n, r) {
      for (var i, a, o; (t = t.__); )
        if ((i = t.__c) && !i.__)
          try {
            if (
              ((a = i.constructor) &&
                a.getDerivedStateFromError != null &&
                (i.setState(a.getDerivedStateFromError(e)), (o = i.__d)),
              i.componentDidCatch != null &&
                (i.componentDidCatch(e, r || {}), (o = i.__d)),
              o)
            )
              return (i.__E = i);
          } catch (t) {
            e = t;
          }
      throw e;
    },
  }),
  (f = 0),
  (A.prototype.setState = function (e, t) {
    var n =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = D({}, this.state));
    (typeof e == `function` && (e = e(D({}, n), this.props)),
      e && D(n, e),
      e != null && this.__v && (t && this._sb.push(t), se(this)));
  }),
  (A.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), se(this));
  }),
  (A.prototype.render = ie),
  (p = []),
  (h =
    typeof Promise == `function`
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (g = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (ce.__r = 0),
  (_ = Math.random().toString(8)),
  (v = `__d` + _),
  (y = `__a` + _),
  (b = /(PointerCapture)$|Capture$/i),
  (x = 0),
  (S = me(!1)),
  (C = me(!0)),
  (ee = 0));
var De,
  P,
  Oe,
  ke,
  Ae = 0,
  je = [],
  F = d,
  Me = F.__b,
  Ne = F.__r,
  I = F.diffed,
  Pe = F.__c,
  Fe = F.unmount,
  L = F.__;
function Ie(e, t) {
  (F.__h && F.__h(P, e, Ae || t), (Ae = 0));
  var n = (P.__H ||= { __: [], __h: [] });
  return (e >= n.__.length && n.__.push({}), n.__[e]);
}
function R(e) {
  return ((Ae = 1), z(Ze, e));
}
function z(e, t, n) {
  var r = Ie(De++, 2);
  if (
    ((r.t = e),
    !r.__c &&
      ((r.__ = [
        n ? n(t) : Ze(void 0, t),
        function (e) {
          var t = r.__N ? r.__N[0] : r.__[0],
            n = r.t(t, e);
          t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = P),
      !P.__f))
  ) {
    var i = function (e, t, n) {
      if (!r.__c.__H) return !0;
      var i = !1,
        o = r.__c.props !== e;
      if (
        (r.__c.__H.__.some(function (e) {
          if (e.__N) {
            i = !0;
            var t = e.__[0];
            ((e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (o = !0));
          }
        }),
        a)
      ) {
        var s = a.call(this, e, t, n);
        return i ? s || o : s;
      }
      return !i || o;
    };
    P.__f = !0;
    var a = P.shouldComponentUpdate,
      o = P.componentWillUpdate;
    ((P.componentWillUpdate = function (e, t, n) {
      if (this.__e) {
        var r = a;
        ((a = void 0), i(e, t, n), (a = r));
      }
      o && o.call(this, e, t, n);
    }),
      (P.shouldComponentUpdate = i));
  }
  return r.__N || r.__;
}
function Le(e, t) {
  var n = Ie(De++, 3);
  !F.__s && Xe(n.__H, t) && ((n.__ = e), (n.u = t), P.__H.__h.push(n));
}
function Re(e, t) {
  var n = Ie(De++, 4);
  !F.__s && Xe(n.__H, t) && ((n.__ = e), (n.u = t), P.__h.push(n));
}
function B(e) {
  return (
    (Ae = 5),
    Be(function () {
      return { current: e };
    }, [])
  );
}
function ze(e, t, n) {
  ((Ae = 6),
    Re(
      function () {
        if (typeof e == `function`) {
          var n = e(t());
          return function () {
            (e(null), n && typeof n == `function` && n());
          };
        }
        if (e)
          return (
            (e.current = t()),
            function () {
              return (e.current = null);
            }
          );
      },
      n == null ? n : n.concat(e),
    ));
}
function Be(e, t) {
  var n = Ie(De++, 7);
  return (Xe(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__);
}
function Ve(e, t) {
  return (
    (Ae = 8),
    Be(function () {
      return e;
    }, t)
  );
}
function He(e) {
  var t = P.context[e.__c],
    n = Ie(De++, 9);
  return (
    (n.c = e),
    t ? (n.__ ?? ((n.__ = !0), t.sub(P)), t.props.value) : e.__
  );
}
function Ue(e, t) {
  F.useDebugValue && F.useDebugValue(t ? t(e) : e);
}
function We() {
  var e = Ie(De++, 11);
  if (!e.__) {
    for (var t = P.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = (t.__m ||= [0, 0]);
    e.__ = `P` + n[0] + `-` + n[1]++;
  }
  return e.__;
}
function Ge() {
  for (var e; (e = je.shift()); ) {
    var t = e.__H;
    if (e.__P && t)
      try {
        (t.__h.some(Je), t.__h.some(Ye), (t.__h = []));
      } catch (n) {
        ((t.__h = []), F.__e(n, e.__v));
      }
  }
}
((F.__b = function (e) {
  ((P = null), Me && Me(e));
}),
  (F.__ = function (e, t) {
    (e && t.__k && t.__k.__m && (e.__m = t.__k.__m), L && L(e, t));
  }),
  (F.__r = function (e) {
    (Ne && Ne(e), (De = 0));
    var t = (P = e.__c).__H;
    (t &&
      (Oe === P
        ? ((t.__h = []),
          (P.__h = []),
          t.__.some(function (e) {
            (e.__N && (e.__ = e.__N), (e.u = e.__N = void 0));
          }))
        : (t.__h.some(Je), t.__h.some(Ye), (t.__h = []), (De = 0))),
      (Oe = P));
  }),
  (F.diffed = function (e) {
    I && I(e);
    var t = e.__c;
    (t &&
      t.__H &&
      (t.__H.__h.length &&
        ((je.push(t) !== 1 && ke === F.requestAnimationFrame) ||
          ((ke = F.requestAnimationFrame) || qe)(Ge)),
      t.__H.__.some(function (e) {
        e.u &&= ((e.__H = e.u), void 0);
      })),
      (Oe = P = null));
  }),
  (F.__c = function (e, t) {
    (t.some(function (e) {
      try {
        (e.__h.some(Je),
          (e.__h = e.__h.filter(function (e) {
            return !e.__ || Ye(e);
          })));
      } catch (n) {
        (t.some(function (e) {
          e.__h &&= [];
        }),
          (t = []),
          F.__e(n, e.__v));
      }
    }),
      Pe && Pe(e, t));
  }),
  (F.unmount = function (e) {
    Fe && Fe(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.some(function (e) {
        try {
          Je(e);
        } catch (e) {
          t = e;
        }
      }),
      (n.__H = void 0),
      t && F.__e(t, n.__v));
  }));
var Ke = typeof requestAnimationFrame == `function`;
function qe(e) {
  var t,
    n = function () {
      (clearTimeout(r), Ke && cancelAnimationFrame(t), setTimeout(e));
    },
    r = setTimeout(n, 35);
  Ke && (t = requestAnimationFrame(n));
}
function Je(e) {
  var t = P,
    n = e.__c;
  (typeof n == `function` && ((e.__c = void 0), n()), (P = t));
}
function Ye(e) {
  var t = P;
  ((e.__c = e.__()), (P = t));
}
function Xe(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (t, n) {
      return t !== e[n];
    })
  );
}
function Ze(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function Qe(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function $e(e, t) {
  for (var n in e) if (n !== `__source` && !(n in t)) return !0;
  for (var r in t) if (r !== `__source` && e[r] !== t[r]) return !0;
  return !1;
}
function et(e, t) {
  var n = t(),
    r = R({ t: { __: n, u: t } }),
    i = r[0].t,
    a = r[1];
  return (
    Re(
      function () {
        ((i.__ = n), (i.u = t), tt(i) && a({ t: i }));
      },
      [e, n, t],
    ),
    Le(
      function () {
        return (
          tt(i) && a({ t: i }),
          e(function () {
            tt(i) && a({ t: i });
          })
        );
      },
      [e],
    ),
    n
  );
}
function tt(e) {
  try {
    return !(
      ((t = e.__) === (n = e.u()) && (t !== 0 || 1 / t == 1 / n)) ||
      (t != t && n != n)
    );
  } catch {
    return !0;
  }
  var t, n;
}
function nt(e) {
  e();
}
function rt(e) {
  return e;
}
function V() {
  return [!1, nt];
}
var H = Re;
function it(e, t) {
  ((this.props = e), (this.context = t));
}
function at(e, t) {
  function n(e) {
    var n = this.props.ref;
    return (
      n != e.ref &&
        n &&
        (typeof n == `function` ? n(null) : (n.current = null)),
      t ? !t(this.props, e) || n != e.ref : $e(this.props, e)
    );
  }
  function r(t) {
    return ((this.shouldComponentUpdate = n), O(e, t));
  }
  return (
    (r.displayName = `Memo(` + (e.displayName || e.name) + `)`),
    (r.__f = r.prototype.isReactComponent = !0),
    (r.type = e),
    r
  );
}
(((it.prototype = new A()).isPureReactComponent = !0),
  (it.prototype.shouldComponentUpdate = function (e, t) {
    return $e(this.props, e) || $e(this.state, t);
  }));
var ot = d.__b;
d.__b = function (e) {
  (e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    ot && ot(e));
};
var st =
  (typeof Symbol < `u` && Symbol.for && Symbol.for(`react.forward_ref`)) ||
  3911;
function U(e) {
  function t(t) {
    var n = Qe({}, t);
    return (delete n.ref, e(n, t.ref || null));
  }
  return (
    (t.$$typeof = st),
    (t.render = e),
    (t.prototype.isReactComponent = t.__f = !0),
    (t.displayName = `ForwardRef(` + (e.displayName || e.name) + `)`),
    t
  );
}
var ct = function (e, t) {
    return e == null ? null : N(N(e).map(t));
  },
  lt = {
    map: ct,
    forEach: ct,
    count: function (e) {
      return e ? N(e).length : 0;
    },
    only: function (e) {
      var t = N(e);
      if (t.length !== 1) throw `Children.only`;
      return t[0];
    },
    toArray: N,
  },
  ut = d.__e;
d.__e = function (e, t, n, r) {
  if (e.then) {
    for (var i, a = t; (a = a.__); )
      if ((i = a.__c) && i.__c)
        return (t.__e ?? ((t.__e = n.__e), (t.__k = n.__k || [])), i.__c(e, t));
  }
  ut(e, t, n, r);
};
var W = d.unmount;
function dt(e, t, n) {
  return (
    e &&
      (e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(function (e) {
          typeof e.__c == `function` && e.__c();
        }),
        (e.__c.__H = null)),
      (e = Qe({}, e)).__c != null &&
        (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = !0), (e.__c = null)),
      (e.__k =
        e.__k &&
        e.__k.map(function (e) {
          return dt(e, t, n);
        }))),
    e
  );
}
function ft(e, t, n) {
  return (
    e &&
      n &&
      ((e.__v = null),
      (e.__k =
        e.__k &&
        e.__k.map(function (e) {
          return ft(e, t, n);
        })),
      e.__c &&
        e.__c.__P === t &&
        (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
    e
  );
}
function pt() {
  ((this.__u = 0), (this.o = null), (this.__b = null));
}
function mt(e) {
  var t = e.__ && e.__.__c;
  return t && t.__a && t.__a(e);
}
function ht(e) {
  var t,
    n,
    r,
    i = null;
  function a(a) {
    if (
      (t ||
        (t = e()).then(
          function (e) {
            (e && (i = e.default || e), (r = !0));
          },
          function (e) {
            ((n = e), (r = !0));
          },
        ),
      n)
    )
      throw n;
    if (!r) throw t;
    return i ? O(i, a) : null;
  }
  return ((a.displayName = `Lazy`), (a.__f = !0), a);
}
function gt() {
  ((this.i = null), (this.l = null));
}
((d.unmount = function (e) {
  var t = e.__c;
  (t && (t.__z = !0),
    t && t.__R && t.__R(),
    t && 32 & e.__u && (e.type = null),
    W && W(e));
}),
  ((pt.prototype = new A()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    ((r.o ??= []), r.o.push(n));
    var i = mt(r.__v),
      a = !1,
      o = function () {
        a || r.__z || ((a = !0), (n.__R = null), i ? i(c) : c());
      };
    n.__R = o;
    var s = n.__P;
    n.__P = null;
    var c = function () {
      if (!--r.__u) {
        if (r.state.__a) {
          var e = r.state.__a;
          r.__v.__k[0] = ft(e, e.__c.__P, e.__c.__O);
        }
        var t;
        for (r.setState({ __a: (r.__b = null) }); (t = r.o.pop()); )
          ((t.__P = s), t.forceUpdate());
      }
    };
    (r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
      e.then(o, o));
  }),
  (pt.prototype.componentWillUnmount = function () {
    this.o = [];
  }),
  (pt.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement(`div`),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = dt(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var i = t.__a && O(ie, null, e.fallback);
    return (i && (i.__u &= -33), [O(ie, null, t.__a ? null : e.children), i]);
  }));
var _t = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.l.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== `t` || !e.l.size))
  )
    for (n = e.i; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.i = n = n[2];
    }
};
function vt(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function yt(e) {
  var t = this,
    n = e.h;
  if (
    ((t.componentWillUnmount = function () {
      (Ce(null, t.v), (t.v = null), (t.h = null));
    }),
    t.h && t.h !== n && t.componentWillUnmount(),
    !t.v)
  ) {
    for (var r = t.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    ((t.h = n),
      (t.v = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        __k: { __m: r.__m },
        contains: function () {
          return !0;
        },
        namespaceURI: n.namespaceURI,
        insertBefore: function (e, n) {
          (this.childNodes.push(e), t.h.insertBefore(e, n));
        },
        removeChild: function (e) {
          (this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
            t.h.removeChild(e));
        },
      }));
  }
  Ce(O(vt, { context: t.context }, e.__v), t.v);
}
function bt(e, t) {
  var n = O(yt, { __v: e, h: t });
  return ((n.containerInfo = t), n);
}
(((gt.prototype = new A()).__a = function (e) {
  var t = this,
    n = mt(t.__v),
    r = t.l.get(e);
  return (
    r[0]++,
    function (i) {
      var a = function () {
        t.props.revealOrder ? (r.push(i), _t(t, e, r)) : i();
      };
      n ? n(a) : a();
    }
  );
}),
  (gt.prototype.render = function (e) {
    ((this.i = null), (this.l = new Map()));
    var t = N(e.children);
    e.revealOrder && e.revealOrder[0] === `b` && t.reverse();
    for (var n = t.length; n--; ) this.l.set(t[n], (this.i = [1, 0, this.i]));
    return e.children;
  }),
  (gt.prototype.componentDidUpdate = gt.prototype.componentDidMount =
    function () {
      var e = this;
      this.l.forEach(function (t, n) {
        _t(e, n, t);
      });
    }));
var xt =
    (typeof Symbol < `u` && Symbol.for && Symbol.for(`react.element`)) || 60103,
  St =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Ct = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  wt = /[A-Z0-9]/g,
  Tt = typeof document < `u`,
  Et = function (e) {
    return (
      typeof Symbol < `u` && typeof Symbol() == `symbol`
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(e);
  };
function Dt(e, t, n) {
  return (
    t.__k ?? (t.textContent = ``),
    Ce(e, t),
    typeof n == `function` && n(),
    e ? e.__c : null
  );
}
function Ot(e, t, n) {
  return (we(e, t), typeof n == `function` && n(), e ? e.__c : null);
}
((A.prototype.isReactComponent = !0),
  [
    `componentWillMount`,
    `componentWillReceiveProps`,
    `componentWillUpdate`,
  ].forEach(function (e) {
    Object.defineProperty(A.prototype, e, {
      configurable: !0,
      get: function () {
        return this[`UNSAFE_` + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  }));
var kt = d.event;
d.event = function (e) {
  return (
    kt && (e = kt(e)),
    (e.persist = function () {}),
    (e.isPropagationStopped = function () {
      return this.cancelBubble;
    }),
    (e.isDefaultPrevented = function () {
      return this.defaultPrevented;
    }),
    (e.nativeEvent = e)
  );
};
var At,
  jt = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  Mt = d.vnode;
d.vnode = function (e) {
  (typeof e.type == `string` &&
    (function (e) {
      var t = e.props,
        n = e.type,
        r = {},
        i = n.indexOf(`-`) == -1;
      for (var a in t) {
        var o = t[a];
        if (
          !(
            (a === `value` && `defaultValue` in t && o == null) ||
            (Tt && a === `children` && n === `noscript`) ||
            a === `class` ||
            a === `className`
          )
        ) {
          var s = a.toLowerCase();
          (a === `defaultValue` && `value` in t && t.value == null
            ? (a = `value`)
            : a === `download` && !0 === o
              ? (o = ``)
              : s === `translate` && o === `no`
                ? (o = !1)
                : s[0] === `o` && s[1] === `n`
                  ? s === `ondoubleclick`
                    ? (a = `ondblclick`)
                    : s !== `onchange` ||
                        (n !== `input` && n !== `textarea`) ||
                        Et(t.type)
                      ? s === `onfocus`
                        ? (a = `onfocusin`)
                        : s === `onblur`
                          ? (a = `onfocusout`)
                          : Ct.test(a) && (a = s)
                      : (s = a = `oninput`)
                  : i && St.test(a)
                    ? (a = a.replace(wt, `-$&`).toLowerCase())
                    : o === null && (o = void 0),
            s === `oninput` && r[(a = s)] && (a = `oninputCapture`),
            (r[a] = o));
        }
      }
      (n == `select` &&
        (r.multiple &&
          Array.isArray(r.value) &&
          (r.value = N(t.children).forEach(function (e) {
            e.props.selected = r.value.indexOf(e.props.value) != -1;
          })),
        r.defaultValue != null &&
          (r.value = N(t.children).forEach(function (e) {
            e.props.selected = r.multiple
              ? r.defaultValue.indexOf(e.props.value) != -1
              : r.defaultValue == e.props.value;
          }))),
        t.class && !t.className
          ? ((r.class = t.class), Object.defineProperty(r, "className", jt))
          : t.className && (r.class = r.className = t.className),
        (e.props = r));
    })(e),
    (e.$$typeof = xt),
    Mt && Mt(e));
};
var Nt = d.__r;
d.__r = function (e) {
  (Nt && Nt(e), (At = e.__c));
};
var Pt = d.diffed;
d.diffed = function (e) {
  Pt && Pt(e);
  var t = e.props,
    n = e.__e;
  (n != null &&
    e.type === `textarea` &&
    `value` in t &&
    t.value !== n.value &&
    (n.value = t.value == null ? `` : t.value),
    (At = null));
};
var Ft = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (e) {
        return At.__n[e.__c].props.value;
      },
      useCallback: Ve,
      useContext: He,
      useDebugValue: Ue,
      useDeferredValue: rt,
      useEffect: Le,
      useId: We,
      useImperativeHandle: ze,
      useInsertionEffect: H,
      useLayoutEffect: Re,
      useMemo: Be,
      useReducer: z,
      useRef: B,
      useState: R,
      useSyncExternalStore: et,
      useTransition: V,
    },
  },
};
function It(e) {
  return O.bind(null, e);
}
function Lt(e) {
  return !!e && e.$$typeof === xt;
}
function Rt(e) {
  return Lt(e) && e.type === ie;
}
function zt(e) {
  return (
    !!e &&
    typeof e.displayName == `string` &&
    e.displayName.indexOf(`Memo(`) == 0
  );
}
function Bt(e) {
  return Lt(e) ? Te.apply(null, arguments) : e;
}
function Vt(e) {
  return !!e.__k && (Ce(null, e), !0);
}
function Ht(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}
var G = {
  useState: R,
  useId: We,
  useReducer: z,
  useEffect: Le,
  useLayoutEffect: Re,
  useInsertionEffect: H,
  useTransition: V,
  useDeferredValue: rt,
  useSyncExternalStore: et,
  startTransition: nt,
  useRef: B,
  useImperativeHandle: ze,
  useMemo: Be,
  useCallback: Ve,
  useContext: He,
  useDebugValue: Ue,
  version: `18.3.1`,
  Children: lt,
  render: Dt,
  hydrate: Ot,
  unmountComponentAtNode: Vt,
  createPortal: bt,
  createElement: O,
  createContext: Ee,
  createFactory: It,
  cloneElement: Bt,
  createRef: re,
  Fragment: ie,
  isValidElement: Lt,
  isElement: Lt,
  isFragment: Rt,
  isMemo: zt,
  findDOMNode: Ht,
  Component: A,
  PureComponent: it,
  memo: at,
  forwardRef: U,
  flushSync: function (e, t) {
    var n = d.debounceRendering;
    d.debounceRendering = function (e) {
      return e();
    };
    var r = e(t);
    return ((d.debounceRendering = n), r);
  },
  unstable_batchedUpdates: function (e, t) {
    return e(t);
  },
  StrictMode: ie,
  Suspense: pt,
  SuspenseList: gt,
  lazy: ht,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ft,
};
function Ut(e) {
  return {
    render: function (t) {
      Dt(t, e);
    },
    unmount: function () {
      Vt(e);
    },
  };
}
function Wt(e, t) {
  return (Ot(t, e), Ut(e));
}
var Gt = { createRoot: Ut, hydrateRoot: Wt },
  Kt,
  qt,
  Jt = (e, t) => {
    if (((Kt = void 0), t && t.type === `click`)) {
      if (t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || t.button !== 0)
        return e;
      let n = t.target.closest(`a[href]`),
        r = n && n.getAttribute(`href`);
      if (
        !n ||
        n.origin != location.origin ||
        /^#/.test(r) ||
        !/^(_?self)?$/i.test(n.target) ||
        (qt && (typeof qt == `string` ? !r.startsWith(qt) : !qt.test(r)))
      )
        return e;
      ((Kt = !0),
        t.preventDefault(),
        (t = n.href.replace(location.origin, ``)));
    } else
      typeof t == `string`
        ? (Kt = !0)
        : t && t.url
          ? ((Kt = !t.replace), (t = t.url))
          : (t = location.pathname + location.search);
    return (
      Kt === !0
        ? history.pushState(null, ``, t)
        : Kt === !1 && history.replaceState(null, ``, t),
      t
    );
  },
  Yt = (e, t, n) => {
    ((e = e.split(`/`).filter(Boolean)),
      (t = (t || ``).split(`/`).filter(Boolean)));
    for (let r = 0, i, a; r < Math.max(e.length, t.length); r++) {
      let [, o, s, c] = (t[r] || ``).match(/^(:?)(.*?)([+*?]?)$/);
      if (((i = e[r]), !(!o && s == i))) {
        if (!o && i && c == `*`) {
          n.rest = `/` + e.slice(r).map(decodeURIComponent).join(`/`);
          break;
        }
        if (!o || (!i && c != `?` && c != `*`)) return;
        if (
          ((a = c == `+` || c == `*`),
          a
            ? (i = e.slice(r).map(decodeURIComponent).join(`/`) || void 0)
            : (i &&= decodeURIComponent(i)),
          (n.params[s] = i),
          s in n || (n[s] = i),
          a)
        )
          break;
      }
    }
    return n;
  };
function Xt(e) {
  let [t, n] = z(Jt, e.url || location.pathname + location.search);
  e.scope && (qt = e.scope);
  let r = Kt === !0,
    i = Be(() => {
      let e = new URL(t, location.origin),
        i = e.pathname.replace(/\/+$/g, ``) || `/`;
      return {
        url: t,
        path: i,
        query: Object.fromEntries(e.searchParams),
        route: (e, t) => n({ url: e, replace: t }),
        wasPush: r,
      };
    }, [t]);
  return (
    Re(
      () => (
        addEventListener(`click`, n),
        addEventListener(`popstate`, n),
        () => {
          (removeEventListener(`click`, n), removeEventListener(`popstate`, n));
        }
      ),
      [],
    ),
    O(Xt.ctx.Provider, { value: i }, e.children)
  );
}
var Zt = Promise.resolve();
function Qt(e) {
  let [t, n] = z((e) => e + 1, 0),
    { url: r, query: i, wasPush: a, path: o } = an(),
    { rest: s = o, params: c = {} } = He(nn),
    l = B(!1),
    u = B(o),
    d = B(0),
    f = B(),
    p = B(),
    m = B(),
    h = B(!1),
    g = B();
  g.current = !1;
  let _ = B(!1),
    v,
    y,
    b;
  N(e.children).some((e) => {
    if (
      Yt(
        s,
        e.props.path,
        (b = { ...e.props, path: s, query: i, params: c, rest: `` }),
      )
    )
      return (v = Te(e, b));
    e.props.default && (y = Te(e, b));
  });
  let x = v || y;
  Be(() => {
    p.current = f.current;
    let e = p.current && p.current.props.children;
    !e || !x || x.type !== e.type || x.props.component !== e.props.component
      ? (this.__v && this.__v.__k && this.__v.__k.reverse(),
        d.current++,
        (_.current = !0))
      : (_.current = !1);
  }, [r]);
  let S = f.current && f.current.__u & $t && f.current.__u & en,
    C = f.current && f.current.__h;
  ((f.current = O(nn.Provider, { value: b }, x)),
    S
      ? ((f.current.__u |= $t), (f.current.__u |= en))
      : C && (f.current.__h = !0));
  let ee = p.current;
  return (
    (p.current = null),
    (this.__c = (t, i) => {
      ((g.current = !0),
        (p.current = ee),
        e.onLoadStart && e.onLoadStart(r),
        (l.current = !0));
      let a = d.current;
      t.then(() => {
        a === d.current &&
          ((p.current = null),
          f.current &&
            (i.__h && (f.current.__h = i.__h),
            i.__u & en && (f.current.__u |= en),
            i.__u & $t && (f.current.__u |= $t)),
          Zt.then(n));
      });
    }),
    Re(() => {
      let t = this.__v && this.__v.__e;
      if (g.current) {
        !h.current && !m.current && (m.current = t);
        return;
      }
      (!h.current &&
        m.current &&
        (m.current !== t && m.current.remove(), (m.current = null)),
        (h.current = !0),
        u.current !== o &&
          (a && scrollTo(0, 0),
          e.onRouteChange && e.onRouteChange(r),
          (u.current = o)),
        e.onLoadEnd && l.current && e.onLoadEnd(r),
        (l.current = !1));
    }, [o, a, t]),
    _.current ? [O(tn, { r: f }), O(tn, { r: p })] : O(tn, { r: f })
  );
}
var $t = 32,
  en = 128,
  tn = ({ r: e }) => e.current;
((Qt.Provider = Xt), (Xt.ctx = Ee({})));
var nn = Ee({}),
  rn = (e) => O(e.component, e),
  an = () => He(Xt.ctx),
  on = d.__e;
d.__e = (e, t, n) => {
  if (e && e.then) {
    let r = t;
    for (; (r = r.__); )
      if (r.__c && r.__c.__c)
        return (
          t.__e ?? ((t.__e = n.__e), (t.__k = n.__k)),
          (t.__k ||= []),
          r.__c.__c(e, t)
        );
  }
  on && on(e, t, n);
};
var sn = `modulepreload`,
  cn = function (e) {
    return `/` + e;
  },
  ln = {},
  un = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? import.meta.resolve(e)
          : new URL(
              e,
              new URL(
                `../../../src/node/plugins/importAnalysisBuild.ts`,
                import.meta.url,
              ),
            ).href;
      }
      r = o(
        t.map((t) => {
          if (((t = cn(t, n)), (t = s(t)), t in ln)) return;
          ln[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : sn),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  dn = Ee(`some context here?`),
  fn = 0;
Array.isArray;
function K(e, t, n, r, i, a) {
  t ||= {};
  var o,
    s,
    c = t;
  if (`ref` in c)
    for (s in ((c = {}), t)) s == `ref` ? (o = t[s]) : (c[s] = t[s]);
  var l = {
    type: e,
    props: c,
    key: n,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --fn,
    __i: -1,
    __u: 0,
    __source: i,
    __self: a,
  };
  if (typeof e == `function` && (o = e.defaultProps))
    for (s in o) c[s] === void 0 && (c[s] = o[s]);
  return (d.vnode && d.vnode(l), l);
}
var pn = `.dem,.dem.gz,.dem.zst,.dem.bz2`,
  mn = ({
    onFile: e,
    subtext: t = `Supports .dem, .dem.gz, .dem.zst and .dem.bz2 files`,
  }) => {
    let [n, r] = R(!1),
      i = async (t) => {
        let n = await t.arrayBuffer();
        e({ filename: t.name, data: new Uint8Array(n) });
      };
    return K(`div`, {
      className: `upload-container`,
      children: K(`div`, {
        className: `upload-area ${n ? `dragover` : ``}`,
        onDragOver: (e) => e.preventDefault(),
        onDragEnter: (e) => {
          (e.preventDefault(), r(!0));
        },
        onDragLeave: (e) => {
          (e.preventDefault(), r(!1));
        },
        onDrop: (e) => {
          (e.preventDefault(), r(!1));
          let t = e.dataTransfer.files[0];
          t && i(t);
        },
        children: [
          K(`span`, { className: `upload-icon`, children: `📂` }),
          K(`div`, {
            className: `upload-text`,
            children: `Drop Demo File Here or Click to Browse`,
          }),
          K(`div`, { className: `upload-subtext`, children: t }),
          K(`input`, {
            type: `file`,
            accept: pn,
            onChange: (e) => {
              let t = e.target.files[0];
              t && i(t);
            },
            className: `upload-input`,
          }),
        ],
      }),
    });
  },
  hn = () => {
    let e = He(dn),
      { route: t } = an();
    return K(mn, {
      onFile: ({ filename: n, data: r }) => {
        (e.setDemoData({ filename: n, data: r }), t(`/player`));
      },
      subtext: `Supports .dem, .dem.gz, .dem.zst and .dem.bz2 files up to 1GB`,
    });
  },
  gn = `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20height='64'%20width='64'%20%3e%3cpath%20d='M21%204.134c0-.143-.17-.18-.238-.071-2.177%203.553-3.436%205.563-4.525%207.429H3.174c-.17%200-.238.215-.102.287%205.41%202.153%2013.233%205.42%2017.622%207.214.102.036.306-.072.306-.144V4.134z'%20fill='%23FF5500'%20%3e%3c/path%3e%3c/svg%3e`,
  _n = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAA6CAYAAAD4HGbLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADQ1JREFUeNrsXWtsm1cZfr/cLyt1L0GwtoqzMqZeRB1ULuIHdRBIdGPU0bQfSEhNgB9InZRY8IOLUJo//ENJqqpiYsUOg/1YQXEmuhUExClsP1ZG3Yl12latbquEam0Wp22cmy+c13lP8vb4sz/bcVu3fR/p0/f5fOf2fX6f817OOTaAQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCASChxdWqQUnJibG1MlbSN50Ol2Wzq6lnm3btlnydQvKhZpSC1ZVVRUs1JZllYUopdYjEJQbVfIKBIK7qHHWakKlUilIJpMF1Y2apqamRr4twYNBnFJ9jqWlpVgykRiqrq4OF+KEpZJJ92IyOVBXX++Sr0xwXxNnLY66IkL/Y9u3DxZT5lI0GlNtjoifI3hgTLVisd7lihZbxrVhQ/TWrVt3tZ8Hv/9Dtzq5h4//Olxiea86RbD7eKh6IjnyedQppu5HjXQs5ymk/Vx1FNNPVTYmlKjg4EAikeibmZlxF5pf5XUtLi4G7kFXB9QxRkJZCukwZN+rji6qK187XTbpHqqjEIyoI1Bo39RxmCWNUVuCStY4ijieZDJ58erVqwWZgfF4PBNMuAfaxkcfe9TRXUx5HPlVHR2kcXrvQpc7UeMUmBefrU8dh4UC9xFxNDly+UnlmjBdI1ADoNnTjxpBkcBPBGhVpOgmcmGeAzoPLE8II1G6ySxD4fQbptcAERKFfFjl08K7R90/S0Id4uWorI/q8+j7hll2UB3nVL4ItRGjdtDM69RmGGnPAboeY+0cVJ+1xupX+YOUt4/qiVB6SGhTgfM4FUIaLYghOlxMeLpIG2lNFKMz5ukgsmnzykvpwD77SFiHUSiZGYjpo3TPx007ai9A7XcSuQI2Zp2b2vNSvzopnZuJMaoHMc60lO5XmNUdoDq15gwQ+YU48gpyOstaCHuJDAdptMXrHhJ4PIboiNLo7DbIwhEmIiIp9zGBRQRR++BITwLMfR4f1ekmkmoS5jMVu6m/Q1RuxYQk0gK1F2VaJkTaE99BL/N7+HOJL1RpxKkwbRMjYdlH114a+YdIkHsoEhUhDeMmoRt1CAL4GNlihiawuwYS2BhpiHFqo7/MzxxhxAJG/ghrt58GCPFx5BVkaRttluEIPMjSp0kLDLIoWDcTsjAJWV+e6jUBwlSeayY0AUeZ5gqzeyFKw7JBat9dhmf1Ge2Y2lFrt0Hqbw+1LxpHtE0WtFlkOsEhMte08MbIrAIaidG0mXYQ6H6qe5qIwEdv7RtdpM9+Zl5FiKQDVNanza01aBc8RsA+DK7RQW1NU9uhUuaJHkSUPA0/OTlZ8LaCSiDNli1bZMmB4P431ZJXLsHSubdg6b3zkLx+HVJT15BCq4xubILqba1QvbUVap/YAbWevfJtCR5OjZOOx2HhH6dg4Y1/ElFMbZPWKigrCYlU95WvQsM39kPVppaiNdrWrVtF4wjuPXGK2QGKmD85AvN/OwXpuXgWOdK3kca8BiN/Ghq+/iQ0PP0MWE1NBRNHdoAKKoI4U1NTBREncfkizAaeh+TEZUOLpO0k3DZP2ryX0UCNsO7Qj6Fmx+6C/KeWlhYhjuDeE2d6etqROAv/CkP8pYAy0WbtyWGqFRsT7XZzLjtv03d/AA3ffNqxvxs3bizqWdlatQOUhNG0UR1Jo0lSPIKVHmmiEDtG/cIFrrTWzzaYb8U0LRQNF7p6nOrVqyyw3qFSV57fa9yxcDSSZvaFo6ukQUHP8mfWRhpE/MXfwOzzQ+UWtC51wnVjfL4ESYRLTs6SIKIQ9EEZ5lPuNEj4eyD/Cm0OfK6eArYZ9BVqrtOc0RisrpTIfKb0lRXbbDnTw0ccTRp7wtiYaY6kyZV3+Xrh9N9h/rVXykUaFAS9VqtDCU+bOnA+YwMsz8O4IfeSmkoGzkN5+FozHCDUkVaHSSh8B+XWBHpdXzu9zzb6rDW6+34ZiBBlD0cnL0eVefZbG7I4ECYvaZz9ofiLL0CN+zFHn6fA0VaTJmKM2jgiZswXdTZH08yqZV2Gb4IjMiIiVNYDqyukVyYVdRlYnpz00XWQtii42Wh920Qk3fNS/lCODXO4ZKaL8unJ3QNs9PezgUPn5ysp3NT/UB6zNqtvDBnzTPeNnqmdPZteA4fkBm3CMe3uofcSNlZ6azPares3+hy+E+Zg2X2ct371U2h7+/38hCmVNDbaht/GKJvryHF1bi7Jx6Ev8CIJa7dD3sOwugyGayAklp/djzChaCNtZr63blrGb1cGEYTbZ/j1yB0l0gaMPoRpVLd7Nt0/vYJB97+dhE73oY3Sx4y6IzSo4ACQtukr1udnqyp0+wPazyLfJmTzLrl5aRExzPaRlJ3UV74Bz0XvacimTBjY1oqKM9V+/+Fp+MnW2dx+jJ3pll4DaQzmoT8196eX1vII2ky4VESZKAlZG133Gkvv8RqX97eTueKlLxhNP75c31x13Eb3gUgTZOYi1tlF7QRIWLU5ifm8tLqZC2KUaTJgZ71Y9CDTQlHKH2DEtkgrmdsUPFTHBtbfAXP7AZIVlte84fOP4No/tgs1CKtLjPysnhGb9t0sXb/fMJXRpAH2PnSbZd1MWDZT7ebSHBx7/y9wo6kGTjy+Dp794EZ+DUO8QO1Qv/fLULtzN1Rv/uRyemoWqufegdrZM2AlruUmkK0mOwWLCR+kalrgLqGfmVrDsLrZTMOvR1caISNMm6EZ102BCJ+hgbBO1CgoFB5WBs3FPib8WnB0JOwSI4D5gyhhIrab7qNpM6g+I2l86txPfQ+ybRNINr7VOkrtdjPtdpg9j58I5wNjQShpun66h8+A+5H2qPRO2oCnzdkw29rRr7UX9bWVnkG/YyR5JzMzzfcxQ/n2VSRxQlfOwA1FHkRgpwv2R2/BI0upnIRBND/zHWjc/+0s02pZ63wJEvA9qJs5CfXTJ8BSZFquy2KVWLaapzr2MsxuPlRK9ClMvksxLzlWxH0XrG4i021GWJvjOs2oI+KgIX0G8XJhlEZenyHYw6RFepl/42IaJd8enHEbDQy5nHy2SDZIA4nPIZIWzvEMLqM9YCaw18Yc9lQkcUavvKkNJrhZa8GRPRvgZ2eu2xIGieL6xS+hprUNrt0EODFmwflJC66RkmquB9jrTsO+J9Kw89GnINm4Cxo+OgrVC9Hcmoal18axL4dKfZQgmUFdpp1Oo1ovlL60PmZ+gUxoxkuoT7+QTsNn8NgFCNjA0MeEkAtnH4vAubnPlqfufTnIzIMX2lcZYtpJP7PXIZJmRvgOOJCsT/uM/B2Xe66tLD7ORPxjePfGRIY0Gq+5H4EPXHW2fsz6H/08Q5rx9yx47g9VmfM1ZtnNLqg3oNL6X6mC4derIFnnhvmW5yBd1exImgwxlXZaJk9J8JOAB2hewaMjZzRCDkD+PTdOpMSoUWYLMpFmJMfIWmiIWffVy4h91vRxjDI6whViGi7KI38srYvmtbQpNMZ+mwC0P0XP44XV3zsIca1KaX0sr94MGDOiXri71ktpUfqs2+8ify+aI1Km2xkw3sdF41d9KoM4Z6YuZJlaeKDWMeW8SZlntTt2Z8hyTGmarOCAQY2Tb1sQRPLUu2Fh47OOpFnROvPvlPQsZEq0s9HrLEWPRmB1Nt1fqj8Eq5vYpinK5aERMlxiX3VfxqifAyRAQQfTym6/kUngTjoHqG7teA8Zwqr3Celolt8mgtVJRNB5R9hApcPPOngxRoJvth8w+mX3PjpzvI/BchKnLKbam9cv2E5Wnm1pgFeV5nlS+Tv6fpPyaVCjDL9uZQfcckSsX1Xk+UKbBbse/RbUxU5CVeKjvKRBVC+WrplJrXeQttEOZ5Qc4SjTHmHD/+BpUfM+fbEdbN4nZsx7BG00jx1J9Y+CAIWxwyxQEHH4JZog659J6lGeTv5XG5sTiVJ/Y0Y/9LyJ+TxgaJ029uxmXZinnc0jRSncnq99fw5z9LYydib3WlGWeZyuN45myGNHgk/PJiDw18lMoACjZ2imnThjwR//bTkSht/3Kn/n0NdS0HA9AHUzf85PHNR4yqyLtf5u5U6xa9UEgjtuqmE0Lc3MLC7K/2uugZc/+4lMKvo1qHnOT0JRpMmYg9FluU807nLUNtrPEQgqjjj8LzrenZmw9zzI1zm+c32GQCuhoCkri2AO86IwO6973GxzN//kaCF/JyIQ3BXiLC4uZhHEPDiO7NmYMyKWdvB1IO9PEjitKMj8rYh804LKIM7c3Nx4IpHIXH9x82ccBDsNp7c0wn9aGjIprZvSKxomn5bhCS3ryATLFRjI83O6qq9B+aoF5UTJUbXt27cfvnDhwvq6urre1PwSWItJJ9UAxxY/hM/H4/C5T1nw30tVK7Lv9Bs3yInHFdni8RQ0fHwOUnOpHORZvUzVbAL8W5CFhYVgKpXyy1ctEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAICgP/i/AAIy/rys7E0YdAAAAAElFTkSuQmCC`,
  vn = `/assets/extension_firefox_badge-CS-dFemb.png`,
  yn = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M12%200c-6.626%200-12%205.373-12%2012%200%205.302%203.438%209.8%208.207%2011.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729%201.205.084%201.839%201.237%201.839%201.237%201.07%201.834%202.807%201.304%203.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931%200-1.311.469-2.381%201.236-3.221-.124-.303-.535-1.524.117-3.176%200%200%201.008-.322%203.301%201.23.957-.266%201.983-.399%203.003-.404%201.02.005%202.047.138%203.006.404%202.291-1.552%203.297-1.23%203.297-1.23.653%201.653.242%202.874.118%203.176.77.84%201.235%201.911%201.235%203.221%200%204.609-2.807%205.624-5.479%205.921.43.372.823%201.102.823%202.222v3.293c0%20.319.192.694.801.576%204.765-1.589%208.199-6.086%208.199-11.386%200-6.627-5.373-12-12-12z'%20/%3e%3c/svg%3e`;
function bn() {
  let [e, t] = R(!1);
  return (
    Le(() => {
      let e = setTimeout(() => {
        t(!0);
      }, 500);
      return () => clearTimeout(e);
    }, []),
    K(`div`, {
      className: `App`,
      children: [
        K(`section`, {
          className: `hero-section`,
          children: [
            K(`div`, {
              className: `hero-image-container`,
              children: K(`div`, { className: `hero-overlay` }),
            }),
            K(`div`, {
              className: `hero-content`,
              children: K(`div`, {
                className: `w3-container`,
                children: [
                  K(`h1`, { children: `Counter-Strike 2D Replay` }),
                  K(`p`, { children: `Analyze CS matches in 2D` }),
                ],
              }),
            }),
          ],
        }),
        K(`section`, {
          className: `main-content`,
          children: K(`div`, {
            className: `w3-container`,
            children: K(`div`, {
              className: `content-wrapper`,
              children: [
                K(`div`, {
                  className: `upload-section`,
                  children: [K(`h2`, { children: `Play The Demo` }), K(hn, {})],
                }),
                K(`div`, {
                  className: `bottom-sections`,
                  children: [
                    K(`div`, {
                      className: `links-section`,
                      children: K(`div`, {
                        className: `links-container`,
                        children: [
                          K(`h2`, {
                            children: [
                              K(`img`, {
                                src: gn,
                                alt: `Faceit Icon`,
                                className: `faceit-icon`,
                                width: `24`,
                                height: `24`,
                              }),
                              K(`span`, { children: `Faceit Extension` }),
                            ],
                          }),
                          K(`div`, {
                            className: `tool-buttons`,
                            children: [
                              K(`a`, {
                                href: `https://chromewebstore.google.com/detail/faceit-2d-replay/kagfmemgilamfeoljmajifkbhfglebdb`,
                                className: `tool-btn chrome-btn`,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                children: K(`img`, {
                                  src: _n,
                                  alt: `Chrome Extension Badge`,
                                  className: `tool-badge`,
                                }),
                              }),
                              K(`a`, {
                                href: `https://addons.mozilla.org/en-US/firefox/addon/faceit-2d-replay/`,
                                className: `tool-btn firefox-btn`,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                children: K(`img`, {
                                  src: vn,
                                  alt: `Firefox Add-on Badge`,
                                  className: `tool-badge`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    K(`div`, {
                      className: `open-source-section`,
                      children: K(`div`, {
                        className: `links-container`,
                        children: [
                          K(`h2`, {
                            children: K(`span`, { children: `Open-Source` }),
                          }),
                          K(`div`, {
                            className: `tool-buttons`,
                            children: K(`a`, {
                              href: `https://github.com/sparkoo/csgo-2d-demo-viewer`,
                              className: `tool-btn github-btn`,
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              children: [
                                K(`img`, {
                                  src: yn,
                                  alt: `GitHub Icon`,
                                  className: `github-icon`,
                                  width: `24`,
                                  height: `24`,
                                }),
                                `GitHub Repository`,
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        K(`footer`, {
          className: `site-footer`,
          children: K(`div`, {
            className: `w3-container`,
            children: K(`div`, {
              className: `footer-content`,
              children: [
                K(`div`, {
                  className: `footer-copyright`,
                  children: K(`a`, {
                    href: `https://sparko.cz`,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    children: [`© `, new Date().getFullYear(), ` sparko`],
                  }),
                }),
                K(`div`, {
                  className: `footer-links`,
                  children: K(`a`, {
                    href: `https://github.com/sparkoo/csgo-2d-demo-viewer`,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    children: [
                      K(`img`, {
                        src: yn,
                        alt: `GitHub Icon`,
                        className: `github-icon`,
                        width: `20`,
                        height: `20`,
                      }),
                      K(`span`, { children: `GitHub` }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function xn(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
var { toString: Sn } = Object.prototype,
  { getPrototypeOf: Cn } = Object,
  { iterator: wn, toStringTag: Tn } = Symbol,
  En = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Dn = (e, t) => {
    let n = e,
      r = [];
    for (; n != null && n !== Object.prototype; ) {
      if (r.indexOf(n) !== -1) return !1;
      if ((r.push(n), En(n, t))) return !0;
      n = Cn(n);
    }
    return !1;
  },
  On = (e, t) => (e != null && Dn(e, t) ? e[t] : void 0),
  kn = ((e) => (t) => {
    let n = Sn.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  An = (e) => ((e = e.toLowerCase()), (t) => kn(t) === e),
  jn = (e) => (t) => typeof t === e,
  { isArray: Mn } = Array,
  Nn = jn(`undefined`);
function Pn(e) {
  return (
    e !== null &&
    !Nn(e) &&
    e.constructor !== null &&
    !Nn(e.constructor) &&
    Rn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
var Fn = An(`ArrayBuffer`);
function In(e) {
  let t;
  return (
    (t =
      typeof ArrayBuffer < `u` && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && Fn(e.buffer)),
    t
  );
}
var Ln = jn(`string`),
  Rn = jn(`function`),
  zn = jn(`number`),
  Bn = (e) => typeof e == `object` && !!e,
  Vn = (e) => e === !0 || e === !1,
  Hn = (e) => {
    if (!Bn(e)) return !1;
    let t = Cn(e);
    return (
      (t === null || t === Object.prototype || Cn(t) === null) &&
      !Dn(e, Tn) &&
      !Dn(e, wn)
    );
  },
  Un = (e) => {
    if (!Bn(e) || Pn(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  Wn = An(`Date`),
  Gn = An(`File`),
  Kn = (e) => !!(e && e.uri !== void 0),
  qn = (e) => e && e.getParts !== void 0,
  Jn = An(`Blob`),
  Yn = An(`FileList`),
  Xn = (e) => Bn(e) && Rn(e.pipe);
function Zn() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof self < `u`
      ? self
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : {};
}
var Qn = Zn(),
  $n = Qn.FormData === void 0 ? void 0 : Qn.FormData,
  er = (e) => {
    if (!e) return !1;
    if ($n && e instanceof $n) return !0;
    let t = Cn(e);
    if (!t || t === Object.prototype || !Rn(e.append)) return !1;
    let n = kn(e);
    return (
      n === `formdata` ||
      (n === `object` && Rn(e.toString) && e.toString() === `[object FormData]`)
    );
  },
  tr = An(`URLSearchParams`),
  [nr, rr, ir, ar] = [`ReadableStream`, `Request`, `Response`, `Headers`].map(
    An,
  ),
  or = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ``);
function sr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e == null) return;
  let r, i;
  if ((typeof e != `object` && (e = [e]), Mn(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    if (Pn(e)) return;
    let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length,
      o;
    for (r = 0; r < a; r++) ((o = i[r]), t.call(null, e[o], o, e));
  }
}
function cr(e, t) {
  if (Pn(e)) return null;
  t = t.toLowerCase();
  let n = Object.keys(e),
    r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
var lr =
    typeof globalThis < `u`
      ? globalThis
      : typeof self < `u`
        ? self
        : typeof window < `u`
          ? window
          : global,
  ur = (e) => !Nn(e) && e !== lr;
function dr(...e) {
  let { caseless: t, skipUndefined: n } = (ur(this) && this) || {},
    r = {},
    i = (e, i) => {
      if (i === `__proto__` || i === `constructor` || i === `prototype`) return;
      let a = (t && typeof i == `string` && cr(r, i)) || i,
        o = En(r, a) ? r[a] : void 0;
      Hn(o) && Hn(e)
        ? (r[a] = dr(o, e))
        : Hn(e)
          ? (r[a] = dr({}, e))
          : Mn(e)
            ? (r[a] = e.slice())
            : (!n || !Nn(e)) && (r[a] = e);
    };
  for (let t = 0, n = e.length; t < n; t++) {
    let n = e[t];
    if (!n || Pn(n) || (sr(n, i), typeof n != `object` || Mn(n))) continue;
    let r = Object.getOwnPropertySymbols(n);
    for (let e = 0; e < r.length; e++) {
      let t = r[e];
      Cr.call(n, t) && i(n[t], t);
    }
  }
  return r;
}
var fr = (e, t, n, { allOwnKeys: r } = {}) => (
    sr(
      t,
      (t, r) => {
        n && Rn(t)
          ? Object.defineProperty(e, r, {
              __proto__: null,
              value: xn(t, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, r, {
              __proto__: null,
              value: t,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r },
    ),
    e
  ),
  pr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  mr = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, "constructor", {
        __proto__: null,
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "super", {
        __proto__: null,
        value: t.prototype,
      }),
      n && Object.assign(e.prototype, n));
  },
  hr = (e, t, n, r) => {
    let i,
      a,
      o,
      s = {};
    if (((t ||= {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
        ((o = i[a]),
          (!r || r(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0)));
      e = n !== !1 && Cn(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  gr = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    let r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  _r = (e) => {
    if (!e) return null;
    if (Mn(e)) return e;
    let t = e.length;
    if (!zn(t)) return null;
    let n = Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  vr = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < `u` && Cn(Uint8Array)),
  yr = (e, t) => {
    let n = (e && e[wn]).call(e),
      r;
    for (; (r = n.next()) && !r.done; ) {
      let n = r.value;
      t.call(e, n[0], n[1]);
    }
  },
  br = (e, t) => {
    let n,
      r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  xr = An(`HTMLFormElement`),
  Sr = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
      return t.toUpperCase() + n;
    }),
  { propertyIsEnumerable: Cr } = Object.prototype,
  wr = An(`RegExp`),
  Tr = (e, t) => {
    let n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (sr(n, (n, i) => {
      let a;
      (a = t(n, i, e)) !== !1 && (r[i] = a || n);
    }),
      Object.defineProperties(e, r));
  },
  Er = (e) => {
    Tr(e, (t, n) => {
      if (Rn(e) && [`arguments`, `caller`, `callee`].includes(n)) return !1;
      let r = e[n];
      if (Rn(r)) {
        if (((t.enumerable = !1), `writable` in t)) {
          t.writable = !1;
          return;
        }
        t.set ||= () => {
          throw Error(`Can not rewrite read-only method '` + n + `'`);
        };
      }
    });
  },
  Dr = (e, t) => {
    let n = {},
      r = (e) => {
        e.forEach((e) => {
          n[e] = !0;
        });
      };
    return (Mn(e) ? r(e) : r(String(e).split(t)), n);
  },
  Or = () => {},
  kr = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Ar(e) {
  return !!(e && Rn(e.append) && e[Tn] === `FormData` && e[wn]);
}
var jr = (e) => {
    let t = new WeakSet(),
      n = (e) => {
        if (Bn(e)) {
          if (t.has(e)) return;
          if (Pn(e)) return e;
          if (!(`toJSON` in e)) {
            t.add(e);
            let r = Mn(e) ? [] : {};
            return (
              sr(e, (e, t) => {
                let i = n(e);
                !Nn(i) && (r[t] = i);
              }),
              t.delete(e),
              r
            );
          }
        }
        return e;
      };
    return n(e);
  },
  Mr = An(`AsyncFunction`),
  Nr = (e) => e && (Bn(e) || Rn(e)) && Rn(e.then) && Rn(e.catch),
  Pr = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((e, t) => (
            lr.addEventListener(
              `message`,
              ({ source: n, data: r }) => {
                n === lr && r === e && t.length && t.shift()();
              },
              !1,
            ),
            (n) => {
              (t.push(n), lr.postMessage(e, `*`));
            }
          ))(`axios@${Math.random()}`, [])
        : (e) => setTimeout(e))(
    typeof setImmediate == `function`,
    Rn(lr.postMessage),
  ),
  Fr =
    typeof queueMicrotask < `u`
      ? queueMicrotask.bind(lr)
      : (typeof process < `u` && process.nextTick) || Pr,
  Ir = (e) => e != null && Rn(e[wn]),
  q = {
    isArray: Mn,
    isArrayBuffer: Fn,
    isBuffer: Pn,
    isFormData: er,
    isArrayBufferView: In,
    isString: Ln,
    isNumber: zn,
    isBoolean: Vn,
    isObject: Bn,
    isPlainObject: Hn,
    isEmptyObject: Un,
    isReadableStream: nr,
    isRequest: rr,
    isResponse: ir,
    isHeaders: ar,
    isUndefined: Nn,
    isDate: Wn,
    isFile: Gn,
    isReactNativeBlob: Kn,
    isReactNative: qn,
    isBlob: Jn,
    isRegExp: wr,
    isFunction: Rn,
    isStream: Xn,
    isURLSearchParams: tr,
    isTypedArray: vr,
    isFileList: Yn,
    forEach: sr,
    merge: dr,
    extend: fr,
    trim: or,
    stripBOM: pr,
    inherits: mr,
    toFlatObject: hr,
    kindOf: kn,
    kindOfTest: An,
    endsWith: gr,
    toArray: _r,
    forEachEntry: yr,
    matchAll: br,
    isHTMLForm: xr,
    hasOwnProperty: En,
    hasOwnProp: En,
    hasOwnInPrototypeChain: Dn,
    getSafeProp: On,
    reduceDescriptors: Tr,
    freezeMethods: Er,
    toObjectSet: Dr,
    toCamelCase: Sr,
    noop: Or,
    toFiniteNumber: kr,
    findKey: cr,
    global: lr,
    isContextDefined: ur,
    isSpecCompliantForm: Ar,
    toJSONObject: jr,
    isAsyncFn: Mr,
    isThenable: Nr,
    setImmediate: Pr,
    asap: Fr,
    isIterable: Ir,
    isSafeIterable: (e) => e != null && Dn(e, wn) && Ir(e),
  },
  Lr = q.toObjectSet([
    `age`,
    `authorization`,
    `content-length`,
    `content-type`,
    `etag`,
    `expires`,
    `from`,
    `host`,
    `if-modified-since`,
    `if-unmodified-since`,
    `last-modified`,
    `location`,
    `max-forwards`,
    `proxy-authorization`,
    `referer`,
    `retry-after`,
    `user-agent`,
  ]),
  Rr = (e) => {
    let t = {},
      n,
      r,
      i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (e) {
            ((i = e.indexOf(`:`)),
              (n = e.substring(0, i).trim().toLowerCase()),
              (r = e.substring(i + 1).trim()),
              !(!n || (t[n] && Lr[n])) &&
                (n === `set-cookie`
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + `, ` + r : r)));
          }),
      t
    );
  };
function zr(e) {
  let t = 0,
    n = e.length;
  for (; t < n; ) {
    let n = e.charCodeAt(t);
    if (n !== 9 && n !== 32) break;
    t += 1;
  }
  for (; n > t; ) {
    let t = e.charCodeAt(n - 1);
    if (t !== 9 && t !== 32) break;
    --n;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
var Br = RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`, `g`),
  Vr = RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`, `g`);
function Hr(e, t) {
  return q.isArray(e) ? e.map((e) => Hr(e, t)) : zr(String(e).replace(t, ``));
}
var Ur = (e) => Hr(e, Br),
  Wr = (e) => Hr(e, Vr);
function Gr(e) {
  let t = Object.create(null);
  return (
    q.forEach(e.toJSON(), (e, n) => {
      t[n] = Wr(e);
    }),
    t
  );
}
var Kr = Symbol(`internals`);
function qr(e) {
  return e && String(e).trim().toLowerCase();
}
function Jr(e) {
  return e === !1 || e == null ? e : q.isArray(e) ? e.map(Jr) : Ur(String(e));
}
function Yr(e) {
  let t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
    r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
var Xr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Zr(e, t, n, r, i) {
  if (q.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), q.isString(t))) {
    if (q.isString(r)) return t.indexOf(r) !== -1;
    if (q.isRegExp(r)) return r.test(t);
  }
}
function Qr(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function $r(e, t) {
  let n = q.toCamelCase(` ` + t);
  [`get`, `set`, `has`].forEach((r) => {
    Object.defineProperty(e, r + n, {
      __proto__: null,
      value: function (e, n, i) {
        return this[r].call(this, t, e, n, i);
      },
      configurable: !0,
    });
  });
}
var ei = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    let r = this;
    function i(e, t, n) {
      let i = qr(t);
      if (!i) return;
      let a = q.findKey(r, i);
      (!a || r[a] === void 0 || n === !0 || (n === void 0 && r[a] !== !1)) &&
        (r[a || t] = Jr(e));
    }
    let a = (e, t) => q.forEach(e, (e, n) => i(e, n, t));
    if (q.isPlainObject(e) || e instanceof this.constructor) a(e, t);
    else if (q.isString(e) && (e = e.trim()) && !Xr(e)) a(Rr(e), t);
    else if (q.isObject(e) && q.isSafeIterable(e)) {
      let n = Object.create(null),
        r,
        i;
      for (let t of e) {
        if (!q.isArray(t))
          throw TypeError(`Object iterator must return a key-value pair`);
        ((i = t[0]),
          q.hasOwnProp(n, i)
            ? ((r = n[i]), (n[i] = q.isArray(r) ? [...r, t[1]] : [r, t[1]]))
            : (n[i] = t[1]));
      }
      a(n, t);
    } else e != null && i(t, e, n);
    return this;
  }
  get(e, t) {
    if (((e = qr(e)), e)) {
      let n = q.findKey(this, e);
      if (n) {
        let e = this[n];
        if (!t) return e;
        if (t === !0) return Yr(e);
        if (q.isFunction(t)) return t.call(this, e, n);
        if (q.isRegExp(t)) return t.exec(e);
        throw TypeError(`parser must be boolean|regexp|function`);
      }
    }
  }
  has(e, t) {
    if (((e = qr(e)), e)) {
      let n = q.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || Zr(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    let n = this,
      r = !1;
    function i(e) {
      if (((e = qr(e)), e)) {
        let i = q.findKey(n, e);
        i && (!t || Zr(n, n[i], i, t)) && (delete n[i], (r = !0));
      }
    }
    return (q.isArray(e) ? e.forEach(i) : i(e), r);
  }
  clear(e) {
    let t = Object.keys(this),
      n = t.length,
      r = !1;
    for (; n--; ) {
      let i = t[n];
      (!e || Zr(this, this[i], i, e, !0)) && (delete this[i], (r = !0));
    }
    return r;
  }
  normalize(e) {
    let t = this,
      n = {};
    return (
      q.forEach(this, (r, i) => {
        let a = q.findKey(n, i);
        if (a) {
          ((t[a] = Jr(r)), delete t[i]);
          return;
        }
        let o = e ? Qr(i) : String(i).trim();
        (o !== i && delete t[i], (t[o] = Jr(r)), (n[o] = !0));
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    let t = Object.create(null);
    return (
      q.forEach(this, (n, r) => {
        n != null && n !== !1 && (t[r] = e && q.isArray(n) ? n.join(`, `) : n);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + `: ` + t).join(`
`);
  }
  getSetCookie() {
    return this.get(`set-cookie`) || [];
  }
  get [Symbol.toStringTag]() {
    return `AxiosHeaders`;
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    let n = new this(e);
    return (t.forEach((e) => n.set(e)), n);
  }
  static accessor(e) {
    let t = (this[Kr] = this[Kr] = { accessors: {} }).accessors,
      n = this.prototype;
    function r(e) {
      let r = qr(e);
      t[r] || ($r(n, e), (t[r] = !0));
    }
    return (q.isArray(e) ? e.forEach(r) : r(e), this);
  }
};
(ei.accessor([
  `Content-Type`,
  `Content-Length`,
  `Accept`,
  `Accept-Encoding`,
  `User-Agent`,
  `Authorization`,
]),
  q.reduceDescriptors(ei.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(e) {
        this[n] = e;
      },
    };
  }),
  q.freezeMethods(ei));
var ti = `[REDACTED ****]`;
function ni(e) {
  if (q.hasOwnProp(e, `toJSON`)) return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (q.hasOwnProp(t, `toJSON`)) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function ri(e, t) {
  let n = new Set(t.map((e) => String(e).toLowerCase())),
    r = [],
    i = (e) => {
      if (typeof e != `object` || !e || q.isBuffer(e)) return e;
      if (r.indexOf(e) !== -1) return;
      (e instanceof ei && (e = e.toJSON()), r.push(e));
      let t;
      if (q.isArray(e))
        ((t = []),
          e.forEach((e, n) => {
            let r = i(e);
            q.isUndefined(r) || (t[n] = r);
          }));
      else {
        if (!q.isPlainObject(e) && ni(e)) return (r.pop(), e);
        t = Object.create(null);
        for (let [r, a] of Object.entries(e)) {
          let e = n.has(r.toLowerCase()) ? ti : i(a);
          q.isUndefined(e) || (t[r] = e);
        }
      }
      return (r.pop(), t);
    };
  return i(e);
}
var J = class e extends Error {
  static from(t, n, r, i, a, o) {
    let s = new e(t.message, n || t.code, r, i, a);
    return (
      Object.defineProperty(s, "cause", {
        __proto__: null,
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      (s.name = t.name),
      t.status != null && s.status == null && (s.status = t.status),
      o && Object.assign(s, o),
      s
    );
  }
  constructor(e, t, n, r, i) {
    (super(e),
      Object.defineProperty(this, "message", {
        __proto__: null,
        value: e,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = `AxiosError`),
      (this.isAxiosError = !0),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && ((this.response = i), (this.status = i.status)));
  }
  toJSON() {
    let e = this.config,
      t = e && q.hasOwnProp(e, `redact`) ? e.redact : void 0,
      n = q.isArray(t) && t.length > 0 ? ri(e, t) : q.toJSONObject(e);
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: n,
      code: this.code,
      status: this.status,
    };
  }
};
((J.ERR_BAD_OPTION_VALUE = `ERR_BAD_OPTION_VALUE`),
  (J.ERR_BAD_OPTION = `ERR_BAD_OPTION`),
  (J.ECONNABORTED = `ECONNABORTED`),
  (J.ETIMEDOUT = `ETIMEDOUT`),
  (J.ECONNREFUSED = `ECONNREFUSED`),
  (J.ERR_NETWORK = `ERR_NETWORK`),
  (J.ERR_FR_TOO_MANY_REDIRECTS = `ERR_FR_TOO_MANY_REDIRECTS`),
  (J.ERR_DEPRECATED = `ERR_DEPRECATED`),
  (J.ERR_BAD_RESPONSE = `ERR_BAD_RESPONSE`),
  (J.ERR_BAD_REQUEST = `ERR_BAD_REQUEST`),
  (J.ERR_CANCELED = `ERR_CANCELED`),
  (J.ERR_NOT_SUPPORT = `ERR_NOT_SUPPORT`),
  (J.ERR_INVALID_URL = `ERR_INVALID_URL`),
  (J.ERR_FORM_DATA_DEPTH_EXCEEDED = `ERR_FORM_DATA_DEPTH_EXCEEDED`));
function ii(e) {
  return q.isPlainObject(e) || q.isArray(e);
}
function ai(e) {
  return q.endsWith(e, `[]`) ? e.slice(0, -2) : e;
}
function oi(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (e, t) {
          return ((e = ai(e)), !n && t ? `[` + e + `]` : e);
        })
        .join(n ? `.` : ``)
    : t;
}
function si(e) {
  return q.isArray(e) && !e.some(ii);
}
var ci = q.toFlatObject(q, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function li(e, t, n) {
  if (!q.isObject(e)) throw TypeError(`target must be an object`);
  ((t ||= new FormData()),
    (n = q.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (e, t) {
        return !q.isUndefined(t[e]);
      },
    )));
  let r = n.metaTokens,
    i = n.visitor || m,
    a = n.dots,
    o = n.indexes,
    s = n.Blob || (typeof Blob < `u` && Blob),
    c = n.maxDepth === void 0 ? 100 : n.maxDepth,
    l = s && q.isSpecCompliantForm(t),
    u = [];
  if (!q.isFunction(i)) throw TypeError(`visitor must be a function`);
  function d(e) {
    if (e === null) return ``;
    if (q.isDate(e)) return e.toISOString();
    if (q.isBoolean(e)) return e.toString();
    if (!l && q.isBlob(e))
      throw new J(`Blob is not supported. Use a Buffer instead.`);
    if (q.isArrayBuffer(e) || q.isTypedArray(e)) {
      if (l && typeof s == `function`) return new s([e]);
      if (typeof Buffer < `u`) return Buffer.from(e);
      throw new J(
        `Blob is not supported. Use a Buffer instead.`,
        J.ERR_NOT_SUPPORT,
      );
    }
    return e;
  }
  function f(e) {
    if (e > c)
      throw new J(
        `Object is too deeply nested (` + e + ` levels). Max depth: ` + c,
        J.ERR_FORM_DATA_DEPTH_EXCEEDED,
      );
  }
  function p(e, t) {
    if (c === 1 / 0) return JSON.stringify(e);
    let n = [];
    return JSON.stringify(e, function (e, r) {
      if (!q.isObject(r)) return r;
      for (; n.length && n[n.length - 1] !== this; ) n.pop();
      return (n.push(r), f(t + n.length - 1), r);
    });
  }
  function m(e, n, i) {
    let s = e;
    if (q.isReactNative(t) && q.isReactNativeBlob(e))
      return (t.append(oi(i, n, a), d(e)), !1);
    if (e && !i && typeof e == `object`) {
      if (q.endsWith(n, `{}`)) ((n = r ? n : n.slice(0, -2)), (e = p(e, 1)));
      else if (
        (q.isArray(e) && si(e)) ||
        ((q.isFileList(e) || q.endsWith(n, `[]`)) && (s = q.toArray(e)))
      )
        return (
          (n = ai(n)),
          s.forEach(function (e, r) {
            !(q.isUndefined(e) || e === null) &&
              t.append(
                o === !0 ? oi([n], r, a) : o === null ? n : n + `[]`,
                d(e),
              );
          }),
          !1
        );
    }
    return ii(e) ? !0 : (t.append(oi(i, n, a), d(e)), !1);
  }
  let h = Object.assign(ci, {
    defaultVisitor: m,
    convertValue: d,
    isVisitable: ii,
  });
  function g(e, n, r = 0) {
    if (!q.isUndefined(e)) {
      if ((f(r), u.indexOf(e) !== -1))
        throw Error(`Circular reference detected in ` + n.join(`.`));
      (u.push(e),
        q.forEach(e, function (e, a) {
          (!(q.isUndefined(e) || e === null) &&
            i.call(t, e, q.isString(a) ? a.trim() : a, n, h)) === !0 &&
            g(e, n ? n.concat(a) : [a], r + 1);
        }),
        u.pop());
    }
  }
  if (!q.isObject(e)) throw TypeError(`data must be an object`);
  return (g(e), t);
}
function ui(e) {
  let t = {
    "!": `%21`,
    "'": `%27`,
    "(": `%28`,
    ")": `%29`,
    "~": `%7E`,
    "%20": `+`,
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (e) {
    return t[e];
  });
}
function di(e, t) {
  ((this._pairs = []), e && li(e, this, t));
}
var fi = di.prototype;
((fi.append = function (e, t) {
  this._pairs.push([e, t]);
}),
  (fi.toString = function (e) {
    let t = e ? (t) => e.call(this, t, ui) : ui;
    return this._pairs
      .map(function (e) {
        return t(e[0]) + `=` + t(e[1]);
      }, ``)
      .join(`&`);
  }));
function pi(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, `:`)
    .replace(/%24/g, `$`)
    .replace(/%2C/gi, `,`)
    .replace(/%20/g, `+`);
}
function mi(e, t, n) {
  if (!t) return e;
  e ||= ``;
  let r = q.isFunction(n) ? { serialize: n } : n,
    i = q.getSafeProp(r, `encode`) || pi,
    a = q.getSafeProp(r, `serialize`),
    o;
  if (
    ((o = a
      ? a(t, r)
      : q.isURLSearchParams(t)
        ? t.toString()
        : new di(t, r).toString(i)),
    o)
  ) {
    let t = e.indexOf(`#`);
    (t !== -1 && (e = e.slice(0, t)),
      (e += (e.indexOf(`?`) === -1 ? `?` : `&`) + o));
  }
  return e;
}
var hi = class {
    constructor() {
      this.handlers = [];
    }
    use(e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(e) {
      this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
      this.handlers &&= [];
    }
    forEach(e) {
      q.forEach(this.handlers, function (t) {
        t !== null && e(t);
      });
    }
  },
  gi = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
    advertiseZstdAcceptEncoding: !1,
    validateStatusUndefinedResolves: !0,
  },
  _i = {
    isBrowser: !0,
    classes: {
      URLSearchParams: typeof URLSearchParams < `u` ? URLSearchParams : di,
      FormData: typeof FormData < `u` ? FormData : null,
      Blob: typeof Blob < `u` ? Blob : null,
    },
    protocols: [`http`, `https`, `file`, `blob`, `url`, `data`],
  },
  vi = s({
    hasBrowserEnv: () => yi,
    hasStandardBrowserEnv: () => xi,
    hasStandardBrowserWebWorkerEnv: () => Si,
    navigator: () => bi,
    origin: () => Ci,
  }),
  yi = typeof window < `u` && typeof document < `u`,
  bi = (typeof navigator == `object` && navigator) || void 0,
  xi =
    yi &&
    (!bi || [`ReactNative`, `NativeScript`, `NS`].indexOf(bi.product) < 0),
  Si =
    typeof WorkerGlobalScope < `u` &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == `function`,
  Ci = (yi && window.location.href) || `http://localhost`,
  wi = { ...vi, ..._i };
function Ti(e, t) {
  return li(e, new wi.classes.URLSearchParams(), {
    visitor: function (e, t, n, r) {
      return wi.isNode && q.isBuffer(e)
        ? (this.append(t, e.toString(`base64`)), !1)
        : r.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
var Ei = 100;
function Di(e) {
  if (e > Ei)
    throw new J(
      `FormData field is too deeply nested (` +
        e +
        ` levels). Max depth: ` +
        Ei,
      J.ERR_FORM_DATA_DEPTH_EXCEEDED,
    );
}
function Oi(e) {
  let t = [],
    n = /\w+|\[(\w*)]/g,
    r;
  for (; (r = n.exec(e)) !== null; )
    (Di(t.length), t.push(r[0] === `[]` ? `` : r[1] || r[0]));
  return t;
}
function ki(e) {
  let t = {},
    n = Object.keys(e),
    r,
    i = n.length,
    a;
  for (r = 0; r < i; r++) ((a = n[r]), (t[a] = e[a]));
  return t;
}
function Ai(e) {
  function t(e, n, r, i) {
    Di(i);
    let a = e[i++];
    if (a === `__proto__`) return !0;
    let o = Number.isFinite(+a),
      s = i >= e.length;
    return (
      (a = !a && q.isArray(r) ? r.length : a),
      s
        ? (q.hasOwnProp(r, a)
            ? (r[a] = q.isArray(r[a]) ? r[a].concat(n) : [r[a], n])
            : (r[a] = n),
          !o)
        : ((!q.hasOwnProp(r, a) || !q.isObject(r[a])) && (r[a] = []),
          t(e, n, r[a], i) && q.isArray(r[a]) && (r[a] = ki(r[a])),
          !o)
    );
  }
  if (q.isFormData(e) && q.isFunction(e.entries)) {
    let n = {};
    return (
      q.forEachEntry(e, (e, r) => {
        t(Oi(e), r, n, 0);
      }),
      n
    );
  }
  return null;
}
var ji = (e, t) => (e != null && q.hasOwnProp(e, t) ? e[t] : void 0);
function Mi(e, t, n) {
  if (q.isString(e))
    try {
      return ((t || JSON.parse)(e), q.trim(e));
    } catch (e) {
      if (e.name !== `SyntaxError`) throw e;
    }
  return (n || JSON.stringify)(e);
}
var Ni = {
  transitional: gi,
  adapter: [`xhr`, `http`, `fetch`],
  transformRequest: [
    function (e, t) {
      let n = t.getContentType() || ``,
        r = n.indexOf(`application/json`) > -1,
        i = q.isObject(e);
      if ((i && q.isHTMLForm(e) && (e = new FormData(e)), q.isFormData(e)))
        return r ? JSON.stringify(Ai(e)) : e;
      if (
        q.isArrayBuffer(e) ||
        q.isBuffer(e) ||
        q.isStream(e) ||
        q.isFile(e) ||
        q.isBlob(e) ||
        q.isReadableStream(e)
      )
        return e;
      if (q.isArrayBufferView(e)) return e.buffer;
      if (q.isURLSearchParams(e))
        return (
          t.setContentType(
            `application/x-www-form-urlencoded;charset=utf-8`,
            !1,
          ),
          e.toString()
        );
      let a;
      if (i) {
        let t = ji(this, `formSerializer`);
        if (n.indexOf(`application/x-www-form-urlencoded`) > -1)
          return Ti(e, t).toString();
        if ((a = q.isFileList(e)) || n.indexOf(`multipart/form-data`) > -1) {
          let n = ji(this, `env`),
            r = n && n.FormData;
          return li(a ? { "files[]": e } : e, r && new r(), t);
        }
      }
      return i || r ? (t.setContentType(`application/json`, !1), Mi(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      let t = ji(this, `transitional`) || Ni.transitional,
        n = t && t.forcedJSONParsing,
        r = ji(this, `responseType`),
        i = r === `json`;
      if (q.isResponse(e) || q.isReadableStream(e)) return e;
      if (e && q.isString(e) && ((n && !r) || i)) {
        let n = !(t && t.silentJSONParsing) && i;
        try {
          return JSON.parse(e, ji(this, `parseReviver`));
        } catch (e) {
          if (n)
            throw e.name === `SyntaxError`
              ? J.from(e, J.ERR_BAD_RESPONSE, this, null, ji(this, `response`))
              : e;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: `XSRF-TOKEN`,
  xsrfHeaderName: `X-XSRF-TOKEN`,
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: wi.classes.FormData, Blob: wi.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: `application/json, text/plain, */*`,
      "Content-Type": void 0,
    },
  },
};
q.forEach([`delete`, `get`, `head`, `post`, `put`, `patch`, `query`], (e) => {
  Ni.headers[e] = {};
});
function Pi(e, t) {
  let n = this || Ni,
    r = t || n,
    i = ei.from(r.headers),
    a = r.data;
  return (
    q.forEach(e, function (e) {
      a = e.call(n, a, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function Fi(e) {
  return !!(e && e.__CANCEL__);
}
var Ii = class extends J {
  constructor(e, t, n) {
    (super(e ?? `canceled`, J.ERR_CANCELED, t, n),
      (this.name = `CanceledError`),
      (this.__CANCEL__ = !0));
  }
};
function Li(e, t, n) {
  let r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new J(
          `Request failed with status code ` + n.status,
          n.status >= 400 && n.status < 500
            ? J.ERR_BAD_REQUEST
            : J.ERR_BAD_RESPONSE,
          n.config,
          n.request,
          n,
        ),
      );
}
function Ri(e) {
  let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return (t && t[1]) || ``;
}
function zi(e, t) {
  e ||= 10;
  let n = Array(e),
    r = Array(e),
    i = 0,
    a = 0,
    o;
  return (
    (t = t === void 0 ? 1e3 : t),
    function (s) {
      let c = Date.now(),
        l = r[a];
      ((o ||= c), (n[i] = s), (r[i] = c));
      let u = a,
        d = 0;
      for (; u !== i; ) ((d += n[u++]), (u %= e));
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), c - o < t)) return;
      let f = l && c - l;
      return f ? Math.round((d * 1e3) / f) : void 0;
    }
  );
}
function Bi(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    a,
    o = (t, r = Date.now()) => {
      ((n = r), (i = null), (a &&= (clearTimeout(a), null)), e(...t));
    };
  return [
    (...e) => {
      let t = Date.now(),
        s = t - n;
      s >= r
        ? o(e, t)
        : ((i = e),
          (a ||= setTimeout(() => {
            ((a = null), o(i));
          }, r - s)));
    },
    () => i && o(i),
  ];
}
var Vi = (e, t, n = 3) => {
    let r = 0,
      i = zi(50, 250);
    return Bi((n) => {
      if (!n || typeof n.loaded != `number`) return;
      let a = n.loaded,
        o = n.lengthComputable ? n.total : void 0,
        s = o == null ? a : Math.min(a, o),
        c = Math.max(0, s - r),
        l = i(c);
      ((r = Math.max(r, s)),
        e({
          loaded: s,
          total: o,
          progress: o ? s / o : void 0,
          bytes: c,
          rate: l || void 0,
          estimated: l && o ? (o - s) / l : void 0,
          event: n,
          lengthComputable: o != null,
          [t ? `download` : `upload`]: !0,
        }));
    }, n);
  },
  Hi = (e, t) => {
    let n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Ui =
    (e) =>
    (...t) =>
      q.asap(() => e(...t)),
  Wi = wi.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, wi.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(wi.origin),
        wi.navigator && /(msie|trident)/i.test(wi.navigator.userAgent),
      )
    : () => !0,
  Gi = wi.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, a, o) {
          if (typeof document > `u`) return;
          let s = [`${e}=${encodeURIComponent(t)}`];
          (q.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`),
            q.isString(r) && s.push(`path=${r}`),
            q.isString(i) && s.push(`domain=${i}`),
            a === !0 && s.push(`secure`),
            q.isString(o) && s.push(`SameSite=${o}`),
            (document.cookie = s.join(`; `)));
        },
        read(e) {
          if (typeof document > `u`) return null;
          let t = document.cookie.split(`;`);
          for (let n = 0; n < t.length; n++) {
            let r = t[n].replace(/^\s+/, ``),
              i = r.indexOf(`=`);
            if (i !== -1 && r.slice(0, i) === e)
              try {
                return decodeURIComponent(r.slice(i + 1));
              } catch {
                return r.slice(i + 1);
              }
          }
          return null;
        },
        remove(e) {
          this.write(e, ``, Date.now() - 864e5, `/`);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Ki(e) {
  return typeof e == `string` ? /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) : !1;
}
function qi(e, t) {
  return t ? e.replace(/\/?\/$/, ``) + `/` + t.replace(/^\/+/, ``) : e;
}
var Ji = /^https?:(?!\/\/)/i,
  Yi = /[\t\n\r]/g;
function Xi(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; ) t++;
  return e.slice(t);
}
function Zi(e) {
  return Xi(e).replace(Yi, ``);
}
function Qi(e, t) {
  if (typeof e == `string` && Ji.test(Zi(e)))
    throw new J(
      `Invalid URL: missing "//" after protocol`,
      J.ERR_INVALID_URL,
      t,
    );
}
function $i(e, t, n, r) {
  Qi(t, r);
  let i = !Ki(t);
  return e && (i || n === !1) ? (Qi(e, r), qi(e, t)) : t;
}
var ea = (e) => (e instanceof ei ? { ...e } : e);
function ta(e, t) {
  ((e ||= {}), (t ||= {}));
  let n = Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0,
  });
  function r(e, t, n, r) {
    return q.isPlainObject(e) && q.isPlainObject(t)
      ? q.merge.call({ caseless: r }, e, t)
      : q.isPlainObject(t)
        ? q.merge({}, t)
        : q.isArray(t)
          ? t.slice()
          : t;
  }
  function i(e, t, n, i) {
    if (!q.isUndefined(t)) return r(e, t, n, i);
    if (!q.isUndefined(e)) return r(void 0, e, n, i);
  }
  function a(e, t) {
    if (!q.isUndefined(t)) return r(void 0, t);
  }
  function o(e, t) {
    if (!q.isUndefined(t)) return r(void 0, t);
    if (!q.isUndefined(e)) return r(void 0, e);
  }
  function s(n) {
    let r = q.hasOwnProp(t, `transitional`) ? t.transitional : void 0;
    if (!q.isUndefined(r))
      if (q.isPlainObject(r)) {
        if (q.hasOwnProp(r, n)) return r[n];
      } else return;
    let i = q.hasOwnProp(e, `transitional`) ? e.transitional : void 0;
    if (q.isPlainObject(i) && q.hasOwnProp(i, n)) return i[n];
  }
  function c(n, i, a) {
    if (q.hasOwnProp(t, a)) return r(n, i);
    if (q.hasOwnProp(e, a)) return r(void 0, n);
  }
  let l = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    allowedSocketPaths: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (e, t, n) => i(ea(e), ea(t), n, !0),
  };
  return (
    q.forEach(Object.keys({ ...e, ...t }), function (r) {
      if (r === `__proto__` || r === `constructor` || r === `prototype`) return;
      let a = q.hasOwnProp(l, r) ? l[r] : i,
        o = a(
          q.hasOwnProp(e, r) ? e[r] : void 0,
          q.hasOwnProp(t, r) ? t[r] : void 0,
          r,
        );
      (q.isUndefined(o) && a !== c) || (n[r] = o);
    }),
    q.hasOwnProp(t, `validateStatus`) &&
      q.isUndefined(t.validateStatus) &&
      s(`validateStatusUndefinedResolves`) === !1 &&
      (q.hasOwnProp(e, `validateStatus`)
        ? (n.validateStatus = r(void 0, e.validateStatus))
        : delete n.validateStatus),
    n
  );
}
var na = [`content-type`, `content-length`];
function ra(e, t, n) {
  if (n !== `content-only`) {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([t, n]) => {
    na.includes(t.toLowerCase()) && e.set(t, n);
  });
}
var ia = (e) =>
  encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) =>
    String.fromCharCode(parseInt(t, 16)),
  );
function aa(e) {
  let t = ta({}, e),
    n = (e) => (q.hasOwnProp(t, e) ? t[e] : void 0),
    r = n(`data`),
    i = n(`withXSRFToken`),
    a = n(`xsrfHeaderName`),
    o = n(`xsrfCookieName`),
    s = n(`headers`),
    c = n(`auth`),
    l = n(`baseURL`),
    u = n(`allowAbsoluteUrls`),
    d = n(`url`);
  if (
    ((t.headers = s = ei.from(s)),
    (t.url = mi($i(l, d, u, t), n(`params`), n(`paramsSerializer`))),
    c)
  ) {
    let t = q.getSafeProp(c, `username`) || ``,
      n = q.getSafeProp(c, `password`) || ``;
    try {
      s.set(`Authorization`, `Basic ` + btoa(t + `:` + (n ? ia(n) : ``)));
    } catch (t) {
      throw J.from(t, J.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (
    (q.isFormData(r) &&
      (wi.hasStandardBrowserEnv ||
      wi.hasStandardBrowserWebWorkerEnv ||
      q.isReactNative(r)
        ? s.setContentType(void 0)
        : q.isFunction(r.getHeaders) &&
          ra(s, r.getHeaders(), n(`formDataHeaderPolicy`))),
    wi.hasStandardBrowserEnv &&
      (q.isFunction(i) && (i = i(t)), i === !0 || (i == null && Wi(t.url))))
  ) {
    let e = a && o && Gi.read(o);
    e && s.set(a, e);
  }
  return t;
}
var oa =
    typeof XMLHttpRequest < `u` &&
    function (e) {
      return new Promise(function (t, n) {
        let r = aa(e),
          i = r.data,
          a = ei.from(r.headers).normalize(),
          { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r,
          l,
          u,
          d,
          f,
          p;
        function m() {
          (f && f(),
            p && p(),
            r.cancelToken && r.cancelToken.unsubscribe(l),
            r.signal && r.signal.removeEventListener(`abort`, l));
        }
        let h = new XMLHttpRequest();
        (h.open(r.method.toUpperCase(), r.url, !0), (h.timeout = r.timeout));
        function g() {
          if (!h) return;
          let r = ei.from(
            `getAllResponseHeaders` in h && h.getAllResponseHeaders(),
          );
          (Li(
            function (e) {
              (t(e), m());
            },
            function (e) {
              (n(e), m());
            },
            {
              data:
                !o || o === `text` || o === `json`
                  ? h.responseText
                  : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: r,
              config: e,
              request: h,
            },
          ),
            (h = null));
        }
        (`onloadend` in h
          ? (h.onloadend = g)
          : (h.onreadystatechange = function () {
              !h ||
                h.readyState !== 4 ||
                (h.status === 0 &&
                  !(h.responseURL && h.responseURL.startsWith(`file:`))) ||
                setTimeout(g);
            }),
          (h.onabort = function () {
            h &&=
              (n(new J(`Request aborted`, J.ECONNABORTED, e, h)), m(), null);
          }),
          (h.onerror = function (t) {
            let r = new J(
              t && t.message ? t.message : `Network Error`,
              J.ERR_NETWORK,
              e,
              h,
            );
            ((r.event = t || null), n(r), m(), (h = null));
          }),
          (h.ontimeout = function () {
            let t = r.timeout
                ? `timeout of ` + r.timeout + `ms exceeded`
                : `timeout exceeded`,
              i = r.transitional || gi;
            (r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
              n(
                new J(
                  t,
                  i.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
                  e,
                  h,
                ),
              ),
              m(),
              (h = null));
          }),
          i === void 0 && a.setContentType(null),
          `setRequestHeader` in h &&
            q.forEach(Gr(a), function (e, t) {
              h.setRequestHeader(t, e);
            }),
          q.isUndefined(r.withCredentials) ||
            (h.withCredentials = !!r.withCredentials),
          o && o !== `json` && (h.responseType = r.responseType),
          c && (([d, p] = Vi(c, !0)), h.addEventListener(`progress`, d)),
          s &&
            h.upload &&
            (([u, f] = Vi(s)),
            h.upload.addEventListener(`progress`, u),
            h.upload.addEventListener(`loadend`, f)),
          (r.cancelToken || r.signal) &&
            ((l = (t) => {
              h &&=
                (n(!t || t.type ? new Ii(null, e, h) : t),
                h.abort(),
                m(),
                null);
            }),
            r.cancelToken && r.cancelToken.subscribe(l),
            r.signal &&
              (r.signal.aborted
                ? l()
                : r.signal.addEventListener(`abort`, l))));
        let _ = Ri(r.url);
        if (_ && !wi.protocols.includes(_)) {
          (n(new J(`Unsupported protocol ` + _ + `:`, J.ERR_BAD_REQUEST, e)),
            m());
          return;
        }
        h.send(i || null);
      });
    },
  sa = (e, t) => {
    if (((e = e ? e.filter(Boolean) : []), !t && !e.length)) return;
    let n = new AbortController(),
      r = !1,
      i = function (e) {
        if (!r) {
          ((r = !0), o());
          let t = e instanceof Error ? e : this.reason;
          n.abort(
            t instanceof J ? t : new Ii(t instanceof Error ? t.message : t),
          );
        }
      },
      a =
        t &&
        setTimeout(() => {
          ((a = null), i(new J(`timeout of ${t}ms exceeded`, J.ETIMEDOUT)));
        }, t),
      o = () => {
        e &&=
          (a && clearTimeout(a),
          (a = null),
          e.forEach((e) => {
            e.unsubscribe
              ? e.unsubscribe(i)
              : e.removeEventListener(`abort`, i);
          }),
          null);
      };
    e.forEach((e) => e.addEventListener(`abort`, i, { once: !0 }));
    let { signal: s } = n;
    return ((s.unsubscribe = () => q.asap(o)), s);
  },
  ca = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) ((i = r + t), yield e.slice(r, i), (r = i));
  },
  la = async function* (e, t) {
    for await (let n of ua(e)) yield* ca(n, t);
  },
  ua = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    let t = e.getReader();
    try {
      for (;;) {
        let { done: e, value: n } = await t.read();
        if (e) break;
        yield n;
      }
    } finally {
      await t.cancel();
    }
  },
  da = (e, t, n, r) => {
    let i = la(e, t),
      a = 0,
      o,
      s = (e) => {
        o || ((o = !0), r && r(e));
      };
    return new ReadableStream(
      {
        async pull(e) {
          try {
            let { done: t, value: r } = await i.next();
            if (t) {
              (s(), e.close());
              return;
            }
            let o = r.byteLength;
            (n && n((a += o)), e.enqueue(new Uint8Array(r)));
          } catch (e) {
            throw (s(e), e);
          }
        },
        cancel(e) {
          return (s(e), i.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  fa = (e) =>
    (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102),
  pa = (e, t, n) =>
    t + 2 < n && fa(e.charCodeAt(t + 1)) && fa(e.charCodeAt(t + 2));
function ma(e) {
  if (!e || typeof e != `string` || !e.startsWith(`data:`)) return 0;
  let t = e.indexOf(`,`);
  if (t < 0) return 0;
  let n = e.slice(5, t),
    r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let e = r.length,
      t = r.length;
    for (let n = 0; n < t; n++)
      if (r.charCodeAt(n) === 37 && n + 2 < t) {
        let t = r.charCodeAt(n + 1),
          i = r.charCodeAt(n + 2);
        fa(t) && fa(i) && ((e -= 2), (n += 2));
      }
    let n = 0,
      i = t - 1,
      a = (e) =>
        e >= 2 &&
        r.charCodeAt(e - 2) === 37 &&
        r.charCodeAt(e - 1) === 51 &&
        (r.charCodeAt(e) === 68 || r.charCodeAt(e) === 100);
    (i >= 0 && (r.charCodeAt(i) === 61 ? (n++, i--) : a(i) && (n++, (i -= 3))),
      n === 1 && i >= 0 && (r.charCodeAt(i) === 61 || a(i)) && n++);
    let o = Math.floor(e / 4) * 3 - (n || 0);
    return o > 0 ? o : 0;
  }
  let i = 0;
  for (let e = 0, t = r.length; e < t; e++) {
    let n = r.charCodeAt(e);
    if (n === 37 && pa(r, e, t)) ((i += 1), (e += 2));
    else if (n < 128) i += 1;
    else if (n < 2048) i += 2;
    else if (n >= 55296 && n <= 56319 && e + 1 < t) {
      let t = r.charCodeAt(e + 1);
      t >= 56320 && t <= 57343 ? ((i += 4), e++) : (i += 3);
    } else i += 3;
  }
  return i;
}
var ha = `1.18.1`,
  ga = 64 * 1024,
  { isFunction: _a } = q,
  va = (e) =>
    encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) =>
      String.fromCharCode(parseInt(t, 16)),
    ),
  ya = (e) => {
    if (!q.isString(e)) return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  },
  ba = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  xa = (e) => {
    let t = e.indexOf(`://`),
      n = e;
    return (
      t !== -1 && (n = n.slice(t + 3)),
      n.includes(`@`) || n.includes(`:`)
    );
  },
  Sa = (e) => {
    let t = q.global !== void 0 && q.global !== null ? q.global : globalThis,
      { ReadableStream: n, TextEncoder: r } = t;
    e = q.merge.call(
      { skipUndefined: !0 },
      { Request: t.Request, Response: t.Response },
      e,
    );
    let { fetch: i, Request: a, Response: o } = e,
      s = i ? _a(i) : typeof fetch == `function`,
      c = _a(a),
      l = _a(o);
    if (!s) return !1;
    let u = s && _a(n),
      d =
        s &&
        (typeof r == `function`
          ? (
              (e) => (t) =>
                e.encode(t)
            )(new r())
          : async (e) => new Uint8Array(await new a(e).arrayBuffer())),
      f =
        c &&
        u &&
        ba(() => {
          let e = !1,
            t = new a(wi.origin, {
              body: new n(),
              method: `POST`,
              get duplex() {
                return ((e = !0), `half`);
              },
            }),
            r = t.headers.has(`Content-Type`);
          return (t.body != null && t.body.cancel(), e && !r);
        }),
      p = l && u && ba(() => q.isReadableStream(new o(``).body)),
      m = { stream: p && ((e) => e.body) };
    s &&
      [`text`, `arrayBuffer`, `blob`, `formData`, `stream`].forEach((e) => {
        !m[e] &&
          (m[e] = (t, n) => {
            let r = t && t[e];
            if (r) return r.call(t);
            throw new J(
              `Response type '${e}' is not supported`,
              J.ERR_NOT_SUPPORT,
              n,
            );
          });
      });
    let h = async (e) => {
        if (e == null) return 0;
        if (q.isBlob(e)) return e.size;
        if (q.isSpecCompliantForm(e))
          return (
            await new a(wi.origin, { method: `POST`, body: e }).arrayBuffer()
          ).byteLength;
        if (q.isArrayBufferView(e) || q.isArrayBuffer(e)) return e.byteLength;
        if ((q.isURLSearchParams(e) && (e += ``), q.isString(e)))
          return (await d(e)).byteLength;
      },
      g = async (e, t) => q.toFiniteNumber(e.getContentLength()) ?? h(t);
    return async (e) => {
      let {
          url: t,
          method: n,
          data: s,
          signal: l,
          cancelToken: d,
          timeout: _,
          onDownloadProgress: v,
          onUploadProgress: y,
          responseType: b,
          headers: x,
          withCredentials: S = `same-origin`,
          fetchOptions: C,
          maxContentLength: ee,
          maxBodyLength: w,
        } = aa(e),
        T = q.isNumber(ee) && ee > -1,
        E = q.isNumber(w) && w > -1,
        te = (t) => (q.hasOwnProp(e, t) ? e[t] : void 0),
        D = i || fetch;
      b = b ? (b + ``).toLowerCase() : `text`;
      let ne = sa([l, d && d.toAbortSignal()], _),
        O = null,
        k =
          ne &&
          ne.unsubscribe &&
          (() => {
            ne.unsubscribe();
          }),
        re,
        ie = null,
        A = () =>
          new J(
            `Request body larger than maxBodyLength limit`,
            J.ERR_BAD_REQUEST,
            e,
            O,
          );
      try {
        let i,
          l = te(`auth`);
        if (
          (l &&
            (i = {
              username: q.getSafeProp(l, `username`) || ``,
              password: q.getSafeProp(l, `password`) || ``,
            }),
          xa(t))
        ) {
          let e = new URL(t, wi.origin);
          (!i &&
            (e.username || e.password) &&
            (i = { username: ya(e.username), password: ya(e.password) }),
            (e.username || e.password) &&
              ((e.username = ``), (e.password = ``), (t = e.href)));
        }
        if (
          (i &&
            (x.delete(`authorization`),
            x.set(
              `Authorization`,
              `Basic ` +
                btoa(va((i.username || ``) + `:` + (i.password || ``))),
            )),
          T && typeof t == `string` && t.startsWith(`data:`) && ma(t) > ee)
        )
          throw new J(
            `maxContentLength size of ` + ee + ` exceeded`,
            J.ERR_BAD_RESPONSE,
            e,
            O,
          );
        if (E && n !== `get` && n !== `head`) {
          let e = await h(s);
          if (typeof e == `number` && isFinite(e) && ((re = e), e > w))
            throw A();
        }
        let d = E && (q.isReadableStream(s) || q.isStream(s)),
          _ = (e, t, n) =>
            da(
              e,
              ga,
              (e) => {
                if (E && e > w) throw (ie = A());
                t && t(e);
              },
              n,
            );
        if (f && n !== `get` && n !== `head` && (y || d)) {
          if (((re ??= await g(x, s)), re !== 0 || d)) {
            let e = new a(t, { method: `POST`, body: s, duplex: `half` }),
              n;
            if (
              (q.isFormData(s) &&
                (n = e.headers.get(`content-type`)) &&
                x.setContentType(n),
              e.body)
            ) {
              let [t, n] = (y && Hi(re, Vi(Ui(y)))) || [];
              s = _(e.body, t, n);
            }
          }
        } else if (d && !c && u && n !== `get` && n !== `head`) s = _(s);
        else if (d && c && !f && n !== `get` && n !== `head`)
          throw new J(
            `Stream request bodies are not supported by the current fetch implementation`,
            J.ERR_NOT_SUPPORT,
            e,
            O,
          );
        q.isString(S) || (S = S ? `include` : `omit`);
        let ae = c && `credentials` in a.prototype;
        if (q.isFormData(s)) {
          let e = x.getContentType();
          e &&
            /^multipart\/form-data/i.test(e) &&
            !/boundary=/i.test(e) &&
            x.delete(`content-type`);
        }
        x.set(`User-Agent`, `axios/` + ha, !1);
        let oe = {
          ...C,
          signal: ne,
          method: n.toUpperCase(),
          headers: Gr(x.normalize()),
          body: s,
          duplex: `half`,
          credentials: ae ? S : void 0,
        };
        O = c && new a(t, oe);
        let j = await (c ? D(O, C) : D(t, oe)),
          se = ei.from(j.headers);
        if (T) {
          let t = q.toFiniteNumber(se.getContentLength());
          if (t != null && t > ee)
            throw new J(
              `maxContentLength size of ` + ee + ` exceeded`,
              J.ERR_BAD_RESPONSE,
              e,
              O,
            );
        }
        let ce = p && (b === `stream` || b === `response`);
        if (p && j.body && (v || T || (ce && k))) {
          let t = {};
          [`status`, `statusText`, `headers`].forEach((e) => {
            t[e] = j[e];
          });
          let n = q.toFiniteNumber(se.getContentLength()),
            [r, i] = (v && Hi(n, Vi(Ui(v), !0))) || [],
            a = 0;
          j = new o(
            da(
              j.body,
              ga,
              (t) => {
                if (T && ((a = t), a > ee))
                  throw new J(
                    `maxContentLength size of ` + ee + ` exceeded`,
                    J.ERR_BAD_RESPONSE,
                    e,
                    O,
                  );
                r && r(t);
              },
              () => {
                (i && i(), k && k());
              },
            ),
            t,
          );
        }
        b ||= `text`;
        let le = await m[q.findKey(m, b) || `text`](j, e);
        if (T && !p && !ce) {
          let t;
          if (
            (le != null &&
              (typeof le.byteLength == `number`
                ? (t = le.byteLength)
                : typeof le.size == `number`
                  ? (t = le.size)
                  : typeof le == `string` &&
                    (t =
                      typeof r == `function`
                        ? new r().encode(le).byteLength
                        : le.length)),
            typeof t == `number` && t > ee)
          )
            throw new J(
              `maxContentLength size of ` + ee + ` exceeded`,
              J.ERR_BAD_RESPONSE,
              e,
              O,
            );
        }
        return (
          !ce && k && k(),
          await new Promise((t, n) => {
            Li(t, n, {
              data: le,
              headers: ei.from(j.headers),
              status: j.status,
              statusText: j.statusText,
              config: e,
              request: O,
            });
          })
        );
      } catch (t) {
        if ((k && k(), ne && ne.aborted && ne.reason instanceof J)) {
          let n = ne.reason;
          throw (
            (n.config = e),
            O && (n.request = O),
            t !== n &&
              Object.defineProperty(n, "cause", {
                __proto__: null,
                value: t,
                writable: !0,
                enumerable: !1,
                configurable: !0,
              }),
            n
          );
        }
        if (ie) throw (O && !ie.request && (ie.request = O), ie);
        if (t instanceof J) throw (O && !t.request && (t.request = O), t);
        if (
          t &&
          t.name === `TypeError` &&
          /Load failed|fetch/i.test(t.message)
        ) {
          let n = new J(`Network Error`, J.ERR_NETWORK, e, O, t && t.response);
          throw (
            Object.defineProperty(n, "cause", {
              __proto__: null,
              value: t.cause || t,
              writable: !0,
              enumerable: !1,
              configurable: !0,
            }),
            n
          );
        }
        throw J.from(t, t && t.code, e, O, t && t.response);
      }
    };
  },
  Ca = new Map(),
  wa = (e) => {
    let t = (e && e.env) || {},
      { fetch: n, Request: r, Response: i } = t,
      a = [r, i, n],
      o = a.length,
      s,
      c,
      l = Ca;
    for (; o--; )
      ((s = a[o]),
        (c = l.get(s)),
        c === void 0 && l.set(s, (c = o ? new Map() : Sa(t))),
        (l = c));
    return c;
  };
wa();
var Ta = { http: null, xhr: oa, fetch: { get: wa } };
q.forEach(Ta, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
var Ea = (e) => `- ${e}`,
  Da = (e) => q.isFunction(e) || e === null || e === !1;
function Oa(e, t) {
  e = q.isArray(e) ? e : [e];
  let { length: n } = e,
    r,
    i,
    a = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let n;
    if (
      ((i = r),
      !Da(r) && ((i = Ta[(n = String(r)).toLowerCase()]), i === void 0))
    )
      throw new J(`Unknown adapter '${n}'`);
    if (i && (q.isFunction(i) || (i = i.get(t)))) break;
    a[n || `#` + o] = i;
  }
  if (!i) {
    let e = Object.entries(a).map(
      ([e, t]) =>
        `adapter ${e} ` +
        (t === !1
          ? `is not supported by the environment`
          : `is not available in the build`),
    );
    throw new J(
      `There is no suitable adapter to dispatch the request ` +
        (n
          ? e.length > 1
            ? `since :
` +
              e.map(Ea).join(`
`)
            : ` ` + Ea(e[0])
          : `as no adapter specified`),
      J.ERR_NOT_SUPPORT,
    );
  }
  return i;
}
var ka = { getAdapter: Oa, adapters: Ta };
function Aa(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ii(null, e);
}
function ja(e) {
  return (
    Aa(e),
    (e.headers = ei.from(e.headers)),
    (e.data = Pi.call(e, e.transformRequest)),
    [`post`, `put`, `patch`].indexOf(e.method) !== -1 &&
      e.headers.setContentType(`application/x-www-form-urlencoded`, !1),
    ka
      .getAdapter(
        e.adapter || Ni.adapter,
        e,
      )(e)
      .then(
        function (t) {
          (Aa(e), (e.response = t));
          try {
            t.data = Pi.call(e, e.transformResponse, t);
          } finally {
            delete e.response;
          }
          return ((t.headers = ei.from(t.headers)), t);
        },
        function (t) {
          if (!Fi(t) && (Aa(e), t && t.response)) {
            e.response = t.response;
            try {
              t.response.data = Pi.call(e, e.transformResponse, t.response);
            } finally {
              delete e.response;
            }
            t.response.headers = ei.from(t.response.headers);
          }
          return Promise.reject(t);
        },
      )
  );
}
var Ma = {};
[`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach(
  (e, t) => {
    Ma[e] = function (n) {
      return typeof n === e || `a` + (t < 1 ? `n ` : ` `) + e;
    };
  },
);
var Na = {};
((Ma.transitional = function (e, t, n) {
  function r(e, t) {
    return (
      `[Axios v` +
      ha +
      `] Transitional option '` +
      e +
      `'` +
      t +
      (n ? `. ` + n : ``)
    );
  }
  return (n, i, a) => {
    if (e === !1)
      throw new J(
        r(i, ` has been removed` + (t ? ` in ` + t : ``)),
        J.ERR_DEPRECATED,
      );
    return (
      t &&
        !Na[i] &&
        ((Na[i] = !0),
        console.warn(
          r(
            i,
            ` has been deprecated since v` +
              t +
              ` and will be removed in the near future`,
          ),
        )),
      e ? e(n, i, a) : !0
    );
  };
}),
  (Ma.spelling = function (e) {
    return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
  }));
function Pa(e, t, n) {
  if (typeof e != `object` || !e)
    throw new J(`options must be an object`, J.ERR_BAD_OPTION_VALUE);
  let r = Object.keys(e),
    i = r.length;
  for (; i-- > 0; ) {
    let a = r[i],
      o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (o) {
      let t = e[a],
        n = t === void 0 || o(t, a, e);
      if (n !== !0)
        throw new J(`option ` + a + ` must be ` + n, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new J(`Unknown option ` + a, J.ERR_BAD_OPTION);
  }
}
var Fa = { assertOptions: Pa, validators: Ma },
  Ia = Fa.validators,
  La = class {
    constructor(e) {
      ((this.defaults = e || {}),
        (this.interceptors = { request: new hi(), response: new hi() }));
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (e) {
        if (e instanceof Error) {
          let t = {};
          Error.captureStackTrace ? Error.captureStackTrace(t) : (t = Error());
          let n = (() => {
            if (!t.stack) return ``;
            let e = t.stack.indexOf(`
`);
            return e === -1 ? `` : t.stack.slice(e + 1);
          })();
          try {
            if (!e.stack) e.stack = n;
            else if (n) {
              let t = n.indexOf(`
`),
                r =
                  t === -1
                    ? -1
                    : n.indexOf(
                        `
`,
                        t + 1,
                      ),
                i = r === -1 ? `` : n.slice(r + 1);
              String(e.stack).endsWith(i) ||
                (e.stack +=
                  `
` + n);
            }
          } catch {}
        }
        throw e;
      }
    }
    _request(e, t) {
      (typeof e == `string` ? ((t ||= {}), (t.url = e)) : (t = e || {}),
        (t = ta(this.defaults, t)));
      let { transitional: n, paramsSerializer: r, headers: i } = t;
      (n !== void 0 &&
        Fa.assertOptions(
          n,
          {
            silentJSONParsing: Ia.transitional(Ia.boolean),
            forcedJSONParsing: Ia.transitional(Ia.boolean),
            clarifyTimeoutError: Ia.transitional(Ia.boolean),
            legacyInterceptorReqResOrdering: Ia.transitional(Ia.boolean),
            advertiseZstdAcceptEncoding: Ia.transitional(Ia.boolean),
            validateStatusUndefinedResolves: Ia.transitional(Ia.boolean),
          },
          !1,
        ),
        r != null &&
          (q.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : Fa.assertOptions(
                r,
                { encode: Ia.function, serialize: Ia.function },
                !0,
              )),
        t.allowAbsoluteUrls !== void 0 ||
          (this.defaults.allowAbsoluteUrls === void 0
            ? (t.allowAbsoluteUrls = !0)
            : (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)),
        Fa.assertOptions(
          t,
          {
            baseUrl: Ia.spelling(`baseURL`),
            withXsrfToken: Ia.spelling(`withXSRFToken`),
          },
          !0,
        ),
        (t.method = (t.method || this.defaults.method || `get`).toLowerCase()));
      let a = i && q.merge(i.common, i[t.method]);
      (i &&
        q.forEach(
          [`delete`, `get`, `head`, `post`, `put`, `patch`, `query`, `common`],
          (e) => {
            delete i[e];
          },
        ),
        (t.headers = ei.concat(a, i)));
      let o = [],
        s = !0;
      this.interceptors.request.forEach(function (e) {
        if (typeof e.runWhen == `function` && e.runWhen(t) === !1) return;
        s &&= e.synchronous;
        let n = t.transitional || gi;
        n && n.legacyInterceptorReqResOrdering
          ? o.unshift(e.fulfilled, e.rejected)
          : o.push(e.fulfilled, e.rejected);
      });
      let c = [];
      this.interceptors.response.forEach(function (e) {
        c.push(e.fulfilled, e.rejected);
      });
      let l,
        u = 0,
        d;
      if (!s) {
        let e = [ja.bind(this), void 0];
        for (
          e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t);
          u < d;
        )
          l = l.then(e[u++], e[u++]);
        return l;
      }
      d = o.length;
      let f = t;
      for (; u < d; ) {
        let e = o[u++],
          t = o[u++];
        try {
          f = e(f);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        l = ja.call(this, f);
      } catch (e) {
        return Promise.reject(e);
      }
      for (u = 0, d = c.length; u < d; ) l = l.then(c[u++], c[u++]);
      return l;
    }
    getUri(e) {
      return (
        (e = ta(this.defaults, e)),
        mi(
          $i(e.baseURL, e.url, e.allowAbsoluteUrls, e),
          e.params,
          e.paramsSerializer,
        )
      );
    }
  };
(q.forEach([`delete`, `get`, `head`, `options`], function (e) {
  La.prototype[e] = function (t, n) {
    return this.request(
      ta(n || {}, {
        method: e,
        url: t,
        data: n && q.hasOwnProp(n, `data`) ? n.data : void 0,
      }),
    );
  };
}),
  q.forEach([`post`, `put`, `patch`, `query`], function (e) {
    function t(t) {
      return function (n, r, i) {
        return this.request(
          ta(i || {}, {
            method: e,
            headers: t ? { "Content-Type": `multipart/form-data` } : {},
            url: n,
            data: r,
          }),
        );
      };
    }
    ((La.prototype[e] = t()),
      e !== `query` && (La.prototype[e + `Form`] = t(!0)));
  }));
var Ra = class e {
  constructor(e) {
    if (typeof e != `function`) throw TypeError(`executor must be a function.`);
    let t;
    this.promise = new Promise(function (e) {
      t = e;
    });
    let n = this;
    (this.promise.then((e) => {
      if (!n._listeners) return;
      let t = n._listeners.length;
      for (; t-- > 0; ) n._listeners[t](e);
      n._listeners = null;
    }),
      (this.promise.then = (e) => {
        let t,
          r = new Promise((e) => {
            (n.subscribe(e), (t = e));
          }).then(e);
        return (
          (r.cancel = function () {
            n.unsubscribe(t);
          }),
          r
        );
      }),
      e(function (e, r, i) {
        n.reason || ((n.reason = new Ii(e, r, i)), t(n.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    let t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    let e = new AbortController(),
      t = (t) => {
        e.abort(t);
      };
    return (
      this.subscribe(t),
      (e.signal.unsubscribe = () => this.unsubscribe(t)),
      e.signal
    );
  }
  static source() {
    let t;
    return {
      token: new e(function (e) {
        t = e;
      }),
      cancel: t,
    };
  }
};
function za(e) {
  return function (t) {
    return e.apply(null, t);
  };
}
function Ba(e) {
  return q.isObject(e) && e.isAxiosError === !0;
}
var Va = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(Va).forEach(([e, t]) => {
  Va[t] = e;
});
function Ha(e) {
  let t = new La(e),
    n = xn(La.prototype.request, t);
  return (
    q.extend(n, La.prototype, t, { allOwnKeys: !0 }),
    q.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (t) {
      return Ha(ta(e, t));
    }),
    n
  );
}
var Ua = Ha(Ni);
((Ua.Axios = La),
  (Ua.CanceledError = Ii),
  (Ua.CancelToken = Ra),
  (Ua.isCancel = Fi),
  (Ua.VERSION = ha),
  (Ua.toFormData = li),
  (Ua.AxiosError = J),
  (Ua.Cancel = Ua.CanceledError),
  (Ua.all = function (e) {
    return Promise.all(e);
  }),
  (Ua.spread = za),
  (Ua.isAxiosError = Ba),
  (Ua.mergeConfig = ta),
  (Ua.AxiosHeaders = ei),
  (Ua.formToJSON = (e) => Ai(q.isHTMLForm(e) ? new FormData(e) : e)),
  (Ua.getAdapter = ka.getAdapter),
  (Ua.HttpStatusCode = Va),
  (Ua.default = Ua));
function Wa(e) {
  if (Array.isArray(e)) return e;
}
function Ga(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Ka(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qa(e, t) {
  if (e) {
    if (typeof e == `string`) return Ka(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Ka(e, t)
          : void 0
    );
  }
}
function Ja() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ya(e, t) {
  return Wa(e) || Ga(e, t) || qa(e, t) || Ja();
}
function Xa(e) {
  "@babel/helpers - typeof";
  return (
    (Xa =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Xa(e)
  );
}
function Za() {
  var e = [...arguments];
  if (e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var r = e[n];
      if (r) {
        var i = Xa(r);
        if (i === `string` || i === `number`) t.push(r);
        else if (i === `object`) {
          var a = Array.isArray(r)
            ? r
            : Object.entries(r).map(function (e) {
                var t = Ya(e, 2),
                  n = t[0];
                return t[1] ? n : null;
              });
          t = a.length
            ? t.concat(
                a.filter(function (e) {
                  return !!e;
                }),
              )
            : t;
        }
      }
    }
    return t.join(` `).trim();
  }
}
function Qa(e) {
  if (Array.isArray(e)) return Ka(e);
}
function $a(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function eo() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function to(e) {
  return Qa(e) || $a(e) || qa(e) || eo();
}
function no(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function ro(e, t) {
  if (Xa(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Xa(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function io(e) {
  var t = ro(e, `string`);
  return Xa(t) == `symbol` ? t : t + ``;
}
function ao(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, io(r.key), r));
  }
}
function oo(e, t, n) {
  return (
    t && ao(e.prototype, t),
    n && ao(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function so(e, t, n) {
  return (
    (t = io(t)) in e
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
function co(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (
      Array.isArray(e) ||
      (n = lo(e)) ||
      (t && e && typeof e.length == `number`)
    ) {
      n && (e = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (e) {
          throw e;
        },
        f: i,
      };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a,
    o = !0,
    s = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return ((o = e.done), e);
    },
    e: function (e) {
      ((s = !0), (a = e));
    },
    f: function () {
      try {
        o || n.return == null || n.return();
      } finally {
        if (s) throw a;
      }
    },
  };
}
function lo(e, t) {
  if (e) {
    if (typeof e == `string`) return uo(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? uo(e, t)
          : void 0
    );
  }
}
function uo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Y = (function () {
  function e() {
    no(this, e);
  }
  return oo(e, null, [
    {
      key: `innerWidth`,
      value: function (e) {
        if (e) {
          var t = e.offsetWidth,
            n = getComputedStyle(e);
          return (
            (t += parseFloat(n.paddingLeft) + parseFloat(n.paddingRight)),
            t
          );
        }
        return 0;
      },
    },
    {
      key: `width`,
      value: function (e) {
        if (e) {
          var t = e.offsetWidth,
            n = getComputedStyle(e);
          return (
            (t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight)),
            t
          );
        }
        return 0;
      },
    },
    {
      key: `getBrowserLanguage`,
      value: function () {
        return (
          navigator.userLanguage ||
          (navigator.languages &&
            navigator.languages.length &&
            navigator.languages[0]) ||
          navigator.language ||
          navigator.browserLanguage ||
          navigator.systemLanguage ||
          `en`
        );
      },
    },
    {
      key: `getWindowScrollTop`,
      value: function () {
        var e = document.documentElement;
        return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
      },
    },
    {
      key: `getWindowScrollLeft`,
      value: function () {
        var e = document.documentElement;
        return (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0);
      },
    },
    {
      key: `getOuterWidth`,
      value: function (e, t) {
        if (e) {
          var n = e.getBoundingClientRect().width || e.offsetWidth;
          if (t) {
            var r = getComputedStyle(e);
            n += parseFloat(r.marginLeft) + parseFloat(r.marginRight);
          }
          return n;
        }
        return 0;
      },
    },
    {
      key: `getOuterHeight`,
      value: function (e, t) {
        if (e) {
          var n = e.getBoundingClientRect().height || e.offsetHeight;
          if (t) {
            var r = getComputedStyle(e);
            n += parseFloat(r.marginTop) + parseFloat(r.marginBottom);
          }
          return n;
        }
        return 0;
      },
    },
    {
      key: `getClientHeight`,
      value: function (e, t) {
        if (e) {
          var n = e.clientHeight;
          if (t) {
            var r = getComputedStyle(e);
            n += parseFloat(r.marginTop) + parseFloat(r.marginBottom);
          }
          return n;
        }
        return 0;
      },
    },
    {
      key: `getClientWidth`,
      value: function (e, t) {
        if (e) {
          var n = e.clientWidth;
          if (t) {
            var r = getComputedStyle(e);
            n += parseFloat(r.marginLeft) + parseFloat(r.marginRight);
          }
          return n;
        }
        return 0;
      },
    },
    {
      key: `getViewport`,
      value: function () {
        var e = window,
          t = document,
          n = t.documentElement,
          r = t.getElementsByTagName(`body`)[0];
        return {
          width: e.innerWidth || n.clientWidth || r.clientWidth,
          height: e.innerHeight || n.clientHeight || r.clientHeight,
        };
      },
    },
    {
      key: `getOffset`,
      value: function (e) {
        if (e) {
          var t = e.getBoundingClientRect();
          return {
            top:
              t.top +
              (window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0),
            left:
              t.left +
              (window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0),
          };
        }
        return { top: `auto`, left: `auto` };
      },
    },
    {
      key: `index`,
      value: function (e) {
        if (e)
          for (
            var t = e.parentNode.childNodes, n = 0, r = 0;
            r < t.length;
            r++
          ) {
            if (t[r] === e) return n;
            t[r].nodeType === 1 && n++;
          }
        return -1;
      },
    },
    {
      key: `addMultipleClasses`,
      value: function (e, t) {
        if (e && t)
          if (e.classList)
            for (var n = t.split(` `), r = 0; r < n.length; r++)
              e.classList.add(n[r]);
          else
            for (var i = t.split(` `), a = 0; a < i.length; a++)
              e.className += ` ` + i[a];
      },
    },
    {
      key: `removeMultipleClasses`,
      value: function (e, t) {
        if (e && t)
          if (e.classList)
            for (var n = t.split(` `), r = 0; r < n.length; r++)
              e.classList.remove(n[r]);
          else
            for (var i = t.split(` `), a = 0; a < i.length; a++)
              e.className = e.className.replace(
                RegExp(`(^|\\b)` + i[a].split(` `).join(`|`) + `(\\b|$)`, `gi`),
                ` `,
              );
      },
    },
    {
      key: `addClass`,
      value: function (e, t) {
        e && t && (e.classList ? e.classList.add(t) : (e.className += ` ` + t));
      },
    },
    {
      key: `removeClass`,
      value: function (e, t) {
        e &&
          t &&
          (e.classList
            ? e.classList.remove(t)
            : (e.className = e.className.replace(
                RegExp(`(^|\\b)` + t.split(` `).join(`|`) + `(\\b|$)`, `gi`),
                ` `,
              )));
      },
    },
    {
      key: `hasClass`,
      value: function (e, t) {
        return e
          ? e.classList
            ? e.classList.contains(t)
            : RegExp(`(^| )` + t + `( |$)`, `gi`).test(e.className)
          : !1;
      },
    },
    {
      key: `addStyles`,
      value: function (e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        e &&
          Object.entries(t).forEach(function (t) {
            var n = Ya(t, 2),
              r = n[0],
              i = n[1];
            return (e.style[r] = i);
          });
      },
    },
    {
      key: `find`,
      value: function (e, t) {
        return e ? Array.from(e.querySelectorAll(t)) : [];
      },
    },
    {
      key: `findSingle`,
      value: function (e, t) {
        return e ? e.querySelector(t) : null;
      },
    },
    {
      key: `setAttributes`,
      value: function (e) {
        var t = this,
          n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (e) {
          var r = function (t, n) {
            var i,
              a,
              o =
                e != null && (i = e.$attrs) != null && i[t]
                  ? [e == null || (a = e.$attrs) == null ? void 0 : a[t]]
                  : [];
            return [n].flat().reduce(function (e, n) {
              if (n != null) {
                var i = Xa(n);
                if (i === `string` || i === `number`) e.push(n);
                else if (i === `object`) {
                  var a = Array.isArray(n)
                    ? r(t, n)
                    : Object.entries(n).map(function (e) {
                        var n = Ya(e, 2),
                          r = n[0],
                          i = n[1];
                        return t === `style` && (i || i === 0)
                          ? `${r.replace(/([a-z])([A-Z])/g, `$1-$2`).toLowerCase()}:${i}`
                          : i
                            ? r
                            : void 0;
                      });
                  e = a.length
                    ? e.concat(
                        a.filter(function (e) {
                          return !!e;
                        }),
                      )
                    : e;
                }
              }
              return e;
            }, o);
          };
          Object.entries(n).forEach(function (n) {
            var i = Ya(n, 2),
              a = i[0],
              o = i[1];
            if (o != null) {
              var s = a.match(/^on(.+)/);
              s
                ? e.addEventListener(s[1].toLowerCase(), o)
                : a === `p-bind`
                  ? t.setAttributes(e, o)
                  : ((o =
                      a === `class`
                        ? to(new Set(r(`class`, o)))
                            .join(` `)
                            .trim()
                        : a === `style`
                          ? r(`style`, o).join(`;`).trim()
                          : o),
                    (e.$attrs = e.$attrs || {}) && (e.$attrs[a] = o),
                    e.setAttribute(a, o));
            }
          });
        }
      },
    },
    {
      key: `getAttribute`,
      value: function (e, t) {
        if (e) {
          var n = e.getAttribute(t);
          return isNaN(n)
            ? n === `true` || n === `false`
              ? n === `true`
              : n
            : +n;
        }
      },
    },
    {
      key: `isAttributeEquals`,
      value: function (e, t, n) {
        return e ? this.getAttribute(e, t) === n : !1;
      },
    },
    {
      key: `isAttributeNotEquals`,
      value: function (e, t, n) {
        return !this.isAttributeEquals(e, t, n);
      },
    },
    {
      key: `getHeight`,
      value: function (e) {
        if (e) {
          var t = e.offsetHeight,
            n = getComputedStyle(e);
          return (
            (t -=
              parseFloat(n.paddingTop) +
              parseFloat(n.paddingBottom) +
              parseFloat(n.borderTopWidth) +
              parseFloat(n.borderBottomWidth)),
            t
          );
        }
        return 0;
      },
    },
    {
      key: `getWidth`,
      value: function (e) {
        if (e) {
          var t = e.offsetWidth,
            n = getComputedStyle(e);
          return (
            (t -=
              parseFloat(n.paddingLeft) +
              parseFloat(n.paddingRight) +
              parseFloat(n.borderLeftWidth) +
              parseFloat(n.borderRightWidth)),
            t
          );
        }
        return 0;
      },
    },
    {
      key: `alignOverlay`,
      value: function (t, n, r) {
        var i =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
        t &&
          n &&
          (r === `self`
            ? this.relativePosition(t, n)
            : (i && (t.style.minWidth = e.getOuterWidth(n) + `px`),
              this.absolutePosition(t, n)));
      },
    },
    {
      key: `absolutePosition`,
      value: function (e, t) {
        var n =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : `left`;
        if (e && t) {
          var r = e.offsetParent
              ? { width: e.offsetWidth, height: e.offsetHeight }
              : this.getHiddenElementDimensions(e),
            i = r.height,
            a = r.width,
            o = t.offsetHeight,
            s = t.offsetWidth,
            c = t.getBoundingClientRect(),
            l = this.getWindowScrollTop(),
            u = this.getWindowScrollLeft(),
            d = this.getViewport(),
            f,
            p;
          c.top + o + i > d.height
            ? ((f = c.top + l - i),
              f < 0 && (f = l),
              (e.style.transformOrigin = `bottom`))
            : ((f = o + c.top + l), (e.style.transformOrigin = `top`));
          var m = c.left;
          ((p =
            n === `left`
              ? m + a > d.width
                ? Math.max(0, m + u + s - a)
                : m + u
              : m + s - a < 0
                ? u
                : m + s - a + u),
            (e.style.top = f + `px`),
            (e.style.left = p + `px`));
        }
      },
    },
    {
      key: `relativePosition`,
      value: function (e, t) {
        if (e && t) {
          var n = e.offsetParent
              ? { width: e.offsetWidth, height: e.offsetHeight }
              : this.getHiddenElementDimensions(e),
            r = t.offsetHeight,
            i = t.getBoundingClientRect(),
            a = this.getViewport(),
            o,
            s;
          (i.top + r + n.height > a.height
            ? ((o = -1 * n.height),
              i.top + o < 0 && (o = -1 * i.top),
              (e.style.transformOrigin = `bottom`))
            : ((o = r), (e.style.transformOrigin = `top`)),
            (s =
              n.width > a.width
                ? i.left * -1
                : i.left + n.width > a.width
                  ? (i.left + n.width - a.width) * -1
                  : 0),
            (e.style.top = o + `px`),
            (e.style.left = s + `px`));
        }
      },
    },
    {
      key: `flipfitCollision`,
      value: function (t, n) {
        var r = this,
          i =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : `left top`,
          a =
            arguments.length > 3 && arguments[3] !== void 0
              ? arguments[3]
              : `left bottom`,
          o = arguments.length > 4 ? arguments[4] : void 0;
        if (t && n) {
          var s = n.getBoundingClientRect(),
            c = this.getViewport(),
            l = i.split(` `),
            u = a.split(` `),
            d = function (e, t) {
              return t
                ? +e.substring(e.search(/(\+|-)/g)) || 0
                : e.substring(0, e.search(/(\+|-)/g)) || e;
            },
            f = {
              my: {
                x: d(l[0]),
                y: d(l[1] || l[0]),
                offsetX: d(l[0], !0),
                offsetY: d(l[1] || l[0], !0),
              },
              at: {
                x: d(u[0]),
                y: d(u[1] || u[0]),
                offsetX: d(u[0], !0),
                offsetY: d(u[1] || u[0], !0),
              },
            },
            p = {
              left: function () {
                return (
                  f.my.offsetX +
                  f.at.offsetX +
                  s.left +
                  (f.my.x === `left`
                    ? 0
                    : -1 *
                      (f.my.x === `center`
                        ? r.getOuterWidth(t) / 2
                        : r.getOuterWidth(t)))
                );
              },
              top: function () {
                return (
                  f.my.offsetY +
                  f.at.offsetY +
                  s.top +
                  (f.my.y === `top`
                    ? 0
                    : -1 *
                      (f.my.y === `center`
                        ? r.getOuterHeight(t) / 2
                        : r.getOuterHeight(t)))
                );
              },
            },
            m = {
              count: { x: 0, y: 0 },
              left: function () {
                var n = p.left(),
                  r = e.getWindowScrollLeft();
                ((t.style.left = n + r + `px`),
                  this.count.x === 2
                    ? ((t.style.left = r + `px`), (this.count.x = 0))
                    : n < 0 &&
                      (this.count.x++,
                      (f.my.x = `left`),
                      (f.at.x = `right`),
                      (f.my.offsetX *= -1),
                      (f.at.offsetX *= -1),
                      this.right()));
              },
              right: function () {
                var r = p.left() + e.getOuterWidth(n),
                  i = e.getWindowScrollLeft();
                ((t.style.left = r + i + `px`),
                  this.count.x === 2
                    ? ((t.style.left = c.width - e.getOuterWidth(t) + i + `px`),
                      (this.count.x = 0))
                    : r + e.getOuterWidth(t) > c.width &&
                      (this.count.x++,
                      (f.my.x = `right`),
                      (f.at.x = `left`),
                      (f.my.offsetX *= -1),
                      (f.at.offsetX *= -1),
                      this.left()));
              },
              top: function () {
                var n = p.top(),
                  r = e.getWindowScrollTop();
                ((t.style.top = n + r + `px`),
                  this.count.y === 2
                    ? ((t.style.left = r + `px`), (this.count.y = 0))
                    : n < 0 &&
                      (this.count.y++,
                      (f.my.y = `top`),
                      (f.at.y = `bottom`),
                      (f.my.offsetY *= -1),
                      (f.at.offsetY *= -1),
                      this.bottom()));
              },
              bottom: function () {
                var r = p.top() + e.getOuterHeight(n),
                  i = e.getWindowScrollTop();
                ((t.style.top = r + i + `px`),
                  this.count.y === 2
                    ? ((t.style.left =
                        c.height - e.getOuterHeight(t) + i + `px`),
                      (this.count.y = 0))
                    : r + e.getOuterHeight(n) > c.height &&
                      (this.count.y++,
                      (f.my.y = `bottom`),
                      (f.at.y = `top`),
                      (f.my.offsetY *= -1),
                      (f.at.offsetY *= -1),
                      this.top()));
              },
              center: function (r) {
                if (r === `y`) {
                  var i = p.top() + e.getOuterHeight(n) / 2;
                  ((t.style.top = i + e.getWindowScrollTop() + `px`),
                    i < 0
                      ? this.bottom()
                      : i + e.getOuterHeight(n) > c.height && this.top());
                } else {
                  var a = p.left() + e.getOuterWidth(n) / 2;
                  ((t.style.left = a + e.getWindowScrollLeft() + `px`),
                    a < 0
                      ? this.left()
                      : a + e.getOuterWidth(t) > c.width && this.right());
                }
              },
            };
          (m[f.at.x](`x`), m[f.at.y](`y`), this.isFunction(o) && o(f));
        }
      },
    },
    {
      key: `findCollisionPosition`,
      value: function (e) {
        if (e)
          return e === `top` || e === `bottom`
            ? {
                axis: `y`,
                my: `center ${e === `top` ? `bottom` : `top`}`,
                at: `center ${e}`,
              }
            : {
                axis: `x`,
                my: `${e === `left` ? `right` : `left`} center`,
                at: `${e} center`,
              };
      },
    },
    {
      key: `getParents`,
      value: function (e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return e.parentNode === null
          ? t
          : this.getParents(e.parentNode, t.concat([e.parentNode]));
      },
    },
    {
      key: `getScrollableParents`,
      value: function (e) {
        var t = this,
          n = [];
        if (e) {
          var r = this.getParents(e),
            i = /(auto|scroll)/,
            a = function (e) {
              var t = e ? getComputedStyle(e) : null;
              return (
                t &&
                (i.test(t.getPropertyValue(`overflow`)) ||
                  i.test(t.getPropertyValue(`overflow-x`)) ||
                  i.test(t.getPropertyValue(`overflow-y`)))
              );
            },
            o = function (e) {
              n.push(
                e.nodeName === `BODY` ||
                  e.nodeName === `HTML` ||
                  t.isDocument(e)
                  ? window
                  : e,
              );
            },
            s = co(r),
            c;
          try {
            for (s.s(); !(c = s.n()).done; ) {
              var l = c.value,
                u = l.nodeType === 1 && l.dataset?.scrollselectors;
              if (u) {
                var d = co(u.split(`,`)),
                  f;
                try {
                  for (d.s(); !(f = d.n()).done; ) {
                    var p = f.value,
                      m = this.findSingle(l, p);
                    m && a(m) && o(m);
                  }
                } catch (e) {
                  d.e(e);
                } finally {
                  d.f();
                }
              }
              l.nodeType === 1 && a(l) && o(l);
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
        }
        return n;
      },
    },
    {
      key: `getHiddenElementOuterHeight`,
      value: function (e) {
        if (e) {
          ((e.style.visibility = `hidden`), (e.style.display = `block`));
          var t = e.offsetHeight;
          return (
            (e.style.display = `none`),
            (e.style.visibility = `visible`),
            t
          );
        }
        return 0;
      },
    },
    {
      key: `getHiddenElementOuterWidth`,
      value: function (e) {
        if (e) {
          ((e.style.visibility = `hidden`), (e.style.display = `block`));
          var t = e.offsetWidth;
          return (
            (e.style.display = `none`),
            (e.style.visibility = `visible`),
            t
          );
        }
        return 0;
      },
    },
    {
      key: `getHiddenElementDimensions`,
      value: function (e) {
        var t = {};
        return (
          e &&
            ((e.style.visibility = `hidden`),
            (e.style.display = `block`),
            (t.width = e.offsetWidth),
            (t.height = e.offsetHeight),
            (e.style.display = `none`),
            (e.style.visibility = `visible`)),
          t
        );
      },
    },
    {
      key: `fadeIn`,
      value: function (e, t) {
        if (e) {
          e.style.opacity = 0;
          var n = +new Date(),
            r = 0,
            i = function () {
              ((r = +e.style.opacity + (new Date().getTime() - n) / t),
                (e.style.opacity = r),
                (n = +new Date()),
                +r < 1 &&
                  ((window.requestAnimationFrame && requestAnimationFrame(i)) ||
                    setTimeout(i, 16)));
            };
          i();
        }
      },
    },
    {
      key: `fadeOut`,
      value: function (e, t) {
        if (e)
          var n = 1,
            r = 50,
            i = r / t,
            a = setInterval(function () {
              ((n -= i),
                n <= 0 && ((n = 0), clearInterval(a)),
                (e.style.opacity = n));
            }, r);
      },
    },
    {
      key: `getUserAgent`,
      value: function () {
        return navigator.userAgent;
      },
    },
    {
      key: `isIOS`,
      value: function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      },
    },
    {
      key: `isAndroid`,
      value: function () {
        return /(android)/i.test(navigator.userAgent);
      },
    },
    {
      key: `isChrome`,
      value: function () {
        return /(chrome)/i.test(navigator.userAgent);
      },
    },
    {
      key: `isClient`,
      value: function () {
        return !!(
          typeof window < `u` &&
          window.document &&
          window.document.createElement
        );
      },
    },
    {
      key: `isTouchDevice`,
      value: function () {
        return (
          `ontouchstart` in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
        );
      },
    },
    {
      key: `isFunction`,
      value: function (e) {
        return !!(e && e.constructor && e.call && e.apply);
      },
    },
    {
      key: `appendChild`,
      value: function (e, t) {
        if (this.isElement(t)) t.appendChild(e);
        else if (t.el && t.el.nativeElement) t.el.nativeElement.appendChild(e);
        else throw Error(`Cannot append ` + t + ` to ` + e);
      },
    },
    {
      key: `removeChild`,
      value: function (e, t) {
        if (this.isElement(t)) t.removeChild(e);
        else if (t.el && t.el.nativeElement) t.el.nativeElement.removeChild(e);
        else throw Error(`Cannot remove ` + e + ` from ` + t);
      },
    },
    {
      key: `isElement`,
      value: function (e) {
        return (typeof HTMLElement > `u` ? `undefined` : Xa(HTMLElement)) ===
          `object`
          ? e instanceof HTMLElement
          : e &&
              Xa(e) === `object` &&
              e !== null &&
              e.nodeType === 1 &&
              typeof e.nodeName == `string`;
      },
    },
    {
      key: `isDocument`,
      value: function (e) {
        return (typeof Document > `u` ? `undefined` : Xa(Document)) === `object`
          ? e instanceof Document
          : e && Xa(e) === `object` && e !== null && e.nodeType === 9;
      },
    },
    {
      key: `scrollInView`,
      value: function (e, t) {
        var n = getComputedStyle(e).getPropertyValue(`border-top-width`),
          r = n ? parseFloat(n) : 0,
          i = getComputedStyle(e).getPropertyValue(`padding-top`),
          a = i ? parseFloat(i) : 0,
          o = e.getBoundingClientRect(),
          s =
            t.getBoundingClientRect().top +
            document.body.scrollTop -
            (o.top + document.body.scrollTop) -
            r -
            a,
          c = e.scrollTop,
          l = e.clientHeight,
          u = this.getOuterHeight(t);
        s < 0
          ? (e.scrollTop = c + s)
          : s + u > l && (e.scrollTop = c + s - l + u);
      },
    },
    {
      key: `clearSelection`,
      value: function () {
        if (window.getSelection)
          window.getSelection().empty
            ? window.getSelection().empty()
            : window.getSelection().removeAllRanges &&
              window.getSelection().rangeCount > 0 &&
              window.getSelection().getRangeAt(0).getClientRects().length > 0 &&
              window.getSelection().removeAllRanges();
        else if (document.selection && document.selection.empty)
          try {
            document.selection.empty();
          } catch {}
      },
    },
    {
      key: `calculateScrollbarWidth`,
      value: function (e) {
        if (e) {
          var t = getComputedStyle(e);
          return (
            e.offsetWidth -
            e.clientWidth -
            parseFloat(t.borderLeftWidth) -
            parseFloat(t.borderRightWidth)
          );
        }
        if (this.calculatedScrollbarWidth != null)
          return this.calculatedScrollbarWidth;
        var n = document.createElement(`div`);
        ((n.className = `p-scrollbar-measure`), document.body.appendChild(n));
        var r = n.offsetWidth - n.clientWidth;
        return (
          document.body.removeChild(n),
          (this.calculatedScrollbarWidth = r),
          r
        );
      },
    },
    {
      key: `calculateBodyScrollbarWidth`,
      value: function () {
        return window.innerWidth - document.documentElement.offsetWidth;
      },
    },
    {
      key: `getBrowser`,
      value: function () {
        if (!this.browser) {
          var e = this.resolveUserAgent();
          ((this.browser = {}),
            e.browser &&
              ((this.browser[e.browser] = !0),
              (this.browser.version = e.version)),
            this.browser.chrome
              ? (this.browser.webkit = !0)
              : this.browser.webkit && (this.browser.safari = !0));
        }
        return this.browser;
      },
    },
    {
      key: `resolveUserAgent`,
      value: function () {
        var e = navigator.userAgent.toLowerCase(),
          t =
            /(chrome)[ ]([\w.]+)/.exec(e) ||
            /(webkit)[ ]([\w.]+)/.exec(e) ||
            /(opera)(?:.*version|)[ ]([\w.]+)/.exec(e) ||
            /(msie) ([\w.]+)/.exec(e) ||
            (e.indexOf(`compatible`) < 0 &&
              /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
            [];
        return { browser: t[1] || ``, version: t[2] || `0` };
      },
    },
    {
      key: `blockBodyScroll`,
      value: function () {
        var e =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : `p-overflow-hidden`;
        (!document.body.style.getPropertyValue(`--scrollbar-width`) &&
          document.body.style.setProperty(
            `--scrollbar-width`,
            this.calculateBodyScrollbarWidth() + `px`,
          ),
          this.addClass(document.body, e));
      },
    },
    {
      key: `unblockBodyScroll`,
      value: function () {
        var e =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : `p-overflow-hidden`;
        (document.body.style.removeProperty(`--scrollbar-width`),
          this.removeClass(document.body, e));
      },
    },
    {
      key: `isVisible`,
      value: function (e) {
        return (
          e &&
          (e.clientHeight !== 0 ||
            e.getClientRects().length !== 0 ||
            getComputedStyle(e).display !== `none`)
        );
      },
    },
    {
      key: `isExist`,
      value: function (e) {
        return !!(e != null && e.nodeName && e.parentNode);
      },
    },
    {
      key: `getFocusableElements`,
      value: function (t) {
        var n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ``,
          r = e.find(
            t,
            `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`,
          ),
          i = [],
          a = co(r),
          o;
        try {
          for (a.s(); !(o = a.n()).done; ) {
            var s = o.value;
            getComputedStyle(s).display !== `none` &&
              getComputedStyle(s).visibility !== `hidden` &&
              i.push(s);
          }
        } catch (e) {
          a.e(e);
        } finally {
          a.f();
        }
        return i;
      },
    },
    {
      key: `getFirstFocusableElement`,
      value: function (t, n) {
        var r = e.getFocusableElements(t, n);
        return r.length > 0 ? r[0] : null;
      },
    },
    {
      key: `getLastFocusableElement`,
      value: function (t, n) {
        var r = e.getFocusableElements(t, n);
        return r.length > 0 ? r[r.length - 1] : null;
      },
    },
    {
      key: `focus`,
      value: function (e, t) {
        var n = t === void 0 ? !0 : !t;
        e && document.activeElement !== e && e.focus({ preventScroll: n });
      },
    },
    {
      key: `focusFirstElement`,
      value: function (t, n) {
        if (t) {
          var r = e.getFirstFocusableElement(t);
          return (r && e.focus(r, n), r);
        }
      },
    },
    {
      key: `getCursorOffset`,
      value: function (e, t, n, r) {
        if (e) {
          var i = getComputedStyle(e),
            a = document.createElement(`div`);
          ((a.style.position = `absolute`),
            (a.style.top = `0px`),
            (a.style.left = `0px`),
            (a.style.visibility = `hidden`),
            (a.style.pointerEvents = `none`),
            (a.style.overflow = i.overflow),
            (a.style.width = i.width),
            (a.style.height = i.height),
            (a.style.padding = i.padding),
            (a.style.border = i.border),
            (a.style.overflowWrap = i.overflowWrap),
            (a.style.whiteSpace = i.whiteSpace),
            (a.style.lineHeight = i.lineHeight),
            (a.innerHTML = t.replace(/\r\n|\r|\n/g, `<br />`)));
          var o = document.createElement(`span`);
          ((o.textContent = r), a.appendChild(o));
          var s = document.createTextNode(n);
          (a.appendChild(s), document.body.appendChild(a));
          var c = o.offsetLeft,
            l = o.offsetTop,
            u = o.clientHeight;
          return (
            document.body.removeChild(a),
            {
              left: Math.abs(c - e.scrollLeft),
              top: Math.abs(l - e.scrollTop) + u,
            }
          );
        }
        return { top: `auto`, left: `auto` };
      },
    },
    {
      key: `invokeElementMethod`,
      value: function (e, t, n) {
        e[t].apply(e, n);
      },
    },
    {
      key: `isClickable`,
      value: function (e) {
        var t = e.nodeName,
          n = e.parentElement && e.parentElement.nodeName;
        return (
          t === `INPUT` ||
          t === `TEXTAREA` ||
          t === `BUTTON` ||
          t === `A` ||
          n === `INPUT` ||
          n === `TEXTAREA` ||
          n === `BUTTON` ||
          n === `A` ||
          this.hasClass(e, `p-button`) ||
          this.hasClass(e.parentElement, `p-button`) ||
          this.hasClass(e.parentElement, `p-checkbox`) ||
          this.hasClass(e.parentElement, `p-radiobutton`)
        );
      },
    },
    {
      key: `applyStyle`,
      value: function (e, t) {
        if (typeof t == `string`) e.style.cssText = t;
        else for (var n in t) e.style[n] = t[n];
      },
    },
    {
      key: `exportCSV`,
      value: function (t, n) {
        var r = new Blob([t], { type: `application/csv;charset=utf-8;` });
        window.navigator.msSaveOrOpenBlob
          ? navigator.msSaveOrOpenBlob(r, n + `.csv`)
          : e.saveAs({ name: n + `.csv`, src: URL.createObjectURL(r) }) ||
            ((t = `data:text/csv;charset=utf-8,` + t),
            window.open(encodeURI(t)));
      },
    },
    {
      key: `saveAs`,
      value: function (e) {
        if (e) {
          var t = document.createElement(`a`);
          if (t.download !== void 0) {
            var n = e.name,
              r = e.src;
            return (
              t.setAttribute(`href`, r),
              t.setAttribute(`download`, n),
              (t.style.display = `none`),
              document.body.appendChild(t),
              t.click(),
              document.body.removeChild(t),
              !0
            );
          }
        }
        return !1;
      },
    },
    {
      key: `createInlineStyle`,
      value: function (t, n) {
        var r = document.createElement(`style`);
        return (e.addNonce(r, t), (n ||= document.head), n.appendChild(r), r);
      },
    },
    {
      key: `removeInlineStyle`,
      value: function (e) {
        if (this.isExist(e)) {
          try {
            e.parentNode.removeChild(e);
          } catch {}
          e = null;
        }
        return e;
      },
    },
    {
      key: `addNonce`,
      value: function (e, t) {
        try {
          t ||= {}.REACT_APP_CSS_NONCE;
        } catch {}
        t && e.setAttribute(`nonce`, t);
      },
    },
    {
      key: `getTargetElement`,
      value: function (e) {
        if (!e) return null;
        if (e === `document`) return document;
        if (e === `window`) return window;
        if (Xa(e) === `object` && e.hasOwnProperty(`current`))
          return this.isExist(e.current) ? e.current : null;
        var t = (function (e) {
          return !!(e && e.constructor && e.call && e.apply);
        })(e)
          ? e()
          : e;
        return this.isDocument(t) || this.isExist(t) ? t : null;
      },
    },
    {
      key: `getAttributeNames`,
      value: function (e) {
        var t,
          n = [],
          r = e.attributes;
        for (t = 0; t < r.length; ++t) n.push(r[t].nodeName);
        return (n.sort(), n);
      },
    },
    {
      key: `isEqualElement`,
      value: function (t, n) {
        var r = e.getAttributeNames(t),
          i = e.getAttributeNames(n),
          a,
          o,
          s;
        if (r.join(`,`) !== i.join(`,`)) return !1;
        for (var c = 0; c < r.length; ++c)
          if (((a = r[c]), a === `style`))
            for (
              var l = t.style,
                u = n.style,
                d = /^\d+$/,
                f = 0,
                p = Object.keys(l);
              f < p.length;
              f++
            ) {
              var m = p[f];
              if (!d.test(m) && l[m] !== u[m]) return !1;
            }
          else if (t.getAttribute(a) !== n.getAttribute(a)) return !1;
        for (
          o = t.firstChild, s = n.firstChild;
          o && s;
          o = o.nextSibling, s = s.nextSibling
        ) {
          if (o.nodeType !== s.nodeType) return !1;
          if (o.nodeType === 1) {
            if (!e.isEqualElement(o, s)) return !1;
          } else if (o.nodeValue !== s.nodeValue) return !1;
        }
        return !(o || s);
      },
    },
    {
      key: `hasCSSAnimation`,
      value: function (e) {
        if (e) {
          var t = getComputedStyle(e);
          return (
            parseFloat(t.getPropertyValue(`animation-duration`) || `0`) > 0
          );
        }
        return !1;
      },
    },
    {
      key: `hasCSSTransition`,
      value: function (e) {
        if (e) {
          var t = getComputedStyle(e);
          return (
            parseFloat(t.getPropertyValue(`transition-duration`) || `0`) > 0
          );
        }
        return !1;
      },
    },
  ]);
})();
(so(Y, `DATA_PROPS`, [`data-`]), so(Y, `ARIA_PROPS`, [`aria`, `focus-target`]));
function fo() {
  return (
    (fo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fo.apply(null, arguments)
  );
}
function po(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (
      Array.isArray(e) ||
      (n = mo(e)) ||
      (t && e && typeof e.length == `number`)
    ) {
      n && (e = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (e) {
          throw e;
        },
        f: i,
      };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a,
    o = !0,
    s = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return ((o = e.done), e);
    },
    e: function (e) {
      ((s = !0), (a = e));
    },
    f: function () {
      try {
        o || n.return == null || n.return();
      } finally {
        if (s) throw a;
      }
    },
  };
}
function mo(e, t) {
  if (e) {
    if (typeof e == `string`) return ho(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? ho(e, t)
          : void 0
    );
  }
}
function ho(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var X = (function () {
    function e() {
      no(this, e);
    }
    return oo(e, null, [
      {
        key: `equals`,
        value: function (e, t, n) {
          return n && e && Xa(e) === `object` && t && Xa(t) === `object`
            ? this.deepEquals(
                this.resolveFieldData(e, n),
                this.resolveFieldData(t, n),
              )
            : this.deepEquals(e, t);
        },
      },
      {
        key: `deepEquals`,
        value: function (e, t) {
          if (e === t) return !0;
          if (e && t && Xa(e) === `object` && Xa(t) === `object`) {
            var n = Array.isArray(e),
              r = Array.isArray(t),
              i,
              a,
              o;
            if (n && r) {
              if (((a = e.length), a !== t.length)) return !1;
              for (i = a; i-- !== 0; )
                if (!this.deepEquals(e[i], t[i])) return !1;
              return !0;
            }
            if (n !== r) return !1;
            var s = e instanceof Date,
              c = t instanceof Date;
            if (s !== c) return !1;
            if (s && c) return e.getTime() === t.getTime();
            var l = e instanceof RegExp,
              u = t instanceof RegExp;
            if (l !== u) return !1;
            if (l && u) return e.toString() === t.toString();
            var d = Object.keys(e);
            if (((a = d.length), a !== Object.keys(t).length)) return !1;
            for (i = a; i-- !== 0; )
              if (!Object.prototype.hasOwnProperty.call(t, d[i])) return !1;
            for (i = a; i-- !== 0; )
              if (((o = d[i]), !this.deepEquals(e[o], t[o]))) return !1;
            return !0;
          }
          return e !== e && t !== t;
        },
      },
      {
        key: `resolveFieldData`,
        value: function (e, t) {
          if (!e || !t) return null;
          try {
            var n = e[t];
            if (this.isNotEmpty(n)) return n;
          } catch {}
          if (Object.keys(e).length) {
            if (this.isFunction(t)) return t(e);
            if (this.isNotEmpty(e[t]) || t.indexOf(`.`) === -1) return e[t];
            for (var r = t.split(`.`), i = e, a = 0, o = r.length; a < o; ++a) {
              if (i == null) return null;
              i = i[r[a]];
            }
            return i;
          }
          return null;
        },
      },
      {
        key: `findDiffKeys`,
        value: function (e, t) {
          return !e || !t
            ? {}
            : Object.keys(e)
                .filter(function (e) {
                  return !t.hasOwnProperty(e);
                })
                .reduce(function (t, n) {
                  return ((t[n] = e[n]), t);
                }, {});
        },
      },
      {
        key: `reduceKeys`,
        value: function (e, t) {
          var n = {};
          return (
            !e ||
              !t ||
              t.length === 0 ||
              Object.keys(e)
                .filter(function (e) {
                  return t.some(function (t) {
                    return e.startsWith(t);
                  });
                })
                .forEach(function (t) {
                  ((n[t] = e[t]), delete e[t]);
                }),
            n
          );
        },
      },
      {
        key: `reorderArray`,
        value: function (e, t, n) {
          e &&
            t !== n &&
            (n >= e.length && ((n %= e.length), (t %= e.length)),
            e.splice(n, 0, e.splice(t, 1)[0]));
        },
      },
      {
        key: `findIndexInList`,
        value: function (e, t, n) {
          var r = this;
          return t
            ? n
              ? t.findIndex(function (t) {
                  return r.equals(t, e, n);
                })
              : t.findIndex(function (t) {
                  return t === e;
                })
            : -1;
        },
      },
      {
        key: `getJSXElement`,
        value: function (e) {
          var t = [...arguments].slice(1);
          return this.isFunction(e) ? e.apply(void 0, t) : e;
        },
      },
      {
        key: `getItemValue`,
        value: function (e) {
          var t = [...arguments].slice(1);
          return this.isFunction(e) ? e.apply(void 0, t) : e;
        },
      },
      {
        key: `getProp`,
        value: function (e) {
          var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : ``,
            n =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            r = e ? e[t] : void 0;
          return r === void 0 ? n[t] : r;
        },
      },
      {
        key: `getPropCaseInsensitive`,
        value: function (e, t) {
          var n =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            r = this.toFlatCase(t);
          for (var i in e)
            if (e.hasOwnProperty(i) && this.toFlatCase(i) === r) return e[i];
          for (var a in n)
            if (n.hasOwnProperty(a) && this.toFlatCase(a) === r) return n[a];
        },
      },
      {
        key: `getMergedProps`,
        value: function (e, t) {
          return Object.assign({}, t, e);
        },
      },
      {
        key: `getDiffProps`,
        value: function (e, t) {
          return this.findDiffKeys(e, t);
        },
      },
      {
        key: `getPropValue`,
        value: function (e) {
          if (!this.isFunction(e)) return e;
          var t = [...arguments].slice(1);
          if (t.length === 1) {
            var n = t[0];
            return e(Array.isArray(n) ? n[0] : n);
          }
          return e.apply(void 0, t);
        },
      },
      {
        key: `getComponentProp`,
        value: function (e) {
          var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : ``,
            n =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          return this.isNotEmpty(e) ? this.getProp(e.props, t, n) : void 0;
        },
      },
      {
        key: `getComponentProps`,
        value: function (e, t) {
          return this.isNotEmpty(e) ? this.getMergedProps(e.props, t) : void 0;
        },
      },
      {
        key: `getComponentDiffProps`,
        value: function (e, t) {
          return this.isNotEmpty(e) ? this.getDiffProps(e.props, t) : void 0;
        },
      },
      {
        key: `isValidChild`,
        value: function (e, t, n) {
          if (e) {
            var r,
              i =
                this.getComponentProp(e, `__TYPE`) ||
                (e.type ? e.type.displayName : void 0);
            return (
              !i &&
                e != null &&
                (r = e.type) != null &&
                (r = r._payload) != null &&
                r.value &&
                (i = e.type._payload.value.find(function (e) {
                  return e === t;
                })),
              i === t
            );
          }
          return !1;
        },
      },
      {
        key: `getRefElement`,
        value: function (e) {
          return e
            ? Xa(e) === `object` && e.hasOwnProperty(`current`)
              ? e.current
              : e
            : null;
        },
      },
      {
        key: `combinedRefs`,
        value: function (e, t) {
          e &&
            t &&
            (typeof t == `function` ? t(e.current) : (t.current = e.current));
        },
      },
      {
        key: `removeAccents`,
        value: function (e) {
          return (
            e &&
              e.search(/[\xC0-\xFF]/g) > -1 &&
              (e = e
                .replace(/[\xC0-\xC5]/g, `A`)
                .replace(/[\xC6]/g, `AE`)
                .replace(/[\xC7]/g, `C`)
                .replace(/[\xC8-\xCB]/g, `E`)
                .replace(/[\xCC-\xCF]/g, `I`)
                .replace(/[\xD0]/g, `D`)
                .replace(/[\xD1]/g, `N`)
                .replace(/[\xD2-\xD6\xD8]/g, `O`)
                .replace(/[\xD9-\xDC]/g, `U`)
                .replace(/[\xDD]/g, `Y`)
                .replace(/[\xDE]/g, `P`)
                .replace(/[\xE0-\xE5]/g, `a`)
                .replace(/[\xE6]/g, `ae`)
                .replace(/[\xE7]/g, `c`)
                .replace(/[\xE8-\xEB]/g, `e`)
                .replace(/[\xEC-\xEF]/g, `i`)
                .replace(/[\xF1]/g, `n`)
                .replace(/[\xF2-\xF6\xF8]/g, `o`)
                .replace(/[\xF9-\xFC]/g, `u`)
                .replace(/[\xFE]/g, `p`)
                .replace(/[\xFD\xFF]/g, `y`)),
            e
          );
        },
      },
      {
        key: `toFlatCase`,
        value: function (e) {
          return this.isNotEmpty(e) && this.isString(e)
            ? e.replace(/(-|_)/g, ``).toLowerCase()
            : e;
        },
      },
      {
        key: `toCapitalCase`,
        value: function (e) {
          return this.isNotEmpty(e) && this.isString(e)
            ? e[0].toUpperCase() + e.slice(1)
            : e;
        },
      },
      {
        key: `trim`,
        value: function (e) {
          return this.isNotEmpty(e) && this.isString(e) ? e.trim() : e;
        },
      },
      {
        key: `isEmpty`,
        value: function (e) {
          return (
            e == null ||
            e === `` ||
            (Array.isArray(e) && e.length === 0) ||
            (!(e instanceof Date) &&
              Xa(e) === `object` &&
              Object.keys(e).length === 0)
          );
        },
      },
      {
        key: `isNotEmpty`,
        value: function (e) {
          return !this.isEmpty(e);
        },
      },
      {
        key: `isFunction`,
        value: function (e) {
          return !!(e && e.constructor && e.call && e.apply);
        },
      },
      {
        key: `isObject`,
        value: function (e) {
          return e !== null && e instanceof Object && e.constructor === Object;
        },
      },
      {
        key: `isDate`,
        value: function (e) {
          return e !== null && e instanceof Date && e.constructor === Date;
        },
      },
      {
        key: `isArray`,
        value: function (e) {
          return e !== null && Array.isArray(e);
        },
      },
      {
        key: `isString`,
        value: function (e) {
          return e !== null && typeof e == `string`;
        },
      },
      {
        key: `isPrintableCharacter`,
        value: function () {
          var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ``;
          return this.isNotEmpty(e) && e.length === 1 && e.match(/\S| /);
        },
      },
      {
        key: `isLetter`,
        value: function (e) {
          return /^[a-zA-Z\u00C0-\u017F]$/.test(e);
        },
      },
      {
        key: `isScalar`,
        value: function (e) {
          return (
            e != null &&
            (typeof e == `string` ||
              typeof e == `number` ||
              typeof e == `bigint` ||
              typeof e == `boolean`)
          );
        },
      },
      {
        key: `findLast`,
        value: function (e, t) {
          var n;
          if (this.isNotEmpty(e))
            try {
              n = e.findLast(t);
            } catch {
              n = to(e).reverse().find(t);
            }
          return n;
        },
      },
      {
        key: `findLastIndex`,
        value: function (e, t) {
          var n = -1;
          if (this.isNotEmpty(e))
            try {
              n = e.findLastIndex(t);
            } catch {
              n = e.lastIndexOf(to(e).reverse().find(t));
            }
          return n;
        },
      },
      {
        key: `sort`,
        value: function (e, t) {
          var n =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : 1,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i =
              arguments.length > 4 && arguments[4] !== void 0
                ? arguments[4]
                : 1,
            a = this.compare(e, t, r, n),
            o = n;
          return (
            (this.isEmpty(e) || this.isEmpty(t)) && (o = i === 1 ? n : i),
            o * a
          );
        },
      },
      {
        key: `compare`,
        value: function (e, t, n) {
          var r =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : 1,
            i = -1,
            a = this.isEmpty(e),
            o = this.isEmpty(t);
          return (
            (i =
              a && o
                ? 0
                : a
                  ? r
                  : o
                    ? -r
                    : typeof e == `string` && typeof t == `string`
                      ? n(e, t)
                      : e < t
                        ? -1
                        : +(e > t)),
            i
          );
        },
      },
      {
        key: `localeComparator`,
        value: function (e) {
          return new Intl.Collator(e, { numeric: !0 }).compare;
        },
      },
      {
        key: `findChildrenByKey`,
        value: function (e, t) {
          var n = po(e),
            r;
          try {
            for (n.s(); !(r = n.n()).done; ) {
              var i = r.value;
              if (i.key === t) return i.children || [];
              if (i.children) {
                var a = this.findChildrenByKey(i.children, t);
                if (a.length > 0) return a;
              }
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
          return [];
        },
      },
      {
        key: `mutateFieldData`,
        value: function (e, t, n) {
          if (!(Xa(e) !== `object` || typeof t != `string`))
            for (var r = t.split(`.`), i = e, a = 0, o = r.length; a < o; ++a) {
              if (a + 1 - o === 0) {
                i[r[a]] = n;
                break;
              }
              (i[r[a]] || (i[r[a]] = {}), (i = i[r[a]]));
            }
        },
      },
      {
        key: `getNestedValue`,
        value: function (e, t) {
          return t.split(`.`).reduce(function (e, t) {
            return e && e[t] !== void 0 ? e[t] : void 0;
          }, e);
        },
      },
      {
        key: `absoluteCompare`,
        value: function (t, n) {
          var r =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : 1,
            i =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : 0;
          if (!t || !n || i > r) return !0;
          if (Xa(t) !== Xa(n)) return !1;
          var a = Object.keys(t),
            o = Object.keys(n);
          if (a.length !== o.length) return !1;
          for (var s = 0, c = a; s < c.length; s++) {
            var l = c[s],
              u = t[l],
              d = n[l],
              f = e.isObject(u) && e.isObject(d),
              p = e.isFunction(u) && e.isFunction(d);
            if (
              ((f || p) && !this.absoluteCompare(u, d, r, i + 1)) ||
              (!f && u !== d)
            )
              return !1;
          }
          return !0;
        },
      },
      {
        key: `selectiveCompare`,
        value: function (e, t, n) {
          var r =
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
          if (e === t) return !0;
          if (!e || !t || Xa(e) !== `object` || Xa(t) !== `object`) return !1;
          if (!n) return this.absoluteCompare(e, t, 1);
          var i = po(n),
            a;
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var o = a.value,
                s = this.getNestedValue(e, o),
                c = this.getNestedValue(t, o),
                l =
                  Xa(s) === `object` &&
                  s !== null &&
                  Xa(c) === `object` &&
                  c !== null;
              if ((l && !this.absoluteCompare(s, c, r)) || (!l && s !== c))
                return !1;
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
          return !0;
        },
      },
    ]);
  })(),
  go = 0;
function _o() {
  var e =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : `pr_id_`;
  return (go++, `${e}${go}`);
}
function vo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function yo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vo(Object(n), !0).forEach(function (t) {
          so(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var bo = (function () {
  function e() {
    no(this, e);
  }
  return oo(e, null, [
    {
      key: `getJSXIcon`,
      value: function (e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          n =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          r = null;
        if (e !== null) {
          var i = Xa(e),
            a = Za(t.className, i === `string` && e);
          if (
            ((r = O(`span`, fo({}, t, { className: a, key: _o(`icon`) }))),
            i !== `string`)
          ) {
            var o = yo({ iconProps: t, element: r }, n);
            return X.getJSXElement(e, o);
          }
        }
        return r;
      },
    },
  ]);
})();
function xo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function So(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? xo(Object(n), !0).forEach(function (t) {
          so(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Co(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (e) {
    var n = function (e) {
        return typeof e == `function`;
      },
      r = t.classNameMergeFunction,
      i = n(r);
    return e.reduce(function (e, t) {
      if (!t) return e;
      var a = function () {
        var a = t[o];
        if (o === `style`) e.style = So(So({}, e.style), t.style);
        else if (o === `className`) {
          var s = ``;
          ((s = i
            ? r(e.className, t.className)
            : [e.className, t.className].join(` `).trim()),
            (e.className = s || void 0));
        } else if (n(a)) {
          var c = e[o];
          e[o] = c
            ? function () {
                (c.apply(void 0, arguments), a.apply(void 0, arguments));
              }
            : a;
        } else e[o] = a;
      };
      for (var o in t) a();
      return e;
    }, {});
  }
}
function wo() {
  var e = [],
    t = function (t, n) {
      var r =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 999,
        a = i(t, n, r),
        o = a.value + (a.key === t ? 0 : r) + 1;
      return (e.push({ key: t, value: o }), o);
    },
    n = function (t) {
      e = e.filter(function (e) {
        return e.value !== t;
      });
    },
    r = function (e, t) {
      return i(e, t).value;
    },
    i = function (t, n) {
      var r =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      return (
        to(e)
          .reverse()
          .find(function (e) {
            return n ? !0 : e.key === t;
          }) || { key: t, value: r }
      );
    };
  return {
    get: function (e) {
      return (e && parseInt(e.style.zIndex, 10)) || 0;
    },
    set: function (e, n, r, i) {
      n && (n.style.zIndex = String(t(e, r, i)));
    },
    clear: function (e) {
      e && (n(To.get(e)), (e.style.zIndex = ``));
    },
    getCurrent: function (e, t) {
      return r(e, t);
    },
  };
}
var To = wo(),
  Z = Object.freeze({
    STARTS_WITH: `startsWith`,
    CONTAINS: `contains`,
    NOT_CONTAINS: `notContains`,
    ENDS_WITH: `endsWith`,
    EQUALS: `equals`,
    NOT_EQUALS: `notEquals`,
    IN: `in`,
    NOT_IN: `notIn`,
    LESS_THAN: `lt`,
    LESS_THAN_OR_EQUAL_TO: `lte`,
    GREATER_THAN: `gt`,
    GREATER_THAN_OR_EQUAL_TO: `gte`,
    BETWEEN: `between`,
    DATE_IS: `dateIs`,
    DATE_IS_NOT: `dateIsNot`,
    DATE_BEFORE: `dateBefore`,
    DATE_AFTER: `dateAfter`,
    CUSTOM: `custom`,
  });
Object.freeze({ AND: `and`, OR: `or` });
function Eo(e) {
  "@babel/helpers - typeof";
  return (
    (Eo =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Eo(e)
  );
}
function Do(e, t) {
  if (Eo(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Eo(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Oo(e) {
  var t = Do(e, `string`);
  return Eo(t) == `symbol` ? t : t + ``;
}
function ko(e, t, n) {
  return (
    (t = Oo(t)) in e
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
function Ao(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, Oo(r.key), r));
  }
}
function jo(e, t, n) {
  return (
    t && Ao(e.prototype, t),
    n && Ao(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Mo(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
var No = jo(function e() {
  Mo(this, e);
});
(ko(No, `ripple`, !1),
  ko(No, `inputStyle`, `outlined`),
  ko(No, `locale`, `en`),
  ko(No, `appendTo`, null),
  ko(No, `cssTransition`, !0),
  ko(No, `autoZIndex`, !0),
  ko(No, `hideOverlaysOnDocumentScrolling`, !1),
  ko(No, `nonce`, null),
  ko(No, `nullSortOrder`, 1),
  ko(No, `zIndex`, {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100,
    toast: 1200,
  }),
  ko(No, `pt`, void 0),
  ko(No, `filterMatchModeOptions`, {
    text: [
      Z.STARTS_WITH,
      Z.CONTAINS,
      Z.NOT_CONTAINS,
      Z.ENDS_WITH,
      Z.EQUALS,
      Z.NOT_EQUALS,
    ],
    numeric: [
      Z.EQUALS,
      Z.NOT_EQUALS,
      Z.LESS_THAN,
      Z.LESS_THAN_OR_EQUAL_TO,
      Z.GREATER_THAN,
      Z.GREATER_THAN_OR_EQUAL_TO,
    ],
    date: [Z.DATE_IS, Z.DATE_IS_NOT, Z.DATE_BEFORE, Z.DATE_AFTER],
  }),
  ko(No, `changeTheme`, function (e, t, n, r) {
    var i,
      a = document.getElementById(n);
    if (!a) throw Error(`Element with id ${n} not found.`);
    var o = a.getAttribute(`href`).replace(e, t),
      s = document.createElement(`link`);
    (s.setAttribute(`rel`, `stylesheet`),
      s.setAttribute(`id`, n),
      s.setAttribute(`href`, o),
      s.addEventListener(`load`, function () {
        r && r();
      }),
      (i = a.parentNode) == null || i.replaceChild(s, a));
  }));
var Po = {
  en: {
    accept: `Yes`,
    addRule: `Add Rule`,
    am: `AM`,
    apply: `Apply`,
    cancel: `Cancel`,
    choose: `Choose`,
    chooseDate: `Choose Date`,
    chooseMonth: `Choose Month`,
    chooseYear: `Choose Year`,
    clear: `Clear`,
    completed: `Completed`,
    contains: `Contains`,
    custom: `Custom`,
    dateAfter: `Date is after`,
    dateBefore: `Date is before`,
    dateFormat: `mm/dd/yy`,
    dateIs: `Date is`,
    dateIsNot: `Date is not`,
    dayNames: [
      `Sunday`,
      `Monday`,
      `Tuesday`,
      `Wednesday`,
      `Thursday`,
      `Friday`,
      `Saturday`,
    ],
    dayNamesMin: [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`],
    dayNamesShort: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
    emptyFilterMessage: `No results found`,
    emptyMessage: `No available options`,
    emptySearchMessage: `No results found`,
    emptySelectionMessage: `No selected item`,
    endsWith: `Ends with`,
    equals: `Equals`,
    fileChosenMessage: `{0} files`,
    fileSizeTypes: [`B`, `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, `YB`],
    filter: `Filter`,
    firstDayOfWeek: 0,
    gt: `Greater than`,
    gte: `Greater than or equal to`,
    lt: `Less than`,
    lte: `Less than or equal to`,
    matchAll: `Match All`,
    matchAny: `Match Any`,
    medium: `Medium`,
    monthNames: [
      `January`,
      `February`,
      `March`,
      `April`,
      `May`,
      `June`,
      `July`,
      `August`,
      `September`,
      `October`,
      `November`,
      `December`,
    ],
    monthNamesShort: [
      `Jan`,
      `Feb`,
      `Mar`,
      `Apr`,
      `May`,
      `Jun`,
      `Jul`,
      `Aug`,
      `Sep`,
      `Oct`,
      `Nov`,
      `Dec`,
    ],
    nextDecade: `Next Decade`,
    nextHour: `Next Hour`,
    nextMinute: `Next Minute`,
    nextMonth: `Next Month`,
    nextSecond: `Next Second`,
    nextYear: `Next Year`,
    noFileChosenMessage: `No file chosen`,
    noFilter: `No Filter`,
    notContains: `Not contains`,
    notEquals: `Not equals`,
    now: `Now`,
    passwordPrompt: `Enter a password`,
    pending: `Pending`,
    pm: `PM`,
    prevDecade: `Previous Decade`,
    prevHour: `Previous Hour`,
    prevMinute: `Previous Minute`,
    prevMonth: `Previous Month`,
    prevSecond: `Previous Second`,
    prevYear: `Previous Year`,
    reject: `No`,
    removeRule: `Remove Rule`,
    searchMessage: `{0} results are available`,
    selectionMessage: `{0} items selected`,
    showMonthAfterYear: !1,
    startsWith: `Starts with`,
    strong: `Strong`,
    today: `Today`,
    upload: `Upload`,
    weak: `Weak`,
    weekHeader: `Wk`,
    aria: {
      cancelEdit: `Cancel Edit`,
      close: `Close`,
      collapseLabel: `Collapse`,
      collapseRow: `Row Collapsed`,
      editRow: `Edit Row`,
      expandLabel: `Expand`,
      expandRow: `Row Expanded`,
      falseLabel: `False`,
      filterConstraint: `Filter Constraint`,
      filterOperator: `Filter Operator`,
      firstPageLabel: `First Page`,
      gridView: `Grid View`,
      hideFilterMenu: `Hide Filter Menu`,
      jumpToPageDropdownLabel: `Jump to Page Dropdown`,
      jumpToPageInputLabel: `Jump to Page Input`,
      lastPageLabel: `Last Page`,
      listLabel: `Option List`,
      listView: `List View`,
      moveAllToSource: `Move All to Source`,
      moveAllToTarget: `Move All to Target`,
      moveBottom: `Move Bottom`,
      moveDown: `Move Down`,
      moveToSource: `Move to Source`,
      moveToTarget: `Move to Target`,
      moveTop: `Move Top`,
      moveUp: `Move Up`,
      navigation: `Navigation`,
      next: `Next`,
      nextPageLabel: `Next Page`,
      nullLabel: `Not Selected`,
      otpLabel: `Please enter one time password character {0}`,
      pageLabel: `Page {page}`,
      passwordHide: `Hide Password`,
      passwordShow: `Show Password`,
      previous: `Previous`,
      prevPageLabel: `Previous Page`,
      removeLabel: `Remove`,
      rotateLeft: `Rotate Left`,
      rotateRight: `Rotate Right`,
      rowsPerPageLabel: `Rows per page`,
      saveEdit: `Save Edit`,
      scrollTop: `Scroll Top`,
      selectAll: `All items selected`,
      selectLabel: `Select`,
      selectRow: `Row Selected`,
      showFilterMenu: `Show Filter Menu`,
      slide: `Slide`,
      slideNumber: `{slideNumber}`,
      star: `1 star`,
      stars: `{star} stars`,
      trueLabel: `True`,
      unselectAll: `All items unselected`,
      unselectLabel: `Unselect`,
      unselectRow: `Row Unselected`,
      zoomImage: `Zoom Image`,
      zoomIn: `Zoom In`,
      zoomOut: `Zoom Out`,
    },
  },
};
function Fo(e, t) {
  if (e.includes(`__proto__`) || e.includes(`prototype`))
    throw Error(`Unsafe ariaKey detected`);
  var n = No.locale;
  try {
    var r = Io(n).aria[e];
    if (r)
      for (var i in t) t.hasOwnProperty(i) && (r = r.replace(`{${i}}`, t[i]));
    return r;
  } catch {
    throw Error(`The ${e} option is not found in the current locale('${n}').`);
  }
}
function Io(e) {
  var t = e || No.locale;
  if (t.includes(`__proto__`) || t.includes(`prototype`))
    throw Error(`Unsafe locale detected`);
  return Po[t];
}
(Object.freeze({
  SUCCESS: `success`,
  INFO: `info`,
  WARN: `warn`,
  ERROR: `error`,
  SECONDARY: `secondary`,
  CONTRAST: `contrast`,
}),
  Object.freeze({
    ADDRESS_BOOK: `pi pi-address-book`,
    ALIGN_CENTER: `pi pi-align-center`,
    ALIGN_JUSTIFY: `pi pi-align-justify`,
    ALIGN_LEFT: `pi pi-align-left`,
    ALIGN_RIGHT: `pi pi-align-right`,
    AMAZON: `pi pi-amazon`,
    ANDROID: `pi pi-android`,
    ANGLE_DOUBLE_DOWN: `pi pi-angle-double-down`,
    ANGLE_DOUBLE_LEFT: `pi pi-angle-double-left`,
    ANGLE_DOUBLE_RIGHT: `pi pi-angle-double-right`,
    ANGLE_DOUBLE_UP: `pi pi-angle-double-up`,
    ANGLE_DOWN: `pi pi-angle-down`,
    ANGLE_LEFT: `pi pi-angle-left`,
    ANGLE_RIGHT: `pi pi-angle-right`,
    ANGLE_UP: `pi pi-angle-up`,
    APPLE: `pi pi-apple`,
    ARROW_CIRCLE_DOWN: `pi pi-arrow-circle-down`,
    ARROW_CIRCLE_LEFT: `pi pi-arrow-circle-left`,
    ARROW_CIRCLE_RIGHT: `pi pi-arrow-circle-right`,
    ARROW_CIRCLE_UP: `pi pi-arrow-circle-up`,
    ARROW_DOWN_LEFT_AND_ARROW_UP_RIGHT_TO_CENTER: `pi pi-arrow-down-left-and-arrow-up-right-to-center`,
    ARROW_DOWN_LEFT: `pi pi-arrow-down-left`,
    ARROW_DOWN_RIGHT: `pi pi-arrow-down-right`,
    ARROW_DOWN: `pi pi-arrow-down`,
    ARROW_LEFT: `pi pi-arrow-left`,
    ARROW_RIGHT_ARROW_LEFT: `pi pi-arrow-right-arrow-left`,
    ARROW_RIGHT: `pi pi-arrow-right`,
    ARROW_UP_LEFT: `pi pi-arrow-up-left`,
    ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER: `pi pi-arrow-up-right-and-arrow-down-left-from-center`,
    ARROW_UP_RIGHT: `pi pi-arrow-up-right`,
    ARROW_UP: `pi pi-arrow-up`,
    ARROWS_ALT: `pi pi-arrows-alt`,
    ARROWS_H: `pi pi-arrows-h`,
    ARROWS_V: `pi pi-arrows-v`,
    ASTERISK: `pi pi-asterisk`,
    AT: `pi pi-at`,
    BACKWARD: `pi pi-backward`,
    BAN: `pi pi-ban`,
    BARCODE: `pi pi-barcode`,
    BARS: `pi pi-bars`,
    BELL_SLASH: `pi pi-bell-slash`,
    BELL: `pi pi-bell`,
    BITCOIN: `pi pi-bitcoin`,
    BOLT: `pi pi-bolt`,
    BOOK: `pi pi-book`,
    BOOKMARK_FILL: `pi pi-bookmark-fill`,
    BOOKMARK: `pi pi-bookmark`,
    BOX: `pi pi-box`,
    BRIEFCASE: `pi pi-briefcase`,
    BUILDING_COLUMNS: `pi pi-building-columns`,
    BUILDING: `pi pi-building`,
    BULLSEYE: `pi pi-bullseye`,
    CALCULATOR: `pi pi-calculator`,
    CALENDAR_CLOCK: `pi pi-calendar-clock`,
    CALENDAR_MINUS: `pi pi-calendar-minus`,
    CALENDAR_PLUS: `pi pi-calendar-plus`,
    CALENDAR_TIMES: `pi pi-calendar-times`,
    CALENDAR: `pi pi-calendar`,
    CAMERA: `pi pi-camera`,
    CAR: `pi pi-car`,
    CARET_DOWN: `pi pi-caret-down`,
    CARET_LEFT: `pi pi-caret-left`,
    CARET_RIGHT: `pi pi-caret-right`,
    CARET_UP: `pi pi-caret-up`,
    CART_ARROW_DOWN: `pi pi-cart-arrow-down`,
    CART_MINUS: `pi pi-cart-minus`,
    CART_PLUS: `pi pi-cart-plus`,
    CHART_BAR: `pi pi-chart-bar`,
    CHART_LINE: `pi pi-chart-line`,
    CHART_PIE: `pi pi-chart-pie`,
    CHART_SCATTER: `pi pi-chart-scatter`,
    CHECK_CIRCLE: `pi pi-check-circle`,
    CHECK_SQUARE: `pi pi-check-square`,
    CHECK: `pi pi-check`,
    CHEVRON_CIRCLE_DOWN: `pi pi-chevron-circle-down`,
    CHEVRON_CIRCLE_LEFT: `pi pi-chevron-circle-left`,
    CHEVRON_CIRCLE_RIGHT: `pi pi-chevron-circle-right`,
    CHEVRON_CIRCLE_UP: `pi pi-chevron-circle-up`,
    CHEVRON_DOWN: `pi pi-chevron-down`,
    CHEVRON_LEFT: `pi pi-chevron-left`,
    CHEVRON_RIGHT: `pi pi-chevron-right`,
    CHEVRON_UP: `pi pi-chevron-up`,
    CIRCLE_FILL: `pi pi-circle-fill`,
    CIRCLE_OFF: `pi pi-circle-off`,
    CIRCLE_ON: `pi pi-circle-on`,
    CIRCLE: `pi pi-circle`,
    CLIPBOARD: `pi pi-clipboard`,
    CLOCK: `pi pi-clock`,
    CLONE: `pi pi-clone`,
    CLOUD_DOWNLOAD: `pi pi-cloud-download`,
    CLOUD_UPLOAD: `pi pi-cloud-upload`,
    CLOUD: `pi pi-cloud`,
    CODE: `pi pi-code`,
    COG: `pi pi-cog`,
    COMMENT: `pi pi-comment`,
    COMMENTS: `pi pi-comments`,
    COMPASS: `pi pi-compass`,
    COPY: `pi pi-copy`,
    CREDIT_CARD: `pi pi-credit-card`,
    CROWN: `pi pi-crown`,
    DATABASE: `pi pi-database`,
    DELETE_LEFT: `pi pi-delete-left`,
    DESKTOP: `pi pi-desktop`,
    DIRECTIONS_ALT: `pi pi-directions-alt`,
    DIRECTIONS: `pi pi-directions`,
    DISCORD: `pi pi-discord`,
    DOLLAR: `pi pi-dollar`,
    DOWNLOAD: `pi pi-download`,
    EJECT: `pi pi-eject`,
    ELLIPSIS_H: `pi pi-ellipsis-h`,
    ELLIPSIS_V: `pi pi-ellipsis-v`,
    ENVELOPE: `pi pi-envelope`,
    EQUALS: `pi pi-equals`,
    ERASER: `pi pi-eraser`,
    ETHEREUM: `pi pi-ethereum`,
    EURO: `pi pi-euro`,
    EXCLAMATION_CIRCLE: `pi pi-exclamation-circle`,
    EXCLAMATION_TRIANGLE: `pi pi-exclamation-triangle`,
    EXPAND: `pi pi-expand`,
    EXTERNAL_LINK: `pi pi-external-link`,
    EYE_SLASH: `pi pi-eye-slash`,
    EYE: `pi pi-eye`,
    FACE_SMILE: `pi pi-face-smile`,
    FACEBOOK: `pi pi-facebook`,
    FAST_BACKWARD: `pi pi-fast-backward`,
    FAST_FORWARD: `pi pi-fast-forward`,
    FILE_ARROW_UP: `pi pi-file-arrow-up`,
    FILE_CHECK: `pi pi-file-check`,
    FILE_EDIT: `pi pi-file-edit`,
    FILE_EXCEL: `pi pi-file-excel`,
    FILE_EXPORT: `pi pi-file-export`,
    FILE_IMPORT: `pi pi-file-import`,
    FILE_O: `pi pi-file-o`,
    FILE_PDF: `pi pi-file-pdf`,
    FILE_PLUS: `pi pi-file-plus`,
    FILE_WORD: `pi pi-file-word`,
    FILE: `pi pi-file`,
    FILTER_FILL: `pi pi-filter-fill`,
    FILTER_SLASH: `pi pi-filter-slash`,
    FILTER: `pi pi-filter`,
    FLAG_FILL: `pi pi-flag-fill`,
    FLAG: `pi pi-flag`,
    FOLDER_OPEN: `pi pi-folder-open`,
    FOLDER_PLUS: `pi pi-folder-plus`,
    FOLDER: `pi pi-folder`,
    FORWARD: `pi pi-forward`,
    GAUGE: `pi pi-gauge`,
    GIFT: `pi pi-gift`,
    GITHUB: `pi pi-github`,
    GLOBE: `pi pi-globe`,
    GOOGLE: `pi pi-google`,
    GRADUATION_CAP: `pi pi-graduation-cap`,
    HAMMER: `pi pi-hammer`,
    HASHTAG: `pi pi-hashtag`,
    HEADPHONES: `pi pi-headphones`,
    HEART_FILL: `pi pi-heart-fill`,
    HEART: `pi pi-heart`,
    HISTORY: `pi pi-history`,
    HOME: `pi pi-home`,
    HOURGLASS: `pi pi-hourglass`,
    ID_CARD: `pi pi-id-card`,
    IMAGE: `pi pi-image`,
    IMAGES: `pi pi-images`,
    INBOX: `pi pi-inbox`,
    INDIAN_RUPEE: `pi pi-indian-rupee`,
    INFO_CIRCLE: `pi pi-info-circle`,
    INFO: `pi pi-info`,
    INSTAGRAM: `pi pi-instagram`,
    KEY: `pi pi-key`,
    LANGUAGE: `pi pi-language`,
    LIGHTBULB: `pi pi-lightbulb`,
    LINK: `pi pi-link`,
    LINKEDIN: `pi pi-linkedin`,
    LIST_CHECK: `pi pi-list-check`,
    LIST: `pi pi-list`,
    LOCK_OPEN: `pi pi-lock-open`,
    LOCK: `pi pi-lock`,
    MAP_MARKER: `pi pi-map-marker`,
    MAP: `pi pi-map`,
    MARS: `pi pi-mars`,
    MEGAPHONE: `pi pi-megaphone`,
    MICROCHIP_AI: `pi pi-microchip-ai`,
    MICROCHIP: `pi pi-microchip`,
    MICROPHONE: `pi pi-microphone`,
    MICROSOFT: `pi pi-microsoft`,
    MINUS_CIRCLE: `pi pi-minus-circle`,
    MINUS: `pi pi-minus`,
    MOBILE: `pi pi-mobile`,
    MONEY_BILL: `pi pi-money-bill`,
    MOON: `pi pi-moon`,
    OBJECTS_COLUMN: `pi pi-objects-column`,
    PALETTE: `pi pi-palette`,
    PAPERCLIP: `pi pi-paperclip`,
    PAUSE_CIRCLE: `pi pi-pause-circle`,
    PAUSE: `pi pi-pause`,
    PAYPAL: `pi pi-paypal`,
    PEN_TO_SQUARE: `pi pi-pen-to-square`,
    PENCIL: `pi pi-pencil`,
    PERCENTAGE: `pi pi-percentage`,
    PHONE: `pi pi-phone`,
    PINTEREST: `pi pi-pinterest`,
    PLAY_CIRCLE: `pi pi-play-circle`,
    PLAY: `pi pi-play`,
    PLUS_CIRCLE: `pi pi-plus-circle`,
    PLUS: `pi pi-plus`,
    POUND: `pi pi-pound`,
    POWER_OFF: `pi pi-power-off`,
    PRIME: `pi pi-prime`,
    PRINT: `pi pi-print`,
    QRCODE: `pi pi-qrcode`,
    QUESTION_CIRCLE: `pi pi-question-circle`,
    QUESTION: `pi pi-question`,
    RECEIPT: `pi pi-receipt`,
    REDDIT: `pi pi-reddit`,
    REFRESH: `pi pi-refresh`,
    REPLAY: `pi pi-replay`,
    REPLY: `pi pi-reply`,
    SAVE: `pi pi-save`,
    SEARCH_MINUS: `pi pi-search-minus`,
    SEARCH_PLUS: `pi pi-search-plus`,
    SEARCH: `pi pi-search`,
    SEND: `pi pi-send`,
    SERVER: `pi pi-server`,
    SHARE_ALT: `pi pi-share-alt`,
    SHIELD: `pi pi-shield`,
    SHOP: `pi pi-shop`,
    SHOPPING_BAG: `pi pi-shopping-bag`,
    SHOPPING_CART: `pi pi-shopping-cart`,
    SIGN_IN: `pi pi-sign-in`,
    SIGN_OUT: `pi pi-sign-out`,
    SITEMAP: `pi pi-sitemap`,
    SLACK: `pi pi-slack`,
    SLIDERS_H: `pi pi-sliders-h`,
    SLIDERS_V: `pi pi-sliders-v`,
    SORT_ALPHA_DOWN_ALT: `pi pi-sort-alpha-down-alt`,
    SORT_ALPHA_DOWN: `pi pi-sort-alpha-down`,
    SORT_ALPHA_UP_ALT: `pi pi-sort-alpha-up-alt`,
    SORT_ALPHA_UP: `pi pi-sort-alpha-up`,
    SORT_ALT_SLASH: `pi pi-sort-alt-slash`,
    SORT_ALT: `pi pi-sort-alt`,
    SORT_AMOUNT_DOWN_ALT: `pi pi-sort-amount-down-alt`,
    SORT_AMOUNT_DOWN: `pi pi-sort-amount-down`,
    SORT_AMOUNT_UP_ALT: `pi pi-sort-amount-up-alt`,
    SORT_AMOUNT_UP: `pi pi-sort-amount-up`,
    SORT_DOWN_FILL: `pi pi-sort-down-fill`,
    SORT_DOWN: `pi pi-sort-down`,
    SORT_NUMERIC_DOWN_ALT: `pi pi-sort-numeric-down-alt`,
    SORT_NUMERIC_DOWN: `pi pi-sort-numeric-down`,
    SORT_NUMERIC_UP_ALT: `pi pi-sort-numeric-up-alt`,
    SORT_NUMERIC_UP: `pi pi-sort-numeric-up`,
    SORT_UP_FILL: `pi pi-sort-up-fill`,
    SORT_UP: `pi pi-sort-up`,
    SORT: `pi pi-sort`,
    SPARKLES: `pi pi-sparkles`,
    SPINNER_DOTTED: `pi pi-spinner-dotted`,
    SPINNER: `pi pi-spinner`,
    STAR_FILL: `pi pi-star-fill`,
    STAR_HALF_FILL: `pi pi-star-half-fill`,
    STAR_HALF: `pi pi-star-half`,
    STAR: `pi pi-star`,
    STEP_BACKWARD_ALT: `pi pi-step-backward-alt`,
    STEP_BACKWARD: `pi pi-step-backward`,
    STEP_FORWARD_ALT: `pi pi-step-forward-alt`,
    STEP_FORWARD: `pi pi-step-forward`,
    STOP_CIRCLE: `pi pi-stop-circle`,
    STOP: `pi pi-stop`,
    STOPWATCH: `pi pi-stopwatch`,
    SUN: `pi pi-sun`,
    SYNC: `pi pi-sync`,
    TABLE: `pi pi-table`,
    TABLET: `pi pi-tablet`,
    TAG: `pi pi-tag`,
    TAGS: `pi pi-tags`,
    TELEGRAM: `pi pi-telegram`,
    TH_LARGE: `pi pi-th-large`,
    THUMBS_DOWN_FILL: `pi pi-thumbs-down-fill`,
    THUMBS_DOWN: `pi pi-thumbs-down`,
    THUMBS_UP_FILL: `pi pi-thumbs-up-fill`,
    THUMBS_UP: `pi pi-thumbs-up`,
    THUMBTACK: `pi pi-thumbtack`,
    TICKET: `pi pi-ticket`,
    TIKTOK: `pi pi-tiktok`,
    TIMES_CIRCLE: `pi pi-times-circle`,
    TIMES: `pi pi-times`,
    TRASH: `pi pi-trash`,
    TROPHY: `pi pi-trophy`,
    TRUCK: `pi pi-truck`,
    TURKISH_LIRA: `pi pi-turkish-lira`,
    TWITCH: `pi pi-twitch`,
    TWITTER: `pi pi-twitter`,
    UNDO: `pi pi-undo`,
    UNLOCK: `pi pi-unlock`,
    UPLOAD: `pi pi-upload`,
    USER_EDIT: `pi pi-user-edit`,
    USER_MINUS: `pi pi-user-minus`,
    USER_PLUS: `pi pi-user-plus`,
    USER: `pi pi-user`,
    USERS: `pi pi-users`,
    VENUS: `pi pi-venus`,
    VERIFIED: `pi pi-verified`,
    VIDEO: `pi pi-video`,
    VIMEO: `pi pi-vimeo`,
    VOLUME_DOWN: `pi pi-volume-down`,
    VOLUME_OFF: `pi pi-volume-off`,
    VOLUME_UP: `pi pi-volume-up`,
    WALLET: `pi pi-wallet`,
    WAREHOUSE: `pi pi-warehouse`,
    WAVE_PULSE: `pi pi-wave-pulse`,
    WHATSAPP: `pi pi-whatsapp`,
    WIFI: `pi pi-wifi`,
    WINDOW_MAXIMIZE: `pi pi-window-maximize`,
    WINDOW_MINIMIZE: `pi pi-window-minimize`,
    WRENCH: `pi pi-wrench`,
    YOUTUBE: `pi pi-youtube`,
  }),
  Object.freeze({ DESC: -1, UNSORTED: 0, ASC: 1 }));
function Lo(e) {
  if (Array.isArray(e)) return e;
}
function Ro(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function zo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Bo(e, t) {
  if (e) {
    if (typeof e == `string`) return zo(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? zo(e, t)
          : void 0
    );
  }
}
function Vo() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ho(e, t) {
  return Lo(e) || Ro(e, t) || Bo(e, t) || Vo();
}
var Uo = G.createContext(),
  Wo = function (e) {
    var t = e.value ?? {},
      n = Ho(R(t.ripple ?? !1), 2),
      r = n[0],
      i = n[1],
      a = Ho(R(t.inputStyle ?? `outlined`), 2),
      o = a[0],
      s = a[1],
      c = Ho(R(t.locale ?? `en`), 2),
      l = c[0],
      u = c[1],
      d = Ho(R(t.appendTo ?? null), 2),
      f = d[0],
      p = d[1],
      m = Ho(R(t.styleContainer ?? null), 2),
      h = m[0],
      g = m[1],
      _ = Ho(R(t.cssTransition ?? !0), 2),
      v = _[0],
      y = _[1],
      b = Ho(R(t.autoZIndex ?? !0), 2),
      x = b[0],
      S = b[1],
      C = Ho(R(t.hideOverlaysOnDocumentScrolling ?? !1), 2),
      ee = C[0],
      w = C[1],
      T = Ho(R(t.nonce ?? null), 2),
      E = T[0],
      te = T[1],
      D = Ho(R(t.nullSortOrder ?? 1), 2),
      ne = D[0],
      O = D[1],
      k = Ho(
        R(
          t.zIndex ?? {
            modal: 1100,
            overlay: 1e3,
            menu: 1e3,
            tooltip: 1100,
            toast: 1200,
          },
        ),
        2,
      ),
      re = k[0],
      ie = k[1],
      A = Ho(R(t.ptOptions ?? { mergeSections: !0, mergeProps: !0 }), 2),
      ae = A[0],
      oe = A[1],
      j = Ho(R(t.pt ?? void 0), 2),
      se = j[0],
      ce = j[1],
      le = Ho(R(t.unstyled ?? !1), 2),
      ue = le[0],
      M = le[1],
      N = Ho(
        R(
          t.filterMatchModeOptions ?? {
            text: [
              Z.STARTS_WITH,
              Z.CONTAINS,
              Z.NOT_CONTAINS,
              Z.ENDS_WITH,
              Z.EQUALS,
              Z.NOT_EQUALS,
            ],
            numeric: [
              Z.EQUALS,
              Z.NOT_EQUALS,
              Z.LESS_THAN,
              Z.LESS_THAN_OR_EQUAL_TO,
              Z.GREATER_THAN,
              Z.GREATER_THAN_OR_EQUAL_TO,
            ],
            date: [Z.DATE_IS, Z.DATE_IS_NOT, Z.DATE_BEFORE, Z.DATE_AFTER],
          },
        ),
        2,
      ),
      de = N[0],
      fe = N[1],
      pe = function (e, t, n, r) {
        var i,
          a = document.getElementById(n);
        if (!a) throw Error(`Element with id ${n} not found.`);
        var o = a.getAttribute(`href`).replace(e, t),
          s = document.createElement(`link`);
        (s.setAttribute(`rel`, `stylesheet`),
          s.setAttribute(`id`, n),
          s.setAttribute(`href`, o),
          s.addEventListener(`load`, function () {
            r && r();
          }),
          (i = a.parentNode) == null || i.replaceChild(s, a));
      };
    (G.useEffect(
      function () {
        No.ripple = r;
      },
      [r],
    ),
      G.useEffect(
        function () {
          No.inputStyle = o;
        },
        [o],
      ),
      G.useEffect(
        function () {
          No.locale = l;
        },
        [l],
      ));
    var me = {
      changeTheme: pe,
      ripple: r,
      setRipple: i,
      inputStyle: o,
      setInputStyle: s,
      locale: l,
      setLocale: u,
      appendTo: f,
      setAppendTo: p,
      styleContainer: h,
      setStyleContainer: g,
      cssTransition: v,
      setCssTransition: y,
      autoZIndex: x,
      setAutoZIndex: S,
      hideOverlaysOnDocumentScrolling: ee,
      setHideOverlaysOnDocumentScrolling: w,
      nonce: E,
      setNonce: te,
      nullSortOrder: ne,
      setNullSortOrder: O,
      zIndex: re,
      setZIndex: ie,
      ptOptions: ae,
      setPtOptions: oe,
      pt: se,
      setPt: ce,
      filterMatchModeOptions: de,
      setFilterMatchModeOptions: fe,
      unstyled: ue,
      setUnstyled: M,
    };
    return G.createElement(Uo.Provider, { value: me }, e.children);
  },
  Go = No;
function Ko(e) {
  if (Array.isArray(e)) return e;
}
function qo(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Jo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Yo(e, t) {
  if (e) {
    if (typeof e == `string`) return Jo(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Jo(e, t)
          : void 0
    );
  }
}
function Xo() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zo(e, t) {
  return Ko(e) || qo(e, t) || Yo(e, t) || Xo();
}
var Qo = function (e) {
    var t = B(null);
    return (
      Le(
        function () {
          return (
            (t.current = e),
            function () {
              t.current = null;
            }
          );
        },
        [e],
      ),
      t.current
    );
  },
  $o = function (e) {
    return Le(function () {
      return e;
    }, []);
  },
  es = function (e) {
    var t = e.target,
      n = t === void 0 ? `document` : t,
      r = e.type,
      i = e.listener,
      a = e.options,
      o = e.when,
      s = o === void 0 ? !0 : o,
      c = B(null),
      l = B(null),
      u = Qo(i),
      d = Qo(a),
      f = function () {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          t = e.target;
        (X.isNotEmpty(t) &&
          (p(), (e.when || s) && (c.current = Y.getTargetElement(t))),
          !l.current &&
            c.current &&
            ((l.current = function (e) {
              return i && i(e);
            }),
            c.current.addEventListener(r, l.current, a)));
      },
      p = function () {
        l.current &&= (c.current.removeEventListener(r, l.current, a), null);
      },
      m = function () {
        (p(), (u = null), (d = null));
      },
      h = Ve(
        function () {
          s ? (c.current = Y.getTargetElement(n)) : (p(), (c.current = null));
        },
        [n, s],
      );
    return (
      Le(
        function () {
          h();
        },
        [h],
      ),
      Le(
        function () {
          var e = `${u}` != `${i}`,
            t = d !== a,
            n = l.current;
          n && (e || t) ? (p(), s && f()) : n || m();
        },
        [i, a, s],
      ),
      $o(function () {
        m();
      }),
      [f, p]
    );
  },
  ts = {},
  ns = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
      n = Zo(
        R(function () {
          return _o();
        }),
        1,
      )[0],
      r = Zo(R(0), 2),
      i = r[0],
      a = r[1];
    return (
      Le(
        function () {
          if (t) {
            ts[e] || (ts[e] = []);
            var r = ts[e].push(n);
            return (
              a(r),
              function () {
                delete ts[e][r - 1];
                var t = ts[e].length - 1,
                  n = X.findLastIndex(ts[e], function (e) {
                    return e !== void 0;
                  });
                (n !== t && ts[e].splice(n + 1), a(void 0));
              }
            );
          }
        },
        [e, n, t],
      ),
      i
    );
  };
function rs(e) {
  if (Array.isArray(e)) return Jo(e);
}
function is(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function as() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function os(e) {
  return rs(e) || is(e) || Yo(e) || as();
}
var ss = {
    SIDEBAR: 100,
    SLIDE_MENU: 200,
    DIALOG: 300,
    IMAGE: 400,
    MENU: 500,
    OVERLAY_PANEL: 600,
    PASSWORD: 700,
    CASCADE_SELECT: 800,
    SPLIT_BUTTON: 900,
    SPEED_DIAL: 1e3,
    TOOLTIP: 1200,
  },
  cs = {
    escKeyListeners: new Map(),
    onGlobalKeyDown: function (e) {
      if (e.code === `Escape`) {
        var t = cs.escKeyListeners,
          n = Math.max.apply(Math, os(t.keys())),
          r = t.get(n),
          i = Math.max.apply(Math, os(r.keys()));
        r.get(i)(e);
      }
    },
    refreshGlobalKeyDownListener: function () {
      var e = Y.getTargetElement(`document`);
      this.escKeyListeners.size > 0
        ? e.addEventListener(`keydown`, this.onGlobalKeyDown)
        : e.removeEventListener(`keydown`, this.onGlobalKeyDown);
    },
    addListener: function (e, t) {
      var n = this,
        r = Zo(t, 2),
        i = r[0],
        a = r[1],
        o = this.escKeyListeners;
      o.has(i) || o.set(i, new Map());
      var s = o.get(i);
      if (s.has(a))
        throw Error(
          `Unexpected: global esc key listener with priority [${i}, ${a}] already exists.`,
        );
      return (
        s.set(a, e),
        this.refreshGlobalKeyDownListener(),
        function () {
          (s.delete(a),
            s.size === 0 && o.delete(i),
            n.refreshGlobalKeyDownListener());
        }
      );
    },
  },
  ls = function (e) {
    var t = e.callback,
      n = e.when,
      r = e.priority;
    Le(
      function () {
        if (n) return cs.addListener(t, r);
      },
      [t, n, r],
    );
  },
  us = function () {
    var e = He(Uo);
    return function () {
      return Co([...arguments], e?.ptOptions);
    };
  },
  ds = function (e) {
    var t = B(!1);
    return Le(function () {
      if (!t.current) return ((t.current = !0), e && e());
    }, []);
  },
  fs = function (e) {
    var t = e.target,
      n = e.listener,
      r = e.options,
      i = e.when,
      a = i === void 0 ? !0 : i,
      o = He(Uo),
      s = B(null),
      c = B(null),
      l = B([]),
      u = Qo(n),
      d = Qo(r),
      f = function () {
        var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (
          (X.isNotEmpty(e.target) &&
            (p(), (e.when || a) && (s.current = Y.getTargetElement(e.target))),
          !c.current && s.current)
        ) {
          var t = o
              ? o.hideOverlaysOnDocumentScrolling
              : Go.hideOverlaysOnDocumentScrolling,
            i = (l.current = Y.getScrollableParents(s.current));
          (i.some(function (e) {
            return e === document.body || e === window;
          }) || i.push(t ? window : document.body),
            (c.current = function (e) {
              return n && n(e);
            }),
            i.forEach(function (e) {
              return e.addEventListener(`scroll`, c.current, r);
            }));
        }
      },
      p = function () {
        c.current &&=
          (l.current.forEach(function (e) {
            return e.removeEventListener(`scroll`, c.current, r);
          }),
          null);
      },
      m = function () {
        (p(), (l.current = null), (u = null), (d = null));
      },
      h = Ve(
        function () {
          a ? (s.current = Y.getTargetElement(t)) : (p(), (s.current = null));
        },
        [t, a],
      );
    return (
      Le(
        function () {
          h();
        },
        [h],
      ),
      Le(
        function () {
          var e = `${u}` != `${n}`,
            t = d !== r,
            i = c.current;
          i && (e || t) ? (p(), a && f()) : i || m();
        },
        [n, r, a],
      ),
      $o(function () {
        m();
      }),
      [f, p]
    );
  },
  ps = function (e) {
    var t = e.listener,
      n = e.when;
    return es({
      target: `window`,
      type: `resize`,
      listener: t,
      when: n === void 0 ? !0 : n,
    });
  },
  ms = 0,
  hs = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = Zo(R(!1), 2),
      r = n[0],
      i = n[1],
      a = B(null),
      o = He(Uo),
      s = Y.isClient() ? window.document : void 0,
      c = t.document,
      l = c === void 0 ? s : c,
      u = t.manual,
      d = u === void 0 ? !1 : u,
      f = t.name,
      p = f === void 0 ? `style_${++ms}` : f,
      m = t.id,
      h = m === void 0 ? void 0 : m,
      g = t.media,
      _ = g === void 0 ? void 0 : g,
      v = function (e) {
        var t = e.querySelector(`style[data-primereact-style-id="${p}"]`);
        if (t) return t;
        if (h !== void 0) {
          var n = l.getElementById(h);
          if (n) return n;
        }
        return l.createElement(`style`);
      },
      y = function (t) {
        r && e !== t && (a.current.textContent = t);
      },
      b = function () {
        if (!(!l || r)) {
          var t = o?.styleContainer || l.head;
          ((a.current = v(t)),
            a.current.isConnected ||
              ((a.current.type = `text/css`),
              h && (a.current.id = h),
              _ && (a.current.media = _),
              Y.addNonce(a.current, (o && o.nonce) || Go.nonce),
              t.appendChild(a.current),
              p && a.current.setAttribute(`data-primereact-style-id`, p)),
            (a.current.textContent = e),
            i(!0));
        }
      };
    return (
      Le(
        function () {
          d || b();
        },
        [d],
      ),
      {
        id: h,
        name: p,
        update: y,
        unload: function () {
          !l || !a.current || (Y.removeInlineStyle(a.current), i(!1));
        },
        load: b,
        isLoaded: r,
      }
    );
  },
  gs = function (e, t) {
    var n = B(!1);
    return Le(function () {
      if (!n.current) {
        n.current = !0;
        return;
      }
      return e && e();
    }, t);
  };
function _s(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function vs(e) {
  if (Array.isArray(e)) return _s(e);
}
function ys(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function bs(e, t) {
  if (e) {
    if (typeof e == `string`) return _s(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? _s(e, t)
          : void 0
    );
  }
}
function xs() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ss(e) {
  return vs(e) || ys(e) || bs(e) || xs();
}
function Cs(e) {
  "@babel/helpers - typeof";
  return (
    (Cs =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Cs(e)
  );
}
function ws(e, t) {
  if (Cs(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Cs(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Ts(e) {
  var t = ws(e, `string`);
  return Cs(t) == `symbol` ? t : t + ``;
}
function Es(e, t, n) {
  return (
    (t = Ts(t)) in e
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
function Ds(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ds(Object(n), !0).forEach(function (t) {
          Es(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ds(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ks = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,
  As = `
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon {
    pointer-events: none;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-group .p-button {
    margin: 0;
}

.p-button-group .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-button-group .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-button-group .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-button-group .p-button:focus {
    position: relative;
    z-index: 1;
}

.p-button-group-single .p-button:first-of-type {
    border-top-right-radius: var(--border-radius) !important;
    border-bottom-right-radius: var(--border-radius) !important;
}

.p-button-group-single .p-button:last-of-type {
    border-top-left-radius: var(--border-radius) !important;
    border-bottom-left-radius: var(--border-radius) !important;
}

    
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}

    
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

}
`,
  js = {
    cProps: void 0,
    cParams: void 0,
    cName: void 0,
    defaultProps: { pt: void 0, ptOptions: void 0, unstyled: !1 },
    context: {},
    globalCSS: void 0,
    classes: {},
    styles: ``,
    extend: function () {
      var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = e.css,
        n = Os(Os({}, e.defaultProps), js.defaultProps),
        r = {},
        i = function (e) {
          return (
            (js.context =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {}),
            (js.cProps = e),
            X.getMergedProps(e, n)
          );
        },
        a = function (e) {
          return X.getDiffProps(e, n);
        },
        o = function () {
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : ``,
            n =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            r =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : !0;
          e.hasOwnProperty(`pt`) && e.pt !== void 0 && (e = e.pt);
          var i = t,
            a = /./g.test(i) && !!n[i.split(`.`)[0]],
            o = a ? X.toFlatCase(i.split(`.`)[1]) : X.toFlatCase(i),
            s =
              (n.hostName && X.toFlatCase(n.hostName)) ||
              (n.props && n.props.__TYPE && X.toFlatCase(n.props.__TYPE)) ||
              ``,
            c = o === `transition`,
            l = `data-pc-`,
            u = function (e) {
              return e != null && e.props
                ? e.hostName
                  ? e.props.__TYPE === e.hostName
                    ? e.props
                    : u(e.parent)
                  : e.parent
                : void 0;
            },
            d = function (e) {
              return n.props?.[e] || u(n)?.[e];
            };
          ((js.cParams = n), (js.cName = s));
          var f = d(`ptOptions`) || js.context.ptOptions || {},
            p = f.mergeSections,
            m = p === void 0 ? !0 : p,
            h = f.mergeProps,
            g = h === void 0 ? !1 : h,
            _ = function () {
              var e = Ms.apply(void 0, arguments);
              return Array.isArray(e)
                ? { className: Za.apply(void 0, Ss(e)) }
                : X.isString(e)
                  ? { className: e }
                  : e != null &&
                      e.hasOwnProperty(`className`) &&
                      Array.isArray(e.className)
                    ? { className: Za.apply(void 0, Ss(e.className)) }
                    : e;
            },
            v = r ? (a ? Ls(_, i, n) : Rs(_, i, n)) : void 0,
            y = a ? void 0 : Ps(Ns(e, s), _, i, n),
            b =
              !c &&
              Os(
                Os(
                  {},
                  o === `root` &&
                    Es(
                      {},
                      `${l}name`,
                      n.props && n.props.__parentMetadata
                        ? X.toFlatCase(n.props.__TYPE)
                        : s,
                    ),
                ),
                {},
                Es({}, `${l}section`, o),
              );
          return m || (!m && y)
            ? g
              ? Co([v, y, Object.keys(b).length ? b : {}], {
                  classNameMergeFunction:
                    js.context.ptOptions?.classNameMergeFunction,
                })
              : Os(Os(Os({}, v), y), Object.keys(b).length ? b : {})
            : Os(Os({}, y), Object.keys(b).length ? b : {});
        };
      return Os(
        Os(
          {
            getProps: i,
            getOtherProps: a,
            setMetaData: function () {
              var e =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                n = e.props,
                i = e.state,
                a = function () {
                  var t =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : ``,
                    r =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {};
                  return o((n || {}).pt, t, Os(Os({}, e), r));
                },
                s = function () {
                  return o(
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : ``,
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {},
                    !1,
                  );
                },
                c = function () {
                  return js.context.unstyled || Go.unstyled || n.unstyled;
                };
              return {
                ptm: a,
                ptmo: s,
                sx: function () {
                  var e =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : ``,
                    a =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {};
                  if (
                    !(arguments.length > 2 && arguments[2] !== void 0) ||
                    arguments[2]
                  ) {
                    var o = Ms(
                      t && t.inlineStyles,
                      e,
                      Os({ props: n, state: i }, a),
                    );
                    return Co([Ms(r, e, Os({ props: n, state: i }, a)), o], {
                      classNameMergeFunction:
                        js.context.ptOptions?.classNameMergeFunction,
                    });
                  }
                },
                cx: function () {
                  var e =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : ``,
                    r =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {};
                  return c()
                    ? void 0
                    : Ms(t && t.classes, e, Os({ props: n, state: i }, r));
                },
                isUnstyled: c,
              };
            },
          },
          e,
        ),
        {},
        { defaultProps: n },
      );
    },
  },
  Ms = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ``,
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = String(X.toFlatCase(t)).split(`.`),
      i = r.shift(),
      a = X.isNotEmpty(e)
        ? Object.keys(e).find(function (e) {
            return X.toFlatCase(e) === i;
          })
        : ``;
    return i
      ? X.isObject(e)
        ? Ms(X.getItemValue(e[a], n), r.join(`.`), n)
        : void 0
      : X.getItemValue(e, n);
  },
  Ns = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ``,
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = e?._usept,
      i = function (e) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          i = n ? n(e) : e,
          a = X.toFlatCase(t);
        return (r && a === js.cName ? void 0 : i?.[a]) ?? i;
      };
    return X.isNotEmpty(r)
      ? { _usept: r, originalValue: i(e.originalValue), value: i(e.value) }
      : i(e, !0);
  },
  Ps = function (e, t, n, r) {
    var i = function (e) {
      return t(e, n, r);
    };
    if (e != null && e.hasOwnProperty(`_usept`)) {
      var a = e._usept || js.context.ptOptions || {},
        o = a.mergeSections,
        s = o === void 0 ? !0 : o,
        c = a.mergeProps,
        l = c === void 0 ? !1 : c,
        u = a.classNameMergeFunction,
        d = i(e.originalValue),
        f = i(e.value);
      return d === void 0 && f === void 0
        ? void 0
        : X.isString(f)
          ? f
          : X.isString(d)
            ? d
            : s || (!s && f)
              ? l
                ? Co([d, f], { classNameMergeFunction: u })
                : Os(Os({}, d), f)
              : f;
    }
    return i(e);
  },
  Fs = function () {
    return Ns(js.context.pt || Go.pt, void 0, function (e) {
      return X.getItemValue(e, js.cParams);
    });
  },
  Is = function () {
    return Ns(js.context.pt || Go.pt, void 0, function (e) {
      return Ms(e, js.cName, js.cParams) || X.getItemValue(e, js.cParams);
    });
  },
  Ls = function (e, t, n) {
    return Ps(Fs(), e, t, n);
  },
  Rs = function (e, t, n) {
    return Ps(Is(), e, t, n);
  },
  zs = function (e) {
    var t =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : function () {},
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = n.name,
      i = n.styled,
      a = i === void 0 ? !1 : i,
      o = n.hostName,
      s = o === void 0 ? `` : o,
      c = Ls(Ms, `global.css`, js.cParams),
      l = X.toFlatCase(r),
      u = hs(ks, { name: `base`, manual: !0 }).load,
      d = hs(As, { name: `common`, manual: !0 }).load,
      f = hs(c, { name: `global`, manual: !0 }).load,
      p = hs(e, { name: r, manual: !0 }).load,
      m = function (e) {
        if (!s) {
          var t = Ps(Ns((js.cProps || {}).pt, l), Ms, `hooks.${e}`),
            n = Rs(Ms, `hooks.${e}`);
          (t?.(), n?.());
        }
      };
    (m(`useMountEffect`),
      ds(function () {
        (u(), f(), t() || (d(), a || p()));
      }),
      gs(function () {
        m(`useUpdateEffect`);
      }),
      $o(function () {
        m(`useUnmountEffect`);
      }));
  };
function Bs() {
  return (
    (Bs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bs.apply(null, arguments)
  );
}
function Vs(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Hs(e, t) {
  return (
    (Hs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    Hs(e, t)
  );
}
function Us(e, t) {
  ((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Hs(e, t));
}
function Ws(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (` ` + (e.className.baseVal || e.className) + ` `).indexOf(
        ` ` + t + ` `,
      ) !== -1;
}
function Gs(e, t) {
  e.classList
    ? e.classList.add(t)
    : Ws(e, t) ||
      (typeof e.className == `string`
        ? (e.className = e.className + ` ` + t)
        : e.setAttribute(
            `class`,
            ((e.className && e.className.baseVal) || ``) + ` ` + t,
          ));
}
function Ks(e, t) {
  return e
    .replace(RegExp(`(^|\\s)` + t + `(?:\\s|$)`, `g`), `$1`)
    .replace(/\s+/g, ` `)
    .replace(/^\s*|\s*$/g, ``);
}
function qs(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == `string`
      ? (e.className = Ks(e.className, t))
      : e.setAttribute(
          `class`,
          Ks((e.className && e.className.baseVal) || ``, t),
        );
}
var Js = { disabled: !1 },
  Ys = G.createContext(null),
  Xs = function (e) {
    return e.scrollTop;
  },
  Zs = `unmounted`,
  Qs = `exited`,
  $s = `entering`,
  ec = `entered`,
  tc = `exiting`,
  nc = (function (e) {
    Us(t, e);
    function t(t, n) {
      var r = e.call(this, t, n) || this,
        i = n,
        a = i && !i.isMounting ? t.enter : t.appear,
        o;
      return (
        (r.appearStatus = null),
        t.in
          ? a
            ? ((o = Qs), (r.appearStatus = $s))
            : (o = ec)
          : (o = t.unmountOnExit || t.mountOnEnter ? Zs : Qs),
        (r.state = { status: o }),
        (r.nextCallback = null),
        r
      );
    }
    t.getDerivedStateFromProps = function (e, t) {
      return e.in && t.status === `unmounted` ? { status: Qs } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in
            ? n !== `entering` && n !== `entered` && (t = $s)
            : (n === `entering` || n === `entered`) && (t = tc);
        }
        this.updateStatus(!1, t);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var e = this.props.timeout,
          t = (n = r = e),
          n,
          r;
        return (
          e != null &&
            typeof e != `number` &&
            ((t = e.exit),
            (n = e.enter),
            (r = e.appear === void 0 ? n : e.appear)),
          { exit: t, enter: n, appear: r }
        );
      }),
      (n.updateStatus = function (e, t) {
        if ((e === void 0 && (e = !1), t !== null))
          if ((this.cancelNextCallback(), t === `entering`)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var n = this.props.nodeRef
                ? this.props.nodeRef.current
                : G.findDOMNode(this);
              n && Xs(n);
            }
            this.performEnter(e);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === `exited` &&
            this.setState({ status: Zs });
      }),
      (n.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          r = this.context ? this.context.isMounting : e,
          i = this.props.nodeRef ? [r] : [G.findDOMNode(this), r],
          a = i[0],
          o = i[1],
          s = this.getTimeouts(),
          c = r ? s.appear : s.enter;
        if ((!e && !n) || Js.disabled) {
          this.safeSetState({ status: ec }, function () {
            t.props.onEntered(a);
          });
          return;
        }
        (this.props.onEnter(a, o),
          this.safeSetState({ status: $s }, function () {
            (t.props.onEntering(a, o),
              t.onTransitionEnd(c, function () {
                t.safeSetState({ status: ec }, function () {
                  t.props.onEntered(a, o);
                });
              }));
          }));
      }),
      (n.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : G.findDOMNode(this);
        if (!t || Js.disabled) {
          this.safeSetState({ status: Qs }, function () {
            e.props.onExited(r);
          });
          return;
        }
        (this.props.onExit(r),
          this.safeSetState({ status: tc }, function () {
            (e.props.onExiting(r),
              e.onTransitionEnd(n.exit, function () {
                e.safeSetState({ status: Qs }, function () {
                  e.props.onExited(r);
                });
              }));
          }));
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (e, t) {
        ((t = this.setNextCallback(t)), this.setState(e, t));
      }),
      (n.setNextCallback = function (e) {
        var t = this,
          n = !0;
        return (
          (this.nextCallback = function (r) {
            n && ((n = !1), (t.nextCallback = null), e(r));
          }),
          (this.nextCallback.cancel = function () {
            n = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (e, t) {
        this.setNextCallback(t);
        var n = this.props.nodeRef
            ? this.props.nodeRef.current
            : G.findDOMNode(this),
          r = e == null && !this.props.addEndListener;
        if (!n || r) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var i = this.props.nodeRef
              ? [this.nextCallback]
              : [n, this.nextCallback],
            a = i[0],
            o = i[1];
          this.props.addEndListener(a, o);
        }
        e != null && setTimeout(this.nextCallback, e);
      }),
      (n.render = function () {
        var e = this.state.status;
        if (e === `unmounted`) return null;
        var t = this.props,
          n = t.children;
        (t.in,
          t.mountOnEnter,
          t.unmountOnExit,
          t.appear,
          t.enter,
          t.exit,
          t.timeout,
          t.addEndListener,
          t.onEnter,
          t.onEntering,
          t.onEntered,
          t.onExit,
          t.onExiting,
          t.onExited,
          t.nodeRef);
        var r = Vs(t, [
          `children`,
          `in`,
          `mountOnEnter`,
          `unmountOnExit`,
          `appear`,
          `enter`,
          `exit`,
          `timeout`,
          `addEndListener`,
          `onEnter`,
          `onEntering`,
          `onEntered`,
          `onExit`,
          `onExiting`,
          `onExited`,
          `nodeRef`,
        ]);
        return G.createElement(
          Ys.Provider,
          { value: null },
          typeof n == `function`
            ? n(e, r)
            : G.cloneElement(G.Children.only(n), r),
        );
      }),
      t
    );
  })(G.Component);
((nc.contextType = Ys), (nc.propTypes = {}));
function rc() {}
((nc.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: rc,
  onEntering: rc,
  onEntered: rc,
  onExit: rc,
  onExiting: rc,
  onExited: rc,
}),
  (nc.UNMOUNTED = Zs),
  (nc.EXITED = Qs),
  (nc.ENTERING = $s),
  (nc.ENTERED = ec),
  (nc.EXITING = tc));
var ic = function (e, t) {
    return (
      e &&
      t &&
      t.split(` `).forEach(function (t) {
        return Gs(e, t);
      })
    );
  },
  ac = function (e, t) {
    return (
      e &&
      t &&
      t.split(` `).forEach(function (t) {
        return qs(e, t);
      })
    );
  },
  oc = (function (e) {
    Us(t, e);
    function t() {
      var t,
        n = [...arguments];
      return (
        (t = e.call.apply(e, [this].concat(n)) || this),
        (t.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (t.onEnter = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1];
          (t.removeClasses(i, `exit`),
            t.addClass(i, a ? `appear` : `enter`, `base`),
            t.props.onEnter && t.props.onEnter(e, n));
        }),
        (t.onEntering = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1] ? `appear` : `enter`;
          (t.addClass(i, a, `active`),
            t.props.onEntering && t.props.onEntering(e, n));
        }),
        (t.onEntered = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1] ? `appear` : `enter`;
          (t.removeClasses(i, a),
            t.addClass(i, a, `done`),
            t.props.onEntered && t.props.onEntered(e, n));
        }),
        (t.onExit = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.removeClasses(n, `appear`),
            t.removeClasses(n, `enter`),
            t.addClass(n, `exit`, `base`),
            t.props.onExit && t.props.onExit(e));
        }),
        (t.onExiting = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.addClass(n, `exit`, `active`),
            t.props.onExiting && t.props.onExiting(e));
        }),
        (t.onExited = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.removeClasses(n, `exit`),
            t.addClass(n, `exit`, `done`),
            t.props.onExited && t.props.onExited(e));
        }),
        (t.resolveArguments = function (e, n) {
          return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
        }),
        (t.getClassNames = function (e) {
          var n = t.props.classNames,
            r = typeof n == `string`,
            i = r && n ? n + `-` : ``,
            a = r ? `` + i + e : n[e];
          return {
            baseClassName: a,
            activeClassName: r ? a + `-active` : n[e + `Active`],
            doneClassName: r ? a + `-done` : n[e + `Done`],
          };
        }),
        t
      );
    }
    var n = t.prototype;
    return (
      (n.addClass = function (e, t, n) {
        var r = this.getClassNames(t)[n + `ClassName`],
          i = this.getClassNames(`enter`).doneClassName;
        (t === `appear` && n === `done` && i && (r += ` ` + i),
          n === `active` && e && Xs(e),
          r && ((this.appliedClasses[t][n] = r), ic(e, r)));
      }),
      (n.removeClasses = function (e, t) {
        var n = this.appliedClasses[t],
          r = n.base,
          i = n.active,
          a = n.done;
        ((this.appliedClasses[t] = {}),
          r && ac(e, r),
          i && ac(e, i),
          a && ac(e, a));
      }),
      (n.render = function () {
        var e = this.props;
        e.classNames;
        var t = Vs(e, [`classNames`]);
        return G.createElement(
          nc,
          Bs({}, t, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      t
    );
  })(G.Component);
((oc.defaultProps = { classNames: `` }), (oc.propTypes = {}));
function sc(e) {
  "@babel/helpers - typeof";
  return (
    (sc =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    sc(e)
  );
}
function cc(e, t) {
  if (sc(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (sc(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function lc(e) {
  var t = cc(e, `string`);
  return sc(t) == `symbol` ? t : t + ``;
}
function uc(e, t, n) {
  return (
    (t = lc(t)) in e
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
var dc = {
  defaultProps: { __TYPE: `CSSTransition`, children: void 0 },
  getProps: function (e) {
    return X.getMergedProps(e, dc.defaultProps);
  },
  getOtherProps: function (e) {
    return X.getDiffProps(e, dc.defaultProps);
  },
};
function fc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function pc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fc(Object(n), !0).forEach(function (t) {
          uc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var mc = U(function (e, t) {
  var n = dc.getProps(e),
    r = He(Uo),
    i =
      n.disabled ||
      (n.options && n.options.disabled) ||
      (r && !r.cssTransition) ||
      !Go.cssTransition,
    a = function (e, t) {
      (n.onEnter && n.onEnter(e, t),
        n.options && n.options.onEnter && n.options.onEnter(e, t));
    },
    o = function (e, t) {
      (n.onEntering && n.onEntering(e, t),
        n.options && n.options.onEntering && n.options.onEntering(e, t));
    },
    s = function (e, t) {
      (n.onEntered && n.onEntered(e, t),
        n.options && n.options.onEntered && n.options.onEntered(e, t));
    },
    c = function (e) {
      (n.onExit && n.onExit(e),
        n.options && n.options.onExit && n.options.onExit(e));
    },
    l = function (e) {
      (n.onExiting && n.onExiting(e),
        n.options && n.options.onExiting && n.options.onExiting(e));
    },
    u = function (e) {
      (n.onExited && n.onExited(e),
        n.options && n.options.onExited && n.options.onExited(e));
    };
  if (
    (gs(
      function () {
        if (i) {
          var e = X.getRefElement(n.nodeRef);
          n.in ? (a(e, !0), o(e, !0), s(e, !0)) : (c(e), l(e), u(e));
        }
      },
      [n.in],
    ),
    i)
  )
    return n.in ? n.children : null;
  var d = {
    nodeRef: n.nodeRef,
    in: n.in,
    appear: n.appear,
    onEnter: a,
    onEntering: o,
    onEntered: s,
    onExit: c,
    onExiting: l,
    onExited: u,
  };
  return O(
    oc,
    pc(
      pc(
        pc(
          {},
          {
            classNames: n.classNames,
            timeout: n.timeout,
            unmountOnExit: n.unmountOnExit,
          },
        ),
        n.options || {},
      ),
      d,
    ),
    n.children,
  );
});
mc.displayName = `CSSTransition`;
var hc = {
  defaultProps: { __TYPE: `IconBase`, className: null, label: null, spin: !1 },
  getProps: function (e) {
    return X.getMergedProps(e, hc.defaultProps);
  },
  getOtherProps: function (e) {
    return X.getDiffProps(e, hc.defaultProps);
  },
  getPTI: function (e) {
    var t = X.isEmpty(e.label),
      n = hc.getOtherProps(e),
      r = {
        className: Za(`p-icon`, { "p-icon-spin": e.spin }, e.className),
        role: t ? void 0 : `img`,
        "aria-label": t ? void 0 : e.label,
        "aria-hidden": e.label ? t : void 0,
      };
    return X.getMergedProps(n, r);
  },
};
function gc() {
  return (
    (gc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gc.apply(null, arguments)
  );
}
var _c = at(
  U(function (e, t) {
    var n = hc.getPTI(e);
    return O(
      `svg`,
      gc(
        {
          ref: t,
          width: `14`,
          height: `14`,
          viewBox: `0 0 14 14`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
        },
        n,
      ),
      O(`path`, {
        d: `M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z`,
        fill: `currentColor`,
      }),
    );
  }),
);
_c.displayName = `TimesIcon`;
function vc() {
  return (
    (vc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vc.apply(null, arguments)
  );
}
var yc = at(
  U(function (e, t) {
    var n = hc.getPTI(e);
    return O(
      `svg`,
      vc(
        {
          ref: t,
          width: `14`,
          height: `14`,
          viewBox: `0 0 14 14`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
        },
        n,
      ),
      O(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z`,
        fill: `currentColor`,
      }),
    );
  }),
);
yc.displayName = `WindowMaximizeIcon`;
function bc() {
  return (
    (bc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bc.apply(null, arguments)
  );
}
var xc = at(
  U(function (e, t) {
    var n = hc.getPTI(e);
    return O(
      `svg`,
      bc(
        {
          ref: t,
          width: `14`,
          height: `14`,
          viewBox: `0 0 14 14`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
        },
        n,
      ),
      O(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z`,
        fill: `currentColor`,
      }),
    );
  }),
);
xc.displayName = `WindowMinimizeIcon`;
function Sc(e) {
  if (Array.isArray(e)) return e;
}
function Cc(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function wc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Tc(e, t) {
  if (e) {
    if (typeof e == `string`) return wc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? wc(e, t)
          : void 0
    );
  }
}
function Ec() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dc(e, t) {
  return Sc(e) || Cc(e, t) || Tc(e, t) || Ec();
}
var Oc = {
    defaultProps: {
      __TYPE: `Portal`,
      element: null,
      appendTo: null,
      visible: !1,
      onMounted: null,
      onUnmounted: null,
      children: void 0,
    },
    getProps: function (e) {
      return X.getMergedProps(e, Oc.defaultProps);
    },
    getOtherProps: function (e) {
      return X.getDiffProps(e, Oc.defaultProps);
    },
  },
  kc = at(function (e) {
    var t = Oc.getProps(e),
      n = He(Uo),
      r = Dc(R(t.visible && Y.isClient()), 2),
      i = r[0],
      a = r[1];
    (ds(function () {
      Y.isClient() && !i && (a(!0), t.onMounted && t.onMounted());
    }),
      gs(
        function () {
          t.onMounted && t.onMounted();
        },
        [i],
      ),
      $o(function () {
        t.onUnmounted && t.onUnmounted();
      }));
    var o = t.element || t.children;
    if (o && i) {
      var s = t.appendTo || (n && n.appendTo) || Go.appendTo;
      return (
        X.isFunction(s) && (s = s()),
        (s ||= document.body),
        s === `self` ? o : G.createPortal(o, s)
      );
    }
    return null;
  });
kc.displayName = `Portal`;
function Ac() {
  return (
    (Ac = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ac.apply(null, arguments)
  );
}
function jc(e) {
  "@babel/helpers - typeof";
  return (
    (jc =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    jc(e)
  );
}
function Mc(e, t) {
  if (jc(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (jc(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Nc(e) {
  var t = Mc(e, `string`);
  return jc(t) == `symbol` ? t : t + ``;
}
function Pc(e, t, n) {
  return (
    (t = Nc(t)) in e
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
function Fc(e) {
  if (Array.isArray(e)) return e;
}
function Ic(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Lc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Rc(e, t) {
  if (e) {
    if (typeof e == `string`) return Lc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Lc(e, t)
          : void 0
    );
  }
}
function zc() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bc(e, t) {
  return Fc(e) || Ic(e, t) || Rc(e, t) || zc();
}
var Vc = js.extend({
  defaultProps: { __TYPE: `Ripple`, children: void 0 },
  css: {
    styles: `
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`,
    classes: { root: `p-ink` },
  },
  getProps: function (e) {
    return X.getMergedProps(e, Vc.defaultProps);
  },
  getOtherProps: function (e) {
    return X.getDiffProps(e, Vc.defaultProps);
  },
});
function Hc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Uc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Hc(Object(n), !0).forEach(function (t) {
          Pc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Wc = at(
  U(function (e, t) {
    var n = Bc(R(!1), 2),
      r = n[0],
      i = n[1],
      a = B(null),
      o = B(null),
      s = us(),
      c = He(Uo),
      l = Vc.getProps(e, c),
      u = (c && c.ripple) || Go.ripple,
      d = { props: l };
    hs(Vc.css.styles, { name: `ripple`, manual: !u });
    var f = Vc.setMetaData(Uc({}, d)),
      p = f.ptm,
      m = f.cx,
      h = function () {
        return a.current && a.current.parentElement;
      },
      g = function () {
        o.current && o.current.addEventListener(`pointerdown`, v);
      },
      _ = function () {
        o.current && o.current.removeEventListener(`pointerdown`, v);
      },
      v = function (e) {
        var t = Y.getOffset(o.current);
        y(
          e.pageX -
            t.left +
            document.body.scrollTop -
            Y.getWidth(a.current) / 2,
          e.pageY -
            t.top +
            document.body.scrollLeft -
            Y.getHeight(a.current) / 2,
        );
      },
      y = function (e, t) {
        !a.current ||
          getComputedStyle(a.current, null).display === `none` ||
          (Y.removeClass(a.current, `p-ink-active`),
          x(),
          (a.current.style.top = t + `px`),
          (a.current.style.left = e + `px`),
          Y.addClass(a.current, `p-ink-active`));
      },
      b = function (e) {
        Y.removeClass(e.currentTarget, `p-ink-active`);
      },
      x = function () {
        if (a.current && !Y.getHeight(a.current) && !Y.getWidth(a.current)) {
          var e = Math.max(
            Y.getOuterWidth(o.current),
            Y.getOuterHeight(o.current),
          );
          ((a.current.style.height = e + `px`),
            (a.current.style.width = e + `px`));
        }
      };
    if (
      (ze(t, function () {
        return {
          props: l,
          getInk: function () {
            return a.current;
          },
          getTarget: function () {
            return o.current;
          },
        };
      }),
      ds(function () {
        i(!0);
      }),
      gs(
        function () {
          r && a.current && ((o.current = h()), x(), g());
        },
        [r],
      ),
      gs(function () {
        a.current && !o.current && ((o.current = h()), x(), g());
      }),
      $o(function () {
        a.current && ((o.current = null), _());
      }),
      !u)
    )
      return null;
    var S = s(
      { "aria-hidden": !0, className: Za(m(`root`)) },
      Vc.getOtherProps(l),
      p(`root`),
    );
    return O(
      `span`,
      Ac({ role: `presentation`, ref: a }, S, { onAnimationEnd: b }),
    );
  }),
);
Wc.displayName = `Ripple`;
function Gc() {
  return (
    (Gc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gc.apply(null, arguments)
  );
}
function Kc(e) {
  "@babel/helpers - typeof";
  return (
    (Kc =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Kc(e)
  );
}
function qc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Jc(e) {
  if (Array.isArray(e)) return qc(e);
}
function Yc(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function Xc(e, t) {
  if (e) {
    if (typeof e == `string`) return qc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? qc(e, t)
          : void 0
    );
  }
}
function Zc() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qc(e) {
  return Jc(e) || Yc(e) || Xc(e) || Zc();
}
function $c(e, t) {
  if (Kc(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Kc(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function el(e) {
  var t = $c(e, `string`);
  return Kc(t) == `symbol` ? t : t + ``;
}
function tl(e, t, n) {
  return (
    (t = el(t)) in e
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
function nl(e) {
  if (Array.isArray(e)) return e;
}
function rl(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function il() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function al(e, t) {
  return nl(e) || rl(e, t) || Xc(e, t) || il();
}
var ol = js.extend({
  defaultProps: { __TYPE: `FocusTrap`, children: void 0 },
  css: { styles: `` },
  getProps: function (e) {
    return X.getMergedProps(e, ol.defaultProps);
  },
  getOtherProps: function (e) {
    return X.getDiffProps(e, ol.defaultProps);
  },
});
function sl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function cl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? sl(Object(n), !0).forEach(function (t) {
          tl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : sl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ll = G.memo(
  G.forwardRef(function (e, t) {
    var n = G.useRef(null),
      r = G.useRef(null),
      i = G.useRef(null),
      a = G.useContext(Uo),
      o = ol.getProps(e, a),
      s = { props: o };
    (hs(ol.css.styles, { name: `focustrap` }),
      ol.setMetaData(cl({}, s)).ptm,
      G.useImperativeHandle(t, function () {
        return {
          props: o,
          getInk: function () {
            return r.current;
          },
          getTarget: function () {
            return n.current;
          },
        };
      }),
      ds(function () {
        o.disabled || ((n.current = c()), l(n.current));
      }));
    var c = function () {
        return r.current && r.current.parentElement;
      },
      l = function (e) {
        var t = o || {},
          n = t.autoFocusSelector,
          r = n === void 0 ? `` : n,
          i = t.firstFocusableSelector,
          a = i === void 0 ? `` : i,
          s = t.autoFocus,
          c = s === void 0 ? !1 : s,
          l = `${u(r)}`,
          d = `[autofocus]${l}, [data-pc-autofocus='true']${l}`,
          f = Y.getFirstFocusableElement(e, d);
        (c && !f && (f = Y.getFirstFocusableElement(e, u(a))), Y.focus(f));
      },
      u = function (e) {
        return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e ?? ``}`;
      },
      d = function (e) {
        var t,
          r = e.currentTarget,
          i = e.relatedTarget,
          a =
            i === r.$_pfocustrap_lasthiddenfocusableelement ||
            !((t = n.current) != null && t.contains(i))
              ? Y.getFirstFocusableElement(
                  r.parentElement,
                  u(r.$_pfocustrap_focusableselector),
                )
              : r.$_pfocustrap_lasthiddenfocusableelement;
        Y.focus(a);
      },
      f = function (e) {
        var t,
          r = e.currentTarget,
          i = e.relatedTarget,
          a =
            i === r.$_pfocustrap_firsthiddenfocusableelement ||
            !((t = n.current) != null && t.contains(i))
              ? Y.getLastFocusableElement(
                  r.parentElement,
                  u(r.$_pfocustrap_focusableselector),
                )
              : r.$_pfocustrap_firsthiddenfocusableelement;
        Y.focus(a);
      };
    return (function () {
      var e = (o || {}).tabIndex,
        t = e === void 0 ? 0 : e,
        n = function (e, n, r) {
          return G.createElement(`span`, {
            ref: e,
            className: `p-hidden-accessible p-hidden-focusable`,
            tabIndex: t,
            role: `presentation`,
            "aria-hidden": !0,
            "data-p-hidden-accessible": !0,
            "data-p-hidden-focusable": !0,
            onFocus: n,
            "data-pc-section": r,
          });
        },
        a = n(r, d, `firstfocusableelement`),
        s = n(i, f, `lastfocusableelement`);
      return (
        r.current &&
          i.current &&
          ((r.current.$_pfocustrap_lasthiddenfocusableelement = i.current),
          (i.current.$_pfocustrap_firsthiddenfocusableelement = r.current)),
        G.createElement(G.Fragment, null, a, o.children, s)
      );
    })();
  }),
);
function ul(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ul(Object(n), !0).forEach(function (t) {
          tl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ul(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var fl = js.extend({
  defaultProps: {
    __TYPE: `Dialog`,
    __parentMetadata: null,
    appendTo: null,
    ariaCloseIconLabel: null,
    baseZIndex: 0,
    blockScroll: !1,
    breakpoints: null,
    className: null,
    closable: !0,
    closeIcon: null,
    closeOnEscape: !0,
    content: null,
    contentClassName: null,
    contentStyle: null,
    dismissableMask: !1,
    draggable: !0,
    focusOnShow: !0,
    footer: null,
    footerClassName: null,
    header: null,
    headerClassName: null,
    headerStyle: null,
    icons: null,
    id: null,
    keepInViewport: !0,
    maskClassName: null,
    maskStyle: null,
    maximizable: !1,
    maximizeIcon: null,
    maximized: !1,
    minX: 0,
    minY: 0,
    minimizeIcon: null,
    modal: !0,
    onClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragStart: null,
    onHide: null,
    onMaskClick: null,
    onMaximize: null,
    onResize: null,
    onResizeEnd: null,
    onResizeStart: null,
    onShow: null,
    position: `center`,
    resizable: !0,
    rtl: !1,
    showHeader: !0,
    showCloseIcon: !0,
    style: null,
    transitionOptions: null,
    visible: !1,
    children: void 0,
  },
  css: {
    classes: {
      closeButtonIcon: `p-dialog-header-close-icon`,
      closeButton: `p-dialog-header-icon p-dialog-header-close p-link`,
      maximizableIcon: `p-dialog-header-maximize-icon`,
      maximizableButton: `p-dialog-header-icon p-dialog-header-maximize p-link`,
      header: function (e) {
        var t = e.props;
        return Za(`p-dialog-header`, t.headerClassName);
      },
      headerTitle: `p-dialog-title`,
      headerIcons: `p-dialog-header-icons`,
      content: function (e) {
        var t = e.props;
        return Za(`p-dialog-content`, t.contentClassName);
      },
      footer: function (e) {
        var t = e.props;
        return Za(`p-dialog-footer`, t.footerClassName);
      },
      mask: function (e) {
        var t = e.props,
          n = e.maskVisibleState,
          r = [
            `center`,
            `left`,
            `right`,
            `top`,
            `top-left`,
            `top-right`,
            `bottom`,
            `bottom-left`,
            `bottom-right`,
          ].find(function (e) {
            return e === t.position || e.replace(`-`, ``) === t.position;
          });
        return Za(
          `p-dialog-mask`,
          r ? `p-dialog-${r}` : ``,
          {
            "p-component-overlay p-component-overlay-enter": t.modal,
            "p-dialog-visible": n,
            "p-dialog-draggable": t.draggable,
            "p-dialog-resizable": t.resizable,
          },
          t.maskClassName,
        );
      },
      root: function (e) {
        var t = e.props,
          n = e.maximized,
          r = e.context;
        return Za(`p-dialog p-component`, {
          "p-dialog-rtl": t.rtl,
          "p-dialog-maximized": n,
          "p-dialog-default": !n,
          "p-input-filled":
            (r && r.inputStyle === `filled`) || Go.inputStyle === `filled`,
          "p-ripple-disabled": (r && r.ripple === !1) || Go.ripple === !1,
        });
      },
      transition: `p-dialog`,
    },
    styles: `
@layer primereact {
    .p-dialog-mask {
        background-color: transparent;
        transition-property: background-color;
    }

    .p-dialog-visible {
        display: flex;
    }

    .p-dialog-mask.p-component-overlay {
        pointer-events: auto;
    }

    .p-dialog {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        max-height: 90%;
        transform: scale(1);
        position: relative;
    }

    .p-dialog-content {
        overflow-y: auto;
        flex-grow: 1;
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .p-dialog-footer {
        flex-shrink: 0;
    }

    .p-dialog .p-dialog-header-icons {
        display: flex;
        align-items: center;
        align-self: flex-start;
        flex-shrink: 0;
    }

    .p-dialog .p-dialog-header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    .p-dialog .p-dialog-title {
        flex-grow: 1;
    }

    /* Fluid */
    .p-fluid .p-dialog-footer .p-button {
        width: auto;
    }

    /* Animation */
    /* Center */
    .p-dialog-enter {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-dialog-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-dialog-enter-done {
        transform: none;
    }

    .p-dialog-exit-active {
        opacity: 0;
        transform: scale(0.7);
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Top, Bottom, Left, Right, Top* and Bottom* */
    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-top-left .p-dialog,
    .p-dialog-top-right .p-dialog,
    .p-dialog-bottom-left .p-dialog,
    .p-dialog-bottom-right .p-dialog {
        margin: 0.75em;
    }

    .p-dialog-top .p-dialog-enter,
    .p-dialog-top .p-dialog-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }

    .p-dialog-bottom .p-dialog-enter,
    .p-dialog-bottom .p-dialog-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }

    .p-dialog-left .p-dialog-enter,
    .p-dialog-left .p-dialog-exit-active,
    .p-dialog-top-left .p-dialog-enter,
    .p-dialog-top-left .p-dialog-exit-active,
    .p-dialog-bottom-left .p-dialog-enter,
    .p-dialog-bottom-left .p-dialog-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-right .p-dialog-enter,
    .p-dialog-right .p-dialog-exit-active,
    .p-dialog-top-right .p-dialog-enter,
    .p-dialog-top-right .p-dialog-exit-active,
    .p-dialog-bottom-right .p-dialog-enter,
    .p-dialog-bottom-right .p-dialog-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-top-left .p-dialog-enter-active,
    .p-dialog-bottom-left .p-dialog-enter-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-top-right .p-dialog-enter-active,
    .p-dialog-bottom-right .p-dialog-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s ease-out;
    }

    .p-dialog-top .p-dialog-exit-active,
    .p-dialog-bottom .p-dialog-exit-active,
    .p-dialog-left .p-dialog-exit-active,
    .p-dialog-top-left .p-dialog-exit-active,
    .p-dialog-bottom-left .p-dialog-exit-active,
    .p-dialog-right .p-dialog-exit-active,
    .p-dialog-top-right .p-dialog-exit-active,
    .p-dialog-bottom-right .p-dialog-exit-active {
        transition: all 0.3s ease-out;
    }

    /* Maximize */
    .p-dialog-maximized {
        transition: none;
        transform: none;
        margin: 0;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-confirm-dialog .p-dialog-content {
        display: flex;
        align-items: center;
    }

    /* Resizable */
    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-draggable .p-dialog-header {
        cursor: move;
    }
}
`,
    inlineStyles: {
      mask: function (e) {
        var t = e.props;
        return dl(
          {
            position: `fixed`,
            height: `100%`,
            width: `100%`,
            left: 0,
            top: 0,
            display: `flex`,
            justifyContent:
              t.position === `left` ||
              t.position === `top-left` ||
              t.position === `bottom-left`
                ? `flex-start`
                : t.position === `right` ||
                    t.position === `top-right` ||
                    t.position === `bottom-right`
                  ? `flex-end`
                  : `center`,
            alignItems:
              t.position === `top` ||
              t.position === `top-left` ||
              t.position === `top-right`
                ? `flex-start`
                : t.position === `bottom` ||
                    t.position === `bottom-left` ||
                    t.position === `bottom-right`
                  ? `flex-end`
                  : `center`,
            pointerEvents: !t.modal && `none`,
          },
          t.maskStyle,
        );
      },
    },
  },
});
function pl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ml(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? pl(Object(n), !0).forEach(function (t) {
          tl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var hl = U(function (e, t) {
  var n = us(),
    r = He(Uo),
    i = fl.getProps(e, r),
    a = i.id ? i.id : _o(),
    o = al(R(a), 2),
    s = o[0];
  o[1];
  var c = al(R(!1), 2),
    l = c[0],
    u = c[1],
    d = al(R(!1), 2),
    f = d[0],
    p = d[1],
    m = al(R(i.maximized), 2),
    h = m[0],
    g = m[1],
    _ = B(null),
    v = B(null),
    y = B(null),
    b = B(null),
    x = B(null),
    S = B(null),
    C = B(null),
    ee = B(!1),
    w = B(!1),
    T = B(null),
    E = B(null),
    te = B(null),
    D = B(a),
    ne = B(null),
    k = i.onMaximize ? i.maximized : h,
    re = f && (i.blockScroll || (i.maximizable && k)),
    A = i.closable && i.closeOnEscape && f,
    ae = ns(`dialog`, A),
    oe = fl.setMetaData(
      ml(
        ml({ props: i }, i.__parentMetadata),
        {},
        { state: { id: s, maximized: k, containerVisible: l } },
      ),
    ),
    j = oe.ptm,
    se = oe.cx,
    ce = oe.sx,
    le = oe.isUnstyled;
  (zs(fl.css.styles, le, { name: `dialog` }),
    ls({
      callback: function (e) {
        be(e);
      },
      when: A && ae,
      priority: [ss.DIALOG, ae],
    }));
  var ue = al(
      es({
        type: `mousemove`,
        target: function () {
          return window.document;
        },
        listener: function (e) {
          return ke(e);
        },
      }),
      2,
    ),
    M = ue[0],
    N = ue[1],
    de = al(
      es({
        type: `mouseup`,
        target: function () {
          return window.document;
        },
        listener: function (e) {
          return Ae(e);
        },
      }),
      2,
    ),
    fe = de[0],
    pe = de[1],
    me = al(
      es({
        type: `mousemove`,
        target: function () {
          return window.document;
        },
        listener: function (e) {
          return Ee(e);
        },
      }),
      2,
    ),
    he = me[0],
    ge = me[1],
    _e = al(
      es({
        type: `mouseup`,
        target: function () {
          return window.document;
        },
        listener: function (e) {
          return De(e);
        },
      }),
      2,
    ),
    ve = _e[0],
    ye = _e[1],
    be = function (e) {
      (i.onHide(e), e.preventDefault());
    },
    xe = function () {
      var e = document.activeElement;
      !(e && _.current && _.current.contains(e)) &&
        i.closable &&
        i.showCloseIcon &&
        i.showHeader &&
        C.current &&
        C.current.focus();
    },
    Se = function (e) {
      ((y.current = e.target), i.onPointerDown && i.onPointerDown(e));
    },
    Ce = function (e) {
      (i.dismissableMask &&
        i.modal &&
        v.current === e.target &&
        !y.current &&
        be(e),
        i.onMaskClick && i.onMaskClick(e),
        (y.current = null));
    },
    we = function (e) {
      (i.onMaximize
        ? i.onMaximize({ originalEvent: e, maximized: !k })
        : g(function (e) {
            return !e;
          }),
        e.preventDefault());
    },
    Te = function (e) {
      Y.hasClass(e.target, `p-dialog-header-icon`) ||
        Y.hasClass(e.target.parentElement, `p-dialog-header-icon`) ||
        (i.draggable &&
          ((ee.current = !0),
          (T.current = e.pageX),
          (E.current = e.pageY),
          Y.addClass(document.body, `p-unselectable-text`),
          i.onDragStart && i.onDragStart(e)));
    },
    Ee = function (e) {
      if (ee.current) {
        var t = Y.getOuterWidth(_.current),
          n = Y.getOuterHeight(_.current),
          r = e.pageX - T.current,
          a = e.pageY - E.current,
          o = _.current.getBoundingClientRect(),
          s = o.left + r,
          c = o.top + a,
          l = Y.getViewport(),
          u = getComputedStyle(_.current),
          d = parseFloat(u.marginLeft),
          f = parseFloat(u.marginTop);
        ((_.current.style.position = `fixed`),
          i.keepInViewport
            ? (s >= i.minX &&
                s + t < l.width &&
                ((T.current = e.pageX), (_.current.style.left = s - d + `px`)),
              c >= i.minY &&
                (a < 0 || c + n < l.height) &&
                ((E.current = e.pageY), (_.current.style.top = c - f + `px`)))
            : ((T.current = e.pageX),
              (_.current.style.left = s - d + `px`),
              (E.current = e.pageY),
              (_.current.style.top = c - f + `px`)),
          i.onDrag && i.onDrag(e));
      }
    },
    De = function (e) {
      ee.current &&
        ((ee.current = !1),
        Y.removeClass(document.body, `p-unselectable-text`),
        i.onDragEnd && i.onDragEnd(e));
    },
    P = function (e) {
      i.resizable &&
        ((w.current = !0),
        (T.current = e.pageX),
        (E.current = e.pageY),
        Y.addClass(document.body, `p-unselectable-text`),
        i.onResizeStart && i.onResizeStart(e));
    },
    Oe = function (e, t, n) {
      !n && (n = Y.getViewport());
      var r = parseInt(e);
      return /^(\d+|(\.\d+))(\.\d+)?%$/.test(e) ? r * (n[t] / 100) : r;
    },
    ke = function (e) {
      if (w.current) {
        var t = e.pageX - T.current,
          n = e.pageY - E.current,
          r = Y.getOuterWidth(_.current),
          a = Y.getOuterHeight(_.current),
          o = _.current.getBoundingClientRect(),
          s = Y.getViewport(),
          c = !parseInt(_.current.style.top) || !parseInt(_.current.style.left),
          l = Oe(_.current.style.minWidth, `width`, s),
          u = Oe(_.current.style.minHeight, `height`, s),
          d = r + t,
          f = a + n;
        (c && ((d += t), (f += n)),
          (!l || d > l) &&
            (t < 0 || o.left + d < s.width) &&
            (_.current.style.width = d + `px`),
          (!u || f > u) &&
            (n < 0 || o.top + f < s.height) &&
            (_.current.style.height = f + `px`),
          (T.current = e.pageX),
          (E.current = e.pageY),
          i.onResize && i.onResize(e));
      }
    },
    Ae = function (e) {
      w.current &&
        ((w.current = !1),
        Y.removeClass(document.body, `p-unselectable-text`),
        i.onResizeEnd && i.onResizeEnd(e));
    },
    je = function () {
      ((_.current.style.position = ``),
        (_.current.style.left = ``),
        (_.current.style.top = ``),
        (_.current.style.margin = ``));
    },
    F = function () {
      _.current.setAttribute(D.current, ``);
    },
    Me = function () {
      (i.onShow && i.onShow(), i.focusOnShow && xe(), Pe());
    },
    Ne = function () {
      i.modal && !le() && Y.addClass(v.current, `p-component-overlay-leave`);
    },
    I = function () {
      ((ee.current = !1),
        To.clear(v.current),
        u(!1),
        Fe(),
        Y.focus(ne.current),
        (ne.current = null));
    },
    Pe = function () {
      z();
    },
    Fe = function () {
      Re();
    },
    L = function () {
      document.primeDialogParams &&
      document.primeDialogParams.some(function (e) {
        return e.hasBlockScroll;
      })
        ? Y.blockBodyScroll()
        : Y.unblockBodyScroll();
    },
    Ie = function (e) {
      if (e && f) {
        var t = { id: s, hasBlockScroll: re };
        document.primeDialogParams || (document.primeDialogParams = []);
        var n = document.primeDialogParams.findIndex(function (e) {
          return e.id === s;
        });
        n === -1
          ? (document.primeDialogParams = [].concat(
              Qc(document.primeDialogParams),
              [t],
            ))
          : (document.primeDialogParams = document.primeDialogParams.toSpliced(
              n,
              1,
              t,
            ));
      } else
        document.primeDialogParams =
          document.primeDialogParams &&
          document.primeDialogParams.filter(function (e) {
            return e.id !== s;
          });
      L();
    },
    z = function () {
      (i.draggable && (he(), ve()), i.resizable && (M(), fe()));
    },
    Re = function () {
      (ge(), ye(), N(), pe());
    },
    Be = function () {
      te.current = Y.createInlineStyle(
        (r && r.nonce) || Go.nonce,
        r && r.styleContainer,
      );
      var e = ``;
      for (var t in i.breakpoints)
        e += `
                @media screen and (max-width: ${t}) {
                     [data-pc-name="dialog"][${D.current}] {
                        width: ${i.breakpoints[t]} !important;
                    }
                }
            `;
      te.current.innerHTML = e;
    },
    Ve = function () {
      te.current = Y.removeInlineStyle(te.current);
    };
  (ds(function () {
    (Ie(!0), i.visible && u(!0));
  }),
    Le(
      function () {
        return (
          i.breakpoints && Be(),
          function () {
            Ve();
          }
        );
      },
      [i.breakpoints],
    ),
    gs(
      function () {
        (i.visible && !l && u(!0),
          i.visible !== f && l && p(i.visible),
          i.visible && (ne.current = document.activeElement));
      },
      [i.visible, l],
    ),
    gs(
      function () {
        l &&
          (To.set(
            `modal`,
            v.current,
            (r && r.autoZIndex) || Go.autoZIndex,
            i.baseZIndex || (r && r.zIndex.modal) || Go.zIndex.modal,
          ),
          p(!0));
      },
      [l],
    ),
    gs(
      function () {
        Ie(!0);
      },
      [re, f],
    ),
    $o(function () {
      (Fe(), Ie(!1), Y.removeInlineStyle(te.current), To.clear(v.current));
    }),
    ze(t, function () {
      return {
        props: i,
        resetPosition: je,
        getElement: function () {
          return _.current;
        },
        getMask: function () {
          return v.current;
        },
        getContent: function () {
          return b.current;
        },
        getHeader: function () {
          return x.current;
        },
        getFooter: function () {
          return S.current;
        },
        getCloseButton: function () {
          return C.current;
        },
      };
    }));
  var Ue = function () {
      if (i.closable && i.showCloseIcon) {
        var e = i.ariaCloseIconLabel || Fo(`close`),
          t = n(
            { className: se(`closeButtonIcon`), "aria-hidden": !0 },
            j(`closeButtonIcon`),
          ),
          r = i.closeIcon || O(_c, t),
          a = bo.getJSXIcon(r, ml({}, t), { props: i });
        return O(
          `button`,
          n(
            {
              ref: C,
              type: `button`,
              className: se(`closeButton`),
              "aria-label": e,
              onClick: be,
              onKeyDown: function (e) {
                e.key !== `Escape` && e.stopPropagation();
              },
            },
            j(`closeButton`),
          ),
          a,
          O(Wc, null),
        );
      }
      return null;
    },
    We = function () {
      var e,
        t = n({ className: se(`maximizableIcon`) }, j(`maximizableIcon`));
      e = k ? i.minimizeIcon || O(xc, t) : i.maximizeIcon || O(yc, t);
      var r = bo.getJSXIcon(e, t, { props: i });
      return i.maximizable
        ? O(
            `button`,
            n(
              {
                type: `button`,
                className: se(`maximizableButton`),
                onClick: we,
              },
              j(`maximizableButton`),
            ),
            r,
            O(Wc, null),
          )
        : null;
    },
    Ge = function () {
      if (i.showHeader) {
        var e = Ue(),
          t = We(),
          r = X.getJSXElement(i.icons, i),
          a = X.getJSXElement(i.header, i),
          o = s + `_header`,
          c = n(
            {
              ref: x,
              style: i.headerStyle,
              className: se(`header`),
              onMouseDown: Te,
            },
            j(`header`),
          ),
          l = n({ id: o, className: se(`headerTitle`) }, j(`headerTitle`)),
          u = n({ className: se(`headerIcons`) }, j(`headerIcons`));
        return O(`div`, c, O(`div`, l, a), O(`div`, u, r, t, e));
      }
      return null;
    },
    Ke = function () {
      return O(
        `div`,
        n(
          {
            id: s + `_content`,
            ref: b,
            style: i.contentStyle,
            className: se(`content`),
          },
          j(`content`),
        ),
        i.children,
      );
    },
    qe = function () {
      var e = X.getJSXElement(i.footer, i),
        t = n({ ref: S, className: se(`footer`) }, j(`footer`));
      return e && O(`div`, t, e);
    },
    Je = function () {
      return i.resizable
        ? O(`span`, {
            className: `p-resizable-handle`,
            style: { zIndex: 90 },
            onMouseDown: P,
          })
        : null;
    },
    Ye = function () {
      var t,
        n = {
          headerRef: x,
          contentRef: b,
          footerRef: S,
          closeRef: C,
          hide: be,
          message: {
            header: i.header,
            content: i.message,
            message:
              i == null ||
              (t = i.children) == null ||
              (t = t[1]) == null ||
              (t = t.props) == null
                ? void 0
                : t.children,
          },
        };
      return X.getJSXElement(e.content, n);
    },
    Xe = function () {
      return O(ie, null, Ge(), Ke(), qe(), Je());
    };
  return (
    l &&
    (function () {
      var t = s + `_header`,
        a = s + `_content`,
        o = {
          enter: i.position === `center` ? 150 : 300,
          exit: i.position === `center` ? 150 : 300,
        },
        c = n(
          { ref: v, style: ce(`mask`), className: se(`mask`), onPointerUp: Ce },
          j(`mask`),
        ),
        l = n(
          {
            ref: _,
            id: s,
            className: Za(
              i.className,
              se(`root`, { props: i, maximized: k, context: r }),
            ),
            style: i.style,
            onClick: i.onClick,
            role: `dialog`,
            "aria-labelledby": t,
            "aria-describedby": a,
            "aria-modal": i.modal,
            onPointerDown: Se,
          },
          fl.getOtherProps(i),
          j(`root`),
        ),
        u = n(
          {
            classNames: se(`transition`),
            timeout: o,
            in: f,
            options: i.transitionOptions,
            unmountOnExit: !0,
            onEnter: F,
            onEntered: Me,
            onExiting: Ne,
            onExited: I,
          },
          j(`transition`),
        ),
        d = null;
      return (
        (d = e != null && e.content ? Ye() : Xe()),
        O(kc, {
          element: O(
            `div`,
            c,
            O(
              mc,
              Gc({ nodeRef: _ }, u),
              O(`div`, l, O(ll, { autoFocus: i.focusOnShow }, d)),
            ),
          ),
          appendTo: i.appendTo,
          visible: !0,
        })
      );
    })()
  );
});
hl.displayName = `Dialog`;
function gl() {
  return (
    (gl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gl.apply(null, arguments)
  );
}
var _l = at(
  U(function (e, t) {
    var n = hc.getPTI(e);
    return O(
      `svg`,
      gl(
        {
          ref: t,
          width: `14`,
          height: `14`,
          viewBox: `0 0 14 14`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
        },
        n,
      ),
      O(`path`, {
        d: `M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z`,
        fill: `currentColor`,
      }),
    );
  }),
);
_l.displayName = `SpinnerIcon`;
function vl() {
  return (
    (vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vl.apply(null, arguments)
  );
}
function yl(e) {
  "@babel/helpers - typeof";
  return (
    (yl =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    yl(e)
  );
}
function bl(e, t) {
  if (yl(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (yl(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function xl(e) {
  var t = bl(e, `string`);
  return yl(t) == `symbol` ? t : t + ``;
}
function Sl(e, t, n) {
  return (
    (t = xl(t)) in e
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
function Cl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function wl(e) {
  if (Array.isArray(e)) return Cl(e);
}
function Tl(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function El(e, t) {
  if (e) {
    if (typeof e == `string`) return Cl(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Cl(e, t)
          : void 0
    );
  }
}
function Dl() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ol(e) {
  return wl(e) || Tl(e) || El(e) || Dl();
}
function kl(e) {
  if (Array.isArray(e)) return e;
}
function Al(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function jl() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ml(e, t) {
  return kl(e) || Al(e, t) || El(e, t) || jl();
}
var Nl = js.extend({
  defaultProps: {
    __TYPE: `Tooltip`,
    appendTo: null,
    at: null,
    autoHide: !0,
    autoZIndex: !0,
    baseZIndex: 0,
    className: null,
    closeOnEscape: !1,
    content: null,
    disabled: !1,
    event: null,
    hideDelay: 0,
    hideEvent: `mouseleave`,
    id: null,
    mouseTrack: !1,
    mouseTrackLeft: 5,
    mouseTrackTop: 5,
    my: null,
    onBeforeHide: null,
    onBeforeShow: null,
    onHide: null,
    onShow: null,
    position: `right`,
    showDelay: 0,
    showEvent: `mouseenter`,
    showOnDisabled: !1,
    style: null,
    target: null,
    updateDelay: 0,
    children: void 0,
  },
  css: {
    classes: {
      root: function (e) {
        var t = e.positionState,
          n = e.classNameState;
        return Za(`p-tooltip p-component`, Sl({}, `p-tooltip-${t}`, !0), n);
      },
      arrow: `p-tooltip-arrow`,
      text: `p-tooltip-text`,
    },
    styles: `
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`,
    inlineStyles: {
      arrow: function (e) {
        var t = e.context;
        return {
          top: t.bottom
            ? `0`
            : t.right || t.left || (!t.right && !t.left && !t.top && !t.bottom)
              ? `50%`
              : null,
          bottom: t.top ? `0` : null,
          left:
            t.right || (!t.right && !t.left && !t.top && !t.bottom)
              ? `0`
              : t.top || t.bottom
                ? `50%`
                : null,
          right: t.left ? `0` : null,
        };
      },
    },
  },
});
function Pl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Fl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Pl(Object(n), !0).forEach(function (t) {
          Sl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Pl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Il = at(
  U(function (e, t) {
    var n = us(),
      r = He(Uo),
      i = Nl.getProps(e, r),
      a = Ml(R(!1), 2),
      o = a[0],
      s = a[1],
      c = Ml(R(i.position || `right`), 2),
      l = c[0],
      u = c[1],
      d = Ml(R(``), 2),
      f = d[0],
      p = d[1],
      m = Ml(R(!1), 2),
      h = m[0],
      g = m[1],
      _ = o && i.closeOnEscape,
      v = ns(`tooltip`, _),
      y = {
        props: i,
        state: { visible: o, position: l, className: f },
        context: {
          right: l === `right`,
          left: l === `left`,
          top: l === `top`,
          bottom: l === `bottom`,
        },
      },
      b = Nl.setMetaData(y),
      x = b.ptm,
      S = b.cx,
      C = b.sx,
      ee = b.isUnstyled;
    (zs(Nl.css.styles, ee, { name: `tooltip` }),
      ls({
        callback: function () {
          ye();
        },
        when: _,
        priority: [ss.TOOLTIP, v],
      }));
    var w = B(null),
      T = B(null),
      E = B(null),
      te = B(null),
      D = B(!0),
      ne = B({}),
      k = B(null),
      re = Ml(
        ps({
          listener: function (e) {
            !Y.isTouchDevice() && ye(e);
          },
        }),
        2,
      ),
      ie = re[0],
      A = re[1],
      ae = Ml(
        fs({
          target: E.current,
          listener: function (e) {
            ye(e);
          },
          when: o,
        }),
        2,
      ),
      oe = ae[0],
      j = ae[1],
      se = function (e) {
        return !(i.content || de(e, `tooltip`));
      },
      ce = function (e) {
        return !(i.content || de(e, `tooltip`) || i.children);
      },
      le = function (e) {
        return de(e, `mousetrack`) || i.mouseTrack;
      },
      ue = function (e) {
        return de(e, `disabled`) === `true` || fe(e, `disabled`) || i.disabled;
      },
      M = function (e) {
        return de(e, `showondisabled`) || i.showOnDisabled;
      },
      N = function () {
        return de(E.current, `autohide`) || i.autoHide;
      },
      de = function (e, t) {
        return fe(e, `data-pr-${t}`) ? e.getAttribute(`data-pr-${t}`) : null;
      },
      fe = function (e, t) {
        return e && e.hasAttribute(t);
      },
      pe = function (e) {
        var t = [de(e, `showevent`) || i.showEvent],
          n = [de(e, `hideevent`) || i.hideEvent];
        if (le(e)) ((t = [`mousemove`]), (n = [`mouseleave`]));
        else {
          var r = de(e, `event`) || i.event;
          (r === `focus` && ((t = [`focus`]), (n = [`blur`])),
            r === `both` &&
              ((t = [`focus`, `mouseenter`]),
              (n = h ? [`blur`] : [`mouseleave`, `blur`])));
        }
        return { showEvents: t, hideEvents: n };
      },
      me = function (e) {
        return de(e, `position`) || l;
      },
      he = function (e) {
        return {
          top: de(e, `mousetracktop`) || i.mouseTrackTop,
          left: de(e, `mousetrackleft`) || i.mouseTrackLeft,
        };
      },
      ge = function (e, t) {
        if (T.current) {
          var n = de(e, `tooltip`) || i.content;
          n
            ? ((T.current.innerHTML = ``),
              T.current.appendChild(document.createTextNode(n)),
              t())
            : i.children && t();
        }
      },
      _e = function (e) {
        ge(E.current, function () {
          var t = k.current,
            n = t.pageX,
            a = t.pageY;
          (i.autoZIndex &&
            !To.get(w.current) &&
            To.set(
              `tooltip`,
              w.current,
              (r && r.autoZIndex) || Go.autoZIndex,
              i.baseZIndex || (r && r.zIndex.tooltip) || Go.zIndex.tooltip,
            ),
            (w.current.style.left = ``),
            (w.current.style.top = ``),
            N() && (w.current.style.pointerEvents = `none`));
          var o = le(E.current) || e === `mouse`;
          (((o && !te.current) || o) &&
            (te.current = {
              width: Y.getOuterWidth(w.current),
              height: Y.getOuterHeight(w.current),
            }),
            be(E.current, { x: n, y: a }, e));
        });
      },
      ve = function (e) {
        (e.type && e.type === `focus` && g(!0), (E.current = e.currentTarget));
        var t = ue(E.current);
        ce(M(E.current) && t ? E.current.firstChild : E.current) ||
          t ||
          ((k.current = e),
          o
            ? De(`updateDelay`, _e)
            : P(i.onBeforeShow, { originalEvent: e, target: E.current }) &&
              De(`showDelay`, function () {
                (s(!0), P(i.onShow, { originalEvent: e, target: E.current }));
              }));
      },
      ye = function (e) {
        (e && e.type === `blur` && g(!1),
          Oe(),
          o
            ? P(i.onBeforeHide, { originalEvent: e, target: E.current }) &&
              De(`hideDelay`, function () {
                (!N() && D.current === !1) ||
                  (To.clear(w.current),
                  Y.removeClass(w.current, `p-tooltip-active`),
                  s(!1),
                  P(i.onHide, { originalEvent: e, target: E.current }));
              })
            : !i.onBeforeHide && !Ee(`hideDelay`) && s(!1));
      },
      be = function (e, t, n) {
        var r = 0,
          a = 0,
          o = n || l;
        if ((le(e) || o == `mouse`) && t) {
          var s = {
            width: Y.getOuterWidth(w.current),
            height: Y.getOuterHeight(w.current),
          };
          ((r = t.x), (a = t.y));
          var c = he(e),
            d = c.top,
            f = c.left;
          switch (o) {
            case `left`:
              ((r -= s.width + f), (a -= s.height / 2 - d));
              break;
            case `right`:
            case `mouse`:
              ((r += f), (a -= s.height / 2 - d));
              break;
            case `top`:
              ((r -= s.width / 2 - f), (a -= s.height + d));
              break;
            case `bottom`:
              ((r -= s.width / 2 - f), (a += d));
              break;
          }
          (r <= 0 || te.current.width > s.width
            ? ((w.current.style.left = `0px`),
              (w.current.style.right = window.innerWidth - s.width - r + `px`))
            : ((w.current.style.right = ``), (w.current.style.left = r + `px`)),
            (w.current.style.top = a + `px`),
            Y.addClass(w.current, `p-tooltip-active`));
        } else {
          var p = Y.findCollisionPosition(o),
            m = de(e, `my`) || i.my || p.my,
            h = de(e, `at`) || i.at || p.at;
          ((w.current.style.padding = `0px`),
            Y.flipfitCollision(w.current, e, m, h, function (e) {
              var t = e.at,
                n = t.x,
                r = t.y,
                a = e.my.x,
                o = i.at
                  ? n !== `center` && n !== a
                    ? n
                    : r
                  : e.at[`${p.axis}`];
              ((w.current.style.padding = ``),
                u(o),
                xe(o),
                Y.addClass(w.current, `p-tooltip-active`));
            }));
        }
      },
      xe = function (e) {
        if (w.current) {
          var t = getComputedStyle(w.current);
          e === `left`
            ? (w.current.style.left =
                parseFloat(t.left) - parseFloat(t.paddingLeft) * 2 + `px`)
            : e === `top` &&
              (w.current.style.top =
                parseFloat(t.top) - parseFloat(t.paddingTop) * 2 + `px`);
        }
      },
      Se = function () {
        N() || (D.current = !1);
      },
      Ce = function (e) {
        N() || ((D.current = !0), ye(e));
      },
      we = function (e) {
        if (e) {
          var t = pe(e),
            n = t.showEvents,
            r = t.hideEvents,
            i = ke(e);
          (n.forEach(function (e) {
            return i?.addEventListener(e, ve);
          }),
            r.forEach(function (e) {
              return i?.addEventListener(e, ye);
            }));
        }
      },
      Te = function (e) {
        if (e) {
          var t = pe(e),
            n = t.showEvents,
            r = t.hideEvents,
            i = ke(e);
          (n.forEach(function (e) {
            return i?.removeEventListener(e, ve);
          }),
            r.forEach(function (e) {
              return i?.removeEventListener(e, ye);
            }));
        }
      },
      Ee = function (e) {
        return de(E.current, e.toLowerCase()) || i[e];
      },
      De = function (e, t) {
        Oe();
        var n = Ee(e);
        n
          ? (ne.current[`${e}`] = setTimeout(function () {
              return t();
            }, n))
          : t();
      },
      P = function (e) {
        if (e) {
          var t = [...arguments].slice(1),
            n = e.apply(void 0, t);
          return (n === void 0 && (n = !0), n);
        }
        return !0;
      },
      Oe = function () {
        Object.values(ne.current).forEach(function (e) {
          return clearTimeout(e);
        });
      },
      ke = function (e) {
        if (e) {
          if (M(e)) {
            if (!e.hasWrapper) {
              var t = document.createElement(`div`);
              return (
                e.nodeName === `INPUT`
                  ? Y.addMultipleClasses(
                      t,
                      `p-tooltip-target-wrapper p-inputwrapper`,
                    )
                  : Y.addClass(t, `p-tooltip-target-wrapper`),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e),
                (e.hasWrapper = !0),
                t
              );
            }
            return e.parentElement;
          } else if (e.hasWrapper) {
            var n;
            ((n = e.parentElement).replaceWith.apply(
              n,
              Ol(e.parentElement.childNodes),
            ),
              delete e.hasWrapper);
          }
          return e;
        }
        return null;
      },
      Ae = function (e) {
        (F(e), je(e));
      },
      je = function (e) {
        Me(e || i.target, we);
      },
      F = function (e) {
        Me(e || i.target, Te);
      },
      Me = function (e, t) {
        if (((e = X.getRefElement(e)), e))
          if (Y.isElement(e)) t(e);
          else {
            var n = function (e) {
              Y.find(document, e).forEach(function (e) {
                t(e);
              });
            };
            e instanceof Array
              ? e.forEach(function (e) {
                  n(e);
                })
              : n(e);
          }
      };
    return (
      ds(function () {
        o && E.current && ue(E.current) && ye();
      }),
      gs(
        function () {
          return (
            je(),
            function () {
              F();
            }
          );
        },
        [ve, ye, i.target],
      ),
      gs(
        function () {
          if (o) {
            var e = me(E.current),
              t = de(E.current, `classname`);
            (e !== l && u(e), t !== f && p(t), _e(e), ie(), oe());
          } else
            (u(i.position || `right`),
              p(``),
              (E.current = null),
              (te.current = null),
              (D.current = !0));
          return function () {
            (A(), j());
          };
        },
        [o],
      ),
      gs(
        function () {
          var e = me(E.current);
          o &&
            e !== `mouse` &&
            De(`updateDelay`, function () {
              ge(E.current, function () {
                be(E.current);
              });
            });
        },
        [i.content],
      ),
      $o(function () {
        (ye(), To.clear(w.current));
      }),
      ze(t, function () {
        return {
          props: i,
          updateTargetEvents: Ae,
          loadTargetEvents: je,
          unloadTargetEvents: F,
          show: ve,
          hide: ye,
          getElement: function () {
            return w.current;
          },
          getTarget: function () {
            return E.current;
          },
        };
      }),
      o
        ? O(kc, {
            element: (function () {
              var e = se(E.current),
                t = n(
                  {
                    id: i.id,
                    className: Za(
                      i.className,
                      S(`root`, { positionState: l, classNameState: f }),
                    ),
                    style: i.style,
                    role: `tooltip`,
                    "aria-hidden": o,
                    onMouseEnter: function (e) {
                      return Se();
                    },
                    onMouseLeave: function (e) {
                      return Ce(e);
                    },
                  },
                  Nl.getOtherProps(i),
                  x(`root`),
                ),
                r = n(
                  { className: S(`arrow`), style: C(`arrow`, Fl({}, y)) },
                  x(`arrow`),
                ),
                a = n({ className: S(`text`) }, x(`text`));
              return O(
                `div`,
                vl({ ref: w }, t),
                O(`div`, r),
                O(`div`, vl({ ref: T }, a), e && i.children),
              );
            })(),
            appendTo: i.appendTo,
            visible: !0,
          })
        : null
    );
  }),
);
Il.displayName = `Tooltip`;
function Ll() {
  return (
    (Ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ll.apply(null, arguments)
  );
}
function Rl(e) {
  "@babel/helpers - typeof";
  return (
    (Rl =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Rl(e)
  );
}
function zl(e, t) {
  if (Rl(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Rl(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Bl(e) {
  var t = zl(e, `string`);
  return Rl(t) == `symbol` ? t : t + ``;
}
function Vl(e, t, n) {
  return (
    (t = Bl(t)) in e
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
var Hl = js.extend({
  defaultProps: {
    __TYPE: `Badge`,
    __parentMetadata: null,
    value: null,
    severity: null,
    size: null,
    style: null,
    className: null,
    children: void 0,
  },
  css: {
    classes: {
      root: function (e) {
        var t = e.props;
        return Za(
          `p-badge p-component`,
          Vl(
            {
              "p-badge-no-gutter":
                X.isNotEmpty(t.value) && String(t.value).length === 1,
              "p-badge-dot": X.isEmpty(t.value),
              "p-badge-lg": t.size === `large`,
              "p-badge-xl": t.size === `xlarge`,
            },
            `p-badge-${t.severity}`,
            t.severity !== null,
          ),
        );
      },
    },
    styles: `
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,
  },
});
function Ul(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Wl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ul(Object(n), !0).forEach(function (t) {
          Vl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ul(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Gl = at(
  U(function (e, t) {
    var n = us(),
      r = He(Uo),
      i = Hl.getProps(e, r),
      a = Hl.setMetaData(Wl({ props: i }, i.__parentMetadata)),
      o = a.ptm,
      s = a.cx,
      c = a.isUnstyled;
    zs(Hl.css.styles, c, { name: `badge` });
    var l = B(null);
    return (
      ze(t, function () {
        return {
          props: i,
          getElement: function () {
            return l.current;
          },
        };
      }),
      O(
        `span`,
        n(
          { ref: l, style: i.style, className: Za(i.className, s(`root`)) },
          Hl.getOtherProps(i),
          o(`root`),
        ),
        i.value,
      )
    );
  }),
);
Gl.displayName = `Badge`;
var Kl = js.extend({
  defaultProps: {
    __TYPE: `Button`,
    __parentMetadata: null,
    badge: null,
    badgeClassName: null,
    className: null,
    children: void 0,
    disabled: !1,
    icon: null,
    iconPos: `left`,
    label: null,
    link: !1,
    loading: !1,
    loadingIcon: null,
    outlined: !1,
    plain: !1,
    raised: !1,
    rounded: !1,
    severity: null,
    size: null,
    text: !1,
    tooltip: null,
    tooltipOptions: null,
    visible: !0,
  },
  css: {
    classes: {
      icon: function (e) {
        var t = e.props;
        return Za(
          `p-button-icon p-c`,
          Vl({}, `p-button-icon-${t.iconPos}`, t.label),
        );
      },
      loadingIcon: function (e) {
        var t = e.props,
          n = e.className;
        return Za(n, { "p-button-loading-icon": t.loading });
      },
      label: `p-button-label p-c`,
      root: function (e) {
        var t = e.props,
          n = e.size,
          r = e.disabled;
        return Za(
          `p-button p-component`,
          Vl(
            Vl(
              Vl(
                Vl(
                  {
                    "p-button-icon-only":
                      (t.icon || t.loading) && !t.label && !t.children,
                    "p-button-vertical":
                      (t.iconPos === `top` || t.iconPos === `bottom`) &&
                      t.label,
                    "p-disabled": r,
                    "p-button-loading": t.loading,
                    "p-button-outlined": t.outlined,
                    "p-button-raised": t.raised,
                    "p-button-link": t.link,
                    "p-button-text": t.text,
                    "p-button-rounded": t.rounded,
                    "p-button-loading-label-only":
                      t.loading && !t.icon && t.label,
                  },
                  `p-button-loading-${t.iconPos}`,
                  t.loading && t.label,
                ),
                `p-button-${n}`,
                n,
              ),
              `p-button-${t.severity}`,
              t.severity,
            ),
            `p-button-plain`,
            t.plain,
          ),
        );
      },
    },
  },
});
function ql(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Jl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ql(Object(n), !0).forEach(function (t) {
          Vl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ql(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Yl = at(
  U(function (e, t) {
    var n = us(),
      r = He(Uo),
      i = Kl.getProps(e, r),
      a = i.disabled || i.loading,
      o = Jl(
        Jl({ props: i }, i.__parentMetadata),
        {},
        { context: { disabled: a } },
      ),
      s = Kl.setMetaData(o),
      c = s.ptm,
      l = s.cx,
      u = s.isUnstyled;
    zs(Kl.css.styles, u, { name: `button`, styled: !0 });
    var d = B(t);
    if (
      (Le(
        function () {
          X.combinedRefs(d, t);
        },
        [d, t],
      ),
      i.visible === !1)
    )
      return null;
    var f = function () {
        var e = Za(
            `p-button-icon p-c`,
            Vl({}, `p-button-icon-${i.iconPos}`, i.label),
          ),
          t = n({ className: l(`icon`) }, c(`icon`));
        e = Za(e, { "p-button-loading-icon": i.loading });
        var r = n(
            { className: l(`loadingIcon`, { className: e }) },
            c(`loadingIcon`),
          ),
          a = i.loading
            ? i.loadingIcon || O(_l, Ll({}, r, { spin: !0 }))
            : i.icon;
        return bo.getJSXIcon(a, Jl({}, t), { props: i });
      },
      p = function () {
        var e = n({ className: l(`label`) }, c(`label`));
        return i.label
          ? O(`span`, e, i.label)
          : !i.children &&
              !i.label &&
              O(
                `span`,
                Ll({}, e, { dangerouslySetInnerHTML: { __html: `&nbsp;` } }),
              );
      },
      m = function () {
        return i.badge
          ? O(
              Gl,
              n(
                {
                  className: Za(i.badgeClassName),
                  value: i.badge,
                  unstyled: i.unstyled,
                  __parentMetadata: { parent: o },
                },
                c(`badge`),
              ),
              i.badge,
            )
          : null;
      },
      h = !a || (i.tooltipOptions && i.tooltipOptions.showOnDisabled),
      g = X.isNotEmpty(i.tooltip) && h,
      _ = { large: `lg`, small: `sm` }[i.size],
      v = f(),
      y = p(),
      b = m();
    return O(
      ie,
      null,
      O(
        `button`,
        n(
          {
            ref: d,
            "aria-label": i.label
              ? i.label + (i.badge ? ` ` + i.badge : ``)
              : i[`aria-label`],
            "data-pc-autofocus": i.autoFocus,
            className: Za(i.className, l(`root`, { size: _, disabled: a })),
            disabled: a,
          },
          Kl.getOtherProps(i),
          c(`root`),
        ),
        v,
        y,
        i.children,
        b,
        O(Wc, null),
      ),
      g &&
        O(
          Il,
          Ll(
            { target: d, content: i.tooltip, pt: c(`tooltip`) },
            i.tooltipOptions,
          ),
        ),
    );
  }),
);
Yl.displayName = `Button`;
var Xl = class extends A {
    constructor(e) {
      (super(e), (this.state = { hasError: !1, error: `` }));
    }
    static getDerivedStateFromError(e) {
      return { hasError: !0, error: e };
    }
    componentDidCatch(e, t) {}
    render() {
      return this.state.hasError
        ? K(`div`, {
            children: [
              K(`h1`, { children: `Something went terribly wrong.` }),
              K(`h3`, {
                children: `please send me the following error, it will help a lot`,
              }),
              K(`pre`, { children: this.state.error.message }),
              K(`pre`, { children: this.state.error.stack }),
            ],
          })
        : this.props.children;
    }
  },
  Zl = class {
    constructor() {
      ((this.listeners = {}), (this.listenersAll = []));
    }
    listen(e, t) {
      (e.forEach((e) => {
        (this.listeners[e] || (this.listeners[e] = []),
          this.listeners[e].push(t));
      }),
        e.length === 0 && this.listenersAll.push(t));
    }
    emit(e) {
      (this.listeners[e.msgtype] &&
        this.listeners[e.msgtype].forEach((t) => t(e)),
        this.listenersAll.forEach((t) => t(e)));
    }
  },
  Ql = 16,
  $l = class {
    constructor(e, t) {
      ((this.rounds = []),
        (this.loading = !0),
        (this.playing = !1),
        (this.currentTickI = 0),
        (this.playingRoundI = 0),
        (this.player = {}),
        (this.interval = Ql),
        (this.roundsUpdateQueued = !1),
        (this.messageBus = e),
        t.listen(
          [4, 5, 6],
          function (e) {
            switch (e.msgtype) {
              case 4:
                this.messageBus.emit(e);
                break;
              case 5:
                this.loadingDone();
                break;
              case 6:
                this.handleAddRound(e.round);
                break;
              default:
                console.log(`unknown message`, e);
            }
          }.bind(this),
        ),
        this.messageBus.listen(
          [100, 102, 103, 104, 108],
          function (e) {
            switch (e.msgtype) {
              case 100:
                e.round ? this.playRound(e.round) : this.play();
                break;
              case 102:
                this.playing ? this.stop() : this.play();
                break;
              case 103:
                this.playRound(this.playingRoundI + e.increment + 1);
                break;
              case 104:
                (this.stop(), (this.interval = Ql / e.speed), this.play());
                break;
              case 108:
                (clearInterval(this.player), (this.playing = !1));
                let t = this.rounds[this.playingRoundI];
                ((this.currentTickI = Math.round(
                  t.ticksList.length * e.progress,
                )),
                  this.playTick(t.ticksList[this.currentTickI]));
                break;
              default:
                console.log(`unknown message [Player.js]`, e);
            }
          }.bind(this),
        ));
    }
    handleAddRound(e) {
      let t = [],
        n = [],
        r = e.ticksList[0].tick;
      (e.ticksList.forEach(function (e) {
        (e.tick !== r && (t.push(n), (n = []), (r = e.tick)), n.push(e));
      }),
        (e.ticksList = t),
        this.rounds.push(e),
        this.scheduleRoundsUpdate(),
        this.rounds.length === 1 && this.playRound(1));
    }
    scheduleRoundsUpdate() {
      this.roundsUpdateQueued ||
        ((this.roundsUpdateQueued = !0),
        (typeof requestAnimationFrame == `function`
          ? requestAnimationFrame
          : (e) => setTimeout(e, 16))(() => {
          ((this.roundsUpdateQueued = !1),
            this.messageBus.emit({ msgtype: 101, rounds: this.rounds }));
        }));
    }
    loadingDone() {
      this.loading = !1;
    }
    switchPlaying(e) {
      ((this.playing = e), this.messageBus.emit({ msgtype: 107, playing: e }));
    }
    stop() {
      (this.switchPlaying(!1), clearInterval(this.player));
    }
    play() {
      this.switchPlaying(!0);
      let e = this.rounds[this.playingRoundI];
      (clearInterval(this.player),
        (this.player = setInterval(
          function () {
            if (
              (this.currentTickI >= e.ticksList.length &&
                (this.playingRoundI + 1 >= this.rounds.length
                  ? this.stop()
                  : this.playRound(this.playingRoundI + 2)),
              !this.playing)
            ) {
              clearInterval(this.player);
              return;
            }
            (this.playTick(e.ticksList[this.currentTickI]),
              this.messageBus.emit({
                msgtype: 105,
                progress: this.currentTickI / e.ticksList.length,
              }),
              this.currentTickI++);
          }.bind(this),
          this.interval,
        )));
    }
    highlightActiveRound(e) {
      this.messageBus.emit({ msgtype: 106, round: e });
    }
    playTick(e) {
      e.forEach((e) => this.messageBus.emit(e));
    }
    playRound(e) {
      let t = e - 1;
      (t < 0
        ? (t = 0)
        : t >= this.rounds.length && (t = this.rounds.length - 1),
        (e = t + 1),
        this.stop(),
        (this.playingRoundI = t),
        (this.currentTickI = 0),
        this.play(),
        this.highlightActiveRound(e),
        this.emitPlayRoundEvent());
    }
    emitPlayRoundEvent() {
      this.messageBus.emit({
        msgtype: 109,
        teamstate: this.rounds[this.playingRoundI].teamstate,
      });
    }
  },
  Q = l(
    o((e) => {
      var t =
          typeof Object.defineProperties == `function`
            ? Object.defineProperty
            : function (e, t, n) {
                e != Array.prototype &&
                  e != Object.prototype &&
                  (e[t] = n.value);
              },
        n =
          typeof window < `u` && window === e
            ? e
            : typeof global < `u` && global != null
              ? global
              : e;
      function r(e, r) {
        if (r) {
          var i = n;
          e = e.split(`.`);
          for (var a = 0; a < e.length - 1; a++) {
            var o = e[a];
            (o in i || (i[o] = {}), (i = i[o]));
          }
          ((e = e[e.length - 1]),
            (a = i[e]),
            (r = r(a)),
            r != a &&
              r != null &&
              t(i, e, { configurable: !0, writable: !0, value: r }));
        }
      }
      function i(e) {
        var t = 0;
        return function () {
          return t < e.length ? { done: !1, value: e[t++] } : { done: !0 };
        };
      }
      function a() {
        ((a = function () {}), (n.Symbol ||= s));
      }
      function o(e, n) {
        ((this.a = e),
          t(this, `description`, { configurable: !0, writable: !0, value: n }));
      }
      o.prototype.toString = function () {
        return this.a;
      };
      var s = (function () {
        function e(n) {
          if (this instanceof e) throw TypeError(`Symbol is not a constructor`);
          return new o(`jscomp_symbol_` + (n || ``) + `_` + t++, n);
        }
        var t = 0;
        return e;
      })();
      function c() {
        a();
        var e = n.Symbol.iterator;
        ((e ||= n.Symbol.iterator = n.Symbol(`Symbol.iterator`)),
          typeof Array.prototype[e] != `function` &&
            t(Array.prototype, e, {
              configurable: !0,
              writable: !0,
              value: function () {
                return l(i(this));
              },
            }),
          (c = function () {}));
      }
      function l(e) {
        return (
          c(),
          (e = { next: e }),
          (e[n.Symbol.iterator] = function () {
            return this;
          }),
          e
        );
      }
      function u(e, t) {
        (c(), e instanceof String && (e += ``));
        var n = 0,
          r = {
            next: function () {
              if (n < e.length) {
                var i = n++;
                return { value: t(i, e[i]), done: !1 };
              }
              return (
                (r.next = function () {
                  return { done: !0, value: void 0 };
                }),
                r.next()
              );
            },
          };
        return (
          (r[Symbol.iterator] = function () {
            return r;
          }),
          r
        );
      }
      r(`Array.prototype.entries`, function (e) {
        return (
          e ||
          function () {
            return u(this, function (e, t) {
              return [e, t];
            });
          }
        );
      });
      var d = e || self;
      function f(e, t, n) {
        ((e = e.split(`.`)),
          (n ||= d),
          e[0] in n || n.execScript === void 0 || n.execScript(`var ` + e[0]));
        for (var r; e.length && (r = e.shift()); )
          e.length || t === void 0
            ? (n = n[r] && n[r] !== Object.prototype[r] ? n[r] : (n[r] = {}))
            : (n[r] = t);
      }
      function p(e) {
        var t = typeof e;
        if (t == `object`)
          if (e) {
            if (e instanceof Array) return `array`;
            if (e instanceof Object) return t;
            var n = Object.prototype.toString.call(e);
            if (n == `[object Window]`) return `object`;
            if (
              n == `[object Array]` ||
              (typeof e.length == `number` &&
                e.splice !== void 0 &&
                e.propertyIsEnumerable !== void 0 &&
                !e.propertyIsEnumerable(`splice`))
            )
              return `array`;
            if (
              n == `[object Function]` ||
              (e.call !== void 0 &&
                e.propertyIsEnumerable !== void 0 &&
                !e.propertyIsEnumerable(`call`))
            )
              return `function`;
          } else return `null`;
        else if (t == `function` && e.call === void 0) return `object`;
        return t;
      }
      function m(e) {
        var t = typeof e;
        return (t == `object` && e != null) || t == `function`;
      }
      function h(e, t, n) {
        f(e, t, n);
      }
      function g(e, t) {
        function n() {}
        ((n.prototype = t.prototype),
          (e.prototype = new n()),
          (e.prototype.constructor = e));
      }
      var _ =
        `constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf`.split(
          ` `,
        );
      function v(e, t) {
        for (var n, r, i = 1; i < arguments.length; i++) {
          for (n in ((r = arguments[i]), r)) e[n] = r[n];
          for (var a = 0; a < _.length; a++)
            ((n = _[a]),
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]));
        }
      }
      var y = Array.prototype.forEach
          ? function (e, t) {
              Array.prototype.forEach.call(e, t, void 0);
            }
          : function (e, t) {
              for (
                var n = e.length,
                  r = typeof e == `string` ? e.split(``) : e,
                  i = 0;
                i < n;
                i++
              )
                i in r && t.call(void 0, r[i], i, e);
            },
        b = Array.prototype.map
          ? function (e, t) {
              return Array.prototype.map.call(e, t, void 0);
            }
          : function (e, t) {
              for (
                var n = e.length,
                  r = Array(n),
                  i = typeof e == `string` ? e.split(``) : e,
                  a = 0;
                a < n;
                a++
              )
                a in i && (r[a] = t.call(void 0, i[a], a, e));
              return r;
            };
      function x(e, t, n) {
        return 2 >= arguments.length
          ? Array.prototype.slice.call(e, t)
          : Array.prototype.slice.call(e, t, n);
      }
      function S(e, t, n, r) {
        var i = `Assertion failed`;
        if (n) {
          i += `: ` + n;
          var a = r;
        } else e && ((i += `: ` + e), (a = t));
        throw Error(i, a || []);
      }
      function C(e, t, n) {
        var r = [...arguments].slice(2);
        return (e || S(``, null, t, r), e);
      }
      function ee(e, t, n) {
        var r = [...arguments].slice(2);
        typeof e != `string` &&
          S(`Expected string but got %s: %s.`, [p(e), e], t, r);
      }
      function w(e, t, n) {
        var r = [...arguments].slice(2);
        Array.isArray(e) ||
          S(`Expected array but got %s: %s.`, [p(e), e], t, r);
      }
      function T(e, t) {
        var n = [...arguments].slice(1);
        throw Error(`Failure` + (e ? `: ` + e : ``), n);
      }
      function E(e, t, n, r) {
        var i = [...arguments].slice(3);
        e instanceof t ||
          S(`Expected instanceof %s but got %s.`, [te(t), te(e)], n, i);
      }
      function te(e) {
        return e instanceof Function
          ? e.displayName || e.name || `unknown type name`
          : e instanceof Object
            ? e.constructor.displayName ||
              e.constructor.name ||
              Object.prototype.toString.call(e)
            : e === null
              ? `null`
              : typeof e;
      }
      function D(e, t) {
        if (
          ((this.c = e),
          (this.b = t),
          (this.a = {}),
          (this.arrClean = !0),
          0 < this.c.length)
        ) {
          for (e = 0; e < this.c.length; e++) {
            t = this.c[e];
            var n = t[0];
            this.a[n.toString()] = new re(n, t[1]);
          }
          this.arrClean = !0;
        }
      }
      (f(`jspb.Map`, D, void 0),
        (D.prototype.g = function () {
          if (this.arrClean) {
            if (this.b) {
              var e = this.a,
                t;
              for (t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) {
                  var n = e[t].a;
                  n && n.g();
                }
            }
          } else {
            for (
              this.c.length = 0, e = k(this), e.sort(), t = 0;
              t < e.length;
              t++
            ) {
              var r = this.a[e[t]];
              ((n = r.a) && n.g(), this.c.push([r.key, r.value]));
            }
            this.arrClean = !0;
          }
          return this.c;
        }),
        (D.prototype.toArray = D.prototype.g),
        (D.prototype.Mc = function (e, t) {
          for (var n = this.g(), r = [], i = 0; i < n.length; i++) {
            var a = this.a[n[i][0].toString()];
            O(this, a);
            var o = a.a;
            o ? (C(t), r.push([a.key, t(e, o)])) : r.push([a.key, a.value]);
          }
          return r;
        }),
        (D.prototype.toObject = D.prototype.Mc),
        (D.fromObject = function (e, t, n) {
          t = new D([], t);
          for (var r = 0; r < e.length; r++) {
            var i = e[r][0],
              a = n(e[r][1]);
            t.set(i, a);
          }
          return t;
        }));
      function ne(e) {
        ((this.a = 0), (this.b = e));
      }
      ((ne.prototype.next = function () {
        return this.a < this.b.length
          ? { done: !1, value: this.b[this.a++] }
          : { done: !0, value: void 0 };
      }),
        typeof Symbol < `u` &&
          (ne.prototype[Symbol.iterator] = function () {
            return this;
          }),
        (D.prototype.Jb = function () {
          return k(this).length;
        }),
        (D.prototype.getLength = D.prototype.Jb),
        (D.prototype.clear = function () {
          ((this.a = {}), (this.arrClean = !1));
        }),
        (D.prototype.clear = D.prototype.clear),
        (D.prototype.Cb = function (e) {
          e = e.toString();
          var t = this.a.hasOwnProperty(e);
          return (delete this.a[e], (this.arrClean = !1), t);
        }),
        (D.prototype.del = D.prototype.Cb),
        (D.prototype.Eb = function () {
          var e = [],
            t = k(this);
          t.sort();
          for (var n = 0; n < t.length; n++) {
            var r = this.a[t[n]];
            e.push([r.key, r.value]);
          }
          return e;
        }),
        (D.prototype.getEntryList = D.prototype.Eb),
        (D.prototype.entries = function () {
          var e = [],
            t = k(this);
          t.sort();
          for (var n = 0; n < t.length; n++) {
            var r = this.a[t[n]];
            e.push([r.key, O(this, r)]);
          }
          return new ne(e);
        }),
        (D.prototype.entries = D.prototype.entries),
        (D.prototype.keys = function () {
          var e = [],
            t = k(this);
          t.sort();
          for (var n = 0; n < t.length; n++) e.push(this.a[t[n]].key);
          return new ne(e);
        }),
        (D.prototype.keys = D.prototype.keys),
        (D.prototype.values = function () {
          var e = [],
            t = k(this);
          t.sort();
          for (var n = 0; n < t.length; n++) e.push(O(this, this.a[t[n]]));
          return new ne(e);
        }),
        (D.prototype.values = D.prototype.values),
        (D.prototype.forEach = function (e, t) {
          var n = k(this);
          n.sort();
          for (var r = 0; r < n.length; r++) {
            var i = this.a[n[r]];
            e.call(t, O(this, i), i.key, this);
          }
        }),
        (D.prototype.forEach = D.prototype.forEach),
        (D.prototype.set = function (e, t) {
          var n = new re(e);
          return (
            this.b ? ((n.a = t), (n.value = t.g())) : (n.value = t),
            (this.a[e.toString()] = n),
            (this.arrClean = !1),
            this
          );
        }),
        (D.prototype.set = D.prototype.set));
      function O(e, t) {
        return e.b ? ((t.a ||= new e.b(t.value)), t.a) : t.value;
      }
      ((D.prototype.get = function (e) {
        if ((e = this.a[e.toString()])) return O(this, e);
      }),
        (D.prototype.get = D.prototype.get),
        (D.prototype.has = function (e) {
          return e.toString() in this.a;
        }),
        (D.prototype.has = D.prototype.has),
        (D.prototype.Jc = function (e, t, n, r, i) {
          var a = k(this);
          a.sort();
          for (var o = 0; o < a.length; o++) {
            var s = this.a[a[o]];
            (t.Va(e),
              n.call(t, 1, s.key),
              this.b ? r.call(t, 2, O(this, s), i) : r.call(t, 2, s.value),
              t.Ya());
          }
        }),
        (D.prototype.serializeBinary = D.prototype.Jc),
        (D.deserializeBinary = function (e, t, n, r, i, a, o) {
          for (; t.oa() && !t.bb(); ) {
            var s = t.c;
            s == 1
              ? (a = n.call(t))
              : s == 2 &&
                (e.b
                  ? (C(i), (o ||= new e.b()), r.call(t, o, i))
                  : (o = r.call(t)));
          }
          (C(a != null), C(o != null), e.set(a, o));
        }));
      function k(e) {
        e = e.a;
        var t = [],
          n;
        for (n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t;
      }
      function re(e, t) {
        ((this.key = e), (this.value = t), (this.a = void 0));
      }
      function ie(e) {
        if (8192 >= e.length) return String.fromCharCode.apply(null, e);
        for (var t = ``, n = 0; n < e.length; n += 8192)
          t += String.fromCharCode.apply(null, x(e, n, n + 8192));
        return t;
      }
      var A = {
          "\0": `\\0`,
          "\b": `\\b`,
          "\f": `\\f`,
          "\n": `\\n`,
          "\r": `\\r`,
          "	": `\\t`,
          "\v": `\\x0B`,
          '"': `\\"`,
          "\\": `\\\\`,
          "<": `\\u003C`,
        },
        ae = { "'": `\\'` },
        oe = {},
        j = null;
      function se(e, t) {
        (t === void 0 && (t = 0), ue(), (t = oe[t]));
        for (var n = [], r = 0; r < e.length; r += 3) {
          var i = e[r],
            a = r + 1 < e.length,
            o = a ? e[r + 1] : 0,
            s = r + 2 < e.length,
            c = s ? e[r + 2] : 0,
            l = i >> 2;
          ((i = ((i & 3) << 4) | (o >> 4)),
            (o = ((o & 15) << 2) | (c >> 6)),
            (c &= 63),
            s || ((c = 64), a || (o = 64)),
            n.push(t[l], t[i], t[o] || ``, t[c] || ``));
        }
        return n.join(``);
      }
      function ce(e) {
        var t = e.length,
          n = (3 * t) / 4;
        n % 3
          ? (n = Math.floor(n))
          : `=.`.indexOf(e[t - 1]) != -1 &&
            (n = `=.`.indexOf(e[t - 2]) == -1 ? n - 1 : n - 2);
        var r = new Uint8Array(n),
          i = 0;
        return (
          le(e, function (e) {
            r[i++] = e;
          }),
          r.subarray(0, i)
        );
      }
      function le(e, t) {
        function n(t) {
          for (; r < e.length; ) {
            var n = e.charAt(r++),
              i = j[n];
            if (i != null) return i;
            if (!/^[\s\xa0]*$/.test(n))
              throw Error(`Unknown base64 encoding at char: ` + n);
          }
          return t;
        }
        ue();
        for (var r = 0; ; ) {
          var i = n(-1),
            a = n(0),
            o = n(64),
            s = n(64);
          if (s === 64 && i === -1) break;
          (t((i << 2) | (a >> 4)),
            o != 64 &&
              (t(((a << 4) & 240) | (o >> 2)),
              s != 64 && t(((o << 6) & 192) | s)));
        }
      }
      function ue() {
        if (!j) {
          j = {};
          for (
            var e =
                `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split(
                  ``,
                ),
              t = [`+/=`, `+/`, `-_=`, `-_.`, `-_`],
              n = 0;
            5 > n;
            n++
          ) {
            var r = e.concat(t[n].split(``));
            oe[n] = r;
            for (var i = 0; i < r.length; i++) {
              var a = r[i];
              j[a] === void 0 && (j[a] = i);
            }
          }
        }
      }
      (f(`jspb.ConstBinaryMessage`, function () {}, void 0),
        f(`jspb.BinaryMessage`, function () {}, void 0),
        f(
          `jspb.BinaryConstants.FieldType`,
          {
            yb: -1,
            ee: 1,
            FLOAT: 2,
            ke: 3,
            te: 4,
            je: 5,
            xb: 6,
            wb: 7,
            BOOL: 8,
            re: 9,
            ie: 10,
            le: 11,
            ce: 12,
            se: 13,
            ge: 14,
            me: 15,
            ne: 16,
            oe: 17,
            pe: 18,
            he: 30,
            ve: 31,
          },
          void 0,
        ),
        f(
          `jspb.BinaryConstants.WireType`,
          { yb: -1, ue: 0, xb: 1, de: 2, qe: 3, fe: 4, wb: 5 },
          void 0,
        ),
        f(
          `jspb.BinaryConstants.FieldTypeToWireType`,
          function (e) {
            switch (e) {
              case 5:
              case 3:
              case 13:
              case 4:
              case 17:
              case 18:
              case 8:
              case 14:
              case 31:
                return 0;
              case 1:
              case 6:
              case 16:
              case 30:
                return 1;
              case 9:
              case 11:
              case 12:
                return 2;
              case 2:
              case 7:
              case 15:
                return 5;
              default:
                return -1;
            }
          },
          void 0,
        ),
        f(`jspb.BinaryConstants.INVALID_FIELD_NUMBER`, -1, void 0),
        f(`jspb.BinaryConstants.FLOAT32_EPS`, 1401298464324817e-60, void 0),
        f(`jspb.BinaryConstants.FLOAT32_MIN`, 11754943508222875e-54, void 0),
        f(`jspb.BinaryConstants.FLOAT32_MAX`, 34028234663852886e22, void 0),
        f(`jspb.BinaryConstants.FLOAT64_EPS`, 5e-324, void 0),
        f(`jspb.BinaryConstants.FLOAT64_MIN`, 22250738585072014e-324, void 0),
        f(`jspb.BinaryConstants.FLOAT64_MAX`, 17976931348623157e292, void 0),
        f(`jspb.BinaryConstants.TWO_TO_20`, 1048576, void 0),
        f(`jspb.BinaryConstants.TWO_TO_23`, 8388608, void 0),
        f(`jspb.BinaryConstants.TWO_TO_31`, 2147483648, void 0),
        f(`jspb.BinaryConstants.TWO_TO_32`, 4294967296, void 0),
        f(`jspb.BinaryConstants.TWO_TO_52`, 4503599627370496, void 0),
        f(`jspb.BinaryConstants.TWO_TO_63`, 0x8000000000000000, void 0),
        f(`jspb.BinaryConstants.TWO_TO_64`, 0x10000000000000000, void 0),
        f(`jspb.BinaryConstants.ZERO_HASH`, `\0\0\0\0\0\0\0\0`, void 0));
      var M = 0,
        N = 0;
      (f(
        `jspb.utils.getSplit64Low`,
        function () {
          return M;
        },
        void 0,
      ),
        f(
          `jspb.utils.getSplit64High`,
          function () {
            return N;
          },
          void 0,
        ));
      function de(e) {
        var t = e >>> 0;
        ((e = Math.floor((e - t) / 4294967296) >>> 0), (M = t), (N = e));
      }
      f(`jspb.utils.splitUint64`, de, void 0);
      function fe(e) {
        var t = 0 > e;
        e = Math.abs(e);
        var n = e >>> 0;
        ((e = Math.floor((e - n) / 4294967296)),
          (e >>>= 0),
          t &&
            ((e = ~e >>> 0),
            (n = (~n >>> 0) + 1),
            4294967295 < n && ((n = 0), e++, 4294967295 < e && (e = 0))),
          (M = n),
          (N = e));
      }
      f(`jspb.utils.splitInt64`, fe, void 0);
      function pe(e) {
        var t = 0 > e;
        ((e = 2 * Math.abs(e)), de(e), (e = M));
        var n = N;
        (t &&
          (e == 0
            ? n == 0
              ? (n = e = 4294967295)
              : (n--, (e = 4294967295))
            : e--),
          (M = e),
          (N = n));
      }
      f(`jspb.utils.splitZigzag64`, pe, void 0);
      function me(e) {
        var t = +(0 > e);
        if (((e = t ? -e : e), e === 0))
          0 < 1 / e ? (M = N = 0) : ((N = 0), (M = 2147483648));
        else if (isNaN(e)) ((N = 0), (M = 2147483647));
        else if (34028234663852886e22 < e)
          ((N = 0), (M = ((t << 31) | 2139095040) >>> 0));
        else if (11754943508222875e-54 > e)
          ((e = Math.round(e / 2 ** -149)),
            (N = 0),
            (M = ((t << 31) | e) >>> 0));
        else {
          var n = Math.floor(Math.log(e) / Math.LN2);
          ((e *= 2 ** -n),
            (e = Math.round(8388608 * e)),
            16777216 <= e && ++n,
            (N = 0),
            (M = ((t << 31) | ((n + 127) << 23) | (e & 8388607)) >>> 0));
        }
      }
      f(`jspb.utils.splitFloat32`, me, void 0);
      function he(e) {
        var t = +(0 > e);
        if (((e = t ? -e : e), e === 0))
          ((N = 0 < 1 / e ? 0 : 2147483648), (M = 0));
        else if (isNaN(e)) ((N = 2147483647), (M = 4294967295));
        else if (17976931348623157e292 < e)
          ((N = ((t << 31) | 2146435072) >>> 0), (M = 0));
        else if (22250738585072014e-324 > e)
          ((e /= 2 ** -1074),
            (N = ((t << 31) | (e / 4294967296)) >>> 0),
            (M = e >>> 0));
        else {
          var n = e,
            r = 0;
          if (2 <= n) for (; 2 <= n && 1023 > r; ) (r++, (n /= 2));
          else for (; 1 > n && -1022 < r; ) ((n *= 2), r--);
          ((e *= 2 ** -r),
            (N =
              ((t << 31) | ((r + 1023) << 20) | ((1048576 * e) & 1048575)) >>>
              0),
            (M = (4503599627370496 * e) >>> 0));
        }
      }
      f(`jspb.utils.splitFloat64`, he, void 0);
      function ge(e) {
        var t = e.charCodeAt(4),
          n = e.charCodeAt(5),
          r = e.charCodeAt(6),
          i = e.charCodeAt(7);
        ((M =
          (e.charCodeAt(0) +
            (e.charCodeAt(1) << 8) +
            (e.charCodeAt(2) << 16) +
            (e.charCodeAt(3) << 24)) >>>
          0),
          (N = (t + (n << 8) + (r << 16) + (i << 24)) >>> 0));
      }
      f(`jspb.utils.splitHash64`, ge, void 0);
      function _e(e, t) {
        return 4294967296 * t + (e >>> 0);
      }
      f(`jspb.utils.joinUint64`, _e, void 0);
      function ve(e, t) {
        var n = t & 2147483648;
        return (
          n &&
            ((e = (~e + 1) >>> 0),
            (t = ~t >>> 0),
            e == 0 && (t = (t + 1) >>> 0)),
          (e = _e(e, t)),
          n ? -e : e
        );
      }
      f(`jspb.utils.joinInt64`, ve, void 0);
      function ye(e, t, n) {
        var r = t >> 31;
        return n((e << 1) ^ r, ((t << 1) | (e >>> 31)) ^ r);
      }
      f(`jspb.utils.toZigzag64`, ye, void 0);
      function be(e, t) {
        return xe(e, t, ve);
      }
      f(`jspb.utils.joinZigzag64`, be, void 0);
      function xe(e, t, n) {
        var r = -(e & 1);
        return n(((e >>> 1) | (t << 31)) ^ r, (t >>> 1) ^ r);
      }
      f(`jspb.utils.fromZigzag64`, xe, void 0);
      function Se(e) {
        var t = 2 * (e >> 31) + 1,
          n = (e >>> 23) & 255;
        return (
          (e &= 8388607),
          n == 255
            ? e
              ? NaN
              : (1 / 0) * t
            : n == 0
              ? t * 2 ** -149 * e
              : t * 2 ** (n - 150) * (e + 2 ** 23)
        );
      }
      f(`jspb.utils.joinFloat32`, Se, void 0);
      function Ce(e, t) {
        var n = 2 * (t >> 31) + 1,
          r = (t >>> 20) & 2047;
        return (
          (e = 4294967296 * (t & 1048575) + e),
          r == 2047
            ? e
              ? NaN
              : (1 / 0) * n
            : r == 0
              ? n * 2 ** -1074 * e
              : n * 2 ** (r - 1075) * (e + 4503599627370496)
        );
      }
      f(`jspb.utils.joinFloat64`, Ce, void 0);
      function we(e, t) {
        return String.fromCharCode(
          (e >>> 0) & 255,
          (e >>> 8) & 255,
          (e >>> 16) & 255,
          (e >>> 24) & 255,
          (t >>> 0) & 255,
          (t >>> 8) & 255,
          (t >>> 16) & 255,
          (t >>> 24) & 255,
        );
      }
      (f(`jspb.utils.joinHash64`, we, void 0),
        f(`jspb.utils.DIGITS`, `0123456789abcdef`.split(``), void 0));
      function Te(e, t) {
        function n(e, t) {
          return (
            (e = e ? String(e) : ``),
            t ? `0000000`.slice(e.length) + e : e
          );
        }
        if (2097151 >= t) return `` + _e(e, t);
        var r = (((e >>> 24) | (t << 8)) >>> 0) & 16777215;
        return (
          (t = (t >> 16) & 65535),
          (e = (e & 16777215) + 6777216 * r + 6710656 * t),
          (r += 8147497 * t),
          (t *= 2),
          1e7 <= e && ((r += Math.floor(e / 1e7)), (e %= 1e7)),
          1e7 <= r && ((t += Math.floor(r / 1e7)), (r %= 1e7)),
          n(t, 0) + n(r, t) + n(e, 1)
        );
      }
      f(`jspb.utils.joinUnsignedDecimalString`, Te, void 0);
      function Ee(e, t) {
        var n = t & 2147483648;
        return (
          n && ((e = (~e + 1) >>> 0), (t = (~t + +(e == 0)) >>> 0)),
          (e = Te(e, t)),
          n ? `-` + e : e
        );
      }
      f(`jspb.utils.joinSignedDecimalString`, Ee, void 0);
      function De(e, t) {
        (ge(e), (e = M));
        var n = N;
        return t ? Ee(e, n) : Te(e, n);
      }
      (f(`jspb.utils.hash64ToDecimalString`, De, void 0),
        f(
          `jspb.utils.hash64ArrayToDecimalStrings`,
          function (e, t) {
            for (var n = Array(e.length), r = 0; r < e.length; r++)
              n[r] = De(e[r], t);
            return n;
          },
          void 0,
        ));
      function P(e) {
        function t(e, t) {
          for (var n = 0; 8 > n && (e !== 1 || 0 < t); n++)
            ((t = e * i[n] + t), (i[n] = t & 255), (t >>>= 8));
        }
        function n() {
          for (var e = 0; 8 > e; e++) i[e] = ~i[e] & 255;
        }
        C(0 < e.length);
        var r = !1;
        e[0] === `-` && ((r = !0), (e = e.slice(1)));
        for (var i = [0, 0, 0, 0, 0, 0, 0, 0], a = 0; a < e.length; a++)
          t(10, e.charCodeAt(a) - 48);
        return (r && (n(), t(1, 1)), ie(i));
      }
      (f(`jspb.utils.decimalStringToHash64`, P, void 0),
        f(
          `jspb.utils.splitDecimalString`,
          function (e) {
            ge(P(e));
          },
          void 0,
        ));
      function Oe(e) {
        return String.fromCharCode(10 > e ? 48 + e : 87 + e);
      }
      function ke(e) {
        return 97 <= e ? e - 97 + 10 : e - 48;
      }
      (f(
        `jspb.utils.hash64ToHexString`,
        function (e) {
          var t = Array(18);
          ((t[0] = `0`), (t[1] = `x`));
          for (var n = 0; 8 > n; n++) {
            var r = e.charCodeAt(7 - n);
            ((t[2 * n + 2] = Oe(r >> 4)), (t[2 * n + 3] = Oe(r & 15)));
          }
          return t.join(``);
        },
        void 0,
      ),
        f(
          `jspb.utils.hexStringToHash64`,
          function (e) {
            ((e = e.toLowerCase()),
              C(e.length == 18),
              C(e[0] == `0`),
              C(e[1] == `x`));
            for (var t = ``, n = 0; 8 > n; n++)
              t =
                String.fromCharCode(
                  16 * ke(e.charCodeAt(2 * n + 2)) +
                    ke(e.charCodeAt(2 * n + 3)),
                ) + t;
            return t;
          },
          void 0,
        ),
        f(
          `jspb.utils.hash64ToNumber`,
          function (e, t) {
            (ge(e), (e = M));
            var n = N;
            return t ? ve(e, n) : _e(e, n);
          },
          void 0,
        ),
        f(
          `jspb.utils.numberToHash64`,
          function (e) {
            return (fe(e), we(M, N));
          },
          void 0,
        ),
        f(
          `jspb.utils.countVarints`,
          function (e, t, n) {
            for (var r = 0, i = t; i < n; i++) r += e[i] >> 7;
            return n - t - r;
          },
          void 0,
        ),
        f(
          `jspb.utils.countVarintFields`,
          function (e, t, n, r) {
            var i = 0;
            if (((r *= 8), 128 > r))
              for (; t < n && e[t++] == r; )
                for (i++; ; ) {
                  var a = e[t++];
                  if (!(a & 128)) break;
                }
            else
              for (; t < n; ) {
                for (a = r; 128 < a; ) {
                  if (e[t] != ((a & 127) | 128)) return i;
                  (t++, (a >>= 7));
                }
                if (e[t++] != a) break;
                for (i++; (a = e[t++]), a & 128; );
              }
            return i;
          },
          void 0,
        ));
      function Ae(e, t, n, r, i) {
        var a = 0;
        if (128 > r) for (; t < n && e[t++] == r; ) (a++, (t += i));
        else
          for (; t < n; ) {
            for (var o = r; 128 < o; ) {
              if (e[t++] != ((o & 127) | 128)) return a;
              o >>= 7;
            }
            if (e[t++] != o) break;
            (a++, (t += i));
          }
        return a;
      }
      (f(
        `jspb.utils.countFixed32Fields`,
        function (e, t, n, r) {
          return Ae(e, t, n, 8 * r + 5, 4);
        },
        void 0,
      ),
        f(
          `jspb.utils.countFixed64Fields`,
          function (e, t, n, r) {
            return Ae(e, t, n, 8 * r + 1, 8);
          },
          void 0,
        ),
        f(
          `jspb.utils.countDelimitedFields`,
          function (e, t, n, r) {
            var i = 0;
            for (r = 8 * r + 2; t < n; ) {
              for (var a = r; 128 < a; ) {
                if (e[t++] != ((a & 127) | 128)) return i;
                a >>= 7;
              }
              if (e[t++] != a) break;
              i++;
              for (
                var o = 0, s = 1;
                (a = e[t++]), (o += (a & 127) * s), (s *= 128), a & 128;
              );
              t += o;
            }
            return i;
          },
          void 0,
        ),
        f(
          `jspb.utils.debugBytesToTextFormat`,
          function (e) {
            var t = `"`;
            if (e) {
              e = je(e);
              for (var n = 0; n < e.length; n++)
                ((t += `\\x`),
                  16 > e[n] && (t += `0`),
                  (t += e[n].toString(16)));
            }
            return t + `"`;
          },
          void 0,
        ),
        f(
          `jspb.utils.debugScalarToTextFormat`,
          function (e) {
            if (typeof e == `string`) {
              e = String(e);
              for (var t = [`"`], n = 0; n < e.length; n++) {
                var r = e.charAt(n),
                  i = r.charCodeAt(0),
                  a = n + 1,
                  o;
                ((o = A[r]) ||
                  ((31 < i && 127 > i) ||
                    ((i = r),
                    i in ae
                      ? (r = ae[i])
                      : i in A
                        ? (r = ae[i] = A[i])
                        : ((o = i.charCodeAt(0)),
                          31 < o && 127 > o
                            ? (r = i)
                            : (256 > o
                                ? ((r = `\\x`),
                                  (16 > o || 256 < o) && (r += `0`))
                                : ((r = `\\u`), 4096 > o && (r += `0`)),
                              (r += o.toString(16).toUpperCase())),
                          (r = ae[i] = r))),
                  (o = r)),
                  (t[a] = o));
              }
              (t.push(`"`), (e = t.join(``)));
            } else e = e.toString();
            return e;
          },
          void 0,
        ),
        f(
          `jspb.utils.stringToByteArray`,
          function (e) {
            for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) {
              var r = e.charCodeAt(n);
              if (255 < r)
                throw Error(
                  `Conversion error: string contains codepoint outside of byte range`,
                );
              t[n] = r;
            }
            return t;
          },
          void 0,
        ));
      function je(e) {
        return e.constructor === Uint8Array
          ? e
          : e.constructor === ArrayBuffer || e.constructor === Array
            ? new Uint8Array(e)
            : e.constructor === String
              ? ce(e)
              : e instanceof Uint8Array
                ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                : (T(`Type not convertible to Uint8Array.`), new Uint8Array());
      }
      f(`jspb.utils.byteSourceToUint8Array`, je, void 0);
      function F(e, t, n) {
        ((this.b = null),
          (this.a = this.c = this.h = 0),
          (this.v = !1),
          e && this.H(e, t, n));
      }
      f(`jspb.BinaryDecoder`, F, void 0);
      var Me = [];
      F.getInstanceCacheLength = function () {
        return Me.length;
      };
      function Ne(e, t, n) {
        if (Me.length) {
          var r = Me.pop();
          return (e && r.H(e, t, n), r);
        }
        return new F(e, t, n);
      }
      ((F.alloc = Ne),
        (F.prototype.Ca = function () {
          (this.clear(), 100 > Me.length && Me.push(this));
        }),
        (F.prototype.free = F.prototype.Ca),
        (F.prototype.clone = function () {
          return Ne(this.b, this.h, this.c - this.h);
        }),
        (F.prototype.clone = F.prototype.clone),
        (F.prototype.clear = function () {
          ((this.b = null), (this.a = this.c = this.h = 0), (this.v = !1));
        }),
        (F.prototype.clear = F.prototype.clear),
        (F.prototype.Y = function () {
          return this.b;
        }),
        (F.prototype.getBuffer = F.prototype.Y),
        (F.prototype.H = function (e, t, n) {
          ((this.b = je(e)),
            (this.h = t === void 0 ? 0 : t),
            (this.c = n === void 0 ? this.b.length : this.h + n),
            (this.a = this.h));
        }),
        (F.prototype.setBlock = F.prototype.H),
        (F.prototype.Db = function () {
          return this.c;
        }),
        (F.prototype.getEnd = F.prototype.Db),
        (F.prototype.setEnd = function (e) {
          this.c = e;
        }),
        (F.prototype.setEnd = F.prototype.setEnd),
        (F.prototype.reset = function () {
          this.a = this.h;
        }),
        (F.prototype.reset = F.prototype.reset),
        (F.prototype.B = function () {
          return this.a;
        }),
        (F.prototype.getCursor = F.prototype.B),
        (F.prototype.Ma = function (e) {
          this.a = e;
        }),
        (F.prototype.setCursor = F.prototype.Ma),
        (F.prototype.advance = function (e) {
          ((this.a += e), C(this.a <= this.c));
        }),
        (F.prototype.advance = F.prototype.advance),
        (F.prototype.ya = function () {
          return this.a == this.c;
        }),
        (F.prototype.atEnd = F.prototype.ya),
        (F.prototype.Qb = function () {
          return this.a > this.c;
        }),
        (F.prototype.pastEnd = F.prototype.Qb),
        (F.prototype.getError = function () {
          return this.v || 0 > this.a || this.a > this.c;
        }),
        (F.prototype.getError = F.prototype.getError),
        (F.prototype.w = function (e) {
          for (var t = 128, n = 0, r = 0, i = 0; 4 > i && 128 <= t; i++)
            ((t = this.b[this.a++]), (n |= (t & 127) << (7 * i)));
          if (
            (128 <= t &&
              ((t = this.b[this.a++]),
              (n |= (t & 127) << 28),
              (r |= (t & 127) >> 4)),
            128 <= t)
          )
            for (i = 0; 5 > i && 128 <= t; i++)
              ((t = this.b[this.a++]), (r |= (t & 127) << (7 * i + 3)));
          if (128 > t) return e(n >>> 0, r >>> 0);
          (T(`Failed to read varint, encoding is invalid.`), (this.v = !0));
        }),
        (F.prototype.readSplitVarint64 = F.prototype.w),
        (F.prototype.ea = function (e) {
          return this.w(function (t, n) {
            return xe(t, n, e);
          });
        }),
        (F.prototype.readSplitZigzagVarint64 = F.prototype.ea),
        (F.prototype.ta = function (e) {
          var t = this.b,
            n = this.a;
          this.a += 8;
          for (var r = 0, i = 0, a = n + 7; a >= n; a--)
            ((r = (r << 8) | t[a]), (i = (i << 8) | t[a + 4]));
          return e(r, i);
        }),
        (F.prototype.readSplitFixed64 = F.prototype.ta),
        (F.prototype.kb = function () {
          for (; this.b[this.a] & 128; ) this.a++;
          this.a++;
        }),
        (F.prototype.skipVarint = F.prototype.kb),
        (F.prototype.mb = function (e) {
          for (; 128 < e; ) (this.a--, (e >>>= 7));
          this.a--;
        }),
        (F.prototype.unskipVarint = F.prototype.mb),
        (F.prototype.o = function () {
          var e = this.b,
            t = e[this.a],
            n = t & 127;
          return 128 > t
            ? ((this.a += 1), C(this.a <= this.c), n)
            : ((t = e[this.a + 1]),
              (n |= (t & 127) << 7),
              128 > t
                ? ((this.a += 2), C(this.a <= this.c), n)
                : ((t = e[this.a + 2]),
                  (n |= (t & 127) << 14),
                  128 > t
                    ? ((this.a += 3), C(this.a <= this.c), n)
                    : ((t = e[this.a + 3]),
                      (n |= (t & 127) << 21),
                      128 > t
                        ? ((this.a += 4), C(this.a <= this.c), n)
                        : ((t = e[this.a + 4]),
                          (n |= (t & 15) << 28),
                          128 > t
                            ? ((this.a += 5), C(this.a <= this.c), n >>> 0)
                            : ((this.a += 5),
                              128 <= e[this.a++] &&
                                128 <= e[this.a++] &&
                                128 <= e[this.a++] &&
                                128 <= e[this.a++] &&
                                128 <= e[this.a++] &&
                                C(!1),
                              C(this.a <= this.c),
                              n)))));
        }),
        (F.prototype.readUnsignedVarint32 = F.prototype.o),
        (F.prototype.da = function () {
          return ~~this.o();
        }),
        (F.prototype.readSignedVarint32 = F.prototype.da),
        (F.prototype.O = function () {
          return this.o().toString();
        }),
        (F.prototype.Ea = function () {
          return this.da().toString();
        }),
        (F.prototype.readSignedVarint32String = F.prototype.Ea),
        (F.prototype.Ia = function () {
          var e = this.o();
          return (e >>> 1) ^ -(e & 1);
        }),
        (F.prototype.readZigzagVarint32 = F.prototype.Ia),
        (F.prototype.Ga = function () {
          return this.w(_e);
        }),
        (F.prototype.readUnsignedVarint64 = F.prototype.Ga),
        (F.prototype.Ha = function () {
          return this.w(Te);
        }),
        (F.prototype.readUnsignedVarint64String = F.prototype.Ha),
        (F.prototype.sa = function () {
          return this.w(ve);
        }),
        (F.prototype.readSignedVarint64 = F.prototype.sa),
        (F.prototype.Fa = function () {
          return this.w(Ee);
        }),
        (F.prototype.readSignedVarint64String = F.prototype.Fa),
        (F.prototype.Ja = function () {
          return this.w(be);
        }),
        (F.prototype.readZigzagVarint64 = F.prototype.Ja),
        (F.prototype.fb = function () {
          return this.ea(we);
        }),
        (F.prototype.readZigzagVarintHash64 = F.prototype.fb),
        (F.prototype.Ka = function () {
          return this.ea(Ee);
        }),
        (F.prototype.readZigzagVarint64String = F.prototype.Ka),
        (F.prototype.Gc = function () {
          var e = this.b[this.a];
          return ((this.a += 1), C(this.a <= this.c), e);
        }),
        (F.prototype.readUint8 = F.prototype.Gc),
        (F.prototype.Ec = function () {
          var e = this.b[this.a],
            t = this.b[this.a + 1];
          return ((this.a += 2), C(this.a <= this.c), (e << 0) | (t << 8));
        }),
        (F.prototype.readUint16 = F.prototype.Ec),
        (F.prototype.m = function () {
          var e = this.b[this.a],
            t = this.b[this.a + 1],
            n = this.b[this.a + 2],
            r = this.b[this.a + 3];
          return (
            (this.a += 4),
            C(this.a <= this.c),
            ((e << 0) | (t << 8) | (n << 16) | (r << 24)) >>> 0
          );
        }),
        (F.prototype.readUint32 = F.prototype.m),
        (F.prototype.ga = function () {
          return _e(this.m(), this.m());
        }),
        (F.prototype.readUint64 = F.prototype.ga),
        (F.prototype.ha = function () {
          return Te(this.m(), this.m());
        }),
        (F.prototype.readUint64String = F.prototype.ha),
        (F.prototype.Xb = function () {
          var e = this.b[this.a];
          return ((this.a += 1), C(this.a <= this.c), (e << 24) >> 24);
        }),
        (F.prototype.readInt8 = F.prototype.Xb),
        (F.prototype.Vb = function () {
          var e = this.b[this.a],
            t = this.b[this.a + 1];
          return (
            (this.a += 2),
            C(this.a <= this.c),
            (((e << 0) | (t << 8)) << 16) >> 16
          );
        }),
        (F.prototype.readInt16 = F.prototype.Vb),
        (F.prototype.P = function () {
          var e = this.b[this.a],
            t = this.b[this.a + 1],
            n = this.b[this.a + 2],
            r = this.b[this.a + 3];
          return (
            (this.a += 4),
            C(this.a <= this.c),
            (e << 0) | (t << 8) | (n << 16) | (r << 24)
          );
        }),
        (F.prototype.readInt32 = F.prototype.P),
        (F.prototype.ba = function () {
          return ve(this.m(), this.m());
        }),
        (F.prototype.readInt64 = F.prototype.ba),
        (F.prototype.ca = function () {
          return Ee(this.m(), this.m());
        }),
        (F.prototype.readInt64String = F.prototype.ca),
        (F.prototype.aa = function () {
          return Se(this.m(), 0);
        }),
        (F.prototype.readFloat = F.prototype.aa),
        (F.prototype.Z = function () {
          return Ce(this.m(), this.m());
        }),
        (F.prototype.readDouble = F.prototype.Z),
        (F.prototype.pa = function () {
          return !!this.b[this.a++];
        }),
        (F.prototype.readBool = F.prototype.pa),
        (F.prototype.ra = function () {
          return this.da();
        }),
        (F.prototype.readEnum = F.prototype.ra),
        (F.prototype.fa = function (e) {
          var t = this.b,
            n = this.a;
          e = n + e;
          for (var r = [], i = ``; n < e; ) {
            var a = t[n++];
            if (128 > a) r.push(a);
            else if (192 > a) continue;
            else if (224 > a) {
              var o = t[n++];
              r.push(((a & 31) << 6) | (o & 63));
            } else if (240 > a) {
              o = t[n++];
              var s = t[n++];
              r.push(((a & 15) << 12) | ((o & 63) << 6) | (s & 63));
            } else if (248 > a) {
              ((o = t[n++]), (s = t[n++]));
              var c = t[n++];
              ((a =
                ((a & 7) << 18) |
                ((o & 63) << 12) |
                ((s & 63) << 6) |
                (c & 63)),
                (a -= 65536),
                r.push(((a >> 10) & 1023) + 55296, (a & 1023) + 56320));
            }
            8192 <= r.length &&
              ((i += String.fromCharCode.apply(null, r)), (r.length = 0));
          }
          return ((i += ie(r)), (this.a = n), i);
        }),
        (F.prototype.readString = F.prototype.fa),
        (F.prototype.Dc = function () {
          var e = this.o();
          return this.fa(e);
        }),
        (F.prototype.readStringWithLength = F.prototype.Dc),
        (F.prototype.qa = function (e) {
          if (0 > e || this.a + e > this.b.length)
            return ((this.v = !0), T(`Invalid byte length!`), new Uint8Array());
          var t = this.b.subarray(this.a, this.a + e);
          return ((this.a += e), C(this.a <= this.c), t);
        }),
        (F.prototype.readBytes = F.prototype.qa),
        (F.prototype.ia = function () {
          return this.w(we);
        }),
        (F.prototype.readVarintHash64 = F.prototype.ia),
        (F.prototype.$ = function () {
          var e = this.b,
            t = this.a,
            n = e[t],
            r = e[t + 1],
            i = e[t + 2],
            a = e[t + 3],
            o = e[t + 4],
            s = e[t + 5],
            c = e[t + 6];
          return (
            (e = e[t + 7]),
            (this.a += 8),
            String.fromCharCode(n, r, i, a, o, s, c, e)
          );
        }),
        (F.prototype.readFixedHash64 = F.prototype.$));
      function I(e, t, n) {
        ((this.a = Ne(e, t, n)),
          (this.O = this.a.B()),
          (this.b = this.c = -1),
          (this.h = !1),
          (this.v = null));
      }
      f(`jspb.BinaryReader`, I, void 0);
      var Pe = [];
      ((I.clearInstanceCache = function () {
        Pe = [];
      }),
        (I.getInstanceCacheLength = function () {
          return Pe.length;
        }));
      function Fe(e, t, n) {
        if (Pe.length) {
          var r = Pe.pop();
          return (e && r.a.H(e, t, n), r);
        }
        return new I(e, t, n);
      }
      ((I.alloc = Fe),
        (I.prototype.zb = Fe),
        (I.prototype.alloc = I.prototype.zb),
        (I.prototype.Ca = function () {
          (this.a.clear(),
            (this.b = this.c = -1),
            (this.h = !1),
            (this.v = null),
            100 > Pe.length && Pe.push(this));
        }),
        (I.prototype.free = I.prototype.Ca),
        (I.prototype.Fb = function () {
          return this.O;
        }),
        (I.prototype.getFieldCursor = I.prototype.Fb),
        (I.prototype.B = function () {
          return this.a.B();
        }),
        (I.prototype.getCursor = I.prototype.B),
        (I.prototype.Y = function () {
          return this.a.Y();
        }),
        (I.prototype.getBuffer = I.prototype.Y),
        (I.prototype.Hb = function () {
          return this.c;
        }),
        (I.prototype.getFieldNumber = I.prototype.Hb),
        (I.prototype.Lb = function () {
          return this.b;
        }),
        (I.prototype.getWireType = I.prototype.Lb),
        (I.prototype.Mb = function () {
          return this.b == 2;
        }),
        (I.prototype.isDelimited = I.prototype.Mb),
        (I.prototype.bb = function () {
          return this.b == 4;
        }),
        (I.prototype.isEndGroup = I.prototype.bb),
        (I.prototype.getError = function () {
          return this.h || this.a.getError();
        }),
        (I.prototype.getError = I.prototype.getError),
        (I.prototype.H = function (e, t, n) {
          (this.a.H(e, t, n), (this.b = this.c = -1));
        }),
        (I.prototype.setBlock = I.prototype.H),
        (I.prototype.reset = function () {
          (this.a.reset(), (this.b = this.c = -1));
        }),
        (I.prototype.reset = I.prototype.reset),
        (I.prototype.advance = function (e) {
          this.a.advance(e);
        }),
        (I.prototype.advance = I.prototype.advance),
        (I.prototype.oa = function () {
          if (this.a.ya()) return !1;
          if (this.getError()) return (T(`Decoder hit an error`), !1);
          this.O = this.a.B();
          var e = this.a.o(),
            t = e >>> 3;
          return (
            (e &= 7),
            e != 0 && e != 5 && e != 1 && e != 2 && e != 3 && e != 4
              ? (T(`Invalid wire type: %s (at position %s)`, e, this.O),
                (this.h = !0),
                !1)
              : ((this.c = t), (this.b = e), !0)
          );
        }),
        (I.prototype.nextField = I.prototype.oa),
        (I.prototype.Oa = function () {
          this.a.mb((this.c << 3) | this.b);
        }),
        (I.prototype.unskipHeader = I.prototype.Oa),
        (I.prototype.Lc = function () {
          var e = this.c;
          for (this.Oa(); this.oa() && this.c == e; ) this.C();
          this.a.ya() || this.Oa();
        }),
        (I.prototype.skipMatchingFields = I.prototype.Lc),
        (I.prototype.lb = function () {
          this.b == 0
            ? this.a.kb()
            : (T(`Invalid wire type for skipVarintField`), this.C());
        }),
        (I.prototype.skipVarintField = I.prototype.lb),
        (I.prototype.gb = function () {
          if (this.b != 2)
            (T(`Invalid wire type for skipDelimitedField`), this.C());
          else {
            var e = this.a.o();
            this.a.advance(e);
          }
        }),
        (I.prototype.skipDelimitedField = I.prototype.gb),
        (I.prototype.hb = function () {
          this.b == 5
            ? this.a.advance(4)
            : (T(`Invalid wire type for skipFixed32Field`), this.C());
        }),
        (I.prototype.skipFixed32Field = I.prototype.hb),
        (I.prototype.ib = function () {
          this.b == 1
            ? this.a.advance(8)
            : (T(`Invalid wire type for skipFixed64Field`), this.C());
        }),
        (I.prototype.skipFixed64Field = I.prototype.ib),
        (I.prototype.jb = function () {
          var e = this.c;
          do {
            if (!this.oa()) {
              (T(`Unmatched start-group tag: stream EOF`), (this.h = !0));
              break;
            }
            if (this.b == 4) {
              this.c != e && (T(`Unmatched end-group tag`), (this.h = !0));
              break;
            }
            this.C();
          } while (1);
        }),
        (I.prototype.skipGroup = I.prototype.jb),
        (I.prototype.C = function () {
          switch (this.b) {
            case 0:
              this.lb();
              break;
            case 1:
              this.ib();
              break;
            case 2:
              this.gb();
              break;
            case 5:
              this.hb();
              break;
            case 3:
              this.jb();
              break;
            default:
              T(`Invalid wire encoding for field.`);
          }
        }),
        (I.prototype.skipField = I.prototype.C),
        (I.prototype.Hc = function (e, t) {
          (this.v === null && (this.v = {}), C(!this.v[e]), (this.v[e] = t));
        }),
        (I.prototype.registerReadCallback = I.prototype.Hc),
        (I.prototype.Ic = function (e) {
          return (C(this.v !== null), (e = this.v[e]), C(e), e(this));
        }),
        (I.prototype.runReadCallback = I.prototype.Ic),
        (I.prototype.Yb = function (e, t) {
          C(this.b == 2);
          var n = this.a.c,
            r = this.a.o();
          ((r = this.a.B() + r),
            this.a.setEnd(r),
            t(e, this),
            this.a.Ma(r),
            this.a.setEnd(n));
        }),
        (I.prototype.readMessage = I.prototype.Yb),
        (I.prototype.Ub = function (e, t, n) {
          (C(this.b == 3),
            C(this.c == e),
            n(t, this),
            this.h ||
              this.b == 4 ||
              (T(`Group submessage did not end with an END_GROUP tag`),
              (this.h = !0)));
        }),
        (I.prototype.readGroup = I.prototype.Ub),
        (I.prototype.Gb = function () {
          C(this.b == 2);
          var e = this.a.o(),
            t = this.a.B(),
            n = t + e;
          return ((e = Ne(this.a.Y(), t, e)), this.a.Ma(n), e);
        }),
        (I.prototype.getFieldDecoder = I.prototype.Gb),
        (I.prototype.P = function () {
          return (C(this.b == 0), this.a.da());
        }),
        (I.prototype.readInt32 = I.prototype.P),
        (I.prototype.Wb = function () {
          return (C(this.b == 0), this.a.Ea());
        }),
        (I.prototype.readInt32String = I.prototype.Wb),
        (I.prototype.ba = function () {
          return (C(this.b == 0), this.a.sa());
        }),
        (I.prototype.readInt64 = I.prototype.ba),
        (I.prototype.ca = function () {
          return (C(this.b == 0), this.a.Fa());
        }),
        (I.prototype.readInt64String = I.prototype.ca),
        (I.prototype.m = function () {
          return (C(this.b == 0), this.a.o());
        }),
        (I.prototype.readUint32 = I.prototype.m),
        (I.prototype.Fc = function () {
          return (C(this.b == 0), this.a.O());
        }),
        (I.prototype.readUint32String = I.prototype.Fc),
        (I.prototype.ga = function () {
          return (C(this.b == 0), this.a.Ga());
        }),
        (I.prototype.readUint64 = I.prototype.ga),
        (I.prototype.ha = function () {
          return (C(this.b == 0), this.a.Ha());
        }),
        (I.prototype.readUint64String = I.prototype.ha),
        (I.prototype.zc = function () {
          return (C(this.b == 0), this.a.Ia());
        }),
        (I.prototype.readSint32 = I.prototype.zc),
        (I.prototype.Ac = function () {
          return (C(this.b == 0), this.a.Ja());
        }),
        (I.prototype.readSint64 = I.prototype.Ac),
        (I.prototype.Bc = function () {
          return (C(this.b == 0), this.a.Ka());
        }),
        (I.prototype.readSint64String = I.prototype.Bc),
        (I.prototype.Rb = function () {
          return (C(this.b == 5), this.a.m());
        }),
        (I.prototype.readFixed32 = I.prototype.Rb),
        (I.prototype.Sb = function () {
          return (C(this.b == 1), this.a.ga());
        }),
        (I.prototype.readFixed64 = I.prototype.Sb),
        (I.prototype.Tb = function () {
          return (C(this.b == 1), this.a.ha());
        }),
        (I.prototype.readFixed64String = I.prototype.Tb),
        (I.prototype.vc = function () {
          return (C(this.b == 5), this.a.P());
        }),
        (I.prototype.readSfixed32 = I.prototype.vc),
        (I.prototype.wc = function () {
          return (C(this.b == 5), this.a.P().toString());
        }),
        (I.prototype.readSfixed32String = I.prototype.wc),
        (I.prototype.xc = function () {
          return (C(this.b == 1), this.a.ba());
        }),
        (I.prototype.readSfixed64 = I.prototype.xc),
        (I.prototype.yc = function () {
          return (C(this.b == 1), this.a.ca());
        }),
        (I.prototype.readSfixed64String = I.prototype.yc),
        (I.prototype.aa = function () {
          return (C(this.b == 5), this.a.aa());
        }),
        (I.prototype.readFloat = I.prototype.aa),
        (I.prototype.Z = function () {
          return (C(this.b == 1), this.a.Z());
        }),
        (I.prototype.readDouble = I.prototype.Z),
        (I.prototype.pa = function () {
          return (C(this.b == 0), !!this.a.o());
        }),
        (I.prototype.readBool = I.prototype.pa),
        (I.prototype.ra = function () {
          return (C(this.b == 0), this.a.sa());
        }),
        (I.prototype.readEnum = I.prototype.ra),
        (I.prototype.fa = function () {
          C(this.b == 2);
          var e = this.a.o();
          return this.a.fa(e);
        }),
        (I.prototype.readString = I.prototype.fa),
        (I.prototype.qa = function () {
          C(this.b == 2);
          var e = this.a.o();
          return this.a.qa(e);
        }),
        (I.prototype.readBytes = I.prototype.qa),
        (I.prototype.ia = function () {
          return (C(this.b == 0), this.a.ia());
        }),
        (I.prototype.readVarintHash64 = I.prototype.ia),
        (I.prototype.Cc = function () {
          return (C(this.b == 0), this.a.fb());
        }),
        (I.prototype.readSintHash64 = I.prototype.Cc),
        (I.prototype.w = function (e) {
          return (C(this.b == 0), this.a.w(e));
        }),
        (I.prototype.readSplitVarint64 = I.prototype.w),
        (I.prototype.ea = function (e) {
          return (
            C(this.b == 0),
            this.a.w(function (t, n) {
              return xe(t, n, e);
            })
          );
        }),
        (I.prototype.readSplitZigzagVarint64 = I.prototype.ea),
        (I.prototype.$ = function () {
          return (C(this.b == 1), this.a.$());
        }),
        (I.prototype.readFixedHash64 = I.prototype.$),
        (I.prototype.ta = function (e) {
          return (C(this.b == 1), this.a.ta(e));
        }),
        (I.prototype.readSplitFixed64 = I.prototype.ta));
      function L(e, t) {
        C(e.b == 2);
        var n = e.a.o();
        n = e.a.B() + n;
        for (var r = []; e.a.B() < n; ) r.push(t.call(e.a));
        return r;
      }
      ((I.prototype.gc = function () {
        return L(this, this.a.da);
      }),
        (I.prototype.readPackedInt32 = I.prototype.gc),
        (I.prototype.hc = function () {
          return L(this, this.a.Ea);
        }),
        (I.prototype.readPackedInt32String = I.prototype.hc),
        (I.prototype.ic = function () {
          return L(this, this.a.sa);
        }),
        (I.prototype.readPackedInt64 = I.prototype.ic),
        (I.prototype.jc = function () {
          return L(this, this.a.Fa);
        }),
        (I.prototype.readPackedInt64String = I.prototype.jc),
        (I.prototype.qc = function () {
          return L(this, this.a.o);
        }),
        (I.prototype.readPackedUint32 = I.prototype.qc),
        (I.prototype.rc = function () {
          return L(this, this.a.O);
        }),
        (I.prototype.readPackedUint32String = I.prototype.rc),
        (I.prototype.sc = function () {
          return L(this, this.a.Ga);
        }),
        (I.prototype.readPackedUint64 = I.prototype.sc),
        (I.prototype.tc = function () {
          return L(this, this.a.Ha);
        }),
        (I.prototype.readPackedUint64String = I.prototype.tc),
        (I.prototype.nc = function () {
          return L(this, this.a.Ia);
        }),
        (I.prototype.readPackedSint32 = I.prototype.nc),
        (I.prototype.oc = function () {
          return L(this, this.a.Ja);
        }),
        (I.prototype.readPackedSint64 = I.prototype.oc),
        (I.prototype.pc = function () {
          return L(this, this.a.Ka);
        }),
        (I.prototype.readPackedSint64String = I.prototype.pc),
        (I.prototype.bc = function () {
          return L(this, this.a.m);
        }),
        (I.prototype.readPackedFixed32 = I.prototype.bc),
        (I.prototype.cc = function () {
          return L(this, this.a.ga);
        }),
        (I.prototype.readPackedFixed64 = I.prototype.cc),
        (I.prototype.dc = function () {
          return L(this, this.a.ha);
        }),
        (I.prototype.readPackedFixed64String = I.prototype.dc),
        (I.prototype.kc = function () {
          return L(this, this.a.P);
        }),
        (I.prototype.readPackedSfixed32 = I.prototype.kc),
        (I.prototype.lc = function () {
          return L(this, this.a.ba);
        }),
        (I.prototype.readPackedSfixed64 = I.prototype.lc),
        (I.prototype.mc = function () {
          return L(this, this.a.ca);
        }),
        (I.prototype.readPackedSfixed64String = I.prototype.mc),
        (I.prototype.fc = function () {
          return L(this, this.a.aa);
        }),
        (I.prototype.readPackedFloat = I.prototype.fc),
        (I.prototype.$b = function () {
          return L(this, this.a.Z);
        }),
        (I.prototype.readPackedDouble = I.prototype.$b),
        (I.prototype.Zb = function () {
          return L(this, this.a.pa);
        }),
        (I.prototype.readPackedBool = I.prototype.Zb),
        (I.prototype.ac = function () {
          return L(this, this.a.ra);
        }),
        (I.prototype.readPackedEnum = I.prototype.ac),
        (I.prototype.uc = function () {
          return L(this, this.a.ia);
        }),
        (I.prototype.readPackedVarintHash64 = I.prototype.uc),
        (I.prototype.ec = function () {
          return L(this, this.a.$);
        }),
        (I.prototype.readPackedFixedHash64 = I.prototype.ec));
      function Ie(e, t, n, r, i) {
        ((this.ma = e),
          (this.Ba = t),
          (this.la = n),
          (this.Na = r),
          (this.na = i));
      }
      f(`jspb.ExtensionFieldInfo`, Ie, void 0);
      function R(e, t, n, r, i, a) {
        ((this.Za = e),
          (this.za = t),
          (this.Aa = n),
          (this.Wa = r),
          (this.Ab = i),
          (this.Nb = a));
      }
      (f(`jspb.ExtensionFieldBinaryInfo`, R, void 0),
        (Ie.prototype.F = function () {
          return !!this.la;
        }),
        (Ie.prototype.isMessageType = Ie.prototype.F));
      function z() {}
      (f(`jspb.Message`, z, void 0),
        (z.GENERATE_TO_OBJECT = !0),
        (z.GENERATE_FROM_OBJECT = !0));
      var Le = typeof Uint8Array == `function`;
      ((z.prototype.Ib = function () {
        return this.b;
      }),
        (z.prototype.getJsPbMessageId = z.prototype.Ib),
        (z.initialize = function (e, t, n, r, i, a) {
          ((e.f = null),
            (t ||= n ? [n] : []),
            (e.b = n ? String(n) : void 0),
            (e.D = n === 0 ? -1 : 0),
            (e.u = t));
          a: {
            if (
              ((n = e.u.length),
              (t = -1),
              n &&
                ((t = n - 1),
                (n = e.u[t]),
                !(
                  typeof n != `object` ||
                  !n ||
                  Array.isArray(n) ||
                  (Le && n instanceof Uint8Array)
                )))
            ) {
              ((e.G = t - e.D), (e.i = n));
              break a;
            }
            -1 < r
              ? ((e.G = Math.max(r, t + 1 - e.D)), (e.i = null))
              : (e.G = Number.MAX_VALUE);
          }
          if (((e.a = {}), i))
            for (r = 0; r < i.length; r++)
              ((t = i[r]),
                t < e.G
                  ? ((t += e.D), (e.u[t] = e.u[t] || Re))
                  : (B(e), (e.i[t] = e.i[t] || Re)));
          if (a && a.length) for (r = 0; r < a.length; r++) Xe(e, a[r]);
        }));
      var Re = Object.freeze ? Object.freeze([]) : [];
      function B(e) {
        var t = e.G + e.D;
        e.u[t] || (e.i = e.u[t] = {});
      }
      function ze(e, t, n) {
        for (var r = [], i = 0; i < e.length; i++) r[i] = t.call(e[i], n, e[i]);
        return r;
      }
      ((z.toObjectList = ze),
        (z.toObjectExtension = function (e, t, n, r, i) {
          for (var a in n) {
            var o = n[a],
              s = r.call(e, o);
            if (s != null) {
              for (var c in o.Ba) if (o.Ba.hasOwnProperty(c)) break;
              t[c] = o.Na ? (o.na ? ze(s, o.Na, i) : o.Na(i, s)) : s;
            }
          }
        }),
        (z.serializeBinaryExtensions = function (e, t, n, r) {
          for (var i in n) {
            var a = n[i],
              o = a.Za;
            if (!a.Aa)
              throw Error(
                `Message extension present that was generated without binary serialization support`,
              );
            var s = r.call(e, o);
            if (s != null)
              if (o.F())
                if (a.Wa) a.Aa.call(t, o.ma, s, a.Wa);
                else
                  throw Error(
                    `Message extension present holding submessage without binary support enabled, and message is being serialized to binary format`,
                  );
              else a.Aa.call(t, o.ma, s);
          }
        }),
        (z.readBinaryExtension = function (e, t, n, r, i) {
          var a = n[t.c];
          if (a) {
            if (((n = a.Za), !a.za))
              throw Error(
                `Deserializing extension whose generated code does not support binary format`,
              );
            if (n.F()) {
              var o = new n.la();
              a.za.call(t, o, a.Ab);
            } else o = a.za.call(t);
            n.na && !a.Nb
              ? (t = r.call(e, n))
                ? t.push(o)
                : i.call(e, n, [o])
              : i.call(e, n, o);
          } else t.C();
        }));
      function Be(e, t) {
        if (t < e.G) {
          t += e.D;
          var n = e.u[t];
          return n === Re ? (e.u[t] = []) : n;
        }
        if (e.i) return ((n = e.i[t]), n === Re ? (e.i[t] = []) : n);
      }
      ((z.getField = Be),
        (z.getRepeatedField = function (e, t) {
          return Be(e, t);
        }));
      function Ve(e, t) {
        return ((e = Be(e, t)), e == null ? e : +e);
      }
      z.getOptionalFloatingPointField = Ve;
      function He(e, t) {
        return ((e = Be(e, t)), e == null ? e : !!e);
      }
      ((z.getBooleanField = He),
        (z.getRepeatedFloatingPointField = function (e, t) {
          var n = Be(e, t);
          if (((e.a ||= {}), !e.a[t])) {
            for (var r = 0; r < n.length; r++) n[r] = +n[r];
            e.a[t] = !0;
          }
          return n;
        }),
        (z.getRepeatedBooleanField = function (e, t) {
          var n = Be(e, t);
          if (((e.a ||= {}), !e.a[t])) {
            for (var r = 0; r < n.length; r++) n[r] = !!n[r];
            e.a[t] = !0;
          }
          return n;
        }));
      function Ue(e) {
        return e == null || typeof e == `string`
          ? e
          : Le && e instanceof Uint8Array
            ? se(e)
            : (T(`Cannot coerce to b64 string: ` + p(e)), null);
      }
      z.bytesAsB64 = Ue;
      function We(e) {
        return e == null || e instanceof Uint8Array
          ? e
          : typeof e == `string`
            ? ce(e)
            : (T(`Cannot coerce to Uint8Array: ` + p(e)), null);
      }
      ((z.bytesAsU8 = We),
        (z.bytesListAsB64 = function (e) {
          return (Ge(e), e.length && typeof e[0] != `string` ? b(e, Ue) : e);
        }),
        (z.bytesListAsU8 = function (e) {
          return (
            Ge(e),
            !e.length || e[0] instanceof Uint8Array ? e : b(e, We)
          );
        }));
      function Ge(e) {
        if (e && 1 < e.length) {
          var t = p(e[0]);
          y(e, function (e) {
            p(e) != t &&
              T(
                `Inconsistent type in JSPB repeated field array. Got ` +
                  p(e) +
                  ` expected ` +
                  t,
              );
          });
        }
      }
      function Ke(e, t, n) {
        return ((e = Be(e, t)), e ?? n);
      }
      ((z.getFieldWithDefault = Ke),
        (z.getBooleanFieldWithDefault = function (e, t, n) {
          return ((e = He(e, t)), e ?? n);
        }),
        (z.getFloatingPointFieldWithDefault = function (e, t, n) {
          return ((e = Ve(e, t)), e ?? n);
        }),
        (z.getFieldProto3 = Ke),
        (z.getMapField = function (e, t, n, r) {
          if (((e.f ||= {}), t in e.f)) return e.f[t];
          var i = Be(e, t);
          if (!i) {
            if (n) return;
            ((i = []), qe(e, t, i));
          }
          return (e.f[t] = new D(i, r));
        }));
      function qe(e, t, n) {
        return (
          E(e, z),
          t < e.G ? (e.u[t + e.D] = n) : (B(e), (e.i[t] = n)),
          e
        );
      }
      ((z.setField = qe),
        (z.setProto3IntField = function (e, t, n) {
          return Je(e, t, n, 0);
        }),
        (z.setProto3FloatField = function (e, t, n) {
          return Je(e, t, n, 0);
        }),
        (z.setProto3BooleanField = function (e, t, n) {
          return Je(e, t, n, !1);
        }),
        (z.setProto3StringField = function (e, t, n) {
          return Je(e, t, n, ``);
        }),
        (z.setProto3BytesField = function (e, t, n) {
          return Je(e, t, n, ``);
        }),
        (z.setProto3EnumField = function (e, t, n) {
          return Je(e, t, n, 0);
        }),
        (z.setProto3StringIntField = function (e, t, n) {
          return Je(e, t, n, `0`);
        }));
      function Je(e, t, n, r) {
        return (
          E(e, z),
          n === r
            ? t < e.G
              ? (e.u[t + e.D] = null)
              : (B(e), delete e.i[t])
            : qe(e, t, n),
          e
        );
      }
      z.addToRepeatedField = function (e, t, n, r) {
        return (
          E(e, z),
          (t = Be(e, t)),
          r == null ? t.push(n) : t.splice(r, 0, n),
          e
        );
      };
      function Ye(e, t, n, r) {
        return (
          E(e, z),
          (n = Xe(e, n)) &&
            n !== t &&
            r !== void 0 &&
            (e.f && n in e.f && (e.f[n] = void 0), qe(e, n, void 0)),
          qe(e, t, r)
        );
      }
      z.setOneofField = Ye;
      function Xe(e, t) {
        for (var n, r, i = 0; i < t.length; i++) {
          var a = t[i],
            o = Be(e, a);
          o != null && ((n = a), (r = o), qe(e, a, void 0));
        }
        return n ? (qe(e, n, r), n) : 0;
      }
      ((z.computeOneofCase = Xe),
        (z.getWrapperField = function (e, t, n, r) {
          if (((e.f ||= {}), !e.f[n])) {
            var i = Be(e, n);
            (r || i) && (e.f[n] = new t(i));
          }
          return e.f[n];
        }),
        (z.getRepeatedWrapperField = function (e, t, n) {
          return (Ze(e, t, n), (t = e.f[n]), t == Re && (t = e.f[n] = []), t);
        }));
      function Ze(e, t, n) {
        if (((e.f ||= {}), !e.f[n])) {
          for (var r = Be(e, n), i = [], a = 0; a < r.length; a++)
            i[a] = new t(r[a]);
          e.f[n] = i;
        }
      }
      ((z.setWrapperField = function (e, t, n) {
        (E(e, z), (e.f ||= {}));
        var r = n && n.g();
        return ((e.f[t] = n), qe(e, t, r));
      }),
        (z.setOneofWrapperField = function (e, t, n, r) {
          (E(e, z), (e.f ||= {}));
          var i = r && r.g();
          return ((e.f[t] = r), Ye(e, t, n, i));
        }),
        (z.setRepeatedWrapperField = function (e, t, n) {
          (E(e, z), (e.f ||= {}), (n ||= []));
          for (var r = [], i = 0; i < n.length; i++) r[i] = n[i].g();
          return ((e.f[t] = n), qe(e, t, r));
        }),
        (z.addToRepeatedWrapperField = function (e, t, n, r, i) {
          Ze(e, r, t);
          var a = e.f[t];
          return (
            (a ||= e.f[t] = []),
            (n ||= new r()),
            (e = Be(e, t)),
            i == null
              ? (a.push(n), e.push(n.g()))
              : (a.splice(i, 0, n), e.splice(i, 0, n.g())),
            n
          );
        }),
        (z.toMap = function (e, t, n, r) {
          for (var i = {}, a = 0; a < e.length; a++)
            i[t.call(e[a])] = n ? n.call(e[a], r, e[a]) : e[a];
          return i;
        }));
      function Qe(e) {
        if (e.f)
          for (var t in e.f) {
            var n = e.f[t];
            if (Array.isArray(n))
              for (var r = 0; r < n.length; r++) n[r] && n[r].g();
            else n && n.g();
          }
      }
      ((z.prototype.g = function () {
        return (Qe(this), this.u);
      }),
        (z.prototype.toArray = z.prototype.g),
        (z.prototype.toString = function () {
          return (Qe(this), this.u.toString());
        }),
        (z.prototype.getExtension = function (e) {
          if (this.i) {
            this.f ||= {};
            var t = e.ma;
            if (e.na) {
              if (e.F())
                return (
                  this.f[t] ||
                    (this.f[t] = b(this.i[t] || [], function (t) {
                      return new e.la(t);
                    })),
                  this.f[t]
                );
            } else if (e.F())
              return (
                !this.f[t] && this.i[t] && (this.f[t] = new e.la(this.i[t])),
                this.f[t]
              );
            return this.i[t];
          }
        }),
        (z.prototype.getExtension = z.prototype.getExtension),
        (z.prototype.Kc = function (e, t) {
          ((this.f ||= {}), B(this));
          var n = e.ma;
          return (
            e.na
              ? ((t ||= []),
                e.F()
                  ? ((this.f[n] = t),
                    (this.i[n] = b(t, function (e) {
                      return e.g();
                    })))
                  : (this.i[n] = t))
              : e.F()
                ? ((this.f[n] = t), (this.i[n] = t && t.g()))
                : (this.i[n] = t),
            this
          );
        }),
        (z.prototype.setExtension = z.prototype.Kc),
        (z.difference = function (e, t) {
          if (!(e instanceof t.constructor))
            throw Error(`Messages have different types.`);
          var n = e.g();
          t = t.g();
          var r = [],
            i = 0,
            a = n.length > t.length ? n.length : t.length;
          for (e.b && ((r[0] = e.b), (i = 1)); i < a; i++)
            et(n[i], t[i]) || (r[i] = t[i]);
          return new e.constructor(r);
        }),
        (z.equals = function (e, t) {
          return (
            e == t ||
            (!(!e || !t) && e instanceof t.constructor && et(e.g(), t.g()))
          );
        }));
      function $e(e, t) {
        ((e ||= {}), (t ||= {}));
        var n = {},
          r;
        for (r in e) n[r] = 0;
        for (r in t) n[r] = 0;
        for (r in n) if (!et(e[r], t[r])) return !1;
        return !0;
      }
      z.compareExtensions = $e;
      function et(e, t) {
        if (e == t) return !0;
        if (!m(e) || !m(t))
          return (typeof e == `number` && isNaN(e)) ||
            (typeof t == `number` && isNaN(t))
            ? String(e) == String(t)
            : !1;
        if (e.constructor != t.constructor) return !1;
        if (Le && e.constructor === Uint8Array) {
          if (e.length != t.length) return !1;
          for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
          return !0;
        }
        if (e.constructor === Array) {
          var r = void 0,
            i = void 0,
            a = Math.max(e.length, t.length);
          for (n = 0; n < a; n++) {
            var o = e[n],
              s = t[n];
            if (
              (o &&
                o.constructor == Object &&
                (C(r === void 0), C(n === e.length - 1), (r = o), (o = void 0)),
              s &&
                s.constructor == Object &&
                (C(i === void 0), C(n === t.length - 1), (i = s), (s = void 0)),
              !et(o, s))
            )
              return !1;
          }
          return r || i ? ((r ||= {}), (i ||= {}), $e(r, i)) : !0;
        }
        if (e.constructor === Object) return $e(e, t);
        throw Error(`Invalid type in JSPB array`);
      }
      ((z.compareFields = et),
        (z.prototype.Bb = function () {
          return tt(this);
        }),
        (z.prototype.cloneMessage = z.prototype.Bb),
        (z.prototype.clone = function () {
          return tt(this);
        }),
        (z.prototype.clone = z.prototype.clone),
        (z.clone = function (e) {
          return tt(e);
        }));
      function tt(e) {
        return new e.constructor(nt(e.g()));
      }
      z.copyInto = function (e, t) {
        (E(e, z),
          E(t, z),
          C(
            e.constructor == t.constructor,
            `Copy source and target message should have the same type.`,
          ),
          (e = tt(e)));
        for (var n = t.g(), r = e.g(), i = (n.length = 0); i < r.length; i++)
          n[i] = r[i];
        ((t.f = e.f), (t.i = e.i));
      };
      function nt(e) {
        if (Array.isArray(e)) {
          for (var t = Array(e.length), n = 0; n < e.length; n++) {
            var r = e[n];
            r != null && (t[n] = typeof r == `object` ? nt(C(r)) : r);
          }
          return t;
        }
        if (Le && e instanceof Uint8Array) return new Uint8Array(e);
        for (n in ((t = {}), e))
          ((r = e[n]),
            r != null && (t[n] = typeof r == `object` ? nt(C(r)) : r));
        return t;
      }
      z.registerMessageType = function (e, t) {
        t.we = e;
      };
      var rt = {
        dump: function (e) {
          return (
            E(e, z, `jspb.Message instance expected`),
            C(
              e.getExtension,
              `Only unobfuscated and unoptimized compilation modes supported.`,
            ),
            rt.X(e)
          );
        },
      };
      (f(`jspb.debug.dump`, rt.dump, void 0),
        (rt.X = function (e) {
          var t = p(e);
          if (
            t == `number` ||
            t == `string` ||
            t == `boolean` ||
            t == `null` ||
            t == `undefined` ||
            (typeof Uint8Array < `u` && e instanceof Uint8Array)
          )
            return e;
          if (t == `array`) return (w(e), b(e, rt.X));
          if (e instanceof D) {
            var n = {};
            e = e.entries();
            for (var r = e.next(); !r.done; r = e.next())
              n[r.value[0]] = rt.X(r.value[1]);
            return n;
          }
          (E(e, z, `Only messages expected: ` + e), (t = e.constructor));
          var i = { $name: t.name || t.displayName };
          for (s in t.prototype) {
            var a = /^get([A-Z]\w*)/.exec(s);
            if (a && s != `getExtension` && s != `getJsPbMessageId`) {
              var o = `has` + a[1];
              (!e[o] || e[o]()) && ((o = e[s]()), (i[rt.$a(a[1])] = rt.X(o)));
            }
          }
          if (e.extensionObject_)
            return (
              (i.$extensions = `Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly`),
              i
            );
          for (r in t.extensions)
            if (/^\d+$/.test(r)) {
              o = t.extensions[r];
              var s = e.getExtension(o);
              ((a = void 0), (o = o.Ba));
              var c = [],
                l = 0;
              for (a in o) c[l++] = a;
              ((a = c[0]),
                s != null &&
                  ((n ||= i.$extensions = {}), (n[rt.$a(a)] = rt.X(s))));
            }
          return i;
        }),
        (rt.$a = function (e) {
          return e.replace(/^[A-Z]/, function (e) {
            return e.toLowerCase();
          });
        }));
      function V() {
        this.a = [];
      }
      (f(`jspb.BinaryEncoder`, V, void 0),
        (V.prototype.length = function () {
          return this.a.length;
        }),
        (V.prototype.length = V.prototype.length),
        (V.prototype.end = function () {
          var e = this.a;
          return ((this.a = []), e);
        }),
        (V.prototype.end = V.prototype.end),
        (V.prototype.l = function (e, t) {
          for (
            C(e == Math.floor(e)),
              C(t == Math.floor(t)),
              C(0 <= e && 4294967296 > e),
              C(0 <= t && 4294967296 > t);
            0 < t || 127 < e;
          )
            (this.a.push((e & 127) | 128),
              (e = ((e >>> 7) | (t << 25)) >>> 0),
              (t >>>= 7));
          this.a.push(e);
        }),
        (V.prototype.writeSplitVarint64 = V.prototype.l),
        (V.prototype.A = function (e, t) {
          (C(e == Math.floor(e)),
            C(t == Math.floor(t)),
            C(0 <= e && 4294967296 > e),
            C(0 <= t && 4294967296 > t),
            this.s(e),
            this.s(t));
        }),
        (V.prototype.writeSplitFixed64 = V.prototype.A),
        (V.prototype.j = function (e) {
          for (C(e == Math.floor(e)), C(0 <= e && 4294967296 > e); 127 < e; )
            (this.a.push((e & 127) | 128), (e >>>= 7));
          this.a.push(e);
        }),
        (V.prototype.writeUnsignedVarint32 = V.prototype.j),
        (V.prototype.M = function (e) {
          if (
            (C(e == Math.floor(e)),
            C(-2147483648 <= e && 2147483648 > e),
            0 <= e)
          )
            this.j(e);
          else {
            for (var t = 0; 9 > t; t++)
              (this.a.push((e & 127) | 128), (e >>= 7));
            this.a.push(1);
          }
        }),
        (V.prototype.writeSignedVarint32 = V.prototype.M),
        (V.prototype.va = function (e) {
          (C(e == Math.floor(e)),
            C(0 <= e && 0x10000000000000000 > e),
            fe(e),
            this.l(M, N));
        }),
        (V.prototype.writeUnsignedVarint64 = V.prototype.va),
        (V.prototype.ua = function (e) {
          (C(e == Math.floor(e)),
            C(-0x8000000000000000 <= e && 0x8000000000000000 > e),
            fe(e),
            this.l(M, N));
        }),
        (V.prototype.writeSignedVarint64 = V.prototype.ua),
        (V.prototype.wa = function (e) {
          (C(e == Math.floor(e)),
            C(-2147483648 <= e && 2147483648 > e),
            this.j(((e << 1) ^ (e >> 31)) >>> 0));
        }),
        (V.prototype.writeZigzagVarint32 = V.prototype.wa),
        (V.prototype.xa = function (e) {
          (C(e == Math.floor(e)),
            C(-0x8000000000000000 <= e && 0x8000000000000000 > e),
            pe(e),
            this.l(M, N));
        }),
        (V.prototype.writeZigzagVarint64 = V.prototype.xa),
        (V.prototype.Ta = function (e) {
          this.W(P(e));
        }),
        (V.prototype.writeZigzagVarint64String = V.prototype.Ta),
        (V.prototype.W = function (e) {
          var t = this;
          (ge(e),
            ye(M, N, function (e, n) {
              t.l(e >>> 0, n >>> 0);
            }));
        }),
        (V.prototype.writeZigzagVarintHash64 = V.prototype.W),
        (V.prototype.be = function (e) {
          (C(e == Math.floor(e)),
            C(0 <= e && 256 > e),
            this.a.push((e >>> 0) & 255));
        }),
        (V.prototype.writeUint8 = V.prototype.be),
        (V.prototype.ae = function (e) {
          (C(e == Math.floor(e)),
            C(0 <= e && 65536 > e),
            this.a.push((e >>> 0) & 255),
            this.a.push((e >>> 8) & 255));
        }),
        (V.prototype.writeUint16 = V.prototype.ae),
        (V.prototype.s = function (e) {
          (C(e == Math.floor(e)),
            C(0 <= e && 4294967296 > e),
            this.a.push((e >>> 0) & 255),
            this.a.push((e >>> 8) & 255),
            this.a.push((e >>> 16) & 255),
            this.a.push((e >>> 24) & 255));
        }),
        (V.prototype.writeUint32 = V.prototype.s),
        (V.prototype.V = function (e) {
          (C(e == Math.floor(e)),
            C(0 <= e && 0x10000000000000000 > e),
            de(e),
            this.s(M),
            this.s(N));
        }),
        (V.prototype.writeUint64 = V.prototype.V),
        (V.prototype.Qc = function (e) {
          (C(e == Math.floor(e)),
            C(-128 <= e && 128 > e),
            this.a.push((e >>> 0) & 255));
        }),
        (V.prototype.writeInt8 = V.prototype.Qc),
        (V.prototype.Pc = function (e) {
          (C(e == Math.floor(e)),
            C(-32768 <= e && 32768 > e),
            this.a.push((e >>> 0) & 255),
            this.a.push((e >>> 8) & 255));
        }),
        (V.prototype.writeInt16 = V.prototype.Pc),
        (V.prototype.S = function (e) {
          (C(e == Math.floor(e)),
            C(-2147483648 <= e && 2147483648 > e),
            this.a.push((e >>> 0) & 255),
            this.a.push((e >>> 8) & 255),
            this.a.push((e >>> 16) & 255),
            this.a.push((e >>> 24) & 255));
        }),
        (V.prototype.writeInt32 = V.prototype.S),
        (V.prototype.T = function (e) {
          (C(e == Math.floor(e)),
            C(-0x8000000000000000 <= e && 0x8000000000000000 > e),
            fe(e),
            this.A(M, N));
        }),
        (V.prototype.writeInt64 = V.prototype.T),
        (V.prototype.ka = function (e) {
          (C(e == Math.floor(e)),
            C(-0x8000000000000000 <= +e && 0x8000000000000000 > +e),
            ge(P(e)),
            this.A(M, N));
        }),
        (V.prototype.writeInt64String = V.prototype.ka),
        (V.prototype.L = function (e) {
          (C(
            e === 1 / 0 ||
              e === -1 / 0 ||
              isNaN(e) ||
              (-34028234663852886e22 <= e && 34028234663852886e22 >= e),
          ),
            me(e),
            this.s(M));
        }),
        (V.prototype.writeFloat = V.prototype.L),
        (V.prototype.J = function (e) {
          (C(
            e === 1 / 0 ||
              e === -1 / 0 ||
              isNaN(e) ||
              (-17976931348623157e292 <= e && 17976931348623157e292 >= e),
          ),
            he(e),
            this.s(M),
            this.s(N));
        }),
        (V.prototype.writeDouble = V.prototype.J),
        (V.prototype.I = function (e) {
          (C(typeof e == `boolean` || typeof e == `number`), this.a.push(+!!e));
        }),
        (V.prototype.writeBool = V.prototype.I),
        (V.prototype.R = function (e) {
          (C(e == Math.floor(e)),
            C(-2147483648 <= e && 2147483648 > e),
            this.M(e));
        }),
        (V.prototype.writeEnum = V.prototype.R),
        (V.prototype.ja = function (e) {
          this.a.push.apply(this.a, e);
        }),
        (V.prototype.writeBytes = V.prototype.ja),
        (V.prototype.N = function (e) {
          (ge(e), this.l(M, N));
        }),
        (V.prototype.writeVarintHash64 = V.prototype.N),
        (V.prototype.K = function (e) {
          (ge(e), this.s(M), this.s(N));
        }),
        (V.prototype.writeFixedHash64 = V.prototype.K),
        (V.prototype.U = function (e) {
          var t = this.a.length;
          ee(e);
          for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (128 > r) this.a.push(r);
            else if (2048 > r)
              (this.a.push((r >> 6) | 192), this.a.push((r & 63) | 128));
            else if (65536 > r)
              if (55296 <= r && 56319 >= r && n + 1 < e.length) {
                var i = e.charCodeAt(n + 1);
                56320 <= i &&
                  57343 >= i &&
                  ((r = 1024 * (r - 55296) + i - 56320 + 65536),
                  this.a.push((r >> 18) | 240),
                  this.a.push(((r >> 12) & 63) | 128),
                  this.a.push(((r >> 6) & 63) | 128),
                  this.a.push((r & 63) | 128),
                  n++);
              } else
                (this.a.push((r >> 12) | 224),
                  this.a.push(((r >> 6) & 63) | 128),
                  this.a.push((r & 63) | 128));
          }
          return this.a.length - t;
        }),
        (V.prototype.writeString = V.prototype.U));
      function H(e, t) {
        ((this.lo = e), (this.hi = t));
      }
      (f(`jspb.arith.UInt64`, H, void 0),
        (H.prototype.cmp = function (e) {
          return this.hi < e.hi || (this.hi == e.hi && this.lo < e.lo)
            ? -1
            : this.hi == e.hi && this.lo == e.lo
              ? 0
              : 1;
        }),
        (H.prototype.cmp = H.prototype.cmp),
        (H.prototype.La = function () {
          return new H(
            ((this.lo >>> 1) | ((this.hi & 1) << 31)) >>> 0,
            (this.hi >>> 1) >>> 0,
          );
        }),
        (H.prototype.rightShift = H.prototype.La),
        (H.prototype.Da = function () {
          return new H(
            (this.lo << 1) >>> 0,
            ((this.hi << 1) | (this.lo >>> 31)) >>> 0,
          );
        }),
        (H.prototype.leftShift = H.prototype.Da),
        (H.prototype.cb = function () {
          return !!(this.hi & 2147483648);
        }),
        (H.prototype.msb = H.prototype.cb),
        (H.prototype.Ob = function () {
          return !!(this.lo & 1);
        }),
        (H.prototype.lsb = H.prototype.Ob),
        (H.prototype.Ua = function () {
          return this.lo == 0 && this.hi == 0;
        }),
        (H.prototype.zero = H.prototype.Ua),
        (H.prototype.add = function (e) {
          return new H(
            (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + e.hi) & 4294967295) >>> 0) +
              +(4294967296 <= this.lo + e.lo)) >>>
              0,
          );
        }),
        (H.prototype.add = H.prototype.add),
        (H.prototype.sub = function (e) {
          return new H(
            (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - e.hi) & 4294967295) >>> 0) - (0 > this.lo - e.lo)) >>>
              0,
          );
        }),
        (H.prototype.sub = H.prototype.sub));
      function it(e, t) {
        var n = e & 65535;
        e >>>= 16;
        var r = t & 65535,
          i = t >>> 16;
        for (
          t = n * r + 65536 * ((n * i) & 65535) + 65536 * ((e * r) & 65535),
            n = e * i + ((n * i) >>> 16) + ((e * r) >>> 16);
          4294967296 <= t;
        )
          ((t -= 4294967296), (n += 1));
        return new H(t >>> 0, n >>> 0);
      }
      ((H.mul32x32 = it),
        (H.prototype.eb = function (e) {
          var t = it(this.lo, e);
          return ((e = it(this.hi, e)), (e.hi = e.lo), (e.lo = 0), t.add(e));
        }),
        (H.prototype.mul = H.prototype.eb),
        (H.prototype.Xa = function (e) {
          if (e == 0) return [];
          var t = new H(0, 0),
            n = new H(this.lo, this.hi);
          e = new H(e, 0);
          for (var r = new H(1, 0); !e.cb(); ) ((e = e.Da()), (r = r.Da()));
          for (; !r.Ua(); )
            (0 >= e.cmp(n) && ((t = t.add(r)), (n = n.sub(e))),
              (e = e.La()),
              (r = r.La()));
          return [t, n];
        }),
        (H.prototype.div = H.prototype.Xa),
        (H.prototype.toString = function () {
          for (var e = ``, t = this; !t.Ua(); ) {
            t = t.Xa(10);
            var n = t[0];
            ((e = t[1].lo + e), (t = n));
          }
          return (e == `` && (e = `0`), e);
        }),
        (H.prototype.toString = H.prototype.toString));
      function at(e) {
        for (var t = new H(0, 0), n = new H(0, 0), r = 0; r < e.length; r++) {
          if (`0` > e[r] || `9` < e[r]) return null;
          ((n.lo = parseInt(e[r], 10)), (t = t.eb(10).add(n)));
        }
        return t;
      }
      ((H.fromString = at),
        (H.prototype.clone = function () {
          return new H(this.lo, this.hi);
        }),
        (H.prototype.clone = H.prototype.clone));
      function ot(e, t) {
        ((this.lo = e), (this.hi = t));
      }
      (f(`jspb.arith.Int64`, ot, void 0),
        (ot.prototype.add = function (e) {
          return new ot(
            (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + e.hi) & 4294967295) >>> 0) +
              +(4294967296 <= this.lo + e.lo)) >>>
              0,
          );
        }),
        (ot.prototype.add = ot.prototype.add),
        (ot.prototype.sub = function (e) {
          return new ot(
            (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - e.hi) & 4294967295) >>> 0) - (0 > this.lo - e.lo)) >>>
              0,
          );
        }),
        (ot.prototype.sub = ot.prototype.sub),
        (ot.prototype.clone = function () {
          return new ot(this.lo, this.hi);
        }),
        (ot.prototype.clone = ot.prototype.clone),
        (ot.prototype.toString = function () {
          var e = (this.hi & 2147483648) != 0,
            t = new H(this.lo, this.hi);
          return (e && (t = new H(0, 0).sub(t)), (e ? `-` : ``) + t.toString());
        }),
        (ot.prototype.toString = ot.prototype.toString));
      function st(e) {
        var t = 0 < e.length && e[0] == `-`;
        return (
          t && (e = e.substring(1)),
          (e = at(e)),
          e === null
            ? null
            : (t && (e = new H(0, 0).sub(e)), new ot(e.lo, e.hi))
        );
      }
      ot.fromString = st;
      function U() {
        ((this.c = []), (this.b = 0), (this.a = new V()), (this.h = []));
      }
      f(`jspb.BinaryWriter`, U, void 0);
      function ct(e, t) {
        var n = e.a.end();
        (e.c.push(n), e.c.push(t), (e.b += n.length + t.length));
      }
      function lt(e, t) {
        return (
          W(e, t, 2),
          (t = e.a.end()),
          e.c.push(t),
          (e.b += t.length),
          t.push(e.b),
          t
        );
      }
      function ut(e, t) {
        var n = t.pop();
        for (n = e.b + e.a.length() - n, C(0 <= n); 127 < n; )
          (t.push((n & 127) | 128), (n >>>= 7), e.b++);
        (t.push(n), e.b++);
      }
      ((U.prototype.pb = function (e, t, n) {
        ct(this, e.subarray(t, n));
      }),
        (U.prototype.writeSerializedMessage = U.prototype.pb),
        (U.prototype.Pb = function (e, t, n) {
          e != null && t != null && n != null && this.pb(e, t, n);
        }),
        (U.prototype.maybeWriteSerializedMessage = U.prototype.Pb),
        (U.prototype.reset = function () {
          ((this.c = []), this.a.end(), (this.b = 0), (this.h = []));
        }),
        (U.prototype.reset = U.prototype.reset),
        (U.prototype.ab = function () {
          C(this.h.length == 0);
          for (
            var e = new Uint8Array(this.b + this.a.length()),
              t = this.c,
              n = t.length,
              r = 0,
              i = 0;
            i < n;
            i++
          ) {
            var a = t[i];
            (e.set(a, r), (r += a.length));
          }
          return (
            (t = this.a.end()),
            e.set(t, r),
            (r += t.length),
            C(r == e.length),
            (this.c = [e]),
            e
          );
        }),
        (U.prototype.getResultBuffer = U.prototype.ab),
        (U.prototype.Kb = function (e) {
          return se(this.ab(), e);
        }),
        (U.prototype.getResultBase64String = U.prototype.Kb),
        (U.prototype.Va = function (e) {
          this.h.push(lt(this, e));
        }),
        (U.prototype.beginSubMessage = U.prototype.Va),
        (U.prototype.Ya = function () {
          (C(0 <= this.h.length), ut(this, this.h.pop()));
        }),
        (U.prototype.endSubMessage = U.prototype.Ya));
      function W(e, t, n) {
        (C(1 <= t && t == Math.floor(t)), e.a.j(8 * t + n));
      }
      ((U.prototype.Nc = function (e, t, n) {
        switch (e) {
          case 1:
            this.J(t, n);
            break;
          case 2:
            this.L(t, n);
            break;
          case 3:
            this.T(t, n);
            break;
          case 4:
            this.V(t, n);
            break;
          case 5:
            this.S(t, n);
            break;
          case 6:
            this.Qa(t, n);
            break;
          case 7:
            this.Pa(t, n);
            break;
          case 8:
            this.I(t, n);
            break;
          case 9:
            this.U(t, n);
            break;
          case 10:
            T(`Group field type not supported in writeAny()`);
            break;
          case 11:
            T(`Message field type not supported in writeAny()`);
            break;
          case 12:
            this.ja(t, n);
            break;
          case 13:
            this.s(t, n);
            break;
          case 14:
            this.R(t, n);
            break;
          case 15:
            this.Ra(t, n);
            break;
          case 16:
            this.Sa(t, n);
            break;
          case 17:
            this.rb(t, n);
            break;
          case 18:
            this.sb(t, n);
            break;
          case 30:
            this.K(t, n);
            break;
          case 31:
            this.N(t, n);
            break;
          default:
            T(`Invalid field type in writeAny()`);
        }
      }),
        (U.prototype.writeAny = U.prototype.Nc));
      function dt(e, t, n) {
        n != null && (W(e, t, 0), e.a.j(n));
      }
      function ft(e, t, n) {
        n != null && (W(e, t, 0), e.a.M(n));
      }
      ((U.prototype.S = function (e, t) {
        t != null && (C(-2147483648 <= t && 2147483648 > t), ft(this, e, t));
      }),
        (U.prototype.writeInt32 = U.prototype.S),
        (U.prototype.ob = function (e, t) {
          t != null &&
            ((t = parseInt(t, 10)),
            C(-2147483648 <= t && 2147483648 > t),
            ft(this, e, t));
        }),
        (U.prototype.writeInt32String = U.prototype.ob),
        (U.prototype.T = function (e, t) {
          t != null &&
            (C(-0x8000000000000000 <= t && 0x8000000000000000 > t),
            t != null && (W(this, e, 0), this.a.ua(t)));
        }),
        (U.prototype.writeInt64 = U.prototype.T),
        (U.prototype.ka = function (e, t) {
          t != null && ((t = st(t)), W(this, e, 0), this.a.l(t.lo, t.hi));
        }),
        (U.prototype.writeInt64String = U.prototype.ka),
        (U.prototype.s = function (e, t) {
          t != null && (C(0 <= t && 4294967296 > t), dt(this, e, t));
        }),
        (U.prototype.writeUint32 = U.prototype.s),
        (U.prototype.ub = function (e, t) {
          t != null &&
            ((t = parseInt(t, 10)),
            C(0 <= t && 4294967296 > t),
            dt(this, e, t));
        }),
        (U.prototype.writeUint32String = U.prototype.ub),
        (U.prototype.V = function (e, t) {
          t != null &&
            (C(0 <= t && 0x10000000000000000 > t),
            t != null && (W(this, e, 0), this.a.va(t)));
        }),
        (U.prototype.writeUint64 = U.prototype.V),
        (U.prototype.vb = function (e, t) {
          t != null && ((t = at(t)), W(this, e, 0), this.a.l(t.lo, t.hi));
        }),
        (U.prototype.writeUint64String = U.prototype.vb),
        (U.prototype.rb = function (e, t) {
          t != null &&
            (C(-2147483648 <= t && 2147483648 > t),
            t != null && (W(this, e, 0), this.a.wa(t)));
        }),
        (U.prototype.writeSint32 = U.prototype.rb),
        (U.prototype.sb = function (e, t) {
          t != null &&
            (C(-0x8000000000000000 <= t && 0x8000000000000000 > t),
            t != null && (W(this, e, 0), this.a.xa(t)));
        }),
        (U.prototype.writeSint64 = U.prototype.sb),
        (U.prototype.$d = function (e, t) {
          t != null && t != null && (W(this, e, 0), this.a.W(t));
        }),
        (U.prototype.writeSintHash64 = U.prototype.$d),
        (U.prototype.Zd = function (e, t) {
          t != null && t != null && (W(this, e, 0), this.a.Ta(t));
        }),
        (U.prototype.writeSint64String = U.prototype.Zd),
        (U.prototype.Pa = function (e, t) {
          t != null &&
            (C(0 <= t && 4294967296 > t), W(this, e, 5), this.a.s(t));
        }),
        (U.prototype.writeFixed32 = U.prototype.Pa),
        (U.prototype.Qa = function (e, t) {
          t != null &&
            (C(0 <= t && 0x10000000000000000 > t), W(this, e, 1), this.a.V(t));
        }),
        (U.prototype.writeFixed64 = U.prototype.Qa),
        (U.prototype.nb = function (e, t) {
          t != null && ((t = at(t)), W(this, e, 1), this.a.A(t.lo, t.hi));
        }),
        (U.prototype.writeFixed64String = U.prototype.nb),
        (U.prototype.Ra = function (e, t) {
          t != null &&
            (C(-2147483648 <= t && 2147483648 > t), W(this, e, 5), this.a.S(t));
        }),
        (U.prototype.writeSfixed32 = U.prototype.Ra),
        (U.prototype.Sa = function (e, t) {
          t != null &&
            (C(-0x8000000000000000 <= t && 0x8000000000000000 > t),
            W(this, e, 1),
            this.a.T(t));
        }),
        (U.prototype.writeSfixed64 = U.prototype.Sa),
        (U.prototype.qb = function (e, t) {
          t != null && ((t = st(t)), W(this, e, 1), this.a.A(t.lo, t.hi));
        }),
        (U.prototype.writeSfixed64String = U.prototype.qb),
        (U.prototype.L = function (e, t) {
          t != null && (W(this, e, 5), this.a.L(t));
        }),
        (U.prototype.writeFloat = U.prototype.L),
        (U.prototype.J = function (e, t) {
          t != null && (W(this, e, 1), this.a.J(t));
        }),
        (U.prototype.writeDouble = U.prototype.J),
        (U.prototype.I = function (e, t) {
          t != null &&
            (C(typeof t == `boolean` || typeof t == `number`),
            W(this, e, 0),
            this.a.I(t));
        }),
        (U.prototype.writeBool = U.prototype.I),
        (U.prototype.R = function (e, t) {
          t != null &&
            (C(-2147483648 <= t && 2147483648 > t), W(this, e, 0), this.a.M(t));
        }),
        (U.prototype.writeEnum = U.prototype.R),
        (U.prototype.U = function (e, t) {
          t != null && ((e = lt(this, e)), this.a.U(t), ut(this, e));
        }),
        (U.prototype.writeString = U.prototype.U),
        (U.prototype.ja = function (e, t) {
          t != null &&
            ((t = je(t)), W(this, e, 2), this.a.j(t.length), ct(this, t));
        }),
        (U.prototype.writeBytes = U.prototype.ja),
        (U.prototype.Rc = function (e, t, n) {
          t != null && ((e = lt(this, e)), n(t, this), ut(this, e));
        }),
        (U.prototype.writeMessage = U.prototype.Rc),
        (U.prototype.Sc = function (e, t, n) {
          t != null &&
            (W(this, 1, 3),
            W(this, 2, 0),
            this.a.M(e),
            (e = lt(this, 3)),
            n(t, this),
            ut(this, e),
            W(this, 1, 4));
        }),
        (U.prototype.writeMessageSet = U.prototype.Sc),
        (U.prototype.Oc = function (e, t, n) {
          t != null && (W(this, e, 3), n(t, this), W(this, e, 4));
        }),
        (U.prototype.writeGroup = U.prototype.Oc),
        (U.prototype.K = function (e, t) {
          t != null && (C(t.length == 8), W(this, e, 1), this.a.K(t));
        }),
        (U.prototype.writeFixedHash64 = U.prototype.K),
        (U.prototype.N = function (e, t) {
          t != null && (C(t.length == 8), W(this, e, 0), this.a.N(t));
        }),
        (U.prototype.writeVarintHash64 = U.prototype.N),
        (U.prototype.A = function (e, t, n) {
          (W(this, e, 1), this.a.A(t, n));
        }),
        (U.prototype.writeSplitFixed64 = U.prototype.A),
        (U.prototype.l = function (e, t, n) {
          (W(this, e, 0), this.a.l(t, n));
        }),
        (U.prototype.writeSplitVarint64 = U.prototype.l),
        (U.prototype.tb = function (e, t, n) {
          W(this, e, 0);
          var r = this.a;
          ye(t, n, function (e, t) {
            r.l(e >>> 0, t >>> 0);
          });
        }),
        (U.prototype.writeSplitZigzagVarint64 = U.prototype.tb),
        (U.prototype.Ed = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) ft(this, e, t[n]);
        }),
        (U.prototype.writeRepeatedInt32 = U.prototype.Ed),
        (U.prototype.Fd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.ob(e, t[n]);
        }),
        (U.prototype.writeRepeatedInt32String = U.prototype.Fd),
        (U.prototype.Gd = function (e, t) {
          if (t != null)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r != null && (W(this, e, 0), this.a.ua(r));
            }
        }),
        (U.prototype.writeRepeatedInt64 = U.prototype.Gd),
        (U.prototype.Qd = function (e, t, n, r) {
          if (t != null)
            for (var i = 0; i < t.length; i++) this.A(e, n(t[i]), r(t[i]));
        }),
        (U.prototype.writeRepeatedSplitFixed64 = U.prototype.Qd),
        (U.prototype.Rd = function (e, t, n, r) {
          if (t != null)
            for (var i = 0; i < t.length; i++) this.l(e, n(t[i]), r(t[i]));
        }),
        (U.prototype.writeRepeatedSplitVarint64 = U.prototype.Rd),
        (U.prototype.Sd = function (e, t, n, r) {
          if (t != null)
            for (var i = 0; i < t.length; i++) this.tb(e, n(t[i]), r(t[i]));
        }),
        (U.prototype.writeRepeatedSplitZigzagVarint64 = U.prototype.Sd),
        (U.prototype.Hd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.ka(e, t[n]);
        }),
        (U.prototype.writeRepeatedInt64String = U.prototype.Hd),
        (U.prototype.Ud = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) dt(this, e, t[n]);
        }),
        (U.prototype.writeRepeatedUint32 = U.prototype.Ud),
        (U.prototype.Vd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.ub(e, t[n]);
        }),
        (U.prototype.writeRepeatedUint32String = U.prototype.Vd),
        (U.prototype.Wd = function (e, t) {
          if (t != null)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r != null && (W(this, e, 0), this.a.va(r));
            }
        }),
        (U.prototype.writeRepeatedUint64 = U.prototype.Wd),
        (U.prototype.Xd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.vb(e, t[n]);
        }),
        (U.prototype.writeRepeatedUint64String = U.prototype.Xd),
        (U.prototype.Md = function (e, t) {
          if (t != null)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r != null && (W(this, e, 0), this.a.wa(r));
            }
        }),
        (U.prototype.writeRepeatedSint32 = U.prototype.Md),
        (U.prototype.Nd = function (e, t) {
          if (t != null)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r != null && (W(this, e, 0), this.a.xa(r));
            }
        }),
        (U.prototype.writeRepeatedSint64 = U.prototype.Nd),
        (U.prototype.Od = function (e, t) {
          if (t != null)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r != null && (W(this, e, 0), this.a.Ta(r));
            }
        }),
        (U.prototype.writeRepeatedSint64String = U.prototype.Od),
        (U.prototype.Pd = function (e, t) {
          if (t != null)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r != null && (W(this, e, 0), this.a.W(r));
            }
        }),
        (U.prototype.writeRepeatedSintHash64 = U.prototype.Pd),
        (U.prototype.yd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.Pa(e, t[n]);
        }),
        (U.prototype.writeRepeatedFixed32 = U.prototype.yd),
        (U.prototype.zd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.Qa(e, t[n]);
        }),
        (U.prototype.writeRepeatedFixed64 = U.prototype.zd),
        (U.prototype.Ad = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.nb(e, t[n]);
        }),
        (U.prototype.writeRepeatedFixed64String = U.prototype.Ad),
        (U.prototype.Jd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.Ra(e, t[n]);
        }),
        (U.prototype.writeRepeatedSfixed32 = U.prototype.Jd),
        (U.prototype.Kd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.Sa(e, t[n]);
        }),
        (U.prototype.writeRepeatedSfixed64 = U.prototype.Kd),
        (U.prototype.Ld = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.qb(e, t[n]);
        }),
        (U.prototype.writeRepeatedSfixed64String = U.prototype.Ld),
        (U.prototype.Cd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.L(e, t[n]);
        }),
        (U.prototype.writeRepeatedFloat = U.prototype.Cd),
        (U.prototype.wd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.J(e, t[n]);
        }),
        (U.prototype.writeRepeatedDouble = U.prototype.wd),
        (U.prototype.ud = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.I(e, t[n]);
        }),
        (U.prototype.writeRepeatedBool = U.prototype.ud),
        (U.prototype.xd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.R(e, t[n]);
        }),
        (U.prototype.writeRepeatedEnum = U.prototype.xd),
        (U.prototype.Td = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.U(e, t[n]);
        }),
        (U.prototype.writeRepeatedString = U.prototype.Td),
        (U.prototype.vd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.ja(e, t[n]);
        }),
        (U.prototype.writeRepeatedBytes = U.prototype.vd),
        (U.prototype.Id = function (e, t, n) {
          if (t != null)
            for (var r = 0; r < t.length; r++) {
              var i = lt(this, e);
              (n(t[r], this), ut(this, i));
            }
        }),
        (U.prototype.writeRepeatedMessage = U.prototype.Id),
        (U.prototype.Dd = function (e, t, n) {
          if (t != null)
            for (var r = 0; r < t.length; r++)
              (W(this, e, 3), n(t[r], this), W(this, e, 4));
        }),
        (U.prototype.writeRepeatedGroup = U.prototype.Dd),
        (U.prototype.Bd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.K(e, t[n]);
        }),
        (U.prototype.writeRepeatedFixedHash64 = U.prototype.Bd),
        (U.prototype.Yd = function (e, t) {
          if (t != null) for (var n = 0; n < t.length; n++) this.N(e, t[n]);
        }),
        (U.prototype.writeRepeatedVarintHash64 = U.prototype.Yd),
        (U.prototype.ad = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.M(t[n]);
            ut(this, e);
          }
        }),
        (U.prototype.writePackedInt32 = U.prototype.ad),
        (U.prototype.bd = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.M(parseInt(t[n], 10));
            ut(this, e);
          }
        }),
        (U.prototype.writePackedInt32String = U.prototype.bd),
        (U.prototype.cd = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.ua(t[n]);
            ut(this, e);
          }
        }),
        (U.prototype.writePackedInt64 = U.prototype.cd),
        (U.prototype.md = function (e, t, n, r) {
          if (t != null) {
            e = lt(this, e);
            for (var i = 0; i < t.length; i++) this.a.A(n(t[i]), r(t[i]));
            ut(this, e);
          }
        }),
        (U.prototype.writePackedSplitFixed64 = U.prototype.md),
        (U.prototype.nd = function (e, t, n, r) {
          if (t != null) {
            e = lt(this, e);
            for (var i = 0; i < t.length; i++) this.a.l(n(t[i]), r(t[i]));
            ut(this, e);
          }
        }),
        (U.prototype.writePackedSplitVarint64 = U.prototype.nd),
        (U.prototype.od = function (e, t, n, r) {
          if (t != null) {
            e = lt(this, e);
            for (var i = this.a, a = 0; a < t.length; a++)
              ye(n(t[a]), r(t[a]), function (e, t) {
                i.l(e >>> 0, t >>> 0);
              });
            ut(this, e);
          }
        }),
        (U.prototype.writePackedSplitZigzagVarint64 = U.prototype.od),
        (U.prototype.dd = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) {
              var r = st(t[n]);
              this.a.l(r.lo, r.hi);
            }
            ut(this, e);
          }
        }),
        (U.prototype.writePackedInt64String = U.prototype.dd),
        (U.prototype.pd = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.j(t[n]);
            ut(this, e);
          }
        }),
        (U.prototype.writePackedUint32 = U.prototype.pd),
        (U.prototype.qd = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.j(parseInt(t[n], 10));
            ut(this, e);
          }
        }),
        (U.prototype.writePackedUint32String = U.prototype.qd),
        (U.prototype.rd = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.va(t[n]);
            ut(this, e);
          }
        }),
        (U.prototype.writePackedUint64 = U.prototype.rd),
        (U.prototype.sd = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) {
              var r = at(t[n]);
              this.a.l(r.lo, r.hi);
            }
            ut(this, e);
          }
        }),
        (U.prototype.writePackedUint64String = U.prototype.sd),
        (U.prototype.hd = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.wa(t[n]);
            ut(this, e);
          }
        }),
        (U.prototype.writePackedSint32 = U.prototype.hd),
        (U.prototype.jd = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.xa(t[n]);
            ut(this, e);
          }
        }),
        (U.prototype.writePackedSint64 = U.prototype.jd),
        (U.prototype.kd = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.W(P(t[n]));
            ut(this, e);
          }
        }),
        (U.prototype.writePackedSint64String = U.prototype.kd),
        (U.prototype.ld = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.W(t[n]);
            ut(this, e);
          }
        }),
        (U.prototype.writePackedSintHash64 = U.prototype.ld),
        (U.prototype.Wc = function (e, t) {
          if (t != null && t.length)
            for (
              W(this, e, 2), this.a.j(4 * t.length), e = 0;
              e < t.length;
              e++
            )
              this.a.s(t[e]);
        }),
        (U.prototype.writePackedFixed32 = U.prototype.Wc),
        (U.prototype.Xc = function (e, t) {
          if (t != null && t.length)
            for (
              W(this, e, 2), this.a.j(8 * t.length), e = 0;
              e < t.length;
              e++
            )
              this.a.V(t[e]);
        }),
        (U.prototype.writePackedFixed64 = U.prototype.Xc),
        (U.prototype.Yc = function (e, t) {
          if (t != null && t.length)
            for (
              W(this, e, 2), this.a.j(8 * t.length), e = 0;
              e < t.length;
              e++
            ) {
              var n = at(t[e]);
              this.a.A(n.lo, n.hi);
            }
        }),
        (U.prototype.writePackedFixed64String = U.prototype.Yc),
        (U.prototype.ed = function (e, t) {
          if (t != null && t.length)
            for (
              W(this, e, 2), this.a.j(4 * t.length), e = 0;
              e < t.length;
              e++
            )
              this.a.S(t[e]);
        }),
        (U.prototype.writePackedSfixed32 = U.prototype.ed),
        (U.prototype.fd = function (e, t) {
          if (t != null && t.length)
            for (
              W(this, e, 2), this.a.j(8 * t.length), e = 0;
              e < t.length;
              e++
            )
              this.a.T(t[e]);
        }),
        (U.prototype.writePackedSfixed64 = U.prototype.fd),
        (U.prototype.gd = function (e, t) {
          if (t != null && t.length)
            for (
              W(this, e, 2), this.a.j(8 * t.length), e = 0;
              e < t.length;
              e++
            )
              this.a.ka(t[e]);
        }),
        (U.prototype.writePackedSfixed64String = U.prototype.gd),
        (U.prototype.$c = function (e, t) {
          if (t != null && t.length)
            for (
              W(this, e, 2), this.a.j(4 * t.length), e = 0;
              e < t.length;
              e++
            )
              this.a.L(t[e]);
        }),
        (U.prototype.writePackedFloat = U.prototype.$c),
        (U.prototype.Uc = function (e, t) {
          if (t != null && t.length)
            for (
              W(this, e, 2), this.a.j(8 * t.length), e = 0;
              e < t.length;
              e++
            )
              this.a.J(t[e]);
        }),
        (U.prototype.writePackedDouble = U.prototype.Uc),
        (U.prototype.Tc = function (e, t) {
          if (t != null && t.length)
            for (W(this, e, 2), this.a.j(t.length), e = 0; e < t.length; e++)
              this.a.I(t[e]);
        }),
        (U.prototype.writePackedBool = U.prototype.Tc),
        (U.prototype.Vc = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.R(t[n]);
            ut(this, e);
          }
        }),
        (U.prototype.writePackedEnum = U.prototype.Vc),
        (U.prototype.Zc = function (e, t) {
          if (t != null && t.length)
            for (
              W(this, e, 2), this.a.j(8 * t.length), e = 0;
              e < t.length;
              e++
            )
              this.a.K(t[e]);
        }),
        (U.prototype.writePackedFixedHash64 = U.prototype.Zc),
        (U.prototype.td = function (e, t) {
          if (t != null && t.length) {
            e = lt(this, e);
            for (var n = 0; n < t.length; n++) this.a.N(t[n]);
            ut(this, e);
          }
        }),
        (U.prototype.writePackedVarintHash64 = U.prototype.td),
        typeof e == `object` &&
          ((e.debug = rt),
          (e.Map = D),
          (e.Message = z),
          (e.BinaryReader = I),
          (e.BinaryWriter = U),
          (e.ExtensionFieldInfo = Ie),
          (e.ExtensionFieldBinaryInfo = R),
          (e.exportSymbol = h),
          (e.inherits = g),
          (e.object = { extend: v }),
          (e.typeOf = p)));
    })(),
    1,
  ),
  $ = Q.default,
  eu =
    (typeof globalThis < `u` && globalThis) ||
    (typeof window < `u` && window) ||
    (eu !== void 0 && eu) ||
    (typeof self < `u` && self) ||
    function () {
      return this;
    }.call(null) ||
    Function(`return this`)();
($.exportSymbol(`proto.csgo.Bomb`, null, eu),
  $.exportSymbol(`proto.csgo.Bomb.BombState`, null, eu),
  $.exportSymbol(`proto.csgo.Demo`, null, eu),
  $.exportSymbol(`proto.csgo.Demo.DemoPlatformType`, null, eu),
  $.exportSymbol(`proto.csgo.Frag`, null, eu),
  $.exportSymbol(`proto.csgo.Grenade`, null, eu),
  $.exportSymbol(`proto.csgo.Init`, null, eu),
  $.exportSymbol(`proto.csgo.Message`, null, eu),
  $.exportSymbol(`proto.csgo.Message.MessageType`, null, eu),
  $.exportSymbol(`proto.csgo.Player`, null, eu),
  $.exportSymbol(`proto.csgo.Progress`, null, eu),
  $.exportSymbol(`proto.csgo.Round`, null, eu),
  $.exportSymbol(`proto.csgo.RoundTime`, null, eu),
  $.exportSymbol(`proto.csgo.Shot`, null, eu),
  $.exportSymbol(`proto.csgo.TeamUpdate`, null, eu),
  $.exportSymbol(`proto.csgo.TickState`, null, eu),
  (proto.csgo.Message = function (e) {
    Q.Message.initialize(this, e, 0, -1, null, null);
  }),
  $.inherits(proto.csgo.Message, Q.Message),
  $.DEBUG &&
    !COMPILED &&
    (proto.csgo.Message.displayName = `proto.csgo.Message`),
  (proto.csgo.Player = function (e) {
    Q.Message.initialize(
      this,
      e,
      0,
      -1,
      proto.csgo.Player.repeatedFields_,
      null,
    );
  }),
  $.inherits(proto.csgo.Player, Q.Message),
  $.DEBUG && !COMPILED && (proto.csgo.Player.displayName = `proto.csgo.Player`),
  (proto.csgo.TeamUpdate = function (e) {
    Q.Message.initialize(this, e, 0, -1, null, null);
  }),
  $.inherits(proto.csgo.TeamUpdate, Q.Message),
  $.DEBUG &&
    !COMPILED &&
    (proto.csgo.TeamUpdate.displayName = `proto.csgo.TeamUpdate`),
  (proto.csgo.TickState = function (e) {
    Q.Message.initialize(
      this,
      e,
      0,
      -1,
      proto.csgo.TickState.repeatedFields_,
      null,
    );
  }),
  $.inherits(proto.csgo.TickState, Q.Message),
  $.DEBUG &&
    !COMPILED &&
    (proto.csgo.TickState.displayName = `proto.csgo.TickState`),
  (proto.csgo.Init = function (e) {
    Q.Message.initialize(this, e, 0, -1, null, null);
  }),
  $.inherits(proto.csgo.Init, Q.Message),
  $.DEBUG && !COMPILED && (proto.csgo.Init.displayName = `proto.csgo.Init`),
  (proto.csgo.Frag = function (e) {
    Q.Message.initialize(this, e, 0, -1, null, null);
  }),
  $.inherits(proto.csgo.Frag, Q.Message),
  $.DEBUG && !COMPILED && (proto.csgo.Frag.displayName = `proto.csgo.Frag`),
  (proto.csgo.Shot = function (e) {
    Q.Message.initialize(this, e, 0, -1, null, null);
  }),
  $.inherits(proto.csgo.Shot, Q.Message),
  $.DEBUG && !COMPILED && (proto.csgo.Shot.displayName = `proto.csgo.Shot`),
  (proto.csgo.Grenade = function (e) {
    Q.Message.initialize(this, e, 0, -1, null, null);
  }),
  $.inherits(proto.csgo.Grenade, Q.Message),
  $.DEBUG &&
    !COMPILED &&
    (proto.csgo.Grenade.displayName = `proto.csgo.Grenade`),
  (proto.csgo.Bomb = function (e) {
    Q.Message.initialize(this, e, 0, -1, null, null);
  }),
  $.inherits(proto.csgo.Bomb, Q.Message),
  $.DEBUG && !COMPILED && (proto.csgo.Bomb.displayName = `proto.csgo.Bomb`),
  (proto.csgo.Round = function (e) {
    Q.Message.initialize(
      this,
      e,
      0,
      -1,
      proto.csgo.Round.repeatedFields_,
      null,
    );
  }),
  $.inherits(proto.csgo.Round, Q.Message),
  $.DEBUG && !COMPILED && (proto.csgo.Round.displayName = `proto.csgo.Round`),
  (proto.csgo.Progress = function (e) {
    Q.Message.initialize(this, e, 0, -1, null, null);
  }),
  $.inherits(proto.csgo.Progress, Q.Message),
  $.DEBUG &&
    !COMPILED &&
    (proto.csgo.Progress.displayName = `proto.csgo.Progress`),
  (proto.csgo.RoundTime = function (e) {
    Q.Message.initialize(this, e, 0, -1, null, null);
  }),
  $.inherits(proto.csgo.RoundTime, Q.Message),
  $.DEBUG &&
    !COMPILED &&
    (proto.csgo.RoundTime.displayName = `proto.csgo.RoundTime`),
  (proto.csgo.Demo = function (e) {
    Q.Message.initialize(this, e, 0, -1, null, null);
  }),
  $.inherits(proto.csgo.Demo, Q.Message),
  $.DEBUG && !COMPILED && (proto.csgo.Demo.displayName = `proto.csgo.Demo`),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.Message.prototype.toObject = function (e) {
      return proto.csgo.Message.toObject(e, this);
    }),
    (proto.csgo.Message.toObject = function (e, t) {
      var n,
        r = {
          msgtype: Q.Message.getFieldWithDefault(t, 1, 0),
          tick: Q.Message.getFieldWithDefault(t, 2, 0),
          teamupdate:
            (n = t.getTeamupdate()) && proto.csgo.TeamUpdate.toObject(e, n),
          tickstate:
            (n = t.getTickstate()) && proto.csgo.TickState.toObject(e, n),
          init: (n = t.getInit()) && proto.csgo.Init.toObject(e, n),
          round: (n = t.getRound()) && proto.csgo.Round.toObject(e, n),
          progress: (n = t.getProgress()) && proto.csgo.Progress.toObject(e, n),
          roundtime:
            (n = t.getRoundtime()) && proto.csgo.RoundTime.toObject(e, n),
          shot: (n = t.getShot()) && proto.csgo.Shot.toObject(e, n),
          frag: (n = t.getFrag()) && proto.csgo.Frag.toObject(e, n),
          demo: (n = t.getDemo()) && proto.csgo.Demo.toObject(e, n),
          grenadeevent:
            (n = t.getGrenadeevent()) && proto.csgo.Grenade.toObject(e, n),
          message: Q.Message.getFieldWithDefault(t, 13, ``),
        };
      return (e && (r.$jspbMessageInstance = t), r);
    })),
  (proto.csgo.Message.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.Message();
    return proto.csgo.Message.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.Message.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readEnum();
          e.setMsgtype(n);
          break;
        case 2:
          var n = t.readInt32();
          e.setTick(n);
          break;
        case 3:
          var n = new proto.csgo.TeamUpdate();
          (t.readMessage(n, proto.csgo.TeamUpdate.deserializeBinaryFromReader),
            e.setTeamupdate(n));
          break;
        case 4:
          var n = new proto.csgo.TickState();
          (t.readMessage(n, proto.csgo.TickState.deserializeBinaryFromReader),
            e.setTickstate(n));
          break;
        case 5:
          var n = new proto.csgo.Init();
          (t.readMessage(n, proto.csgo.Init.deserializeBinaryFromReader),
            e.setInit(n));
          break;
        case 6:
          var n = new proto.csgo.Round();
          (t.readMessage(n, proto.csgo.Round.deserializeBinaryFromReader),
            e.setRound(n));
          break;
        case 7:
          var n = new proto.csgo.Progress();
          (t.readMessage(n, proto.csgo.Progress.deserializeBinaryFromReader),
            e.setProgress(n));
          break;
        case 8:
          var n = new proto.csgo.RoundTime();
          (t.readMessage(n, proto.csgo.RoundTime.deserializeBinaryFromReader),
            e.setRoundtime(n));
          break;
        case 9:
          var n = new proto.csgo.Shot();
          (t.readMessage(n, proto.csgo.Shot.deserializeBinaryFromReader),
            e.setShot(n));
          break;
        case 10:
          var n = new proto.csgo.Frag();
          (t.readMessage(n, proto.csgo.Frag.deserializeBinaryFromReader),
            e.setFrag(n));
          break;
        case 11:
          var n = new proto.csgo.Demo();
          (t.readMessage(n, proto.csgo.Demo.deserializeBinaryFromReader),
            e.setDemo(n));
          break;
        case 12:
          var n = new proto.csgo.Grenade();
          (t.readMessage(n, proto.csgo.Grenade.deserializeBinaryFromReader),
            e.setGrenadeevent(n));
          break;
        case 13:
          var n = t.readString();
          e.setMessage(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.Message.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.Message.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.Message.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getMsgtype()),
      n !== 0 && t.writeEnum(1, n),
      (n = e.getTick()),
      n !== 0 && t.writeInt32(2, n),
      (n = e.getTeamupdate()),
      n != null &&
        t.writeMessage(3, n, proto.csgo.TeamUpdate.serializeBinaryToWriter),
      (n = e.getTickstate()),
      n != null &&
        t.writeMessage(4, n, proto.csgo.TickState.serializeBinaryToWriter),
      (n = e.getInit()),
      n != null &&
        t.writeMessage(5, n, proto.csgo.Init.serializeBinaryToWriter),
      (n = e.getRound()),
      n != null &&
        t.writeMessage(6, n, proto.csgo.Round.serializeBinaryToWriter),
      (n = e.getProgress()),
      n != null &&
        t.writeMessage(7, n, proto.csgo.Progress.serializeBinaryToWriter),
      (n = e.getRoundtime()),
      n != null &&
        t.writeMessage(8, n, proto.csgo.RoundTime.serializeBinaryToWriter),
      (n = e.getShot()),
      n != null &&
        t.writeMessage(9, n, proto.csgo.Shot.serializeBinaryToWriter),
      (n = e.getFrag()),
      n != null &&
        t.writeMessage(10, n, proto.csgo.Frag.serializeBinaryToWriter),
      (n = e.getDemo()),
      n != null &&
        t.writeMessage(11, n, proto.csgo.Demo.serializeBinaryToWriter),
      (n = e.getGrenadeevent()),
      n != null &&
        t.writeMessage(12, n, proto.csgo.Grenade.serializeBinaryToWriter),
      (n = Q.Message.getField(e, 13)),
      n != null && t.writeString(13, n));
  }),
  (proto.csgo.Message.MessageType = {
    ZERO: 0,
    TICKSTATEUPDATE: 1,
    ADDPLAYERTYPE: 2,
    INITTYPE: 4,
    DEMOENDTYPE: 5,
    ROUNDTYPE: 6,
    PROGRESSTYPE: 7,
    TIMEUPDATETYPE: 8,
    SHOTTYPE: 9,
    EMPTYTYPE: 10,
    FRAGTYPE: 11,
    PLAYREQUESTTYPE: 12,
    ERRORTYPE: 13,
    GRENADEEVENTTYPE: 14,
  }),
  (proto.csgo.Message.prototype.getMsgtype = function () {
    return Q.Message.getFieldWithDefault(this, 1, 0);
  }),
  (proto.csgo.Message.prototype.setMsgtype = function (e) {
    return Q.Message.setProto3EnumField(this, 1, e);
  }),
  (proto.csgo.Message.prototype.getTick = function () {
    return Q.Message.getFieldWithDefault(this, 2, 0);
  }),
  (proto.csgo.Message.prototype.setTick = function (e) {
    return Q.Message.setProto3IntField(this, 2, e);
  }),
  (proto.csgo.Message.prototype.getTeamupdate = function () {
    return Q.Message.getWrapperField(this, proto.csgo.TeamUpdate, 3);
  }),
  (proto.csgo.Message.prototype.setTeamupdate = function (e) {
    return Q.Message.setWrapperField(this, 3, e);
  }),
  (proto.csgo.Message.prototype.clearTeamupdate = function () {
    return this.setTeamupdate(void 0);
  }),
  (proto.csgo.Message.prototype.hasTeamupdate = function () {
    return Q.Message.getField(this, 3) != null;
  }),
  (proto.csgo.Message.prototype.getTickstate = function () {
    return Q.Message.getWrapperField(this, proto.csgo.TickState, 4);
  }),
  (proto.csgo.Message.prototype.setTickstate = function (e) {
    return Q.Message.setWrapperField(this, 4, e);
  }),
  (proto.csgo.Message.prototype.clearTickstate = function () {
    return this.setTickstate(void 0);
  }),
  (proto.csgo.Message.prototype.hasTickstate = function () {
    return Q.Message.getField(this, 4) != null;
  }),
  (proto.csgo.Message.prototype.getInit = function () {
    return Q.Message.getWrapperField(this, proto.csgo.Init, 5);
  }),
  (proto.csgo.Message.prototype.setInit = function (e) {
    return Q.Message.setWrapperField(this, 5, e);
  }),
  (proto.csgo.Message.prototype.clearInit = function () {
    return this.setInit(void 0);
  }),
  (proto.csgo.Message.prototype.hasInit = function () {
    return Q.Message.getField(this, 5) != null;
  }),
  (proto.csgo.Message.prototype.getRound = function () {
    return Q.Message.getWrapperField(this, proto.csgo.Round, 6);
  }),
  (proto.csgo.Message.prototype.setRound = function (e) {
    return Q.Message.setWrapperField(this, 6, e);
  }),
  (proto.csgo.Message.prototype.clearRound = function () {
    return this.setRound(void 0);
  }),
  (proto.csgo.Message.prototype.hasRound = function () {
    return Q.Message.getField(this, 6) != null;
  }),
  (proto.csgo.Message.prototype.getProgress = function () {
    return Q.Message.getWrapperField(this, proto.csgo.Progress, 7);
  }),
  (proto.csgo.Message.prototype.setProgress = function (e) {
    return Q.Message.setWrapperField(this, 7, e);
  }),
  (proto.csgo.Message.prototype.clearProgress = function () {
    return this.setProgress(void 0);
  }),
  (proto.csgo.Message.prototype.hasProgress = function () {
    return Q.Message.getField(this, 7) != null;
  }),
  (proto.csgo.Message.prototype.getRoundtime = function () {
    return Q.Message.getWrapperField(this, proto.csgo.RoundTime, 8);
  }),
  (proto.csgo.Message.prototype.setRoundtime = function (e) {
    return Q.Message.setWrapperField(this, 8, e);
  }),
  (proto.csgo.Message.prototype.clearRoundtime = function () {
    return this.setRoundtime(void 0);
  }),
  (proto.csgo.Message.prototype.hasRoundtime = function () {
    return Q.Message.getField(this, 8) != null;
  }),
  (proto.csgo.Message.prototype.getShot = function () {
    return Q.Message.getWrapperField(this, proto.csgo.Shot, 9);
  }),
  (proto.csgo.Message.prototype.setShot = function (e) {
    return Q.Message.setWrapperField(this, 9, e);
  }),
  (proto.csgo.Message.prototype.clearShot = function () {
    return this.setShot(void 0);
  }),
  (proto.csgo.Message.prototype.hasShot = function () {
    return Q.Message.getField(this, 9) != null;
  }),
  (proto.csgo.Message.prototype.getFrag = function () {
    return Q.Message.getWrapperField(this, proto.csgo.Frag, 10);
  }),
  (proto.csgo.Message.prototype.setFrag = function (e) {
    return Q.Message.setWrapperField(this, 10, e);
  }),
  (proto.csgo.Message.prototype.clearFrag = function () {
    return this.setFrag(void 0);
  }),
  (proto.csgo.Message.prototype.hasFrag = function () {
    return Q.Message.getField(this, 10) != null;
  }),
  (proto.csgo.Message.prototype.getDemo = function () {
    return Q.Message.getWrapperField(this, proto.csgo.Demo, 11);
  }),
  (proto.csgo.Message.prototype.setDemo = function (e) {
    return Q.Message.setWrapperField(this, 11, e);
  }),
  (proto.csgo.Message.prototype.clearDemo = function () {
    return this.setDemo(void 0);
  }),
  (proto.csgo.Message.prototype.hasDemo = function () {
    return Q.Message.getField(this, 11) != null;
  }),
  (proto.csgo.Message.prototype.getGrenadeevent = function () {
    return Q.Message.getWrapperField(this, proto.csgo.Grenade, 12);
  }),
  (proto.csgo.Message.prototype.setGrenadeevent = function (e) {
    return Q.Message.setWrapperField(this, 12, e);
  }),
  (proto.csgo.Message.prototype.clearGrenadeevent = function () {
    return this.setGrenadeevent(void 0);
  }),
  (proto.csgo.Message.prototype.hasGrenadeevent = function () {
    return Q.Message.getField(this, 12) != null;
  }),
  (proto.csgo.Message.prototype.getMessage = function () {
    return Q.Message.getFieldWithDefault(this, 13, ``);
  }),
  (proto.csgo.Message.prototype.setMessage = function (e) {
    return Q.Message.setField(this, 13, e);
  }),
  (proto.csgo.Message.prototype.clearMessage = function () {
    return Q.Message.setField(this, 13, void 0);
  }),
  (proto.csgo.Message.prototype.hasMessage = function () {
    return Q.Message.getField(this, 13) != null;
  }),
  (proto.csgo.Player.repeatedFields_ = [23]),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.Player.prototype.toObject = function (e) {
      return proto.csgo.Player.toObject(e, this);
    }),
    (proto.csgo.Player.toObject = function (e, t) {
      var n = {
        playerid: Q.Message.getFieldWithDefault(t, 1, 0),
        name: Q.Message.getFieldWithDefault(t, 2, ``),
        team: Q.Message.getFieldWithDefault(t, 3, ``),
        x: Q.Message.getFloatingPointFieldWithDefault(t, 4, 0),
        y: Q.Message.getFloatingPointFieldWithDefault(t, 5, 0),
        z: Q.Message.getFloatingPointFieldWithDefault(t, 6, 0),
        rotation: Q.Message.getFloatingPointFieldWithDefault(t, 7, 0),
        alive: Q.Message.getBooleanFieldWithDefault(t, 8, !1),
        weapon: Q.Message.getFieldWithDefault(t, 9, ``),
        flashed: Q.Message.getBooleanFieldWithDefault(t, 10, !1),
        hp: Q.Message.getFieldWithDefault(t, 11, 0),
        armor: Q.Message.getFieldWithDefault(t, 12, 0),
        helmet: Q.Message.getBooleanFieldWithDefault(t, 13, !1),
        defuse: Q.Message.getBooleanFieldWithDefault(t, 14, !1),
        bomb: Q.Message.getBooleanFieldWithDefault(t, 15, !1),
        money: Q.Message.getFieldWithDefault(t, 16, 0),
        primary: Q.Message.getFieldWithDefault(t, 17, ``),
        primaryammomagazine: Q.Message.getFieldWithDefault(t, 18, 0),
        primaryammoreserve: Q.Message.getFieldWithDefault(t, 19, 0),
        secondary: Q.Message.getFieldWithDefault(t, 20, ``),
        secondaryammomagazine: Q.Message.getFieldWithDefault(t, 21, 0),
        secondaryammoreserve: Q.Message.getFieldWithDefault(t, 22, 0),
        grenadesList: Q.Message.getRepeatedField(t, 23) ?? void 0,
        kills: Q.Message.getFieldWithDefault(t, 24, 0),
        assists: Q.Message.getFieldWithDefault(t, 25, 0),
        deaths: Q.Message.getFieldWithDefault(t, 26, 0),
      };
      return (e && (n.$jspbMessageInstance = t), n);
    })),
  (proto.csgo.Player.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.Player();
    return proto.csgo.Player.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.Player.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readInt32();
          e.setPlayerid(n);
          break;
        case 2:
          var n = t.readString();
          e.setName(n);
          break;
        case 3:
          var n = t.readString();
          e.setTeam(n);
          break;
        case 4:
          var n = t.readDouble();
          e.setX(n);
          break;
        case 5:
          var n = t.readDouble();
          e.setY(n);
          break;
        case 6:
          var n = t.readDouble();
          e.setZ(n);
          break;
        case 7:
          var n = t.readFloat();
          e.setRotation(n);
          break;
        case 8:
          var n = t.readBool();
          e.setAlive(n);
          break;
        case 9:
          var n = t.readString();
          e.setWeapon(n);
          break;
        case 10:
          var n = t.readBool();
          e.setFlashed(n);
          break;
        case 11:
          var n = t.readInt32();
          e.setHp(n);
          break;
        case 12:
          var n = t.readInt32();
          e.setArmor(n);
          break;
        case 13:
          var n = t.readBool();
          e.setHelmet(n);
          break;
        case 14:
          var n = t.readBool();
          e.setDefuse(n);
          break;
        case 15:
          var n = t.readBool();
          e.setBomb(n);
          break;
        case 16:
          var n = t.readInt32();
          e.setMoney(n);
          break;
        case 17:
          var n = t.readString();
          e.setPrimary(n);
          break;
        case 18:
          var n = t.readInt32();
          e.setPrimaryammomagazine(n);
          break;
        case 19:
          var n = t.readInt32();
          e.setPrimaryammoreserve(n);
          break;
        case 20:
          var n = t.readString();
          e.setSecondary(n);
          break;
        case 21:
          var n = t.readInt32();
          e.setSecondaryammomagazine(n);
          break;
        case 22:
          var n = t.readInt32();
          e.setSecondaryammoreserve(n);
          break;
        case 23:
          var n = t.readString();
          e.addGrenades(n);
          break;
        case 24:
          var n = t.readInt32();
          e.setKills(n);
          break;
        case 25:
          var n = t.readInt32();
          e.setAssists(n);
          break;
        case 26:
          var n = t.readInt32();
          e.setDeaths(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.Player.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.Player.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.Player.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getPlayerid()),
      n !== 0 && t.writeInt32(1, n),
      (n = e.getName()),
      n.length > 0 && t.writeString(2, n),
      (n = e.getTeam()),
      n.length > 0 && t.writeString(3, n),
      (n = e.getX()),
      n !== 0 && t.writeDouble(4, n),
      (n = e.getY()),
      n !== 0 && t.writeDouble(5, n),
      (n = e.getZ()),
      n !== 0 && t.writeDouble(6, n),
      (n = e.getRotation()),
      n !== 0 && t.writeFloat(7, n),
      (n = e.getAlive()),
      n && t.writeBool(8, n),
      (n = e.getWeapon()),
      n.length > 0 && t.writeString(9, n),
      (n = e.getFlashed()),
      n && t.writeBool(10, n),
      (n = e.getHp()),
      n !== 0 && t.writeInt32(11, n),
      (n = e.getArmor()),
      n !== 0 && t.writeInt32(12, n),
      (n = e.getHelmet()),
      n && t.writeBool(13, n),
      (n = e.getDefuse()),
      n && t.writeBool(14, n),
      (n = e.getBomb()),
      n && t.writeBool(15, n),
      (n = e.getMoney()),
      n !== 0 && t.writeInt32(16, n),
      (n = e.getPrimary()),
      n.length > 0 && t.writeString(17, n),
      (n = e.getPrimaryammomagazine()),
      n !== 0 && t.writeInt32(18, n),
      (n = e.getPrimaryammoreserve()),
      n !== 0 && t.writeInt32(19, n),
      (n = e.getSecondary()),
      n.length > 0 && t.writeString(20, n),
      (n = e.getSecondaryammomagazine()),
      n !== 0 && t.writeInt32(21, n),
      (n = e.getSecondaryammoreserve()),
      n !== 0 && t.writeInt32(22, n),
      (n = e.getGrenadesList()),
      n.length > 0 && t.writeRepeatedString(23, n),
      (n = e.getKills()),
      n !== 0 && t.writeInt32(24, n),
      (n = e.getAssists()),
      n !== 0 && t.writeInt32(25, n),
      (n = e.getDeaths()),
      n !== 0 && t.writeInt32(26, n));
  }),
  (proto.csgo.Player.prototype.getPlayerid = function () {
    return Q.Message.getFieldWithDefault(this, 1, 0);
  }),
  (proto.csgo.Player.prototype.setPlayerid = function (e) {
    return Q.Message.setProto3IntField(this, 1, e);
  }),
  (proto.csgo.Player.prototype.getName = function () {
    return Q.Message.getFieldWithDefault(this, 2, ``);
  }),
  (proto.csgo.Player.prototype.setName = function (e) {
    return Q.Message.setProto3StringField(this, 2, e);
  }),
  (proto.csgo.Player.prototype.getTeam = function () {
    return Q.Message.getFieldWithDefault(this, 3, ``);
  }),
  (proto.csgo.Player.prototype.setTeam = function (e) {
    return Q.Message.setProto3StringField(this, 3, e);
  }),
  (proto.csgo.Player.prototype.getX = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 4, 0);
  }),
  (proto.csgo.Player.prototype.setX = function (e) {
    return Q.Message.setProto3FloatField(this, 4, e);
  }),
  (proto.csgo.Player.prototype.getY = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 5, 0);
  }),
  (proto.csgo.Player.prototype.setY = function (e) {
    return Q.Message.setProto3FloatField(this, 5, e);
  }),
  (proto.csgo.Player.prototype.getZ = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 6, 0);
  }),
  (proto.csgo.Player.prototype.setZ = function (e) {
    return Q.Message.setProto3FloatField(this, 6, e);
  }),
  (proto.csgo.Player.prototype.getRotation = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 7, 0);
  }),
  (proto.csgo.Player.prototype.setRotation = function (e) {
    return Q.Message.setProto3FloatField(this, 7, e);
  }),
  (proto.csgo.Player.prototype.getAlive = function () {
    return Q.Message.getBooleanFieldWithDefault(this, 8, !1);
  }),
  (proto.csgo.Player.prototype.setAlive = function (e) {
    return Q.Message.setProto3BooleanField(this, 8, e);
  }),
  (proto.csgo.Player.prototype.getWeapon = function () {
    return Q.Message.getFieldWithDefault(this, 9, ``);
  }),
  (proto.csgo.Player.prototype.setWeapon = function (e) {
    return Q.Message.setProto3StringField(this, 9, e);
  }),
  (proto.csgo.Player.prototype.getFlashed = function () {
    return Q.Message.getBooleanFieldWithDefault(this, 10, !1);
  }),
  (proto.csgo.Player.prototype.setFlashed = function (e) {
    return Q.Message.setProto3BooleanField(this, 10, e);
  }),
  (proto.csgo.Player.prototype.getHp = function () {
    return Q.Message.getFieldWithDefault(this, 11, 0);
  }),
  (proto.csgo.Player.prototype.setHp = function (e) {
    return Q.Message.setProto3IntField(this, 11, e);
  }),
  (proto.csgo.Player.prototype.getArmor = function () {
    return Q.Message.getFieldWithDefault(this, 12, 0);
  }),
  (proto.csgo.Player.prototype.setArmor = function (e) {
    return Q.Message.setProto3IntField(this, 12, e);
  }),
  (proto.csgo.Player.prototype.getHelmet = function () {
    return Q.Message.getBooleanFieldWithDefault(this, 13, !1);
  }),
  (proto.csgo.Player.prototype.setHelmet = function (e) {
    return Q.Message.setProto3BooleanField(this, 13, e);
  }),
  (proto.csgo.Player.prototype.getDefuse = function () {
    return Q.Message.getBooleanFieldWithDefault(this, 14, !1);
  }),
  (proto.csgo.Player.prototype.setDefuse = function (e) {
    return Q.Message.setProto3BooleanField(this, 14, e);
  }),
  (proto.csgo.Player.prototype.getBomb = function () {
    return Q.Message.getBooleanFieldWithDefault(this, 15, !1);
  }),
  (proto.csgo.Player.prototype.setBomb = function (e) {
    return Q.Message.setProto3BooleanField(this, 15, e);
  }),
  (proto.csgo.Player.prototype.getMoney = function () {
    return Q.Message.getFieldWithDefault(this, 16, 0);
  }),
  (proto.csgo.Player.prototype.setMoney = function (e) {
    return Q.Message.setProto3IntField(this, 16, e);
  }),
  (proto.csgo.Player.prototype.getPrimary = function () {
    return Q.Message.getFieldWithDefault(this, 17, ``);
  }),
  (proto.csgo.Player.prototype.setPrimary = function (e) {
    return Q.Message.setProto3StringField(this, 17, e);
  }),
  (proto.csgo.Player.prototype.getPrimaryammomagazine = function () {
    return Q.Message.getFieldWithDefault(this, 18, 0);
  }),
  (proto.csgo.Player.prototype.setPrimaryammomagazine = function (e) {
    return Q.Message.setProto3IntField(this, 18, e);
  }),
  (proto.csgo.Player.prototype.getPrimaryammoreserve = function () {
    return Q.Message.getFieldWithDefault(this, 19, 0);
  }),
  (proto.csgo.Player.prototype.setPrimaryammoreserve = function (e) {
    return Q.Message.setProto3IntField(this, 19, e);
  }),
  (proto.csgo.Player.prototype.getSecondary = function () {
    return Q.Message.getFieldWithDefault(this, 20, ``);
  }),
  (proto.csgo.Player.prototype.setSecondary = function (e) {
    return Q.Message.setProto3StringField(this, 20, e);
  }),
  (proto.csgo.Player.prototype.getSecondaryammomagazine = function () {
    return Q.Message.getFieldWithDefault(this, 21, 0);
  }),
  (proto.csgo.Player.prototype.setSecondaryammomagazine = function (e) {
    return Q.Message.setProto3IntField(this, 21, e);
  }),
  (proto.csgo.Player.prototype.getSecondaryammoreserve = function () {
    return Q.Message.getFieldWithDefault(this, 22, 0);
  }),
  (proto.csgo.Player.prototype.setSecondaryammoreserve = function (e) {
    return Q.Message.setProto3IntField(this, 22, e);
  }),
  (proto.csgo.Player.prototype.getGrenadesList = function () {
    return Q.Message.getRepeatedField(this, 23);
  }),
  (proto.csgo.Player.prototype.setGrenadesList = function (e) {
    return Q.Message.setField(this, 23, e || []);
  }),
  (proto.csgo.Player.prototype.addGrenades = function (e, t) {
    return Q.Message.addToRepeatedField(this, 23, e, t);
  }),
  (proto.csgo.Player.prototype.clearGrenadesList = function () {
    return this.setGrenadesList([]);
  }),
  (proto.csgo.Player.prototype.getKills = function () {
    return Q.Message.getFieldWithDefault(this, 24, 0);
  }),
  (proto.csgo.Player.prototype.setKills = function (e) {
    return Q.Message.setProto3IntField(this, 24, e);
  }),
  (proto.csgo.Player.prototype.getAssists = function () {
    return Q.Message.getFieldWithDefault(this, 25, 0);
  }),
  (proto.csgo.Player.prototype.setAssists = function (e) {
    return Q.Message.setProto3IntField(this, 25, e);
  }),
  (proto.csgo.Player.prototype.getDeaths = function () {
    return Q.Message.getFieldWithDefault(this, 26, 0);
  }),
  (proto.csgo.Player.prototype.setDeaths = function (e) {
    return Q.Message.setProto3IntField(this, 26, e);
  }),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.TeamUpdate.prototype.toObject = function (e) {
      return proto.csgo.TeamUpdate.toObject(e, this);
    }),
    (proto.csgo.TeamUpdate.toObject = function (e, t) {
      var n = {
        tname: Q.Message.getFieldWithDefault(t, 1, ``),
        tscore: Q.Message.getFieldWithDefault(t, 2, 0),
        ctname: Q.Message.getFieldWithDefault(t, 3, ``),
        ctscore: Q.Message.getFieldWithDefault(t, 4, 0),
      };
      return (e && (n.$jspbMessageInstance = t), n);
    })),
  (proto.csgo.TeamUpdate.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.TeamUpdate();
    return proto.csgo.TeamUpdate.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.TeamUpdate.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readString();
          e.setTname(n);
          break;
        case 2:
          var n = t.readInt32();
          e.setTscore(n);
          break;
        case 3:
          var n = t.readString();
          e.setCtname(n);
          break;
        case 4:
          var n = t.readInt32();
          e.setCtscore(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.TeamUpdate.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.TeamUpdate.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.TeamUpdate.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getTname()),
      n.length > 0 && t.writeString(1, n),
      (n = e.getTscore()),
      n !== 0 && t.writeInt32(2, n),
      (n = e.getCtname()),
      n.length > 0 && t.writeString(3, n),
      (n = e.getCtscore()),
      n !== 0 && t.writeInt32(4, n));
  }),
  (proto.csgo.TeamUpdate.prototype.getTname = function () {
    return Q.Message.getFieldWithDefault(this, 1, ``);
  }),
  (proto.csgo.TeamUpdate.prototype.setTname = function (e) {
    return Q.Message.setProto3StringField(this, 1, e);
  }),
  (proto.csgo.TeamUpdate.prototype.getTscore = function () {
    return Q.Message.getFieldWithDefault(this, 2, 0);
  }),
  (proto.csgo.TeamUpdate.prototype.setTscore = function (e) {
    return Q.Message.setProto3IntField(this, 2, e);
  }),
  (proto.csgo.TeamUpdate.prototype.getCtname = function () {
    return Q.Message.getFieldWithDefault(this, 3, ``);
  }),
  (proto.csgo.TeamUpdate.prototype.setCtname = function (e) {
    return Q.Message.setProto3StringField(this, 3, e);
  }),
  (proto.csgo.TeamUpdate.prototype.getCtscore = function () {
    return Q.Message.getFieldWithDefault(this, 4, 0);
  }),
  (proto.csgo.TeamUpdate.prototype.setCtscore = function (e) {
    return Q.Message.setProto3IntField(this, 4, e);
  }),
  (proto.csgo.TickState.repeatedFields_ = [1, 2]),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.TickState.prototype.toObject = function (e) {
      return proto.csgo.TickState.toObject(e, this);
    }),
    (proto.csgo.TickState.toObject = function (e, t) {
      var n,
        r = {
          playersList: Q.Message.toObjectList(
            t.getPlayersList(),
            proto.csgo.Player.toObject,
            e,
          ),
          nadesList: Q.Message.toObjectList(
            t.getNadesList(),
            proto.csgo.Grenade.toObject,
            e,
          ),
          bomb: (n = t.getBomb()) && proto.csgo.Bomb.toObject(e, n),
        };
      return (e && (r.$jspbMessageInstance = t), r);
    })),
  (proto.csgo.TickState.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.TickState();
    return proto.csgo.TickState.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.TickState.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = new proto.csgo.Player();
          (t.readMessage(n, proto.csgo.Player.deserializeBinaryFromReader),
            e.addPlayers(n));
          break;
        case 2:
          var n = new proto.csgo.Grenade();
          (t.readMessage(n, proto.csgo.Grenade.deserializeBinaryFromReader),
            e.addNades(n));
          break;
        case 3:
          var n = new proto.csgo.Bomb();
          (t.readMessage(n, proto.csgo.Bomb.deserializeBinaryFromReader),
            e.setBomb(n));
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.TickState.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.TickState.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.TickState.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getPlayersList()),
      n.length > 0 &&
        t.writeRepeatedMessage(1, n, proto.csgo.Player.serializeBinaryToWriter),
      (n = e.getNadesList()),
      n.length > 0 &&
        t.writeRepeatedMessage(
          2,
          n,
          proto.csgo.Grenade.serializeBinaryToWriter,
        ),
      (n = e.getBomb()),
      n != null &&
        t.writeMessage(3, n, proto.csgo.Bomb.serializeBinaryToWriter));
  }),
  (proto.csgo.TickState.prototype.getPlayersList = function () {
    return Q.Message.getRepeatedWrapperField(this, proto.csgo.Player, 1);
  }),
  (proto.csgo.TickState.prototype.setPlayersList = function (e) {
    return Q.Message.setRepeatedWrapperField(this, 1, e);
  }),
  (proto.csgo.TickState.prototype.addPlayers = function (e, t) {
    return Q.Message.addToRepeatedWrapperField(
      this,
      1,
      e,
      proto.csgo.Player,
      t,
    );
  }),
  (proto.csgo.TickState.prototype.clearPlayersList = function () {
    return this.setPlayersList([]);
  }),
  (proto.csgo.TickState.prototype.getNadesList = function () {
    return Q.Message.getRepeatedWrapperField(this, proto.csgo.Grenade, 2);
  }),
  (proto.csgo.TickState.prototype.setNadesList = function (e) {
    return Q.Message.setRepeatedWrapperField(this, 2, e);
  }),
  (proto.csgo.TickState.prototype.addNades = function (e, t) {
    return Q.Message.addToRepeatedWrapperField(
      this,
      2,
      e,
      proto.csgo.Grenade,
      t,
    );
  }),
  (proto.csgo.TickState.prototype.clearNadesList = function () {
    return this.setNadesList([]);
  }),
  (proto.csgo.TickState.prototype.getBomb = function () {
    return Q.Message.getWrapperField(this, proto.csgo.Bomb, 3);
  }),
  (proto.csgo.TickState.prototype.setBomb = function (e) {
    return Q.Message.setWrapperField(this, 3, e);
  }),
  (proto.csgo.TickState.prototype.clearBomb = function () {
    return this.setBomb(void 0);
  }),
  (proto.csgo.TickState.prototype.hasBomb = function () {
    return Q.Message.getField(this, 3) != null;
  }),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.Init.prototype.toObject = function (e) {
      return proto.csgo.Init.toObject(e, this);
    }),
    (proto.csgo.Init.toObject = function (e, t) {
      var n = {
        mapname: Q.Message.getFieldWithDefault(t, 1, ``),
        tname: Q.Message.getFieldWithDefault(t, 2, ``),
        ctname: Q.Message.getFieldWithDefault(t, 3, ``),
      };
      return (e && (n.$jspbMessageInstance = t), n);
    })),
  (proto.csgo.Init.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.Init();
    return proto.csgo.Init.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.Init.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readString();
          e.setMapname(n);
          break;
        case 2:
          var n = t.readString();
          e.setTname(n);
          break;
        case 3:
          var n = t.readString();
          e.setCtname(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.Init.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.Init.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.Init.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getMapname()),
      n.length > 0 && t.writeString(1, n),
      (n = e.getTname()),
      n.length > 0 && t.writeString(2, n),
      (n = e.getCtname()),
      n.length > 0 && t.writeString(3, n));
  }),
  (proto.csgo.Init.prototype.getMapname = function () {
    return Q.Message.getFieldWithDefault(this, 1, ``);
  }),
  (proto.csgo.Init.prototype.setMapname = function (e) {
    return Q.Message.setProto3StringField(this, 1, e);
  }),
  (proto.csgo.Init.prototype.getTname = function () {
    return Q.Message.getFieldWithDefault(this, 2, ``);
  }),
  (proto.csgo.Init.prototype.setTname = function (e) {
    return Q.Message.setProto3StringField(this, 2, e);
  }),
  (proto.csgo.Init.prototype.getCtname = function () {
    return Q.Message.getFieldWithDefault(this, 3, ``);
  }),
  (proto.csgo.Init.prototype.setCtname = function (e) {
    return Q.Message.setProto3StringField(this, 3, e);
  }),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.Frag.prototype.toObject = function (e) {
      return proto.csgo.Frag.toObject(e, this);
    }),
    (proto.csgo.Frag.toObject = function (e, t) {
      var n = {
        victimname: Q.Message.getFieldWithDefault(t, 1, ``),
        victimteam: Q.Message.getFieldWithDefault(t, 2, ``),
        killername: Q.Message.getFieldWithDefault(t, 3, ``),
        killerteam: Q.Message.getFieldWithDefault(t, 4, ``),
        weapon: Q.Message.getFieldWithDefault(t, 5, ``),
        isheadshot: Q.Message.getBooleanFieldWithDefault(t, 6, !1),
        iswallbang: Q.Message.getBooleanFieldWithDefault(t, 7, !1),
        assistedflash: Q.Message.getBooleanFieldWithDefault(t, 8, !1),
        attackerblind: Q.Message.getBooleanFieldWithDefault(t, 9, !1),
        noscope: Q.Message.getBooleanFieldWithDefault(t, 10, !1),
        throughsmoke: Q.Message.getBooleanFieldWithDefault(t, 11, !1),
      };
      return (e && (n.$jspbMessageInstance = t), n);
    })),
  (proto.csgo.Frag.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.Frag();
    return proto.csgo.Frag.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.Frag.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readString();
          e.setVictimname(n);
          break;
        case 2:
          var n = t.readString();
          e.setVictimteam(n);
          break;
        case 3:
          var n = t.readString();
          e.setKillername(n);
          break;
        case 4:
          var n = t.readString();
          e.setKillerteam(n);
          break;
        case 5:
          var n = t.readString();
          e.setWeapon(n);
          break;
        case 6:
          var n = t.readBool();
          e.setIsheadshot(n);
          break;
        case 7:
          var n = t.readBool();
          e.setIswallbang(n);
          break;
        case 8:
          var n = t.readBool();
          e.setAssistedflash(n);
          break;
        case 9:
          var n = t.readBool();
          e.setAttackerblind(n);
          break;
        case 10:
          var n = t.readBool();
          e.setNoscope(n);
          break;
        case 11:
          var n = t.readBool();
          e.setThroughsmoke(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.Frag.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.Frag.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.Frag.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getVictimname()),
      n.length > 0 && t.writeString(1, n),
      (n = e.getVictimteam()),
      n.length > 0 && t.writeString(2, n),
      (n = e.getKillername()),
      n.length > 0 && t.writeString(3, n),
      (n = e.getKillerteam()),
      n.length > 0 && t.writeString(4, n),
      (n = e.getWeapon()),
      n.length > 0 && t.writeString(5, n),
      (n = e.getIsheadshot()),
      n && t.writeBool(6, n),
      (n = e.getIswallbang()),
      n && t.writeBool(7, n),
      (n = e.getAssistedflash()),
      n && t.writeBool(8, n),
      (n = e.getAttackerblind()),
      n && t.writeBool(9, n),
      (n = e.getNoscope()),
      n && t.writeBool(10, n),
      (n = e.getThroughsmoke()),
      n && t.writeBool(11, n));
  }),
  (proto.csgo.Frag.prototype.getVictimname = function () {
    return Q.Message.getFieldWithDefault(this, 1, ``);
  }),
  (proto.csgo.Frag.prototype.setVictimname = function (e) {
    return Q.Message.setProto3StringField(this, 1, e);
  }),
  (proto.csgo.Frag.prototype.getVictimteam = function () {
    return Q.Message.getFieldWithDefault(this, 2, ``);
  }),
  (proto.csgo.Frag.prototype.setVictimteam = function (e) {
    return Q.Message.setProto3StringField(this, 2, e);
  }),
  (proto.csgo.Frag.prototype.getKillername = function () {
    return Q.Message.getFieldWithDefault(this, 3, ``);
  }),
  (proto.csgo.Frag.prototype.setKillername = function (e) {
    return Q.Message.setProto3StringField(this, 3, e);
  }),
  (proto.csgo.Frag.prototype.getKillerteam = function () {
    return Q.Message.getFieldWithDefault(this, 4, ``);
  }),
  (proto.csgo.Frag.prototype.setKillerteam = function (e) {
    return Q.Message.setProto3StringField(this, 4, e);
  }),
  (proto.csgo.Frag.prototype.getWeapon = function () {
    return Q.Message.getFieldWithDefault(this, 5, ``);
  }),
  (proto.csgo.Frag.prototype.setWeapon = function (e) {
    return Q.Message.setProto3StringField(this, 5, e);
  }),
  (proto.csgo.Frag.prototype.getIsheadshot = function () {
    return Q.Message.getBooleanFieldWithDefault(this, 6, !1);
  }),
  (proto.csgo.Frag.prototype.setIsheadshot = function (e) {
    return Q.Message.setProto3BooleanField(this, 6, e);
  }),
  (proto.csgo.Frag.prototype.getIswallbang = function () {
    return Q.Message.getBooleanFieldWithDefault(this, 7, !1);
  }),
  (proto.csgo.Frag.prototype.setIswallbang = function (e) {
    return Q.Message.setProto3BooleanField(this, 7, e);
  }),
  (proto.csgo.Frag.prototype.getAssistedflash = function () {
    return Q.Message.getBooleanFieldWithDefault(this, 8, !1);
  }),
  (proto.csgo.Frag.prototype.setAssistedflash = function (e) {
    return Q.Message.setProto3BooleanField(this, 8, e);
  }),
  (proto.csgo.Frag.prototype.getAttackerblind = function () {
    return Q.Message.getBooleanFieldWithDefault(this, 9, !1);
  }),
  (proto.csgo.Frag.prototype.setAttackerblind = function (e) {
    return Q.Message.setProto3BooleanField(this, 9, e);
  }),
  (proto.csgo.Frag.prototype.getNoscope = function () {
    return Q.Message.getBooleanFieldWithDefault(this, 10, !1);
  }),
  (proto.csgo.Frag.prototype.setNoscope = function (e) {
    return Q.Message.setProto3BooleanField(this, 10, e);
  }),
  (proto.csgo.Frag.prototype.getThroughsmoke = function () {
    return Q.Message.getBooleanFieldWithDefault(this, 11, !1);
  }),
  (proto.csgo.Frag.prototype.setThroughsmoke = function (e) {
    return Q.Message.setProto3BooleanField(this, 11, e);
  }),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.Shot.prototype.toObject = function (e) {
      return proto.csgo.Shot.toObject(e, this);
    }),
    (proto.csgo.Shot.toObject = function (e, t) {
      var n = {
        playerid: Q.Message.getFieldWithDefault(t, 1, 0),
        x: Q.Message.getFloatingPointFieldWithDefault(t, 2, 0),
        y: Q.Message.getFloatingPointFieldWithDefault(t, 3, 0),
        rotation: Q.Message.getFloatingPointFieldWithDefault(t, 4, 0),
      };
      return (e && (n.$jspbMessageInstance = t), n);
    })),
  (proto.csgo.Shot.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.Shot();
    return proto.csgo.Shot.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.Shot.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readInt32();
          e.setPlayerid(n);
          break;
        case 2:
          var n = t.readDouble();
          e.setX(n);
          break;
        case 3:
          var n = t.readDouble();
          e.setY(n);
          break;
        case 4:
          var n = t.readFloat();
          e.setRotation(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.Shot.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.Shot.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.Shot.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getPlayerid()),
      n !== 0 && t.writeInt32(1, n),
      (n = e.getX()),
      n !== 0 && t.writeDouble(2, n),
      (n = e.getY()),
      n !== 0 && t.writeDouble(3, n),
      (n = e.getRotation()),
      n !== 0 && t.writeFloat(4, n));
  }),
  (proto.csgo.Shot.prototype.getPlayerid = function () {
    return Q.Message.getFieldWithDefault(this, 1, 0);
  }),
  (proto.csgo.Shot.prototype.setPlayerid = function (e) {
    return Q.Message.setProto3IntField(this, 1, e);
  }),
  (proto.csgo.Shot.prototype.getX = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 2, 0);
  }),
  (proto.csgo.Shot.prototype.setX = function (e) {
    return Q.Message.setProto3FloatField(this, 2, e);
  }),
  (proto.csgo.Shot.prototype.getY = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 3, 0);
  }),
  (proto.csgo.Shot.prototype.setY = function (e) {
    return Q.Message.setProto3FloatField(this, 3, e);
  }),
  (proto.csgo.Shot.prototype.getRotation = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 4, 0);
  }),
  (proto.csgo.Shot.prototype.setRotation = function (e) {
    return Q.Message.setProto3FloatField(this, 4, e);
  }),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.Grenade.prototype.toObject = function (e) {
      return proto.csgo.Grenade.toObject(e, this);
    }),
    (proto.csgo.Grenade.toObject = function (e, t) {
      var n = {
        id: Q.Message.getFieldWithDefault(t, 1, 0),
        kind: Q.Message.getFieldWithDefault(t, 2, ``),
        x: Q.Message.getFloatingPointFieldWithDefault(t, 3, 0),
        y: Q.Message.getFloatingPointFieldWithDefault(t, 4, 0),
        z: Q.Message.getFloatingPointFieldWithDefault(t, 5, 0),
        action: Q.Message.getFieldWithDefault(t, 6, ``),
      };
      return (e && (n.$jspbMessageInstance = t), n);
    })),
  (proto.csgo.Grenade.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.Grenade();
    return proto.csgo.Grenade.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.Grenade.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readInt32();
          e.setId(n);
          break;
        case 2:
          var n = t.readString();
          e.setKind(n);
          break;
        case 3:
          var n = t.readDouble();
          e.setX(n);
          break;
        case 4:
          var n = t.readDouble();
          e.setY(n);
          break;
        case 5:
          var n = t.readDouble();
          e.setZ(n);
          break;
        case 6:
          var n = t.readString();
          e.setAction(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.Grenade.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.Grenade.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.Grenade.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getId()),
      n !== 0 && t.writeInt32(1, n),
      (n = e.getKind()),
      n.length > 0 && t.writeString(2, n),
      (n = e.getX()),
      n !== 0 && t.writeDouble(3, n),
      (n = e.getY()),
      n !== 0 && t.writeDouble(4, n),
      (n = e.getZ()),
      n !== 0 && t.writeDouble(5, n),
      (n = e.getAction()),
      n.length > 0 && t.writeString(6, n));
  }),
  (proto.csgo.Grenade.prototype.getId = function () {
    return Q.Message.getFieldWithDefault(this, 1, 0);
  }),
  (proto.csgo.Grenade.prototype.setId = function (e) {
    return Q.Message.setProto3IntField(this, 1, e);
  }),
  (proto.csgo.Grenade.prototype.getKind = function () {
    return Q.Message.getFieldWithDefault(this, 2, ``);
  }),
  (proto.csgo.Grenade.prototype.setKind = function (e) {
    return Q.Message.setProto3StringField(this, 2, e);
  }),
  (proto.csgo.Grenade.prototype.getX = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 3, 0);
  }),
  (proto.csgo.Grenade.prototype.setX = function (e) {
    return Q.Message.setProto3FloatField(this, 3, e);
  }),
  (proto.csgo.Grenade.prototype.getY = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 4, 0);
  }),
  (proto.csgo.Grenade.prototype.setY = function (e) {
    return Q.Message.setProto3FloatField(this, 4, e);
  }),
  (proto.csgo.Grenade.prototype.getZ = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 5, 0);
  }),
  (proto.csgo.Grenade.prototype.setZ = function (e) {
    return Q.Message.setProto3FloatField(this, 5, e);
  }),
  (proto.csgo.Grenade.prototype.getAction = function () {
    return Q.Message.getFieldWithDefault(this, 6, ``);
  }),
  (proto.csgo.Grenade.prototype.setAction = function (e) {
    return Q.Message.setProto3StringField(this, 6, e);
  }),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.Bomb.prototype.toObject = function (e) {
      return proto.csgo.Bomb.toObject(e, this);
    }),
    (proto.csgo.Bomb.toObject = function (e, t) {
      var n = {
        x: Q.Message.getFloatingPointFieldWithDefault(t, 1, 0),
        y: Q.Message.getFloatingPointFieldWithDefault(t, 2, 0),
        z: Q.Message.getFloatingPointFieldWithDefault(t, 3, 0),
        state: Q.Message.getFieldWithDefault(t, 4, 0),
      };
      return (e && (n.$jspbMessageInstance = t), n);
    })),
  (proto.csgo.Bomb.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.Bomb();
    return proto.csgo.Bomb.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.Bomb.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readDouble();
          e.setX(n);
          break;
        case 2:
          var n = t.readDouble();
          e.setY(n);
          break;
        case 3:
          var n = t.readDouble();
          e.setZ(n);
          break;
        case 4:
          var n = t.readEnum();
          e.setState(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.Bomb.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.Bomb.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.Bomb.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getX()),
      n !== 0 && t.writeDouble(1, n),
      (n = e.getY()),
      n !== 0 && t.writeDouble(2, n),
      (n = e.getZ()),
      n !== 0 && t.writeDouble(3, n),
      (n = e.getState()),
      n !== 0 && t.writeEnum(4, n));
  }),
  (proto.csgo.Bomb.BombState = {
    ZERO: 0,
    DEFUSING: 1,
    DEFUSED: 2,
    EXPLODE: 3,
    PLANTING: 4,
    PLANTED: 5,
  }),
  (proto.csgo.Bomb.prototype.getX = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 1, 0);
  }),
  (proto.csgo.Bomb.prototype.setX = function (e) {
    return Q.Message.setProto3FloatField(this, 1, e);
  }),
  (proto.csgo.Bomb.prototype.getY = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 2, 0);
  }),
  (proto.csgo.Bomb.prototype.setY = function (e) {
    return Q.Message.setProto3FloatField(this, 2, e);
  }),
  (proto.csgo.Bomb.prototype.getZ = function () {
    return Q.Message.getFloatingPointFieldWithDefault(this, 3, 0);
  }),
  (proto.csgo.Bomb.prototype.setZ = function (e) {
    return Q.Message.setProto3FloatField(this, 3, e);
  }),
  (proto.csgo.Bomb.prototype.getState = function () {
    return Q.Message.getFieldWithDefault(this, 4, 0);
  }),
  (proto.csgo.Bomb.prototype.setState = function (e) {
    return Q.Message.setProto3EnumField(this, 4, e);
  }),
  (proto.csgo.Round.repeatedFields_ = [6]),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.Round.prototype.toObject = function (e) {
      return proto.csgo.Round.toObject(e, this);
    }),
    (proto.csgo.Round.toObject = function (e, t) {
      var n,
        r = {
          roundno: Q.Message.getFieldWithDefault(t, 1, 0),
          roundtookseconds: Q.Message.getFieldWithDefault(t, 2, 0),
          starttick: Q.Message.getFieldWithDefault(t, 3, 0),
          freezetimeendtick: Q.Message.getFieldWithDefault(t, 4, 0),
          endtick: Q.Message.getFieldWithDefault(t, 5, 0),
          ticksList: Q.Message.toObjectList(
            t.getTicksList(),
            proto.csgo.Message.toObject,
            e,
          ),
          teamstate:
            (n = t.getTeamstate()) && proto.csgo.TeamUpdate.toObject(e, n),
          winner: Q.Message.getFieldWithDefault(t, 8, ``),
        };
      return (e && (r.$jspbMessageInstance = t), r);
    })),
  (proto.csgo.Round.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.Round();
    return proto.csgo.Round.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.Round.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readInt32();
          e.setRoundno(n);
          break;
        case 2:
          var n = t.readInt32();
          e.setRoundtookseconds(n);
          break;
        case 3:
          var n = t.readInt32();
          e.setStarttick(n);
          break;
        case 4:
          var n = t.readInt32();
          e.setFreezetimeendtick(n);
          break;
        case 5:
          var n = t.readInt32();
          e.setEndtick(n);
          break;
        case 6:
          var n = new proto.csgo.Message();
          (t.readMessage(n, proto.csgo.Message.deserializeBinaryFromReader),
            e.addTicks(n));
          break;
        case 7:
          var n = new proto.csgo.TeamUpdate();
          (t.readMessage(n, proto.csgo.TeamUpdate.deserializeBinaryFromReader),
            e.setTeamstate(n));
          break;
        case 8:
          var n = t.readString();
          e.setWinner(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.Round.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.Round.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.Round.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getRoundno()),
      n !== 0 && t.writeInt32(1, n),
      (n = e.getRoundtookseconds()),
      n !== 0 && t.writeInt32(2, n),
      (n = e.getStarttick()),
      n !== 0 && t.writeInt32(3, n),
      (n = e.getFreezetimeendtick()),
      n !== 0 && t.writeInt32(4, n),
      (n = e.getEndtick()),
      n !== 0 && t.writeInt32(5, n),
      (n = e.getTicksList()),
      n.length > 0 &&
        t.writeRepeatedMessage(
          6,
          n,
          proto.csgo.Message.serializeBinaryToWriter,
        ),
      (n = e.getTeamstate()),
      n != null &&
        t.writeMessage(7, n, proto.csgo.TeamUpdate.serializeBinaryToWriter),
      (n = e.getWinner()),
      n.length > 0 && t.writeString(8, n));
  }),
  (proto.csgo.Round.prototype.getRoundno = function () {
    return Q.Message.getFieldWithDefault(this, 1, 0);
  }),
  (proto.csgo.Round.prototype.setRoundno = function (e) {
    return Q.Message.setProto3IntField(this, 1, e);
  }),
  (proto.csgo.Round.prototype.getRoundtookseconds = function () {
    return Q.Message.getFieldWithDefault(this, 2, 0);
  }),
  (proto.csgo.Round.prototype.setRoundtookseconds = function (e) {
    return Q.Message.setProto3IntField(this, 2, e);
  }),
  (proto.csgo.Round.prototype.getStarttick = function () {
    return Q.Message.getFieldWithDefault(this, 3, 0);
  }),
  (proto.csgo.Round.prototype.setStarttick = function (e) {
    return Q.Message.setProto3IntField(this, 3, e);
  }),
  (proto.csgo.Round.prototype.getFreezetimeendtick = function () {
    return Q.Message.getFieldWithDefault(this, 4, 0);
  }),
  (proto.csgo.Round.prototype.setFreezetimeendtick = function (e) {
    return Q.Message.setProto3IntField(this, 4, e);
  }),
  (proto.csgo.Round.prototype.getEndtick = function () {
    return Q.Message.getFieldWithDefault(this, 5, 0);
  }),
  (proto.csgo.Round.prototype.setEndtick = function (e) {
    return Q.Message.setProto3IntField(this, 5, e);
  }),
  (proto.csgo.Round.prototype.getTicksList = function () {
    return Q.Message.getRepeatedWrapperField(this, proto.csgo.Message, 6);
  }),
  (proto.csgo.Round.prototype.setTicksList = function (e) {
    return Q.Message.setRepeatedWrapperField(this, 6, e);
  }),
  (proto.csgo.Round.prototype.addTicks = function (e, t) {
    return Q.Message.addToRepeatedWrapperField(
      this,
      6,
      e,
      proto.csgo.Message,
      t,
    );
  }),
  (proto.csgo.Round.prototype.clearTicksList = function () {
    return this.setTicksList([]);
  }),
  (proto.csgo.Round.prototype.getTeamstate = function () {
    return Q.Message.getWrapperField(this, proto.csgo.TeamUpdate, 7);
  }),
  (proto.csgo.Round.prototype.setTeamstate = function (e) {
    return Q.Message.setWrapperField(this, 7, e);
  }),
  (proto.csgo.Round.prototype.clearTeamstate = function () {
    return this.setTeamstate(void 0);
  }),
  (proto.csgo.Round.prototype.hasTeamstate = function () {
    return Q.Message.getField(this, 7) != null;
  }),
  (proto.csgo.Round.prototype.getWinner = function () {
    return Q.Message.getFieldWithDefault(this, 8, ``);
  }),
  (proto.csgo.Round.prototype.setWinner = function (e) {
    return Q.Message.setProto3StringField(this, 8, e);
  }),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.Progress.prototype.toObject = function (e) {
      return proto.csgo.Progress.toObject(e, this);
    }),
    (proto.csgo.Progress.toObject = function (e, t) {
      var n = {
        progress: Q.Message.getFieldWithDefault(t, 1, 0),
        message: Q.Message.getFieldWithDefault(t, 2, ``),
      };
      return (e && (n.$jspbMessageInstance = t), n);
    })),
  (proto.csgo.Progress.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.Progress();
    return proto.csgo.Progress.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.Progress.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readInt32();
          e.setProgress(n);
          break;
        case 2:
          var n = t.readString();
          e.setMessage(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.Progress.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.Progress.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.Progress.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getProgress()),
      n !== 0 && t.writeInt32(1, n),
      (n = e.getMessage()),
      n.length > 0 && t.writeString(2, n));
  }),
  (proto.csgo.Progress.prototype.getProgress = function () {
    return Q.Message.getFieldWithDefault(this, 1, 0);
  }),
  (proto.csgo.Progress.prototype.setProgress = function (e) {
    return Q.Message.setProto3IntField(this, 1, e);
  }),
  (proto.csgo.Progress.prototype.getMessage = function () {
    return Q.Message.getFieldWithDefault(this, 2, ``);
  }),
  (proto.csgo.Progress.prototype.setMessage = function (e) {
    return Q.Message.setProto3StringField(this, 2, e);
  }),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.RoundTime.prototype.toObject = function (e) {
      return proto.csgo.RoundTime.toObject(e, this);
    }),
    (proto.csgo.RoundTime.toObject = function (e, t) {
      var n = {
        roundtime: Q.Message.getFieldWithDefault(t, 1, ``),
        freezetime: Q.Message.getFieldWithDefault(t, 2, 0),
      };
      return (e && (n.$jspbMessageInstance = t), n);
    })),
  (proto.csgo.RoundTime.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.RoundTime();
    return proto.csgo.RoundTime.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.RoundTime.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readString();
          e.setRoundtime(n);
          break;
        case 2:
          var n = t.readInt32();
          e.setFreezetime(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.RoundTime.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.RoundTime.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.RoundTime.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getRoundtime()),
      n.length > 0 && t.writeString(1, n),
      (n = e.getFreezetime()),
      n !== 0 && t.writeInt32(2, n));
  }),
  (proto.csgo.RoundTime.prototype.getRoundtime = function () {
    return Q.Message.getFieldWithDefault(this, 1, ``);
  }),
  (proto.csgo.RoundTime.prototype.setRoundtime = function (e) {
    return Q.Message.setProto3StringField(this, 1, e);
  }),
  (proto.csgo.RoundTime.prototype.getFreezetime = function () {
    return Q.Message.getFieldWithDefault(this, 2, 0);
  }),
  (proto.csgo.RoundTime.prototype.setFreezetime = function (e) {
    return Q.Message.setProto3IntField(this, 2, e);
  }),
  Q.Message.GENERATE_TO_OBJECT &&
    ((proto.csgo.Demo.prototype.toObject = function (e) {
      return proto.csgo.Demo.toObject(e, this);
    }),
    (proto.csgo.Demo.toObject = function (e, t) {
      var n = {
        matchid: Q.Message.getFieldWithDefault(t, 1, ``),
        platform: Q.Message.getFieldWithDefault(t, 2, 0),
      };
      return (e && (n.$jspbMessageInstance = t), n);
    })),
  (proto.csgo.Demo.deserializeBinary = function (e) {
    var t = new Q.BinaryReader(e),
      n = new proto.csgo.Demo();
    return proto.csgo.Demo.deserializeBinaryFromReader(n, t);
  }),
  (proto.csgo.Demo.deserializeBinaryFromReader = function (e, t) {
    for (; t.nextField() && !t.isEndGroup(); )
      switch (t.getFieldNumber()) {
        case 1:
          var n = t.readString();
          e.setMatchid(n);
          break;
        case 2:
          var n = t.readEnum();
          e.setPlatform(n);
          break;
        default:
          t.skipField();
          break;
      }
    return e;
  }),
  (proto.csgo.Demo.prototype.serializeBinary = function () {
    var e = new Q.BinaryWriter();
    return (
      proto.csgo.Demo.serializeBinaryToWriter(this, e),
      e.getResultBuffer()
    );
  }),
  (proto.csgo.Demo.serializeBinaryToWriter = function (e, t) {
    var n = void 0;
    ((n = e.getMatchid()),
      n.length > 0 && t.writeString(1, n),
      (n = e.getPlatform()),
      n !== 0 && t.writeEnum(2, n));
  }),
  (proto.csgo.Demo.DemoPlatformType = { UPLOAD: 0, FACEIT: 1, STEAM: 2 }),
  (proto.csgo.Demo.prototype.getMatchid = function () {
    return Q.Message.getFieldWithDefault(this, 1, ``);
  }),
  (proto.csgo.Demo.prototype.setMatchid = function (e) {
    return Q.Message.setProto3StringField(this, 1, e);
  }),
  (proto.csgo.Demo.prototype.getPlatform = function () {
    return Q.Message.getFieldWithDefault(this, 2, 0);
  }),
  (proto.csgo.Demo.prototype.setPlatform = function (e) {
    return Q.Message.setProto3EnumField(this, 2, e);
  }),
  $.object.extend((window.proto = window.proto || {}), proto.csgo));
var tu = class extends A {
    constructor(e) {
      (super(e),
        e.messageBus.listen([11], this.fragMessage.bind(this)),
        e.messageBus.listen(
          [107],
          function () {
            this.setState({ frags: [] });
          }.bind(this),
        ),
        (this.state = { frags: [] }));
    }
    fragMessage(e) {
      this.setState({ frags: [...this.state.frags, e.frag] });
    }
    removeFrag(e) {
      let t = this.state.frags;
      ((t[e] = null), this.setState({ frags: t }));
    }
    render() {
      return K(`div`, {
        className: `w3-right-align killfeed`,
        children: this.state.frags.map((e, t) =>
          e === null
            ? null
            : K(
                nu,
                {
                  frag: e,
                  removeCallback: this.removeFrag.bind(this),
                  index: t,
                },
                t,
              ),
        ),
      });
    }
  },
  nu = class extends A {
    componentDidMount() {
      setTimeout(
        function () {
          this.props.removeCallback(this.props.index);
        }.bind(this),
        3e3,
      );
    }
    render() {
      if (this.props.frag === void 0) return null;
      let e = this.props.frag.killername
          ? K(`span`, {
              className: this.props.frag.killerteam,
              children: this.props.frag.killername,
            })
          : ``,
        t = this.props.frag.victimname
          ? K(`span`, {
              className: this.props.frag.victimteam,
              children: this.props.frag.victimname,
            })
          : ``,
        n = this.props.frag.isheadshot
          ? K(`span`, { className: `killfeedIcon headshot`, children: `\xA0` })
          : ``;
      return K(`div`, {
        className: `killfeedRow`,
        children: [
          e,
          K(`span`, {
            className: `killfeedIcon ${this.props.frag.weapon}`,
            children: `\xA0`,
          }),
          n,
          t,
        ],
      });
    }
  },
  ru = {
    0: ``,
    1: `defusing`,
    2: `defused`,
    3: `explode`,
    4: `planting`,
    5: `planted`,
  },
  iu = class extends A {
    render() {
      let e = { left: `${this.props.bomb.x}%`, top: `${this.props.bomb.y}%` };
      return K(`div`, {
        className: `mapBomb ${ru[this.props.bomb.state]}`,
        style: e,
        children: `\xA0`,
      });
    }
  },
  au = class extends A {
    componentDidMount() {
      this.props.hide &&
        setTimeout(
          function () {
            this.props.removeCallback(this.props.index);
          }.bind(this),
          300,
        );
    }
    render() {
      return K(`div`, {
        className: `mapNade ${this.props.nade.kind} ${this.props.nade.action}`,
        style: { left: `${this.props.nade.x}%`, top: `${this.props.nade.y}%` },
      });
    }
  },
  ou = class extends A {
    render() {
      let e = {
          left: `${this.props.player.x}%`,
          top: `${this.props.player.y}%`,
          background: `linear-gradient(0deg, var(--${this.props.player.team}Color) ${this.props.player.hp}%, transparent 0%)`,
        },
        t = {
          transform: `rotate(${this.props.player.rotation}deg) translateY(-50%)`,
        },
        n = `player
      ${this.props.player.team}
      ${this.props.player.flashed ? `flashed` : ``}
      ${this.props.player.alive ? `` : `dead`}`,
        r;
      return (
        this.props.player.alive &&
          (r = K(`div`, {
            className: `playerArrow ${this.props.player.team}`,
            style: t,
          })),
        K(`div`, {
          className: n,
          style: e,
          children: [
            K(`div`, {
              className: `playerArrowContainer ${this.props.player.team}`,
              children: r,
            }),
            K(`div`, {
              className: `playerNameTag`,
              children: this.props.player.name,
            }),
            K(`div`, {
              className: `playerMapWeapon ${this.props.player.weapon}`,
            }),
          ],
        })
      );
    }
  },
  su = class extends A {
    constructor(e) {
      (super(e),
        this.props.shot
          ? (this.state = {
              transformStyle: `rotate(${this.props.shot.rotation}deg) translateY(-100%)`,
            })
          : (this.state = { transformStyle: `` }));
    }
    componentDidMount() {
      (setTimeout(
        function () {
          this.props.shot &&
            this.setState({
              transformStyle: `rotate(${this.props.shot.rotation}deg) translateY(-500%)`,
            });
        }.bind(this),
        10,
      ),
        setTimeout(
          function () {
            this.props.removeCallback(this.props.index);
          }.bind(this),
          100,
        ));
    }
    render() {
      return this.props.shot
        ? K(`div`, {
            className: `playerShot`,
            style: {
              top: `${this.props.shot.y}%`,
              left: `${this.props.shot.x}%`,
              transform: this.state.transformStyle,
            },
          })
        : null;
    }
  },
  cu = {
    de_ancient: `/assets/de_ancient-CeBk_K-p.png`,
    de_ancient_night: `/assets/de_ancient_night-RypqGdmz.png`,
    de_anubis: `/assets/de_anubis-B-JnqSwN.png`,
    de_cache: `/assets/de_cache-CsiW545D.png`,
    de_dust2: `/assets/de_dust2-BcM1NUmj.png`,
    de_inferno: `/assets/de_inferno-B761_DUT.png`,
    de_mirage: `/assets/de_mirage-Djn2IVs_.png`,
    de_nuke: `/assets/de_nuke-CbeLHDQx.png`,
    de_nuke_lower: `/assets/de_nuke_lower-DUN-xUpT.png`,
    de_overpass: `/assets/de_overpass-Y2Hp_k-d.png`,
    de_train: `/assets/de_train-CRjZkDAa.png`,
    de_train_lower: `/assets/de_train_lower-wqWXBIbE.png`,
    de_vertigo: `/assets/de_vertigo-CWEAZiC5.png`,
    de_vertigo_lower: `/assets/de_vertigo_lower-CArZ4EKd.png`,
    empty: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAAsSAAALEgHS3X78AAAAC0lEQVQImWNgQAcAABIAAW/6Y7cAAAAASUVORK5CYII=`,
  },
  lu = class extends A {
    constructor(e) {
      (super(e),
        (this.state = {
          mapName: `empty`,
          layer: ``,
          hasLower: !1,
          players: [],
          shots: [],
          nades: [],
          nadeExplosions: [],
          bomb: { x: -100, y: -100 },
          zoom: 1,
          panX: 0,
          panY: 0,
          isDragging: !1,
          lastMouseX: 0,
          lastMouseY: 0,
        }),
        e.messageBus.listen([4], this.onMessage.bind(this)),
        e.messageBus.listen([1], this.tickUpdate.bind(this)),
        e.messageBus.listen([9], this.handleShot.bind(this)),
        e.messageBus.listen(
          [107],
          function () {
            this.setState({ shots: [], nadeExplosions: [] });
          }.bind(this),
        ),
        e.messageBus.listen([14], this.handleNadeExplosion.bind(this)),
        document.addEventListener(`keydown`, this.handleKeyDown.bind(this)));
    }
    tickUpdate(e) {
      e.tickstate.playersList &&
        this.setState({
          players: e.tickstate.playersList,
          nades: e.tickstate.nadesList,
          bomb: e.tickstate.bomb,
        });
    }
    handleShot(e) {
      this.setState({ shots: [...this.state.shots, e.shot] });
    }
    handleNadeExplosion(e) {
      this.setState({
        nadeExplosions: [...this.state.nadeExplosions, e.grenadeevent],
      });
    }
    onMessage(e) {
      switch (e.msgtype) {
        case 4:
          this.setMapName(e.init.mapname);
          break;
        default:
          console.log(`unknown message [Map2d.js]`, e);
      }
    }
    setMapName(e) {
      let t = e === `de_nuke` || e === `de_train` || e === `de_vertigo`;
      this.setState({ mapName: e, layer: ``, hasLower: t });
    }
    removeNade(e) {
      let t = this.state.nadeExplosions;
      ((t[e] = null), this.setState({ nadeExplosions: t }));
    }
    removeShot(e) {
      let t = this.state.shots;
      ((t[e] = null), this.setState({ shots: t }));
    }
    toggleLayer() {
      this.state.hasLower &&
        this.setState({ layer: this.state.layer === `_lower` ? `` : `_lower` });
    }
    handleKeyDown(e) {
      e.key === `q` || e.key === `Q`
        ? this.toggleLayer()
        : (e.key === `w` || e.key === `W`) && this.resetZoom();
    }
    handleMouseDown = (e) => {
      this.state.zoom > 1 &&
        this.setState({
          isDragging: !0,
          lastMouseX: e.clientX,
          lastMouseY: e.clientY,
        });
    };
    handleMouseMove = (e) => {
      if (this.state.isDragging) {
        let t = e.clientX - this.state.lastMouseX,
          n = e.clientY - this.state.lastMouseY;
        this.setState({
          panX: this.state.panX + t,
          panY: this.state.panY + n,
          lastMouseX: e.clientX,
          lastMouseY: e.clientY,
        });
      }
    };
    handleMouseUp = () => {
      this.setState({ isDragging: !1 });
    };
    handleWheel = (e) => {
      e.preventDefault();
      let t = e.deltaY > 0 ? 0.9 : 1.1;
      this.setState({ zoom: Math.min(Math.max(this.state.zoom * t, 1), 2.5) });
    };
    resetZoom() {
      this.setState({ zoom: 1, panX: 0, panY: 0 });
    }
    render() {
      let e = {
          backgroundImage: `url(${cu[`${this.state.mapName}${this.state.layer}`] || `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAAsSAAALEgHS3X78AAAAC0lEQVQImWNgQAcAABIAAW/6Y7cAAAAASUVORK5CYII=`})`,
          transform: `scale(${this.state.zoom}) translate(${this.state.panX}px, ${this.state.panY}px)`,
          transformOrigin: `center`,
          cursor:
            this.state.zoom > 1
              ? this.state.isDragging
                ? `grabbing`
                : `grab`
              : `default`,
        },
        t = [];
      this.state.players &&
        this.state.players.length > 0 &&
        this.state.players.forEach((e) => {
          t.push(K(ou, { player: e }, e.playerid));
        });
      let n = this.state.shots.map((e, t) =>
          e === null
            ? null
            : K(
                su,
                {
                  shot: e,
                  removeCallback: this.removeShot.bind(this),
                  index: t,
                },
                t,
              ),
        ),
        r = [];
      this.state.nades &&
        this.state.nades.length > 0 &&
        this.state.nades.forEach((e) => {
          r.push(K(au, { nade: e }, e.id));
        });
      let i = this.state.nadeExplosions.map((e, t) =>
        e != null && e.id
          ? K(
              au,
              {
                nade: e,
                hide: !0,
                removeCallback: this.removeNade.bind(this),
                index: t,
              },
              e.id,
            )
          : null,
      );
      return K(`div`, {
        className: `map-wrapper`,
        children: [
          K(`div`, {
            className: `map-container`,
            id: `map`,
            style: e,
            onMouseDown: this.handleMouseDown,
            onMouseMove: this.handleMouseMove,
            onMouseUp: this.handleMouseUp,
            onMouseLeave: this.handleMouseUp,
            onWheel: this.handleWheel,
            children: [t, r, n, i, K(iu, { bomb: this.state.bomb })],
          }),
          K(tu, { messageBus: this.props.messageBus }),
          this.state.hasLower &&
            K(`button`, {
              className: `map-button layer-toggle ${this.state.layer === `_lower` ? `lower-active` : ``}`,
              onClick: this.toggleLayer.bind(this),
              children: [
                K(`div`, { className: `layer-icon`, children: `⇅` }),
                K(`div`, { className: `layer-hint`, children: `Q` }),
              ],
            }),
          this.state.zoom > 1 &&
            K(`button`, {
              className: `map-button zoom-reset`,
              onClick: this.resetZoom.bind(this),
              children: [
                K(`div`, { className: `zoom-icon`, children: `⌕` }),
                K(`div`, { className: `zoom-hint`, children: `W` }),
              ],
            }),
        ],
      });
    }
  },
  uu = class extends A {
    constructor(e) {
      (super(e),
        (this.state = {
          TName: `Terrorists`,
          TScore: 0,
          CTName: `Counter Terrorists`,
          CTScore: 0,
        }),
        e.messageBus.listen(
          [4, 5],
          function (e) {
            this.setState({ TName: e.init.tname, CTName: e.init.ctname });
          }.bind(this),
        ),
        e.messageBus.listen(
          [109],
          function (e) {
            this.setState({
              TName: e.teamstate.tname,
              TScore: e.teamstate.tscore,
              CTName: e.teamstate.ctname,
              CTScore: e.teamstate.ctscore,
            });
          }.bind(this),
        ));
    }
    render() {
      return K(`div`, {
        className: `scoreboard-container`,
        children: [
          K(`div`, {
            className: `scoreboard-scores`,
            children: [
              this.props.side !== "CT" &&
                K(`div`, {
                  className: `score-display`,
                  children: K(`h2`, {
                    className: `score-number T`,
                    children: this.state.TScore,
                  }),
                }),
              this.props.side !== "T" &&
                K(`div`, {
                  className: `score-display`,
                  children: K(`h2`, {
                    className: `score-number CT`,
                    children: this.state.CTScore,
                  }),
                }),
            ],
          }),
          K(`div`, {
            className: `scoreboard-teams`,
            children: [
              K(`div`, {
                className: `score-display`,
                children:
                  this.props.side !== "CT" &&
                  K(`h3`, {
                    className: `team-name T`,
                    children: this.state.TName,
                  }),
              }),
              K(`div`, {
                className: `score-display`,
                children:
                  this.props.side !== "T" &&
                  K(`h3`, {
                    className: `team-name CT`,
                    children: this.state.CTName,
                  }),
              }),
            ],
          }),
        ],
      });
    }
  },
  du = class extends A {
    constructor(e) {
      (super(e),
        (this.state = { rounds: [], activeRound: null }),
        (this.messageBus = e.messageBus),
        this.messageBus.listen(
          [101],
          function (e) {
            this.setState({
              rounds: e.rounds.map((e) => ({
                roundNo: e.roundno,
                winner: e.winner,
              })),
            });
          }.bind(this),
        ),
        this.messageBus.listen(
          [106],
          function (e) {
            this.setState({ activeRound: e.round });
          }.bind(this),
        ));
    }
    playRound(e) {
      this.messageBus.emit({ msgtype: 100, round: e });
    }
    render() {
      let e = [];
      return (
        this.state.rounds.forEach((t) => {
          (e.push(
            K(
              `button`,
              {
                className: `w3-button roundNav ${t.winner} ${this.state.activeRound === t.roundNo ? `active` : ``}`,
                onClick: (e) => this.playRound(t.roundNo),
                children: t.roundNo,
              },
              `round${t.roundNo}`,
            ),
          ),
            ((t.roundNo <= 24 && t.roundNo % 12 == 0) ||
              (t.roundNo > 24 && t.roundNo % 6 == 0)) &&
              e.push(K(`br`, {}, `break${t.roundNo}`)));
        }),
        K(`div`, {
          className: `round-nav-container`,
          children: K(`div`, {
            className: `w3-bar w3-small w3-left-align`,
            children: e,
          }),
        })
      );
    }
  },
  fu = class extends A {
    constructor(e) {
      (super(e),
        (this.state = { playing: !1, playingSpeed: 1 }),
        (this.messageBus = e.messageBus),
        this.messageBus.listen(
          [107],
          function (e) {
            this.setState({ playing: e.playing });
          }.bind(this),
        ));
    }
    togglePlay() {
      this.messageBus.emit({ msgtype: 102 });
    }
    playRoundIncrement(e) {
      this.messageBus.emit({ msgtype: 103, increment: e });
    }
    playSpeed(e) {
      (this.setState({ playingSpeed: e }),
        this.messageBus.emit({ msgtype: 104, speed: e }));
    }
    togglePlaySpeed(e) {
      this.state.playingSpeed === e ? this.playSpeed(1) : this.playSpeed(e);
    }
    render() {
      let e = this.state.playing
        ? String.fromCodePoint(57396)
        : String.fromCodePoint(57399);
      return K(`div`, {
        className: `controls-container`,
        children: K(`div`, {
          className: `controls-wrapper`,
          children: [
            K(`button`, {
              className: `control-button material-icons`,
              onClick: (e) => this.playRoundIncrement(-1),
              children: ``,
            }),
            K(`button`, {
              className: `control-button play-button material-icons`,
              onClick: (e) => this.togglePlay(),
              children: e,
            }),
            K(`button`, {
              className: `control-button speed-button material-icons ${this.state.playingSpeed === 4 ? `active` : ``}`,
              onClick: (e) => this.togglePlaySpeed(4),
              children: ``,
            }),
            K(`button`, {
              className: `control-button material-icons`,
              onClick: (e) => this.playRoundIncrement(1),
              children: ``,
            }),
          ],
        }),
      });
    }
  },
  pu = class extends A {
    constructor(e) {
      (super(e),
        (this.state = { time: `0:00`, progress: 0 }),
        (this.messageBus = e.messageBus),
        this.messageBus.listen([8], (e) => {
          this.setState({ time: e.roundtime.roundtime });
        }),
        this.messageBus.listen([105], (e) => {
          this.setState({ progress: e.progress });
        }));
    }
    mouseMove(e) {
      e.buttons === 1 && this.moveProgress(e);
    }
    mouseDown(e) {
      this.moveProgress(e);
    }
    mouseUp(e) {
      this.messageBus.emit({ msgtype: 100 });
    }
    mouseLeave(e) {
      e.buttons === 1 && this.messageBus.emit({ msgtype: 100 });
    }
    moveProgress(e) {
      let t = e.currentTarget.getBoundingClientRect(),
        n = t.right - t.left,
        r = (e.nativeEvent.x - t.left) / n;
      (this.setState({ progress: r }),
        this.messageBus.emit({ msgtype: 108, progress: r }));
    }
    render() {
      let e = {
        width: `${this.state.progress * 100}%`,
        paddingLeft: `16px`,
        paddingRight: `16px`,
      };
      return K(`div`, {
        className: `timer-container`,
        onMouseMove: this.mouseMove.bind(this),
        onMouseDown: this.mouseDown.bind(this),
        onMouseUp: this.mouseUp.bind(this),
        onMouseLeave: this.mouseLeave.bind(this),
        children: K(`div`, {
          className: `w3-container progress-container`,
          children: [
            K(`div`, { className: `timer-progress`, style: e }),
            K(`div`, { className: `timer-text`, children: this.state.time }),
          ],
        }),
      });
    }
  },
  mu = class extends A {
    render() {
      let e = ``;
      this.props.player.armor > 0 &&
        (e = this.props.player.helmet ? `vesthelm` : `vest`);
      let t = [];
      for (let e = 0; e < 4; e++)
        if (
          this.props.player.grenadesList &&
          e < this.props.player.grenadesList.length
        ) {
          let n =
            this.props.player.weapon === this.props.player.grenadesList[e]
              ? `active`
              : ``;
          t.push(
            K(
              `div`,
              {
                className: `w3-col l1 ${this.props.player.grenadesList[e]} ${n}`,
                children: `\xA0`,
              },
              e,
            ),
          );
        } else
          t.push(K(`div`, { className: `w3-col l1`, children: `\xA0` }, e));
      return K(`div`, {
        className: `playerListItemContainer w3-row`,
        children: [
          K(`div`, {
            className: `playerListItem w3-row`,
            children: [
              K(`div`, {
                className: `playerListHp w3-dark-grey`,
                children: K(`div`, {
                  className: `playerListHpValue ${this.props.player.team}`,
                  style: { width: `${this.props.player.hp}%` },
                }),
              }),
              K(`div`, {
                className: `playerListItemName w3-col l9 ${this.props.player.team}`,
                children: this.props.player.name,
              }),
              K(`div`, {
                className: `w3-col l1 bckg playerListVest ${this.props.player.team} ${e}`,
                children: `\xA0`,
              }),
              K(`div`, {
                className: `playerListHpText w3-col l2
                ${this.props.player.team}
                ${this.props.player.alive ? `` : `dead`}`,
                children: [
                  this.props.player.alive ? this.props.player.hp : ``,
                  `\xA0`,
                ],
              }),
            ],
          }),
          K(`div`, {
            className: `w3-row playerListWeapons`,
            children: [
              K(`div`, {
                className: `w3-col l1
                ${this.props.player.defuse ? `defuse` : ``}
                ${this.props.player.bomb ? `c4` : ``}
                ${this.props.player.weapon === `c4` ? `active` : ``}`,
                children: `\xA0`,
              }),
              K(`div`, {
                className: `w3-col l3
                ${this.props.player.primary}
                ${this.props.player.weapon === this.props.player.primary ? `active` : ``}`,
                children: `\xA0`,
              }),
              K(`div`, {
                className: `w3-col l2
                ${this.props.player.secondary}
                ${this.props.player.weapon === this.props.player.secondary ? `active` : ``}`,
                children: `\xA0`,
              }),
              K(`div`, {
                className: `w3-col l2
                ${this.props.player.alive ? `knife` : ``}
                ${this.props.player.weapon === `knife` ? `active` : ``}`,
                children: `\xA0`,
              }),
              t,
            ],
          }),
          K(`div`, {
            className: `w3-row`,
            children: [
              K(`div`, { className: `w3-col l1`, children: `\xA0` }),
              K(`div`, {
                className: `w3-col l3 playerListPrimaryAmmo w3-small`,
                children: [
                  this.props.player.primary
                    ? `${this.props.player.primaryammomagazine}/${this.props.player.primaryammoreserve}`
                    : ``,
                  `\xA0`,
                ],
              }),
              K(`div`, {
                className: `w3-col l2 playerListSecondaryAmmo w3-small`,
                children: [
                  this.props.player.secondary
                    ? `${this.props.player.secondaryammomagazine}/${this.props.player.secondaryammoreserve}`
                    : ``,
                  `\xA0`,
                ],
              }),
              K(`div`, {
                className: `w3-col l2 playerListKAD w3-small`,
                title: `Kills/Assists/Deaths`,
                children: [
                  `${this.props.player.kills ?? 0}/${this.props.player.assists ?? 0}/${this.props.player.deaths ?? 0}`,
                  `\xA0`,
                ],
              }),
              K(`div`, {
                className: `w3-col l4 playerListMoney w3-right-align playerListItemName`,
                children: [this.props.player.money, `$`],
              }),
            ],
          }),
        ],
      });
    }
  },
  hu = class extends A {
    constructor(e) {
      (super(e),
        (this.messageBus = this.props.messageBus),
        this.messageBus.listen([1], this.update.bind(this)),
        (this.state = { players: [] }));
    }
    update(e) {
      this.setState({ players: e.tickstate.playersList });
    }
    render() {
      let e = { T: [], CT: [] };
      return (
        this.state.players &&
          this.state.players.length > 0 &&
          this.state.players.forEach((t) => {
            e[t.team].push(K(mu, { player: t }, t.playerid));
          }),
        K(`div`, {
          className: `player-list-container w3-row`,
          children: [
            this.props.side !== "CT" &&
              K(`div`, {
                className: `w3-col l12 team-section`,
                children: K(`div`, {
                  className: `T w3-medium team-list`,
                  id: `TList`,
                  children: e.T,
                }),
              }),
            this.props.side !== "T" &&
              K(`div`, {
                className: `w3-col l12 team-section`,
                children: K(`div`, {
                  className: `CT w3-medium team-list`,
                  id: `CTList`,
                  children: e.CT,
                }),
              }),
          ],
        })
      );
    }
  },
  gu = class extends A {
    constructor(e) {
      (super(e), (this.messageBus = e.messageBus));
    }
    render() {
      return K(`div`, {
        className: `info-panel-container`,
        children: [
          K(pu, { messageBus: this.messageBus }),
          K(du, { messageBus: this.messageBus }),
          K(fu, { messageBus: this.messageBus }),
          K(uu, { messageBus: this.messageBus }),
          K(`div`, { className: `divider` }),
          K(hu, { messageBus: this.messageBus }),
        ],
      });
    }
  },
  _u = ``,
  vu = String.raw`\d+-[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}`,
  yu = RegExp(`/(${vu})(?:-\\d+-\\d+)?\\.`, `i`),
  bu = RegExp(`^${vu}$`, `i`);
function xu() {
  let e = an(),
    t = B(null),
    n = B(null),
    r = He(dn),
    [i] = R(new Zl()),
    [a] = R(new Zl()),
    [o, s] = R(!1),
    [c, l] = R(!1),
    [u, d] = R(!1),
    [f, p] = R([`Loading...`]),
    [m, h] = R(!1),
    [g, _] = R(0),
    [v, y] = R(!1),
    [b, x] = R(!1),
    [S, C] = R(null);
  return (
    Le(
      () => (
        t.current ||
          ((t.current = new Worker(`worker.js`)),
          console.log(`Worker created.`)),
        n.current ||
          ((n.current = new $l(i, a)), console.log(`Player created.`)),
        (t.current.onmessage = (e) => {
          if (e.data === `ready`) s(!0);
          else {
            let t = proto.Message.deserializeBinary(e.data).toObject();
            a.emit(t);
          }
        }),
        i.listen([13], function (e) {
          alert(e.message);
        }),
        i.listen([4], (e) => {
          p([
            `Loading match...`,
            e.init.tname + ` vs ` + e.init.ctname,
            `Map: ` + e.init.mapname,
          ]);
        }),
        i.listen([107], function (e) {
          (l(e.playing), e.playing && d(!0), e.playing || p([`Loading...`]));
        }),
        () => {
          ((t.current &&=
            (t.current.terminate(), console.log(`Worker terminated.`), null)),
            (n.current &&= null));
        }
      ),
      [],
    ),
    Le(() => {
      if (o && r.demoData) {
        let e = r.demoData;
        (r.setDemoData(null), t.current.postMessage(e, [e.data.buffer]));
      } else if (o && e.query.faceit_match_id) {
        let t = e.query.faceit_match_id;
        if (!bu.test(t)) {
          (h(!0), p([`Invalid Faceit match ID format`]));
          return;
        }
        (C(t), x(!0));
      } else if (o && e.query.demourl) {
        let n = e.query.demourl;
        (y(!0),
          Ua.get(`${_u}/download?url=${encodeURIComponent(n)}`, {
            responseType: `arraybuffer`,
            onDownloadProgress: (e) => {
              console.log(e, e.event.target.getResponseHeader(`X-Demo-Length`));
              var t = e.event.target.getResponseHeader(`X-Demo-Length`);
              (_(t ? (e.loaded / t) * 100 : 0), p([`Downloading demo...`]));
            },
          })
            .then((e) => {
              (y(!1), _(0), p([`Loading match...`]));
              let r = e.headers[`content-disposition`],
                i = `demo.zst`;
              if (r) {
                let e = r.match(/filename="([^"]+)"/);
                e && (i = e[1]);
              }
              let a = n.match(yu);
              if (a && a[1]) {
                let e = a[1],
                  t = `/player?faceit_match_id=${encodeURIComponent(e)}`;
                window.history.replaceState({}, ``, t);
              }
              let o = new Uint8Array(e.data);
              t.current.postMessage({ filename: i, data: o }, [o.buffer]);
            })
            .catch((e) => {
              (y(!1), _(0), h(!0), p([`Error downloading demo: ` + e.message]));
            }));
      }
    }, [o]),
    K(Xl, {
      children: [
        K(`div`, {
          className: `grid-container`,
          children: [
            K(`div`, {
              className: `grid-item left-panel`,
              children: [
                K(uu, { messageBus: i, side: "T" }),
                K(hu, { messageBus: i, side: "T" }),
              ],
            }),
            K(`div`, {
              className: `grid-item map`,
              children: K(lu, { messageBus: i }),
            }),
            K(`div`, {
              className: `grid-item right-panel`,
              children: [
                K(uu, { messageBus: i, side: "CT" }),
                K(hu, { messageBus: i, side: "CT" }),
              ],
            }),
            K(`div`, {
              className: `grid-item bottom-panel`,
              children: [
                K(du, { messageBus: i }),
                K(pu, { messageBus: i }),
                K(`div`, {
                  className: `controls-row`,
                  children: [K(fu, { messageBus: i })],
                }),
              ],
            }),
          ],
        }),
        !c &&
          !u &&
          K(`div`, {
            className: `loading-overlay`,
            children: K(`div`, {
              className: `loading-dialog`,
              children: [
                m
                  ? K(`div`, { className: `error-icon`, children: `⚠️` })
                  : K(`div`, { className: `loading-spinner` }),
                f.map((e, t) => K(`p`, { children: e }, t)),
                v &&
                  K(`div`, {
                    className: `progress-bar-container`,
                    children: K(`div`, {
                      className: `progress-bar`,
                      style: { width: `${g}%` },
                    }),
                  }),
              ],
            }),
          }),
        K(hl, {
          header: `Faceit Match Demo`,
          visible: b,
          style: { width: `450px` },
          onHide: () => x(!1),
          footer: K(`div`, {
            children: K(Yl, {
              label: `Close`,
              icon: `pi pi-times`,
              onClick: () => x(!1),
              autoFocus: !0,
            }),
          }),
          children: K(`div`, {
            style: { marginBottom: `1rem` },
            children: [
              K(`p`, { children: `To view this demo:` }),
              K(`ol`, {
                style: {
                  marginTop: `0.75rem`,
                  paddingLeft: `1.25rem`,
                  lineHeight: `1.8`,
                },
                children: [
                  K(`li`, {
                    children: [
                      `Download the demo from the`,
                      ` `,
                      K(`a`, {
                        href: `https://www.faceit.com/en/cs2/room/${S}`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        style: {
                          color: `#007bff`,
                          textDecoration: `underline`,
                          fontWeight: `bold`,
                        },
                        children: `Faceit match page`,
                      }),
                    ],
                  }),
                  K(`li`, { children: `Upload it below` }),
                ],
              }),
              K(`div`, { style: { marginTop: `1rem` } }),
              K(mn, {
                onFile: ({ filename: e, data: n }) => {
                  (x(!1),
                    t.current.postMessage({ filename: e, data: n }, [
                      n.buffer,
                    ]));
                },
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function Su() {
  return K(`div`, {
    className: `w3-container w3-center`,
    children: [
      K(`h1`, { children: `404 - Page Not Found` }),
      K(`p`, { children: `The page you are looking for does not exist.` }),
      K(`a`, {
        href: `/`,
        className: `w3-button w3-blue`,
        children: `Go Home`,
      }),
    ],
  });
}
function Cu() {
  let [e, t] = R(null);
  return K(dn.Provider, {
    value: { demoData: e, setDemoData: t },
    children: K(Xt, {
      children: K(Qt, {
        children: [
          K(bn, { path: `/` }),
          K(rn, { path: `/player`, component: xu }),
          K(Su, { default: !0 }),
        ],
      }),
    }),
  });
}
(Gt.createRoot(document.getElementById(`root`)).render(
  K(G.StrictMode, { children: K(Wo, { children: K(Cu, {}) }) }),
),
  window.location.host.includes(`localhost`) &&
    ((e) => {
      e &&
        e instanceof Function &&
        un(async () => {
          let {
            getCLS: e,
            getFID: t,
            getFCP: n,
            getLCP: r,
            getTTFB: i,
          } = await import(`./web-vitals-DPAG4t6W.js`);
          return { getCLS: e, getFID: t, getFCP: n, getLCP: r, getTTFB: i };
        }, []).then(
          ({ getCLS: t, getFID: n, getFCP: r, getLCP: i, getTTFB: a }) => {
            (t(e), n(e), r(e), i(e), a(e));
          },
        );
    })(console.log));
